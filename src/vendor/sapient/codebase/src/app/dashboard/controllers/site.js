/**
 * Controller for choosing or creating a new dashboard
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('SiteController', SiteController);

    SiteController.$inject = ['$scope', '$rootScope', '$q', '$uibModal', 'dashboardData', '$location', 'DashboardType', 'userService', 'authService','dashboardService'];
    function SiteController($scope, $rootScope, $q, $uibModal, dashboardData, $location, DashboardType, userService, authService, dashboardService) {
        var ctrl = this;

        // public variables
        ctrl.search = '';
        ctrl.myadmin = '';
        ctrl.username = userService.getUsername();
        ctrl.showAuthentication = userService.isAuthenticated();

        ctrl.templateUrl = 'app/dashboard/views/navheader.html';
        ctrl.dashboardTypeEnum = DashboardType;

        // public methods
        ctrl.createDashboard = createDashboard;
        ctrl.deleteDashboard = deleteDashboard;
        ctrl.manageTemplates = manageTemplates;
        ctrl.open = open;
        ctrl.login = login;
        ctrl.logout = logout;
        ctrl.admin = admin;
        ctrl.setType = setType;
        ctrl.filterNotOwnedList = filterNotOwnedList;
        ctrl.filterDashboards = filterDashboards;
        ctrl.editDashboard = editDashboard;
        ctrl.getInvalidAppOrCompError = getInvalidAppOrCompError;
        ctrl.tabFilterGA = tabFilterGA;
        if (userService.isAdmin()) {
            ctrl.myadmin = true;

        }
        (function() {
            // set up the different types of dashboards with a custom icon
            var types = dashboardData.types();
            _(types).forEach(function (item) {
                if(item.id == DashboardType.PRODUCT) {
                    item.icon = 'fa-cubes';
                }
            });

            ctrl.dashboardTypes = types;

            pullDashboards();
           
            $scope.$watch('$root.logoImage', function() {
                ctrl.logoImage = $rootScope.logoImage;
            });
            $scope.$watch('$root.versionDetailsMap', function() {
                ctrl.currentVersion = $rootScope.versionDetailsMap && $rootScope.versionDetailsMap.currentVersion || '-';
                ctrl.latestVersion = $rootScope.versionDetailsMap && $rootScope.versionDetailsMap.latestVersion || '-';
                ctrl.releaseNotes = $rootScope.versionDetailsMap && $rootScope.versionDetailsMap.releaseNotes || '#';
            });

        })();

        function tabFilterGA(tabName, dashNo) {
        	   //Google Analytics Code
            console.log("Tab loaded:",tabName ,", Google Analytics");
            dataLayer.push({
                event: 'DashboardTab',
                eventCategory: 'Dashboard',
                eventAction: 'Dashboard Tab Clicks',
                eventLabel: tabName + 'Dashboard',
            })
        }

        function setType(type) {
            ctrl.dashboardType = type;
        }

        function filterDashboards(item) {
            var matchesSearch = (!ctrl.search || item.name.toLowerCase().indexOf(ctrl.search.toLowerCase()) !== -1);
            if (ctrl.dashboardType == DashboardType.PRODUCT) {
                return item.isProduct && matchesSearch;
            }

            if (ctrl.dashboardType == DashboardType.TEAM) {
                return !item.isProduct && matchesSearch;
            }

            return matchesSearch;
        }

        function admin() {
            console.log('sending to admin page');
            $location.path('/admin');
        }

        function login() {
          $location.path('/login');
        }

        function logout() {
            authService.logout();           
            $location.path('/login');
        }

        // method implementations
        function createDashboard() {
            // open modal for creating a new dashboard
            $uibModal.open({
                templateUrl: 'app/dashboard/views/createDashboard.html',
                controller: 'CreateDashboardController',
                controllerAs: 'ctrl'
            });
        }

        function editDashboard(item)
        {
            // open modal for renaming dashboard
            var modalInstance = $uibModal.open({
                templateUrl: 'app/dashboard/views/editDashboard.html',
                controller: 'EditDashboardController',
                controllerAs: 'ctrl',
                resolve: {
                    dashboardItem: function() {
                        return item;
                    }
                }
            });
            modalInstance.result.then(function success() {
                pullDashboards()
            });
        }

        function manageTemplates() {
            $location.path('/templates');
        }

        function open(dashboardId) {
            $location.path('/dashboard/' + dashboardId);
        }

        function processDashboardResponse(data) {
            // add dashboards to list
            ctrl.dashboards = [];
            var dashboards = [];
            for (var x = 0; x < data.length; x++) {                
                var board = {
                    id: data[x].id,
                    name: dashboardService.getDashboardTitle(data[x]),
                    isProduct: data[x].type && data[x].type.toLowerCase() === DashboardType.PRODUCT.toLowerCase()
                };
                if(data[x].aggrFlag) {
                    board.aggrFlag = data[x].aggrFlag;
                }

                if(board.isProduct) {
                    //console.log(board);
                }
                dashboards.push(board);
            }

            ctrl.dashboards = dashboards;
            //tabFilterGA('All', ctrl.dashboards);
        }

        function processDashboardError(data) {
            ctrl.dashboards = [];
        }

        function processMyDashboardResponse(mydata) {

            // add dashboards to list
           ctrl.mydash = [];
            var dashboards = [];
            for (var x = 0; x < mydata.length; x++) {

                dashboards.push({
                    id: mydata[x].id,
                    name: dashboardService.getDashboardTitle(mydata[x]),
                    type: mydata[x].type,
                    isProduct: mydata[x].type && mydata[x].type.toLowerCase() === DashboardType.PRODUCT.toLowerCase(),
                    validServiceName:  mydata[x].validServiceName,
                    validAppName: mydata[x].validAppName,
                    configurationItemBusServName:  mydata[x].configurationItemBusServName,
                    configurationItemBusAppName:  mydata[x].configurationItemBusAppName,
                    configurationItemBusServId:  mydata[x].configurationItemBusServObjectId,
                    configurationItemBusAppId:  mydata[x].configurationItemBusAppObjectId,
                    showError: ctrl.getInvalidAppOrCompError(mydata[x]),
                    aggrFlag: mydata[x].aggrFlag
                });
            }

            ctrl.mydash = dashboards;
		}

        function processMyDashboardError(data) {
            ctrl.mydash = [];
        }

        function deleteDashboard(item) {
            var id = item.id;
            dashboardData.delete(id).then(function () {
                _.remove(ctrl.dashboards, {id: id});
                _.remove(ctrl.mydash, {id: id});
            }, function(response) {
                var msg = 'An error occurred while deleting the dashboard';

                if(response.status > 204 && response.status < 500) {
                    msg = 'The Team Dashboard is currently being used by a Product Dashboard/s. You cannot delete at this time.';
                }

                swal(msg);
            });
        }

        function filterNotOwnedList(db1, db2) {

            console.log("size before is:" + db1.length);

            var jointArray = db1.concat(db2);

            console.log("size after is:" + jointArray.length);

            var uniqueArray = jointArray.filter(function (elem, pos) {
                return jointArray.indexOf(elem) == pos;
            });

            console.log("size after reduction  is:" + uniqueArray.length);
            ctrl.dashboards = uniqueArray;
        }
        function getInvalidAppOrCompError(data){
            var showError = false;

            if((data.configurationItemBusServName != undefined && !data.validServiceName) || (data.configurationItemBusAppName != undefined && !data.validAppName)){
                showError = true;
            }
            return showError;
        }
        function pullDashboards(){
            // request dashboards
            dashboardData.search().then(processDashboardResponse, processDashboardError);

            // request my dashboards
            dashboardData.mydashboard(ctrl.username).then(processMyDashboardResponse, processMyDashboardError);
            //request match version
            dashboardData.getMatchVersions().then(processVersionsResponse, processVersionsError);
            
            //request logo image
            dashboardData.getLogoImage().then(processLogoResponse, processLogoError);

        }

        function processVersionsResponse(data) {
            ctrl.currentVersion = data.versionDetailsMap && data.versionDetailsMap.currentVersion || '-';
            ctrl.latestVersion = data.versionDetailsMap && data.versionDetailsMap.latestVersion || '-';
            ctrl.releaseNotes = data.versionDetailsMap && data.versionDetailsMap.releaseNotes || '#';
        }

        function processVersionsError(data) {
            ctrl.currentVersion = '';
            ctrl.latestVersion = '';
        }

        function processLogoResponse(data) {
            ctrl.logoImage =  "data:image/png;base64,"+ data.image;
            $rootScope.logoImage = ctrl.logoImage;
            if(localStorageSupported) {
                localStorage.removeItem('logoImage');
                localStorage.setItem('logoImage', ctrl.logoImage);
            }
        }
        function processLogoError(data) {
            ctrl.logoImage = '';
            $rootScope.logoImage = '';
        }       
    }

})();
