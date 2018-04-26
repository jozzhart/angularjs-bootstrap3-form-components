import './components';

const MODULE_NAME = 'speedyComponents';

angular.module(MODULE_NAME, ['app.components', 'ui.router'])
.config(function($stateProvider) {
  $stateProvider.state('statusState', {
    url: '/status',
    component: 'spdyStatus'
  });
});
