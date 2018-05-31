// var mock = require('protractor-http-mock');

// describe('Home page', function () {

//   beforeAll(function () {
//     browser.get('http://uitest:3000/#/');
//     element(by.model('username')).sendKeys('admin');
//     element(by.model('password')).sendKeys('Testuser1@');
//     element(by.buttonText('Log in')).click();
//     browser.sleep(200);
//   });

//   afterEach(function () {
//     mock.teardown();
//   });

//   afterAll(function(){
//     element(by.css('.navbar .dropdown-toggle')).click();
//     element(by.cssContainingText('.navbar .dropdown-menu a', 'Logout')).click();
//   })

//   it('should show the status page', function () {

//     browser.get('http://uitest:3000/#/health');
//     expect(browser.protractorImageComparison.checkFullPageScreen('statusPage')).toEqual(0);

//   });

// });

