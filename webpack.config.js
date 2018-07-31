const webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js',
    // publicPath: '/'
  },
  devServer: {
    contentBase: 'public',
    port: 8080,
    proxy: {
      '/api': 'http://localhost:1337'
    },
    // historyApiFallback: true
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
    extensions: [' ', '.js', '.jsx']
  },
  // plugins: [
  //     new webpack.DefinePlugin({
  //         'process.env.BASE_URL': JSON.stringify('http://localhost:1337')
  //       })
  // ]
};