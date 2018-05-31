var mock = require('protractor-http-mock');

describe('Home page', function () {

  beforeAll(function () {
    browser.get('http://uitest:3000/#/');
    element(by.model('username')).sendKeys('admin');
    element(by.model('password')).sendKeys('Testuser1@');
    element(by.buttonText('Log in')).click();
    browser.sleep(200);
  });

  afterEach(function () {
    mock.teardown();
  });

  afterAll(function(){
    element(by.css('.navbar .dropdown-toggle')).click();
    element(by.cssContainingText('.navbar .dropdown-menu a', 'Logout')).click();
  })

  it('should show the home page', function () {

    browser.get('http://uitest:3000/#/');
    expect(browser.protractorImageComparison.checkFullPageScreen('homePage')).toEqual(0);

  });

  it('should show Create a new Engineering Team Dashboard option', function () {

    browser.get('http://uitest:3000/#/');

    element(by.css('.create-dashboard-button')).click();
    element.all(by.css('.form-group')).get(0).element(by.cssContainingText('option', 'Engineering Team dashboard')).isPresent().toBe(true);

    element(by.css('.widget-modal-close')).click();
  });


  it('should show create new Team dashboard', function () {

    browser.get('http://uitest:3000/#/');

    element(by.css('.create-dashboard-button')).click();
    element.all(by.css('.form-group')).get(0).element(by.cssContainingText('option', 'Team dashboard')).get(1).isPresent().toBe(true);

    element(by.css('.widget-modal-close')).click();
  });

});

