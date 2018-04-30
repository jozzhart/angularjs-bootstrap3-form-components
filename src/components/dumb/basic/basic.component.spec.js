'use strict';

import '../../';

describe('Component: myComponent', function () {

  beforeEach(angular.mock.module('speedyComponents'));

  describe('Create component', function () {

    var element;
    var scope;
    beforeEach(inject(function($rootScope, $compile){
      scope = $rootScope.$new();
      element = angular.element('<spdy-basic content="{{outside}}"></spdy-basic>');
      element = $compile(element)(scope);
      scope.outside = 'basic';
      scope.$apply();
    }));

    it('should render the text', function() {
      var h1 = element.find('h1');
      expect(h1.text()).toBe('Test: basic');
    });

  });

});
