var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: './public',
    publicPath: '',
    filename: '/js/bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    contentBase: './public/',
    port: process.env.PORT || 3000
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel', query: {presets: ['es2015', 'react']}},
      {test: /\.s?css$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap'], include: path.join(__dirname, 'src')}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'REACT WEBPACK PROJECT TEMPLATE',
      template: './src/index.ejs',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};
