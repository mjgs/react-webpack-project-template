const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/app.js',
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'public'),
    pathinfo: false
  },
  context: path.resolve(__dirname, 'src'),
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel'},
      {test: /\.s?css$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap'], include: path.join(__dirname, 'src')}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'REACT WEBPACK PROJECT TEMPLATE',
      template: './index.ejs',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};
