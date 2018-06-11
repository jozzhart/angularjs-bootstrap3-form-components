/**
 * Gets build related data
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module + '.core')
        .factory('loginData', loginData);

    function loginData($http) {
        var testDetailRoute = 'test-data/login_detail.json';
        var LoginDetailRoute = '/api/login';
        var LdapLoginDetailRoute = '/api/login/ldap';
        var CrowdSsoLoginDetailRoute = '/api/login/crowdsso';
        var authenticationProvidersRoute = '/api/authenticationProviders';
        var resetPasswordRoute = '/api/resetPassword';
        var setSecurityQuestionRoute = '/api/setSecurityQuestion';

        return {
            login: login,
            loginLdap: loginLdap,
            loginCrowdSso: loginCrowdSso,
            getAuthenticationProviders: getAuthenticationProviders,
            resetPassword: resetPassword,
            setSecurityQuestion: setSecurityQuestion
        };


        // reusable helper
        function getPromise(id,passwd,route) {
          var postData={
              'id': id,
              'passwd': passwd
            };
            return $http.get(route).then(function (response) {
                return response.data;
            });
        }

      function login(id, password) {
        return callLogin(LoginDetailRoute, id, password);
      }

      function loginLdap(id, password) {
        return callLogin(LdapLoginDetailRoute, id, password);
      }

      function loginCrowdSso(id, password) {
        return callLogin(CrowdSsoLoginDetailRoute, id, password);
      }   

      function setSecurityQuestion(credentials) {
        return $http.post(setSecurityQuestionRoute, credentials)
      }
      
      function resetPassword(credentials) {

        return $http.post(resetPasswordRoute, credentials)

        // return $http({
        //   method: 'POST',
        //   url: resetPasswordRoute,
        //   headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        //   data: {
        //     'username': id,
        //     'password': password,
        //     securityQuestion: securityQuestion
        //   },
        //   transformRequest: function(data) {
        //       var str = [];
        //       for(var p in data)
        //       str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
        //       return str.join("&");
        //   }
        // }).then(function(response) {
        //   return response;
        // },
        //   function(response) {
        //     return response;
        // })
      }


      function callLogin(route, id, passwd){
        var postData={
    				'username': id,
    				'password': passwd
    			};
          if(HygieiaConfig.local)
          {
            return getPromise(id,passwd,testDetailRoute);
          }
          else
          {

        return $http({
          method: 'POST',
          url: route,
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          data: postData,
          transformRequest: function(data) {
              var str = [];
              for(var p in data)
              str.push(encodeURIComponent(p) + "=" + encodeURIComponent(data[p]));
              return str.join("&");
          }
        }).then(function(response) {
          return response;
        },
          function(response) {
            return response;
        })
      }
    }

    function getAuthenticationProviders() {
      return $http({
      	  method: 'GET',
      	  url: authenticationProvidersRoute
      	});
    }

  }
})();
