# react-webpack-project-template

Boilerplate/template for building [React](https://facebook.github.io/react/) web applications.
  
  * React/Flux demo [app](https://github.com/mjgs/fluxxor-flux-comparison-app) 
  * Separate webpack config files for development and production
  * Generates index.html
  * Uses webpack-dev-server for development
  * Simple production server
  * Generates sourceMaps
  * Compiles [Sass](http://sass-lang.com/) to CSS
  * Mocha/Karma/Chai test environment with instrumented code for coverage
  * Several npm scripts for builds
  * Webpack validator
  * Linting with eslint and [eslint-config-kentcdodds](https://github.com/kentcdodds/eslint-config-kentcdodds)
  * Opt-in git commit hooks
  * Selected vendor libs bundled separately for production builds
  * Production build is an isomorphic app, with initial page rendered on the server

## How to use this

  * Clone the repo: `git clone https://github.com/mjgs/react-webpack-project-template my-new-project`
  * Install the dependencies: `cd my-new-project && npm install`
  * Delete the .git folder, then create your own repo: `git init` ... add all files to the repo etc
  * Update template specific things in package.json and webpack configs
  * Start webpack dev server: `npm start`
  * When you are ready to deploy: `export NODE_ENV=production; npm run build:prod`, then deploy the public folder to your web server  

## Credits

  * Joe Maddalone - [React-fundamentals-es6](https://github.com/joemaddalone/egghead-react-fundamentals-es6)
  * Pete Hunt - [Webpack Howto](https://github.com/petehunt/webpack-howto)
  * Rajaraodv - [Webpack - The Confusing Parts](https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.wh5l2m7fp)
  * Adrian Hall - [Adding SASS Support to Webpack](https://shellmonger.com/2016/01/19/adding-sass-support-to-webpack/)
  * Kent C Dodds - [Using Webpack for Production JavaScript Applications](https://egghead.io/courses/using-webpack-for-production-javascript-applications)
  * React Router [Tutorial](https://github.com/reactjs/react-router-tutorial)
