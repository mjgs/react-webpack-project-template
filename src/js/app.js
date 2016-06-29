import React from 'react';
import ReactDOM from 'react-dom';
import Fluxxor from 'fluxxor';
import App from './components/App.jsx';
import Stores from './stores/Stores';
import Actions from './actions/Actions';

const flux = new Fluxxor.Flux(Stores, Actions);

flux.actions.product.getAllProducts();

flux.on('dispatch', function(type, payload) {
  /*eslint no-console: ["error", { allow: ["log"] }] */
  console.log('Dispatched', type, payload);
});

ReactDOM.render(
  React.createElement(App, { flux }),
  document.getElementById('flux-app')
);
