var path = require('path');

// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig(config) {
  config.set({
    frameworks: [
      // Reference: https://github.com/karma-runner/karma-jasmine
      // Set framework to jasmine
      'jasmine'
    ],

    reporters: [
      // Reference: https://github.com/mlex/karma-spec-reporter
      // Set reporter to print detailed results to console
      'progress',

      // Reference: https://github.com/karma-runner/karma-coverage
      // Output code coverage files
      'coverage'
    ],

    files: [
      // Grab all files in the app folder that contain .spec.
      'src/tests.webpack.js'
    ],

    preprocessors: {
      // Reference: http://webpack.github.io/docs/testing.html
      // Reference: https://github.com/webpack/karma-webpack
      // Convert files with webpack and load sourcemaps
      'src/tests.webpack.js': ['webpack', 'sourcemap']
    },

    browsers: [
      'PhantomJS'
    ],

    singleRun: true,

    // Configure code coverage reporter
    coverageReporter: {
      dir: 'coverage/',
      reporters: [{
          type: 'text-summary'
        },
        {
          type: 'html'
        },
        {
          type: function () {
            var shieldBadgeReporter = require('istanbul-reporter-shield-badge')
            var istanbul = require('istanbul')
            istanbul.Report.register(shieldBadgeReporter)
            return 'shield-badge'
          }(),
          subdir: '.',
          coverageType: 'statements',
          range: [75, 90],
          subject: 'Code Coverage', 
          readmeFilename: 'README.md',
          readmeDir: path.resolve(__dirname, './')
        }
      ]
    },

    webpack: require('./webpack.config'),

    // Hide webpack build information from output
    webpackMiddleware: {
      noInfo: 'errors-only'
    }
  });
};
