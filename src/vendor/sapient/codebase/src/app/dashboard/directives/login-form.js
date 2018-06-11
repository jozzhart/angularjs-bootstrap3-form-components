(function () {
  'use strict';

  angular
    .module(HygieiaConfig.module + '.core')
    .directive('loginForm', loginForm);

  function loginForm() {
    return {
      restrict: 'E',
      scope: {
        authType: '='
      },
      templateUrl: 'app/dashboard/views/login-form.html',
      controller: ['$scope', '$location', '$uibModal', 'authService', 'loginRedirectService', function loginFormController($scope, $location, $uibModal, authService, loginRedirectService) {
        $scope.isCaptchaRequired = false;
        $scope.login = function () {
          $scope.lg.username.$setValidity('invalidUsernamePassword', true);
          var valid = $scope.lg.$valid;
          if (valid) {
            if ($scope.isCaptchaRequired) {
              processLoginWithCaptcha();
            } else {
              processLogin();
            }
          }
        }

        $scope.refreshCaptcha = function () {
          getCaptcha();
        }
        $scope.resetFieldValidity = function () {
          $scope.lg.captcha.$setValidity('validcaptcha', true);
        }

        $scope.resetCredentials = {};

        $scope.submitReset = function (form, isUpdate) {

          $scope.resetError = null;

          if (form.$valid) {
            if (isUpdate) {
              authService.setSecurityQuestion({
                  username: $scope.lg.username.$modelValue,
                  securityQuestion: $scope.resetCredentials.securityQuestion
                })
                .then(function (response) {
                  $scope.resetModal.close();
                  $scope.resetCredentials = {};
                  $location.path(loginRedirectService.getRedirectPath());
                })
                .catch(function (err) {
                  $scope.resetError = err.statusText;
                })
            } else {
              authService.resetPassword($scope.resetCredentials)
                .then(function (response) {
                  if (response.data === "User Does not Exist" || response.data === "Security answer does not match" 
                	  		|| response.data === "Password you have entered does not match the password requirements.") {
                    $scope.resetError = response.data;
                  } else {
                    //  Message success
                    $scope.resetSuccess = "Password successfully reset.";
                    $scope.resetCredentials = {};
                    $scope.resetModal.close();
                  }
                })
                .catch(function (err) {
                  $scope.resetError = err.statusText;
                })
            }
          }
        }


        $scope.securityQuestionModal = function (updateSecurityQuestion) {
          $scope.resetModal = $uibModal.open({
            templateUrl: 'app/dashboard/views/secretQuestion.html',
            scope: $scope,
            controller: function ($scope, $uibModalInstance) {
              $scope.title = updateSecurityQuestion ? 'Update security question' : 'Reset Password';
              $scope.updateSecurityQuestion = updateSecurityQuestion;
            }
          })

          $scope.resetModal.result
          .then(function (selectedItem) {})
          .catch(function () {
            $scope.resetError = null;
            $scope.resetCredentials = {};
          });
        }


        function getCaptcha() {
          authService.getCaptcha().then(processCaptchaSuccessfulResponse, processCaptchaFailureResponse);
        }

        function processLoginWithCaptcha() {
          authService.isValidCaptcha($scope.captchaResult, $scope.lg.captcha.$modelValue).then(processIsValidCaptchaSuccessfulResponse, processIsValidCaptchaFailureResponse);
        }

        function processCaptchaSuccessfulResponse(response) {
          $scope.captchaSource = "data:image/png;base64," + response.data.image;
          $scope.captchaResult = response.data.result;
          $scope.isCaptchaRequired = response.data.isCaptchaRequired;
        }

        function processCaptchaFailureResponse(response) {
          if ($scope.lg.captcha) $scope.lg.captcha.$setValidity('validcaptcha', false);
        }

        function processIsValidCaptchaSuccessfulResponse(response) {
          if (response && response.data) {
            processLogin();
          } else {
            $scope.lg.captcha.$setValidity('validcaptcha', false);
          }
        }

        function processLogin() {
          var auth = {
            'username': $scope.lg.username.$modelValue,
            'password': $scope.lg.password.$modelValue
          };
          $scope.authType.login(auth)
            .then(function (response) {
              localStorage.removeItem('instance_owner');
              localStorage.removeItem('user_name');
              localStorage.setItem('user_name', response.data.user_name);
              localStorage.setItem('instance_owner', response.data.instance_owner);

              if (response.status == 200) {
                $scope.instance_owner = response.data.instance_owner;
                $scope.project_name = response.data.project_name;
                $scope.account_name = response.data.account_name;
                $scope.analyticsConfigDescPath = response.data.analyticsConfigDescPath;

                if (response.data.securityQuestion === "true") $scope.securityQuestionModal(true);
                if (response.data.securityQuestion === "false") $location.path(loginRedirectService.getRedirectPath());

                //Google Analytics Code
                console.log("Login success:", "Google Analytics");
                dataLayer.push({
                  instance_owner: localStorage.getItem('instance_owner') === "" ? "" : CryptoJS.SHA256(localStorage.getItem('instance_owner')).toString(),
                  project_name: response.data.project_name,
                  account_name: response.data.account_name,
                  platform: "Speedy",
                  event: 'Login',
                  eventCategory: 'Login',
                  eventAction: 'Login Button Clicks',
                  eventLabel: "Success",
                  user_id: response.data.user_name === "" ? "" : CryptoJS.SHA256(response.data.user_name).toString()
                })
              } else if (response.status == 401) {
                $scope.lg.username.$setValidity('invalidUsernamePassword', false);
              }
            });
        }

        function processIsValidCaptchaFailureResponse(response) {
          $scope.lg.captcha.$setValidity('validcaptcha', false);
        }
        (function () {
          getCaptcha();
        })();
      }]
    };
  }
})();