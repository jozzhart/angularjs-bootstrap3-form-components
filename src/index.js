import './components';
import './services';
import './vendor';
import './vendor/sapient';

import customWidgetTemplate from './vendor/sapient/codebase/src/app/dashboard/views/custom-widget.html'

const MODULE_NAME = 'speedyComponents';

angular.module(MODULE_NAME, ['app.components', 'app.services', 'ui.router', 'app.sapient'])
.config(function($stateProvider) {
  $stateProvider.state('statusState', {
    url: '/status',
    component: 'spdyStatus'
  });

  $stateProvider.state('teamDashboardState', {
    url: '/team-dashboard:id',
    component: 'spdyTeamDashboard'
  });
})
.config(function($provide) {
  /**
   * Hijacking the AngularUI Tabs directive
   * We need a way to set an active tab based on current router state
   * By default this is only supported when using tabs via an `ngRepeat` loop.
   *
   * @example
     <tab isactive="vm.test(isTrue)">tab contents</tab>
  */
  $provide.decorator('customWidgetDirective', function($delegate) {
    var directive, link;
    directive = $delegate[0];
    link = directive.link;

    delete directive.templateUrl;
    directive.template = customWidgetTemplate;

    // directive.compile = function() {
    //   return function Link(scope, element, attrs, ctrls) {
    //     scope.active = scope.$parent.$eval(attrs.isactive);
    //     return link.apply(this, arguments);
    //   };
    // };
    return $delegate;
  });
})
// .controller('JozzCustomTemplateController', ['$scope', '$controller', function ($scope, $controller) {
//   // Initialize the super class and extend it.
//   angular.extend(this, $controller('CustomTemplateController', {$scope: $scope}));
  
//   console.log(this)

// }]);