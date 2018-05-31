/**
 * Controller for the dashboard route.
 * Render proper template.
 */
var dashboardGlobalData={};
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', '$rootScope', 'dashboard', '$location', 'dashboardService', 'userService', 'authService', 'dashboardData'];
    function DashboardController($scope, $rootScope, dashboard, $location, dashboardService, userService, authService, dashboardData) {
        var ctrl = this;
        ctrl.navheadertemplateUrl = "app/dashboard/views/navheader.html";
        ctrl.username = userService.getUsername();
        ctrl.showAuthentication = userService.isAuthenticated();
        ctrl.logout = logout;
        ctrl.isDashboardUrl = false
        function logout() {
            authService.logout();
            $location.path('/login');
        }
        // if dashboard isn't available through resolve it may have been deleted
        // so redirect to the home screen
        if(!dashboard) {
            $location.path('/');
        }
        if($location.$$path.startsWith("/dashboard/")) {
            ctrl.isDashboardUrl = true;
        }
        // set the template and make sure it has access to the dashboard objec
        // dashboard is guaranteed by the resolve setting in the route
        dashboardGlobalData=dashboard;
        // public variables
        ctrl.templateUrl = 'components/templates/' + dashboard.template.toLowerCase() + '.html';       
        dashboard.title = dashboardService.getDashboardTitle(dashboard);
        ctrl.dashboard = dashboard;        
        dataLayer.push({
            event: 'DashboardList',
            eventCategory: 'Dashboard',
            eventAction: ctrl.dashboard.type + ' Dashboard',
            eventLabel: dashboard.title,
        })
        $scope.$watch('$root.logoImage', function() {
            ctrl.logoImage = $rootScope.logoImage;
        });
    }
})();
