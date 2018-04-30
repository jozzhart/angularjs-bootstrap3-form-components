'use strict';

import '../../';

describe('Component: myComponent', function () {

  beforeEach(angular.mock.module('speedyComponents'));

  describe('create input', function () {

    var element;
    var scope;
    beforeEach(inject(function($rootScope, $compile){
      scope = $rootScope.$new();
      element = angular.element('<spdy-input-text name="{{name}}" placeholder="{{placeholder}}" value="value"></spdy-input-text>');
      element = $compile(element)(scope);
      scope.placeholder = 'basic';
      scope.name = 'Field name';
      scope.value = 'A value';
      scope.type = 'text';
      scope.$apply();
    }));

    it('should render the input', function() {
      var input = element.find('input');
      var label = element.find('label');
      var help = element.find('span');
      expect(input.attr('placeholder')).toBe('basic');
      expect(input.val()).toBe('A value');
      expect(label.text()).toContain('Field name');
      expect(help.length).toBeFalsy();
    });
  });

  describe('create input without placeholder', function () {

    var element;
    var scope;
    beforeEach(inject(function($rootScope, $compile){
      scope = $rootScope.$new();
      element = angular.element('<spdy-input-text name="{{name}}"></spdy-input-text>');
      element = $compile(element)(scope);
      scope.name = 'Field name';
      scope.$apply();
    }));

    it('should use the name as placeholder if not defined', function() {
      var input = element.find('input');
      expect(input.attr('placeholder')).toBe('Field name');
    });
  });

  describe('create input with description', function () {

    var element;
    var scope;
    beforeEach(inject(function($rootScope, $compile){
      scope = $rootScope.$new();
      element = angular.element('<spdy-input-text name="{{name}}" description="{{description}}"></spdy-input-text>');
      element = $compile(element)(scope);
      scope.name = 'Field name';
      scope.$apply();
    }));

    it('should use the name as placeholder if not defined', function() {
      var input = element.find('input');
      var help = element.find('span');
      expect(input.attr('placeholder')).toBe('Field name');
      expect(help).toBeTruthy();
    });
  });

});
