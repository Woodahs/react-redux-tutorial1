module.exports = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel-loader'
  },
  {
    test: /\.scss$/,
    loaders: [ 'style', 'css?sourceMap', 'sass?sourceMap' ]
  }
];
