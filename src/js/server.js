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
var express = require('express');
var app = express();
var path = require('path');
var compression = require('compression');

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
      res.send(renderPage(appHtml));
    } else {
      res.status(404).send('Not Found');
    }
  });
});

function createFluxComponent(Component, props) {
  return <Component {...props} flux={flux} />;
}

function renderPage(appHtml) {
  const pageHtml = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>REACT-WEBPACK-PROJECT-TEMPLATE</title>
        <link rel="shortcut icon" type="image/png" href="img/react.png">
        <link href="styles/uikit.almost-flat.min.css" rel="stylesheet">
        <link href="styles/fluxapp.css" rel="stylesheet">
      </head>
      <body>
        <div id="flux-app">${appHtml}</div>
        <script src="/js/bundle.vendor.js"></script>
        <script src="/js/bundle.app.js"></script>
      </body>
    </html>
  `;
  return pageHtml;
}

// Start
const PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
  /*eslint no-console: ["error", { allow: ["log"] }] */
  console.log('Production Express server running at localhost:' + PORT);
});
