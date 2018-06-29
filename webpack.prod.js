'use strict';


// Modules
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
// var ENV = process.env.npm_lifecycle_event;
// var isTest = ENV === 'test' || ENV === 'test-watch';
// var isProd = ENV === 'build' || ENV === 'prod';


module.exports = merge(common, {
  
  mode: 'development',
  devtool: 'source-map',

  module: {
    rules: [{
      test: /\.less$/,
      use: [
      {
        loader: MiniCssExtractPlugin.loader
      }, {
        loader: 'css-loader'
      }, 
      {
        loader: 'less-loader', options: {
          sourceMap: true
        } // compiles Less to CSS
      }]
    }]
  },

  plugins: [
    new MiniCssExtractPlugin(),
    // new CopyWebpackPlugin([{
    //   from: 'src/assets', 
    //   to: 'assets/'
    // }])
  ],
  
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       cache: true,
  //       parallel: true,
  //       sourceMap: true // set to true if you want JS source maps
  //     }),
  //     new OptimizeCSSAssetsPlugin({})
  //   ]
  // },

});

// var test = {
  


//   // // ISTANBUL LOADER
//   // // https://github.com/deepsweet/istanbul-instrumenter-loader
//   // // Instrument JS files with istanbul-lib-instrument for subsequent code coverage reporting
//   // // Skips node_modules and files that end with .spec.js
//   // if (isTest) {
//   //   config.module.rules.push({
//   //     enforce: 'pre',
//   //     test: /\.js$/,
//   //     exclude: [
//   //       /node_modules/,
//   //       /\.spec\.js$/
//   //     ],
//   //     loader: 'istanbul-instrumenter-loader',
//   //     query: {
//   //       esModules: true
//   //     }
//   //   })
//   // }

//   // plugins= [
//   //     // Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
//   //     // Only emit files when there are no errors
//   //     // new webpack.NoErrorsPlugin(),

//   //     // Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
//   //     // Dedupe modules in the output
//   //     // new webpack.optimize.DedupePlugin(),

//   //     // Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
//   //     // Minify all javascript, switch loaders to minimizing mode
//   //     // new webpack.optimize.UglifyJsPlugin(),

//   //     new MiniCssExtractPlugin()

//   // ],

//   externals: {
//     jQuery : '$'
//   }

// };

