'use strict';

import '../../../../';

describe('Component: myComponent', function () {

  beforeEach(angular.mock.module('speedyComponents'));

  describe('create number input', function () {

    var element;
    var scope;
    beforeEach(inject(function($rootScope, $compile){
      scope = $rootScope.$new();
      element = angular.element('<spdy-input-number type="number" value="value" numeric="true"></spdy-input-number>');
      element = $compile(element)(scope);
      scope.value = 22;
      scope.$apply();
    }));

    it('should use the name as placeholder if not defined', function() {
      var input = element.find('input');
      expect(input.val()).toBe('22');
    });

  });

});
