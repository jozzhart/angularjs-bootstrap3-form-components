const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',

  // ISTANBUL LOADER
  // https://github.com/deepsweet/istanbul-instrumenter-loader
  // Instrument JS files with istanbul-lib-instrument for subsequent code coverage reporting
  // Skips node_modules and files that end with .spec.js
  module: {
    rules: [{
    enforce: 'pre',
    test: /\.js$/,
    exclude: [
      /node_modules/,
      /\.spec\.js$/,
      /vendor/
    ],
    loader: 'istanbul-instrumenter-loader',
    query: {
      esModules: true
    }
  }]
}
});
