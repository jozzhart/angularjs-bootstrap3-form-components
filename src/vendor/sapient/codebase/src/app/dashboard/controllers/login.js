/**
 * Controller for performing authentication or signingup a new user */
(function () {
    'use strict';
    var app = angular.module(HygieiaConfig.module)
    var inject = ['$location', '$scope', 'authService', 'userService', 'loginRedirectService', 'dashboardData']
    function LoginController($location, $scope, authService, userService, loginRedirectService, dashboardData) {
        if (userService.isAuthenticated()) {
            $location.path('/');
            return;
        }
        var login = this;
        login.templateUrl = 'app/dashboard/views/navheader.html';
        login.invalidUsernamePassword = false;

        dashboardData.getMatchVersions()
        .then(function(data){
          $scope.version = data.versionDetailsMap;
        })
        

        authService.getAuthenticationProviders().then(function(response) {
          $scope.authenticationProviders = response.data;
          $scope.activeTab = response.data[0];
        });

        $scope.isStandardLogin = function () {
          return $scope.activeTab === "STANDARD";
        }

        $scope.isLdapLogin = function () {
          return $scope.activeTab === "LDAP";
        }

        $scope.isCrowdSsoLogin = function() {
            return $scope.activeTab === "CROWDSSO";
        }

        $scope.showStandard = function () {
          $scope.activeTab = "STANDARD";
        }

        $scope.showLdap = function () {
          $scope.activeTab = "LDAP";
        }

        $scope.showCrowdSso = function () {
          $scope.activeTab = "CROWDSSO";
        }

        var signup = function () {
            $location.path('/signup');
        };

        $scope.standardLogin = { name: 'Speedy Login', login: authService.login, signup: signup };
        $scope.ldapLogin = { name: 'Speedy Login', login: authService.loginLdap };
        $scope.crowdSsoLogin = { name: 'Speedy Login', login: authService.loginCrowdSso };

    }
    app.controller('LoginController', inject.concat([LoginController]));
})();
