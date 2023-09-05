const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const path = require("path");

module.exports = {
  target: 'node',
  entry: slsw.lib.entries,
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
