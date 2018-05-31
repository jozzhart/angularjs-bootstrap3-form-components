var HtmlReporter = require('protractor-beautiful-reporter');
var protractorImageComparison = require('protractor-image-comparison');
var path = require('path');

exports.config = {
  seleniumAddress: 'http://hub:4444/wd/hub',
  specs: ['test/e2e/**/*.spec.js'],
  framework: 'jasmine',
  mocks: {
    default: ['default'], // default value: []
    dir: 'test/e2e/mocks' // default value: 'mocks'
  },
  capabilities: {
    browserName: 'chrome',

    'goog:chromeOptions': {
      args: ["--headless", "--disable-gpu", "--window-size=1900,1080"]
    }
  },
  onPrepare: function () {

    require('protractor-http-mock').config = {
        rootDirectory: __dirname
      },

      require('protractor-beautiful-reporter').config = {
        rootDirectory: __dirname
      },

      browser.protractorImageComparison = new protractorImageComparison({
        baselineFolder: 'test/e2e/screenshots/baseline/',
        screenshotPath: 'test/e2e/screenshots/generated/',
        autoSaveBaseline: true
      });

    // Add a screenshot reporter:
    jasmine.getEnv().addReporter(new HtmlReporter({
      preserveDirectory: false,
      takeScreenShotsOnlyForFailedSpecs: false,
      screenshotsSubfolder: 'images',
      jsonsSubfolder: 'jsons',
      baseDirectory: 'reports',
      pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
        // Return '<30-12-2016>/<browser>/<specname>' as path for screenshots:
        // Example: '30-12-2016/firefox/list-should work'.
        var currentDate = new Date(),
          day = currentDate.getDate(),
          month = currentDate.getMonth() + 1,
          year = currentDate.getFullYear();

        var validDescriptions = descriptions.map(function (description) {
          return description.replace('/', '@');
        });

        return path.join(
          day + "-" + month + "-" + year,
          // capabilities.get('browserName'),
          validDescriptions.join('-'));
      }
    }).getJasmine2Reporter());
  },

  jasmineNodeOpts: {
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 120000,
  }
};