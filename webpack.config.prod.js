const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './js/app.js',
    vendor: ['lodash']
  },
  output: {
    filename: 'js/bundle.[name].js',
    path: path.resolve(__dirname, 'public'),
    pathinfo: true
  },
  context: path.resolve(__dirname, 'src'),
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
      { test: /\.s?css$/, loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap') },
      { test: /\.json$/, loader: 'json' }
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
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
