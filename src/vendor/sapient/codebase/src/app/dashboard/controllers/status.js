/**
 * Controller for administrative functionality
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('StatusController', StatusController);


    StatusController.$inject = ['$scope', 'dashboardData', '$location', '$uibModal', 'userService', 'authService', 'userData', 'dashboardService', 'fileUploadService', '$filter', '$window', 'customDashboardData', 'orderByFilter'];

    function StatusController($scope, dashboardData, $location, $uibModal, userService, authService, userData, dashboardService, $filter, $window, customDashboardData, orderBy) {
        var ctrl = this;

        ctrl.templateUrl = "app/dashboard/views/navheader.html";
        ctrl.username = userService.getUsername();
        ctrl.showAuthentication = userService.isAuthenticated();
        ctrl.logout = logout;
        
        if (userService.isAdmin()) {
            ctrl.myadmin = true;
        }
        
        ctrl.applyLogoImage = applyLogoImage;

        function logout() {
            authService.logout();
            $location.path("/login");
        }
        
        function applyLogoImage() {
            dashboardData.getLogoImage().then(processLogoResponse, processLogoError);
        }

        function processLogoResponse(data) {
            ctrl.logoImage = "data:image/png;base64," + data.image;
        }

        function processLogoError(data) {
            ctrl.logoImage = '';
        }

        
        applyLogoImage();

    }
})();