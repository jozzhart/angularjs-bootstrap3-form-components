'use strict';

// Modules
var webpack = require('webpack');
var path = require('path');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
// var ENV = process.env.npm_lifecycle_event;
// var isTest = ENV === 'test' || ENV === 'test-watch';

module.exports = {

  /**
   * Entry
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   * Should be an empty object if it's generating a test build
   * Karma will set this when it's a test build
   */
  entry : [
    './src/styles/lloyds.less',
    './src/index'
  ],

  /**
   * Output
   * Reference: http://webpack.github.io/docs/configuration.html#output
   * Should be an empty object if it's generating a test build
   * Karma will handle setting it up for you when it's a test build
   */
  output : {
    // Absolute output directory
    path: __dirname + '/dist',
    filename: 'index.js'
  },


  /**
   * Loaders
   * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
   * List: http://webpack.github.io/docs/list-of-loaders.html
   * This handles most of the magic responsible for converting modules
   */

  // Initialize module
  module: {
    rules: [{
      // JS LOADER
      // Reference: https://github.com/babel/babel-loader
      // Transpile .js files using babel-loader
      // Compiles ES6 and ES7 into ES5 code
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      // HTML LOADER
      // Reference: https://github.com/webpack/raw-loader
      // Allow loading html through js
      test: /\.html$|.md$/,
      loader: 'raw-loader'
    }, {
      test: /\.less$/,
      use: [{
        loader: 'style-loader' // creates style nodes from JS strings
      }, {
        loader: 'css-loader', options: {
          sourceMap: true
        } // translates CSS into CommonJS
      }, {
        loader: 'less-loader', options: {
          sourceMap: true
        } // compiles Less to CSS
      }]
    }, {
      test: /.jpe?g$|.gif$|.png$|.svg$|.woff$|.woff2$|.ttf$|.eot$/,
      loader: "url-loader"
    }]
  },

  externals: {
    jQuery : '$'
  },

  // if (!isProd) {
  //   watch = true;
  // }


};
