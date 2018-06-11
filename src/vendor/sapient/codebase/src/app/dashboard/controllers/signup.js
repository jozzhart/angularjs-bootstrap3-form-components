/**
 * Controller for performing signup a new user */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('SignupController', SignupController);

    SignupController.$inject = ['$scope','authService', '$location'];
    function SignupController($scope, authService, $location) {
        var signup = this;

        // public variables
        signup.id = '';
        signup.passwd = '';
        signup.templateUrl = "app/dashboard/views/navheader.html";
        signup.userCreated = false;
        signup.isCaptchaRequired = false;

        $scope.closeAlert = function (index) {

            if (signup.userCreated) {
                $location.path("/");
            }
        };

        //public methods
        signup.doSignup = doSignup;
        signup.doLogin = doLogin;

        function doSignup(valid) {
            if (valid) {
            	var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%])(?=.{8,})");
                var isValid = strongRegex.test(document.suf.password.value);
                if(isValid) {
                    if(signup.isCaptchaRequired) {
                        signUpWithCaptcha();
                    }else {
                        processSignUp();
                    }
                   
            	} else {
            		$scope.suf.password.$setValidity('pexists', false);
            	}
            }
        }

        function doLogin() {
            $location.path('/login');
        }

        function processSuccessfulResponse(response) {
        	if(response && response.data == 'success'){
                $location.path('/');
        	} else if(response && response.data == 'username'){
        		$scope.suf.id.$setValidity('exists', false);
                signup.userCreated = false;
        	} else if(response && response.data == 'password'){
        		$scope.suf.password.$setValidity('pexists', false);
            }
        }

        function processFailureResponse(response) {
          $scope.suf.id.$setValidity('exists', false);
          signup.userCreated = false;
        }

        $scope.resetUsernameFieldValidity = function () {
          $scope.suf.id.$setValidity('exists', true);
          $scope.suf.password.$setValidity('pexists', true);
          if($scope.suf.captcha) {
            $scope.suf.captcha.$setValidity('validcaptcha', true);
          }
        }

        $scope.refreshCaptcha = function() {
            getCaptcha();
        }

        function getCaptcha() {
            authService.getCaptcha().then(processCaptchaSuccessfulResponse, processCaptchaFailureResponse);
        }
        function signUpWithCaptcha() {
            authService.isValidCaptcha(signup.captchaResult, signup.captchaText).then(processIsValidCaptchaSuccessfulResponse, processIsValidCaptchaFailureResponse);
        }

        function processCaptchaSuccessfulResponse(response) {
            signup.captchaSource =  "data:image/png;base64,"+ response.data.image;
            signup.captchaResult = response.data.result;
            signup.isCaptchaRequired = response.data.isCaptchaRequired;
        }

        function processCaptchaFailureResponse(response) {
            $scope.suf.captcha.$setValidity('validcaptcha', false);
        }

        function processIsValidCaptchaSuccessfulResponse(response) {
            if(response && response.data) {
                processSignUp();
            }else {
                $scope.suf.captcha.$setValidity('validcaptcha', false);
            }
        }

        function processSignUp() {
            authService.register({username:document.suf.id.value, password:document.suf.password.value, securityQuestion: document.suf.secutiryQuestion.value })
            .then(processSuccessfulResponse, processFailureResponse);
        }

        function processIsValidCaptchaFailureResponse(response) {
            $scope.suf.captcha.$setValidity('validcaptcha', false);
        }
        (function(){
            getCaptcha();
        })();
    }
})();
