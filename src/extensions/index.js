const MODULE_NAME = 'speedyComponents';

let directiveExtensions = angular.module(MODULE_NAME)
.config(function($provide) {
  /**
   * Hijacking the AngularUI Tabs directive
   * We need a way to set an active tab based on current router state
   * By default this is only supported when using tabs via an `ngRepeat` loop.
   *
   * @example
     <tab isactive="vm.test(isTrue)">tab contents</tab>
  */
  // $provide.decorator('customWidgetDirective', function($delegate) {
  //   var directive, link;
  //   directive = $delegate[0];
  //   link = directive.link;

  //   console.log(directive)

  //   delete directive.templateUrl;
  //   directive.template = '<p>Customized sub state 1</p>';

  //   directive.compile = function() {
  //     return function Link(scope, element, attrs, ctrls) {
  //       scope.active = scope.$parent.$eval(attrs.isactive);
  //       return link.apply(this, arguments);
  //     };
  //   };
  //   return $delegate;
  // });
})

export default directiveExtensions;