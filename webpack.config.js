'use strict';

let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let loaders = require('./webpack.loaders');
let CopyWebpackPlugin = require('copy-webpack-plugin');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8888';

module.exports = {
  context: __dirname + '/src',
  devtool: 'source-map',
  entry: [
    './entryPoint.js' //  Appʼs entry point
  ],
  output: {
    path: __dirname + '/public',
    filename: 'none.js',
    library: ['BettingWidget']
  },
  module: {
    loaders: loaders
  },
  devServer: {
    contentBase: __dirname + '/public',
    inline: true,
    port: PORT,
    host: HOST
  },
  plugins: [
    new ExtractTextPlugin('betting-widget.css', {
      allChunks: true
    })
  ]
};
