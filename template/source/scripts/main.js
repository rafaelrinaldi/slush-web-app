<% if(~projectTools.indexOf('React')) { %>import React from 'react';
import DOM from 'react-dom';
import Application from './components/application';

DOM.render(<Application />, document.getElementById('application'));<% } else { %>const name = `World`;
console.log(`Hello ${name}!`);<% } %>
