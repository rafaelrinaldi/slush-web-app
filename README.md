# slush-web-app

> Scaffold a web app with [Slush][slush-url]

## Install

1. Install [`gulp.js`][gulp-url]
2. Install [Slush][slush-url]
3. Install the [`slush-web-app`][generator-url] generator

```sh
$ npm install -g gulp slush slush-node-module
```

## Usage

Create a new folder for your project and `cd` into it:

```sh
$ mkdir my-new-project && cd my-new-project
```

Run the generator and answer the questions.

```sh
$ slush web-app

? Project name: my-new-project
? What tools are you going to use? (Press <space> to select)
❯◯ React
 ◯ React Router
 ◯ Redux
```

## Features

This generator will create a modern and clean structure so you can start working on your application without worrying about the setup.

It uses a simple task management system via `npm` scripts.

### Overview

* [ES2015](http://babeljs.io/docs/learn-es2015) syntax support with a few experimental features (such as [ES7 function bind](http://babeljs.io/blog/2015/05/14/function-bind))
* Uses [`browserify`][browserify-url] with the [`babelify`][babelify-url] transformer to do the JavaScript transpiling
* Support for the latest CSS syntax via [`cssnext`][cssnext-url]
* Support file watching thanks to [`watchy`][watchy-url]
* Uses [`xo`][xo-url] for dead simple JavaScript linting
* Automatic browser reloading using [`live-server`][live-server-url] (serves `public` on port `8080`)
* Simple folder structure split in `public` (path to be served) and `source` (actual source files)

### Tasks

* `build` – Build JavaScript and CSS files (both run in parallel)
* `build:js` – Build JavaScript files
* `build:css` – Build CSS files
* `watch` – Watch for JavaScript and CSS file changes (both run in parallel)
* `watch:js` – Watch for JavaScript file changes
* `watch:css` – Watch for CSS file changes
* `start` – Startup static server
* `lint` – Lint JavaScript files

### Tools

Opt-in tools that you can add to your project.

#### React

Enable [React][react-url] support on the project. Changes transpiling and linting settings and scaffolds a `components` folder with a simple application component.

#### Redux

Enable [Redux][redux-url] support on the project. Will listen for a store and then re-render the application component on changes.

#### React Router

Enable [React Router][react-router-url] support on the project. Will listen for the `/` route and then re-render the application component on route matching.

## TODO

- [ ] Add simple [Redux][redux-url] bootstrap
- [ ] Add simple [React Router][react-router-url] bootstrap

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)

[slush-url]: http://slushjs.github.io
[gulp-url]: http://gulpjs.com
[generator-url]: https://github.com/rafaelrinaldi/slush-web-app
[react-url]: https://github.com/facebook/react
[react-router-url]: https://github.com/rackt/react-router
[redux-url]: https://github.com/rackt/redux
[browserify-url]: https://github.com/substack/node-browserify
[babelify-url]: https://github.com/babel/babelify
[live-server-url]: https://github.com/tapio/live-server
[cssnext-url]: http://cssnext.io
[watchy-url]: https://github.com/caseywebdev/watchy
[xo-url]: https://github.com/sindresorhus/xo
