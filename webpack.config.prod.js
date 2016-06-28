const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    pathinfo: true
  },
  context: path.resolve(__dirname, 'src'),
  module: {
    loaders: [
      {test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel', query: { presets: ['es2015', 'react']}},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')}
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles/main.css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      title: 'REACT WEBPACK PROJECT TEMPLATE',
      template: './index.ejs',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};