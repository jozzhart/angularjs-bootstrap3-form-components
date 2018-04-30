import './components';
import './services';

const MODULE_NAME = 'speedyComponents';

angular.module(MODULE_NAME, ['app.components', 'app.services', 'ui.router'])
.config(function($stateProvider) {
  $stateProvider.state('statusState', {
    url: '/status',
    component: 'spdyStatus'
  });
});