/* eslint-disable import/default */
/*eslint-disable no-unused-vars*/
import React from 'react';
/*eslint-enable no-unused-vars*/
import { render } from 'react-dom';
import Fluxxor from 'fluxxor';
import { Router, browserHistory } from 'react-router';
import routes from './routes'; // import routes and pass them into <Router/>
import Stores from './stores/Stores';
import Actions from './actions/Actions';


const flux = new Fluxxor.Flux(Stores, Actions);

flux.actions.product.getAllProducts();

flux.on('dispatch', function(type, payload) {
  /*eslint no-console: ["error", { allow: ["log"] }] */
  console.log('Dispatched', type, payload);
});

const createFluxComponent = function(Component, props) {
  return <Component {...props} flux={flux} />;
};

render(
  <Router
    createElement={createFluxComponent}
    routes={routes}
    history={browserHistory}
  />,
  document.getElementById('flux-app')
);
