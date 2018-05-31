/**
 * Authorization interceptor for adding token to outgoing requests, and handling error responses
*/
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .factory('authInterceptor', authInterceptor);

    authInterceptor.$inject = ['$q', '$location', 'tokenService', 'userService'];
    function authInterceptor($q, $location, tokenService, userService) {
      return {
        response: function(response) {
          if(!($location.path()=='/login' || $location.path()=='/signup')) {
            //  TODO testing refactor
            if(!userService.isAuthenticated() && !HygieiaConfig.local) {
              userService.redirectToLogin();
              // return $q.reject(response);
            }
          }
          return response || $q.when(response);
        },
        responseError: function (response) {
          if (response.status === 401) {
            tokenService.removeToken();
            $location.path('/login');
          }
          return $q.reject(response);
        }
      };
    }
})();