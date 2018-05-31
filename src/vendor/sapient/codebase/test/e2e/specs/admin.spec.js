var mock = require('protractor-http-mock');

describe('Admin page', function () {

  beforeAll(function () {
    browser.get('http://uitest:3000/#/');
    element(by.model('username')).sendKeys('admin');
    element(by.model('password')).sendKeys('Testuser1@');
    element(by.buttonText('Log in')).click();
  });

  afterEach(function () {
    mock.teardown();
  });

  afterAll(function(){
    element(by.css('.navbar .dropdown-toggle')).click();
    element(by.cssContainingText('.navbar .dropdown-menu a', 'Logout')).click();
  });

  it("should show the admin page", () => {

    element(by.css('.navbar .dropdown-toggle')).click();
    element(by.cssContainingText('.navbar .dropdown-menu a', 'Settings')).click();
    expect(browser.protractorImageComparison.checkFullPageScreen('adminPage')).toEqual(0);
  });

  it("should show the setting tab", () => {

    mock(['GET_api_properties']);

    browser.get('http://uitest:3000/#/admin');
    element(by.cssContainingText('a', 'Custom Api Settings')).click();
    expect(browser.protractorImageComparison.checkFullPageScreen('adminSettingsPage')).toEqual(0);

  });

  it('should show menu items for features if enabled in the API', function () {

    mock(['GET_api_featureToggle']);

    browser.get('http://uitest:3000/#/admin');

    expect(element(by.cssContainingText('a', 'Custom Api Settings')).isPresent()).toBe(true);
    expect(element(by.cssContainingText('a', 'Upload Offline Data')).isPresent()).toBe(true);

  });


  it('should hide menu items for features if disabled in the API', function () {

    mock.add([{
      request: {
        path: '/api/featureToggle',
        method: 'GET'
      },
      response: {
        data: {
          uploadFile: "false",
          propertyConfig: "false"
        }
      }
    }]);

    browser.get('http://uitest:3000/#/admin');

    //  TODO - mocks not working properly
    expect(element(by.cssContainingText('a', 'Custom Api Settings')).isPresent()).toBe(false);
    expect(element(by.cssContainingText('a', 'Upload Offline Data')).isPresent()).toBe(false);

  });

  // it('should hide menu items for features if API returns 404', function () {

  //   mock.add([{
  //     request: {
  //       path: '/api/featureToggle',
  //       method: 'GET'
  //     },
  //     response: {
  //       data: {},
  //       status: 404
  //     }
  //   }]);

  //   browser.get('http://uitest:3000/#/admin');

  //   expect(element(by.cssContainingText('a', 'Custom Api Settings')).isPresent()).toBe(false);
  //   expect(element(by.cssContainingText('a', 'Upload Offline Data')).isPresent()).toBe(false);

  // });


  it('should show me an error if server fails when updaing configuration', function () {

    mock(['GET_api_properties']);

    browser.get('http://uitest:3000/#/admin');

    element(by.cssContainingText('a', 'Custom Api Settings')).click();
    element(by.cssContainingText('.btn-primary', 'Save')).click();
    expect(element.all(by.css('.alert-danger')).get(0).getText()).toBe('There was an error saving your configuration')

  });

  // it('should show me an success message if I update the configuration', function () {

  //   mock(['GET_api_properties', 'PUT_api_properties']);

  //   browser.get('http://uitest:3000/#/admin');

  //   element(by.cssContainingText('a', 'Custom Api Settings')).click();

  //   element.all(by.css("input[type='number']")).clear().sendKeys("12");

  //   //  Protractor is freaking out if I try set set all at one, having to loop through
  //   element.all(by.css("fieldset input[type='text']"))
  //     .then(function (items) {
  //       items.forEach(function (item, i) {
  //         item.clear().sendKeys('["test"]')
  //       });
  //     });

  //   element.all(by.css("textarea")).clear().sendKeys('{"uploadOfflineData": "true","propertyConfig": "true","blah": "true"}');

  //   element(by.cssContainingText('.btn-primary', 'Save')).click();
  //   expect(element.all(by.css('.alert-success')).get(0).getText()).toBe('Configuration updated')

  // });


  it('should show me an error if Jira Project name is empty when updaing configuration', function () {

    mock(['GET_api_properties']);

    browser.get('http://uitest:3000/#/admin');

    element(by.cssContainingText('a', 'Custom Api Settings')).click();
    element(by.css('input[placeholder="Jira Project name"]')).clear();
    element(by.cssContainingText('.btn-primary', 'Save')).click();
    expect(element.all(by.css('.alert-danger')).get(0).getText()).toBe('Please provide a Jira Project name')

  });


  it('should show me an error if Jira Project name is empty string in array when updaing configuration', function () {

    mock(['GET_api_properties']);

    browser.get('http://uitest:3000/#/admin');

    element(by.cssContainingText('a', 'Custom Api Settings')).click();
    element(by.css('input[placeholder="Jira Project name"]')).clear().sendKeys('[""]');
    element(by.cssContainingText('.btn-primary', 'Save')).click();
    expect(element.all(by.css('.alert-danger')).get(0).getText()).toBe('Please provide a Jira Project name')

  });

});
