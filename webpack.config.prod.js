var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './public',
    publicPath: '',
    filename: '/js/bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel', query: { presets: ['es2015', 'react']}},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap')}
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/main.css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      title: 'REACT WEBPACK PROJECT TEMPLATE',
      template: './src/index.ejs',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};