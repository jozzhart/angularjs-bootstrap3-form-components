'use strict';

import '../../';

describe('Component: myComponent', function () {

  beforeEach(angular.mock.module('speedyComponents'));

  describe('with $compile', function () {

    var element;
    var scope;
    beforeEach(inject(function($rootScope, $compile){
      scope = $rootScope.$new();
      element = angular.element('<spdy-input-textarea name="{{name}}" value="value" ng-model="value"></spdy-input-textarea>');
      element = $compile(element)(scope);
      scope.placeholder = 'basic';
      scope.name = 'Field name';
      scope.value = 'the value';
      scope.$apply();
    }));

    it('should render the input', function() {
      var textarea = element.find('textarea');
      var label = element.find('label');
      expect(textarea.val()).toContain('the value');
      expect(label.text()).toContain('Field name');
    });

  });

});
