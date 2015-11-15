'use strict';

var gulp = require('gulp');
var data = require('gulp-data');
var template = require('gulp-template');
var rename = require('gulp-rename');
var install = require('gulp-install');
var inquirer = require('inquirer');
var writeFileSync = require('fs').writeFileSync;
var sortKeys = require('sort-keys');
var exec = require('child_process').exec;
var pwd = process.cwd().split('/').pop();

var read = [
  {name: 'projectName', message: 'Project name:', default: pwd},
  {name: 'projectTools', message: 'What tools are you going to use?', type: 'checkbox', choices: [
    {name: 'React'},
    {name: 'React Router'},
    {name: 'Redux'}
  ]}
];

var paths = [
  __dirname + '/template/**'
];

gulp.task('git', ['bootstrap'], function(done) {
  exec('git init', function(error) {
    if(error) {
      throw error;
    }

    done();
  });
});

// Alphabetize package dependencies
gulp.task('format', ['bootstrap'], function(done) {
  gulp.src('./package.json')
      .pipe(data(function(file) {
        var manifest = JSON.parse(file.contents.toString());

        manifest.devDependencies = sortKeys(manifest.devDependencies);
        writeFileSync('package.json', JSON.stringify(manifest, null, 2) + '\n');

        done();
      }));
});

gulp.task('bootstrap', function(done) {
  inquirer.prompt(read, function(answers) {
    var hasTool = function(tool) { return answers.projectTools.indexOf(tool) >= 0; };

    // Only add the components folder if React is going to be used
    if(!hasTool('React')) {
      paths.push('!' + __dirname + '/template/source/scripts/{components,components/**}');
    }

    gulp
        .src(paths)
        .pipe(template(answers, {
          // This is for LoDash to bypass template strings
          interpolate: /<%=([\s\S]+?)%>/g
        }))
        .pipe(rename(function(path) {
          var underscore = '_README _package'.split(/\s/);
          var dot = 'editorconfig gitattributes gitignore'.split(/\s/);

          if(~underscore.indexOf(path.basename)) {
            path.basename = path.basename.slice(1);
          } else if(~dot.indexOf(path.basename)) {
            path.basename = '.' + path.basename;
          }
        }))
        .pipe(gulp.dest('./'))
        .pipe(install())
        .on('end', done)
        .resume();
  });
});

gulp.task('default', ['format', 'git', 'bootstrap']);
