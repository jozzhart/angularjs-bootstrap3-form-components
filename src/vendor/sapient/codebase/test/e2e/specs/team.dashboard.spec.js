
  var mock = require('protractor-http-mock');

  describe('Existing Team dashboard', function () {

    beforeAll(function () {
      browser.get('http://uitest:3000/#/');
      element(by.model('username')).sendKeys('admin');
      element(by.model('password')).sendKeys('Testuser1@');
      element(by.buttonText('Log in')).click();
      browser.sleep(1000);
    });

    afterAll(function(){
      element(by.css('.navbar .dropdown-toggle')).click();
      element(by.cssContainingText('.navbar .dropdown-menu a', 'Logout')).click();
    })

    it('should show the team dashboard', function () {

      browser.get('http://uitest:3000/#/dashboard/5a8c73759697503f2cb08176');
      browser.sleep(2000);
      expect(browser.protractorImageComparison.checkFullPageScreen('teamDashboard')).toEqual(0);

    });

    it('should show a link in the tool tip', function () {
        
      browser.actions().mouseMove(element(by.css('.fa-info'))).perform();
      browser.sleep(200);
      expect(browser.protractorImageComparison.checkScreen('teamDashboardToolTip')).toEqual(0);
    });

  });
