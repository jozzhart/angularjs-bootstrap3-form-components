/**
 * Service to handle all authorization operations
*/
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .service('authService', authService);

    authService.$inject = ['$http', 'signupData', 'loginData', 'tokenService'];
    function authService($http, signupData, loginData, tokenService) {

        var processResponse = function (response) {
          tokenService.setToken(response.headers()['x-authentication-token']);
          return response;
        }

        this.register = function (credentials) {
          return signupData.signup(credentials.username, credentials.password,credentials.securityQuestion).then(processResponse)
        }

        this.login = function (credentials) {
          return loginData.login(credentials.username, credentials.password).then(processResponse)
        }

        this.loginLdap = function (credentials) {
          return loginData.loginLdap(credentials.username, credentials.password).then(processResponse)
        }

        this.loginCrowdSso = function (credentials) {
          return loginData.loginCrowdSso(credentials.username, credentials.password).then(processResponse)
        }

        this.resetPassword = function (credentials) {
          return loginData.resetPassword(credentials)
        }

        this.setSecurityQuestion = function (credentials) {
          return loginData.setSecurityQuestion(credentials)
        }
        
        this.logout = function () {
          $http.get('/api/userlogout').then(function(response){
            tokenService.removeToken();
          })
        }

        this.getAuthenticationProviders = function () {
          return loginData.getAuthenticationProviders();
        }
        
        this.tokens = function () {
          tokenService.tokens();
        }

        this.getCaptcha = function () {
          return $http.get('/api/login/captcha').then(function(response){
            return response;
          })
        }

        this.isValidCaptcha = function (captchaResult, capthaText) {
          var captchaRoute = '/api/login/captchavalidate';
          var postData = {
            encryptedString : captchaResult,
            result : capthaText
          }
          return $http.post(captchaRoute, postData)
          .success(function (response) {
              return response.data;
          })
          .error(function (response) {
              return null;
          });
     }
    }
})();
