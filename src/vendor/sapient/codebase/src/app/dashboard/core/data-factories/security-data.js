/**
 * Gets build related data
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module + '.core')
        .factory('securityData', securityData);

    function securityData($http) {
        var testDetailRoute = 'test-data/build_detail.json';
        var buildDetailRoute = '/api/build/';
        var testsecurityIssuesRoute = 'test-data/build_detail.json';
        var buildsecurityIssuesRoute = '/api/jiraMVP/securityIssues';
        var buildaccessibilityIssuesRoute = '/api/jiraMVP/accessibilityIssues';

        return {
            details: details,
            securityIssues: securityIssues,
            accessibilityIssues: accessibilityIssues
        };

        // search for current builds
        function details(params) {
            return $http.get(HygieiaConfig.local ? testDetailRoute : buildDetailRoute, { params: params })
                .then(function (response) {
                    return response.data;
                });
        }
         function securityIssues(params) {
            return $http.get(HygieiaConfig.local ? testsecurityIssuesRoute : buildsecurityIssuesRoute, { params: params })
                .then(function (response) {
                    return response.data;
                });
        }
        function accessibilityIssues(params) {
            return $http.get(HygieiaConfig.local ? testsecurityIssuesRoute : buildaccessibilityIssuesRoute, { params: params })
                .then(function (response) {
                    return response.data;
                });
        }
    }
})();