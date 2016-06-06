# react-webpack-project-template

Simple boilerplate/template for building [React](https://facebook.github.io/react/) apps with [Sass](http://sass-lang.com/).
  
  * Separate webpack config files for development and production
  * Generates index.html
  * Uses webpack-dev-server for development
  * Generates sourceMaps
  * Compiles SASS to CSS

## How to use this

  * Clone the repo: `git clone https://github.com/mjgs/react-webpack-project-template my-new-project`
  * Install the dependencies: `cd my-new-project && npm install`
  * Probably a good idea to delete the .git folder, then create your own repo: `git init` ... add all files to the repo
  * Start webpack dev server: `npm run dev`
  * Add your code to `./src/main.js` and open `http://localhost:3000`
  * When you are ready to deploy: `npm run build`, deploy the public folder to your web server  

## Credits

  * Joe Maddalone - [react-fundamentals-es6](https://github.com/joemaddalone/egghead-react-fundamentals-es6)
  * Pete Hunt - [webpack-howto](https://github.com/petehunt/webpack-howto)
  * Rajaraodv - [Webpack — The Confusing Parts](https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9#.wh5l2m7fp)
  * Adrian Hall - [Adding SASS Support to Webpack](https://shellmonger.com/2016/01/19/adding-sass-support-to-webpack/)
