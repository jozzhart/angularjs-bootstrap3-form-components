// Karma configuration
// Generated on Mon Apr 11 2016 15:57:58 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/d3/d3.min.js',
      'bower_components/angular/angular.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/jquery/dist/jquery.js',
      'bower_components/lodash/dist/lodash.js',
      'bower_components/gridstack/dist/gridstack.js',
      'bower_components/gridstack-angular/dist/gridstack-angular.js',
      'bower_components/angular-ui-select/dist/select.js',
      'bower_components/angular-jwt/dist/angular-jwt.js',     
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-bootstrap/ui-bootstrap.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'src/app/dashboard/core/extensions/ng-fitText.js',
      'bower_components/chart.js/dist/Chart.min.js',
      'bower_components/angular-chart.js/dist/angular-chart.min.js',
      'bower_components/angular-chartist.js/dist/angular-chartist.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/chartist/dist/chartist.min.js',
      'bower_components/moment/min/moment.min.js',
      'bower_components/angular-validation-match/src/angular-validation-match.js',
      'bower_components/ng-sortable/dist/ng-sortable.js',    
      
      'test/appGlobals.js',
      'src/app/app.js',
      'src/app/dashboard/core/module.js',
      'src/components/templates/capone.js',
      'src/components/templates/custom.js',
      'src/components/templates/maturity-radar.js', 
      'src/app/dashboard/services/authInterceptor.js',
      'src/app/dashboard/services/tokenService.js',
      'src/app/dashboard/services/userService.js',
      'src/app/dashboard/core/data-factories/*.js',   
      'src/app/dashboard/core/data-factories/user-data.js', 
      'src/app/dashboard/services/loginRedirectService.js',           
      'src/components/widgets/cloud/view.js',
      'src/components/widgets/cloud/config.js',      
      'test/**/*.test.js'
    ],


    // list of files to exclude
    exclude: [
      
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/components/templates/custom.js': ['coverage'],
      'src/components/templates/maturity-radar.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    coverageReporter: {
            includeAllSources: true,
            dir: 'coverage/',
            reporters: [
                { type: "html", subdir: "html" },
                { type: 'text-summary' }
            ]
        }
  })
}
