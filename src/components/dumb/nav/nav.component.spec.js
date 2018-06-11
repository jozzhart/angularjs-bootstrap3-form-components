'use strict';

import '../../../';

describe('Component: myComponent', function () {

  beforeEach(angular.mock.module('speedyComponents'));

  describe('Create component', function () {

    var element;
    var scope;
    beforeEach(inject(function($rootScope, $compile){
      scope = $rootScope.$new();
      element = angular.element('<spdy-nav content="{{outside}}"></spdy-nav>');
      element = $compile(element)(scope);
      scope.outside = 'nav';
      scope.$apply();
    }));

    it('should render the text', function() {
      var h1 = element.find('h1');
      expect(h1.text()).toBe('LBG Speedy: nav');
    });

  });

});
