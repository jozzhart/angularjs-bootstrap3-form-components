/**
 * Controller for administrative functionality
 */
(function () {
  'use strict';

  angular
    .module(HygieiaConfig.module)
    .controller('AdminController', AdminController);


  AdminController.$inject = ['$scope', '$timeout', '$rootScope', 'dashboardData', '$location', '$uibModal', 'userService', 'authService', 'userData', 'dashboardService', 'fileUploadService', '$filter', '$window', 'customDashboardData', 'orderByFilter'];

  function AdminController($scope, $timeout, $rootScope, dashboardData, $location, $uibModal, userService, authService, userData, dashboardService, fileUploadService, $filter, $window, customDashboardData, orderBy) {
    var ctrl = this;

    
    //  TODO testing refactor
    if ((userService.isAuthenticated() && userService.isAdmin()) || HygieiaConfig.local) {
      $location.path('/admin');
    } else {
      console.log("Not authenticated redirecting");
      $location.path('#');
    }

    ctrl.storageAvailable = localStorageSupported;
    ctrl.showAuthentication = userService.isAuthenticated();
    ctrl.templateUrl = "app/dashboard/views/navheader.html";
    ctrl.username = userService.getUsername();
    ctrl.authType = userService.getAuthType();
    ctrl.logout = logout;
    ctrl.editDashboard = editDashboard;
    ctrl.generateToken = generateToken;
    ctrl.saveConfiguration = saveConfiguration;
    ctrl.saveJiraConfiguration = saveJiraConfiguration;
    ctrl.errorMessage = '';
    ctrl.successMessage = '';
    ctrl.tab = "dashboards";
    ctrl.toggleFeatures = {};
    ctrl.downloadButtonDisabled = true;
    ctrl.reportHeaders = {
      projectID: 'Project ID',
      storyID: 'Story ID',
      sprintId: 'Sprint ID',
      storyType: 'Story Type',
      sEstimate: 'Estimate',
      bufferedEstimateTime: 'Buffered Estimate'
    };
    ctrl.validationSelect = {
      title: 'Please select'
    }

    if (userService.isAdmin()) {
      ctrl.myadmin = true;
    }

    // list of available themes. Must be updated manually
    ctrl.themes = [{
        name: 'Dash',
        filename: 'dash'
      },
      {
        name: 'Dash for display',
        filename: 'dash-display'
      },
      {
        name: 'Bootstrap',
        filename: 'default'
      },
      {
        name: 'BS Slate',
        filename: 'slate'
      }
    ];

    ctrl.validationForms = [{
      name: 'Sprint Predictability',
      route: '/api/jiraMVP/sprintpredictability'
    }];

    ctrl.schema = userData.getConfigurationSchema();
    ctrl.jiraSchema = userData.getJiraConfigurationSchema();

    // used to only show themes option if local storage is available
    if (localStorageSupported) {
      ctrl.theme = localStorage.getItem('theme');
    }

    // ctrl.dashboards = []; don't default since it's used to determine loading

    // public methods
    ctrl.deleteDashboard = deleteDashboard;
    ctrl.applyTheme = applyTheme;
    ctrl.uploadFile = uploadFile;
    ctrl.applyLogoImage = applyLogoImage;
    ctrl.uploadOfflineData = uploadOfflineData;
    ctrl.validationData = validationData;

    // request dashboards
    dashboardData.search().then(processResponse);
    userData.getAllUsers().then(processUserResponse);
    userData.apitokens().then(processTokenResponse);
    userData.getConfiguration().then(processConfiguration);
    userData.getJiraConfiguration().then(processJiraConfiguration);
    userData.getFeatureToggle().then(toggleFeatures);

    function validationData(obj) {

      ctrl.validationSelect.title = obj.name;

      return customDashboardData.fetchWidgetDetails(obj.route)
        .then(function (response) {
          // TODO Amit please confirm this.  Following loop was trowing an error if storyList wasn't in the response
          if (!response.storyList) return;

          ctrl.downloadButtonDisabled = false;

          var dumpObj = [];
          var count = response.storyList.length;
          for (var i = 0; i < count; i++) {
            response.storyList[i].sprintId = response.storyList[i].storySprintDetails[0].sprintId;
            dumpObj.push(response.storyList[i]);
          }
          ctrl.dataList = orderBy(dumpObj, 'sprintId', false);
          return;
        });
    }

    getAggregateProjectSetting();
    dashboardData.getKpiData().then(processkpiSetUpDataResponse, processkpiSetUpDataError);

    // $scope.$watch('$root.logoImage', function () {
    //   if ($rootScope.logoImage) {
    //     ctrl.logoImage = $rootScope.logoImage;
    //   } else {
        applyLogoImage();
    //   }
    // });

    //implementation of logout
    function logout() {
      authService.logout();
      $location.path("/login");
    }

    function login() {
      $location.path("/login")
    }

    // method implementations
    function applyTheme(filename) {
      if (localStorageSupported) {
        localStorage.setItem('theme', filename);
        location.reload();
      }
    }

    function deleteDashboard(id) {
      dashboardData.delete(id).then(function () {
        _.remove(ctrl.dashboards, {
          id: id
        });
      });
    }

    function editDashboard(item) {
      console.log("Edit Dashboard in Admin");

      var mymodalInstance = $uibModal.open({
        templateUrl: 'app/dashboard/views/editDashboard.html',
        controller: 'EditDashboardController',
        controllerAs: 'ctrl',
        resolve: {
          dashboardItem: function () {
            return item;
          }
        }
      });

      mymodalInstance.result.then(function success() {
        dashboardData.search().then(processResponse);
        userData.getAllUsers().then(processUserResponse);
        userData.apitokens().then(processTokenResponse);
      });

    }

    function generateToken() {
      console.log("Generate token in Admin");

      var mymodalInstance = $uibModal.open({
        templateUrl: 'app/dashboard/views/generateApiToken.html',
        controller: 'GenerateApiTokenController',
        controllerAs: 'ctrl',
        resolve: {}
      });

      mymodalInstance.result.then(function (condition) {
        window.location.reload(false);
      });

    }

    function processResponse(data) {
      ctrl.dashboards = [];
      for (var x = 0; x < data.length; x++) {
        ctrl.dashboards.push({
          id: data[x].id,
          name: dashboardService.getDashboardTitle(data[x]),
          type: data[x].type,
          validServiceName: data[x].validServiceName,
          validAppName: data[x].validAppName,
          configurationItemBusServName: data[x].configurationItemBusServName,
          configurationItemBusAppName: data[x].configurationItemBusAppName,
        });
      }
    }

    function processUserResponse(response) {
      ctrl.users = response.data;
    }

    function processTokenResponse(response) {
      ctrl.apitokens = response.data;
    }

    function processConfiguration(response) {

      _.each(response, function (item, key) {
        if (_.isUndefined(ctrl.schema[key]) && key !== 'id') return console.log("item missing from schema: ", key)
      });

      //  Parse objects and arrays into strings
      _.each(ctrl.schema, function (value, key) {
        if (value.type === "object") response[key] = response[key] ? $filter('json')(response[key]) : "{}";
        if (value.type === "array") response[key] = response[key] ? $filter('json')(response[key]) : "[]";
      });

      ctrl.data = response;
    }

    function processJiraConfiguration(response) {

      _.each(response, function (item, key) {
        if (_.isUndefined(ctrl.jiraSchema[key]) && key !== 'id') return console.log("item missing from schema: ", key)
      });

      //  Parse objects and arrays into strings
      _.each(ctrl.jiraSchema, function (value, key) {
        if (value.type === "object") response[key] = response[key] ? $filter('json')(response[key]) : "{}";
        if (value.type === "array") response[key] = response[key] ? $filter('json')(response[key]) : "[]";
      });

      ctrl.jiradata = response;
    }

    ctrl.navigateToTab = function (tab) {
      ctrl.tab = tab;
      ctrl.errorMessage = '';
      ctrl.successMessage = '';
    }

    ctrl.isActiveUser = function (user) {
      if (user.authType === ctrl.authType && user.username === ctrl.username) {
        return true;
      }
      return false;
    }

    ctrl.promoteUserToAdmin = function (user) {
      userData.promoteUserToAdmin(user).then(
        function (response) {
          var index = ctrl.users.indexOf(user);
          ctrl.users[index] = response.data;
        },
        function (error) {
          ctrl.error = error;
        }
      );
    }

    ctrl.demoteUserFromAdmin = function (user) {
      userData.demoteUserFromAdmin(user).then(
        function (response) {
          var index = ctrl.users.indexOf(user);
          ctrl.users[index] = response.data;
        },
        function (error) {
          ctrl.error = error;
        }
      );
    }

    function uploadFile() {
      var file = ctrl.myFile;
      if (file === undefined) {
        return;
      }
      var size = parseFloat(file.size / 1024).toFixed(2)
      if (size > 50) {
        ctrl.errorMessage = 'Please use image below than 50 kb.'
        return;
      }
      var promise = fileUploadService.uploadFileToUrl(file);
      promise.then(function (response) {
        ctrl.errorMessage = ''
        ctrl.successMessage = response.message;
        applyLogoImage();
      }, function (response) {
        ctrl.successMessage = '';
        ctrl.errorMessage = 'An error has occurred';
      })
    };

    function applyLogoImage() {
      dashboardData.getLogoImage().then(processLogoResponse, processLogoError);
    }

    function processLogoResponse(data) {
      ctrl.logoImage = "data:image/png;base64," + data.image;
    }

    function processLogoError(data) {
      ctrl.logoImage = '';
    }

    function saveConfiguration() {

      ctrl.successMessage = null;
      ctrl.errorMessage = null;

      var payload = {
        id: ctrl.data.id
      };

      //  Parse the data and covert any previously stringified objects back to object
      _.each(ctrl.schema, function (value, key) {
        if (value.type === "string" || value.type === "number") return payload[key] = ctrl.data[key] || '';

        try {
          payload[key] = JSON.parse(ctrl.data[key])
        } catch (e) {
          ctrl.errorMessage = "There was an error with field: " + key;
          $window.scrollTo(0, 0);
        }

      });

      // If any errors, don't submit
      if (ctrl.errorMessage) return;

      userData.saveConfiguration(payload)
        .then(function (res) {
          ctrl.successMessage = "Configuration updated";
          $window.scrollTo(0, 0);
          //  Hide/show features in our view
          ctrl.toggleFeatures = payload.featureToggle;
        })
        .catch(function (err) {
          ctrl.errorMessage = "There was an error saving your configuration";
          $window.scrollTo(0, 0);
        })
    }

    function saveJiraConfiguration() {

      ctrl.successMessage = null;
      ctrl.errorMessage = null;

      try {
        var jiraNames = JSON.parse(ctrl.jiradata.jiraProjectNames)
      } catch (e) {
        ctrl.errorMessage = "Please provide a Jira Project name with format [\"ProjectName\"]";
        $window.scrollTo(0, 0);
      }
      if (ctrl.errorMessage) return;


      // Basic validation - will be refactored when the page is refactored
      if (!jiraNames.length || jiraNames[0].length === 0) {
        ctrl.errorMessage = "Please provide a Jira Project name with format [\"ProjectName\"]";
        $window.scrollTo(0, 0);
      }
      if (ctrl.errorMessage) return;

      var payload = {
        id: ctrl.jiradata.id
      };

      //  Parse the data and covert any previously stringified objects back to object
      _.each(ctrl.jiraSchema, function (value, key) {
        if (value.type === "string" || value.type === "number") return payload[key] = ctrl.jiradata[key] || '';

        try {
          payload[key] = JSON.parse(ctrl.jiradata[key])
        } catch (e) {
          ctrl.errorMessage = "There was an error with field: " + key;
          $window.scrollTo(0, 0);
        }

      });

      // If any errors, don't submit
      if (ctrl.errorMessage) return;

      userData.saveJiraConfiguration(payload)
        .then(function (res) {
          ctrl.successMessage = "Configuration updated";
          $window.scrollTo(0, 0);
          //  Hide/show features in our view
          //ctrl.toggleFeatures = payload.featureToggle;
        })
        .catch(function (err) {
          ctrl.errorMessage = "There was an error saving your configuration";
          $window.scrollTo(0, 0);
        })
    }

    function uploadOfflineData() {
      var file = ctrl.myOfflineData;
      ctrl.errorMessage = null
      ctrl.successMessage = null;
      if (file === undefined) {
        return;
      }
      if (file.name != 'ProjectOfflineData.xlsx') {
        ctrl.errorMessage = 'Please upload ProjectOfflineData.xlsx file'
        return;
      }
      var promise = fileUploadService.uploadOfflineData(file);
      promise.then(function (response) {
        ctrl.errorMessage = ''
        ctrl.successMessage = response.message;
      }, function (response) {
        ctrl.successMessage = '';
        ctrl.errorMessage = 'An error has occurred';
      })
    };

    function toggleFeatures(data) {
      ctrl.toggleFeatures = data;
    }

    function getAggregateProjectSetting() {
      dashboardData.getAggregateProjectSetting().then(processAggregateProjectSettingsResponse, processAggregateProjectSettingsError);
    }

    function processAggregateProjectSettingsResponse(data) {
      ctrl.aggregateProjectSettings = [];
      ctrl.aggregateProjectSettings = data;
      _.forEach(_.keys(data), function (key) {
        var obj = data[key];
        _(obj).forEach(function (opt) {
          if (opt.weight && opt.weight !== "") {
            console.log("opt.weight:", opt)
            ctrl.currentSelectedValue = opt.weight;
          }
          if (opt.level == "3" && opt.isSelectedValue) {
            ctrl.selectedLevel3 = opt.nodeName;
          }
          if (opt.level == "4" && opt.isSelectedValue) {
            ctrl.selectedLevel4 = opt.nodeName;
          }
          if (opt.level == "1" && opt.isSelectedValue) {
            $scope.selectedValue1 = {};
            $scope.selectedValue1 = opt;
          }
          if (opt.level == "2" && opt.isSelectedValue) {
            $scope.selectedValue2 = {};
            $scope.selectedValue2 = opt;
          }

        })
      })
    }

    function processAggregateProjectSettingsError(error) {
      ctrl.errorMessage = 'Some error occur please try after some times';
    }

    ctrl.saveAggregateProjectSettings = function () {
      var isSelectedValue = []
      ctrl.aggregateProjectSettings[1].forEach(function (elem, index) {

        if (elem.isSelectedValue === true) {
          isSelectedValue.push(elem);
        }
      });
      ctrl.aggregateProjectSettings[2].forEach(function (elem, index) {

        if (elem.isSelectedValue === true) {
          isSelectedValue.push(elem);
        }
      });
      ctrl.aggregateProjectSettings[3].forEach(function (elem, index) {

        if (elem.isSelectedValue === true) {
          isSelectedValue.push(elem);
        }
      });
      ctrl.aggregateProjectSettings[4].forEach(function (elem, index) {

        if (elem.isSelectedValue === true) {
          isSelectedValue.push(elem);
        }
      });

      ctrl.saveOrgHierarchy.forEach(function (elem, index) {
        isSelectedValue[elem['level'] - 1] = elem;

      });

      dashboardData.saveOrgHierarchy(isSelectedValue).then(processSaveOrgHierarchyResponse, processSaveOrgHierarchyError);
    }

    ctrl.saveKpiSetup = function () {
      dashboardData.saveKpiData(ctrl.kpiList).then(processSaveKpiSetupResponse, processSaveKpiSetupError);
    }

    ctrl.update = function (item) { 
      ctrl.errorMessage = ""; 
      ctrl.successMessage = ""; 
      if (item) { 
        var selectedItem = item instanceof Object ? item : JSON.parse(item); 
        var index = _.findIndex(ctrl.saveOrgHierarchy, function (item) { 
          return item.level == selectedItem.level 
        }) 
        if (index !== -1) { 
          ctrl.saveOrgHierarchy.splice(index, 1); 
        } 
        selectedItem.isSelectedValue = true; 
        ctrl.saveOrgHierarchy.push(selectedItem); 
      } 
    } 

    ctrl.updateAccount = function (level) { 
      _.forEach(_.keys(ctrl.aggregateProjectSettings), function (key) { 
        var obj = ctrl.aggregateProjectSettings[key]; 
        _(obj).forEach(function (opt) { 
          if (opt.level == level) { 
            var weightData = opt; 
            weightData.nodeName = level == 3 ? ctrl.selectedLevel3 : ctrl.selectedLevel4; 
            weightData.weight = level == 3 ? "" : ctrl.currentSelectedValue; 
            ctrl.update(JSON.stringify(opt)) 
          } 
        }) 
      }) 
    } 

    function processSaveOrgHierarchyResponse(data) {
      ctrl.successMessage = "successfully saved!";
      $timeout(function () {
        ctrl.successMessage = "";
      }, 3000);
      getAggregateProjectSetting();
    }

    function processSaveOrgHierarchyError(data) {
      ctrl.errorMessage = 'Some error occur please try after some times';
      $timeout(function () {
        ctrl.errorMessage = "";
      }, 3000);
    }

    function processkpiSetUpDataResponse(data) {
      ctrl.kpiList = data;
    }

    function processkpiSetUpDataError(data) {
      ctrl.errorMessage = 'Some error occur please try after some times';
    }

    function processSaveKpiSetupResponse(data) {
      ctrl.successMessage = 'successfully saved!';
    }

    function processSaveKpiSetupError(data) {
      ctrl.errorMessage = 'Some error occur please try after some times';
    }

  }
})();