/* eslint-disable import/default */
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import Fluxxor from 'fluxxor';
import { renderToString } from 'react-dom/server'; // to render our app to an html string
import { browserHistory, match, RouterContext } from 'react-router'; // to match the url to routes and then render
import routes from './routes';
import Stores from './stores/Stores';
import Actions from './actions/Actions';

// Create flux instance
const flux = new Fluxxor.Flux(Stores, Actions);
flux.actions.product.getAllProducts();
flux.on('dispatch', function(type, payload) {
  /*eslint no-console: ["error", { allow: ["log"] }] */
  console.log('Dispatched', type, payload);
});

// Setup
const fs = require('fs');
const config = require('./config');
const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const compression = require('compression');
const compiledTemplate = ejs.compile(fs.readFileSync(path.join(__dirname, '..', 'index.ejs'), 'utf8'));
const renderOptions = {
  htmlWebpackPlugin: {
    options: {
      title: config.title
    }
  }
};

// Configure
app.use(compression());
app.use(express.static(path.join(__dirname, '..', '..', 'public')));
app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) { // we matched a route and can render
      const appHtml = renderToString(
        <RouterContext history={browserHistory} createElement={createFluxComponent}
          {...props}
        />
      );
      res.send(renderPage(appHtml, renderOptions));
    } else {
      res.status(404).send('Not Found');
    }
  });
});

function createFluxComponent(Component, props) {
  return <Component {...props} flux={flux} />;
}

function renderPage(appHtml, options) {
  const html = compiledTemplate(options);
  const re = /If you see this then something is wrong./gi;
  return html.replace(re, appHtml);
}

// Start
const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  /*eslint no-console: ["error", { allow: ["log"] }] */
  console.log('Production Express server running at localhost:' + PORT);
});
