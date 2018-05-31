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

  it("should create a new team dashboard", () => {

    element(by.css('.create-dashboard-button')).click();
    element.all(by.css('.widget-modal-body .form-group')).get(0).all(by.cssContainingText('option', 'Team dashboard')).get(1).click();
    element.all(by.css('.widget-modal-body .form-group')).get(1).element(by.cssContainingText('option', 'Team Dashboard')).click();
    element(by.model('ctrl.dashboardTitle')).sendKeys('A new team dashboard');
    element(by.model('ctrl.applicationName')).sendKeys('Application name');
    element(by.css('.widget-modal-body .btn-primary')).click();
    browser.sleep(1000);
    expect(browser.protractorImageComparison.checkFullPageScreen('newTeamDashboard')).toEqual(0);
  });


  it("should show error when creating dashboard with existing title", () => {

    browser.get('http://uitest:3000/#/');

    element(by.css('.create-dashboard-button')).click();
    element.all(by.css('.widget-modal-body .form-group')).get(0).all(by.cssContainingText('option', 'Team dashboard')).get(1).click();
    element.all(by.css('.widget-modal-body .form-group')).get(1).element(by.cssContainingText('option', 'Team Dashboard')).click();
    element(by.model('ctrl.dashboardTitle')).sendKeys('A new team dashboard');
    element(by.model('ctrl.applicationName')).sendKeys('Application name');
    element(by.css('.widget-modal-body .btn-primary')).click();
    expect(browser.protractorImageComparison.checkFullPageScreen('newTeamDashboardError')).toEqual(0);
    element(by.css('.widget-modal-close')).click();
    
  });


});
