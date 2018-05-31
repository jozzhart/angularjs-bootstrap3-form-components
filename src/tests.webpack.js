// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.


import angular from 'angular';
import mocks from 'angular-mocks';
import uiRouter from 'angular-ui-router';
import httpMock from 'protractor-http-mock';

window.HygieiaConfig = {"module":"hygieia-dashboard","refresh":60};

//  TODO need to include all directories except vendor
const context = require.context('./components', true, /spec\.js$/);

context.keys().forEach(context);

