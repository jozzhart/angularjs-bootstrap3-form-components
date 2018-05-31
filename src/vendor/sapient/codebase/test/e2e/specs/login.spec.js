describe('Login page', function () {

  it('should let me log in', function () {

    browser.get('http://uitest:3000/#/login');

    expect(browser.protractorImageComparison.checkFullPageScreen('loginPage')).toEqual(0);

    element(by.model('username')).sendKeys('admin');
    element(by.model('password')).sendKeys('Testuser1@');
    element(by.buttonText('Log in')).click();

    expect(browser.protractorImageComparison.checkFullPageScreen('homePage')).toEqual(0);

  });

  it('should logout', function () {
    element(by.css('.navbar .dropdown-toggle')).click();
    element(by.cssContainingText('.navbar .dropdown-menu a', 'Logout')).click();
  });

});