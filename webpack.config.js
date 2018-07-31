const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: 'public',
    port: 8080,
    proxy: {
      '/api': 'http://localhost:1337'
    },
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.webpack.js', ' ', '.js', '.jsx']
  },
};