/**
 * Gets code quality related data
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module + '.core')
        .factory('codeAnalysisData', codeAnalysisData);

    function codeAnalysisData($http) {
        var testStaticDetailRoute = 'test-data/ca_detail.json';
        var testSecDetailRoute = 'test-data/ca-security.json';
        var testLeakageInfoRoute = '/test-data/ca-leakageinfo.json';
        var caStaticDetailsRoute = '/api/quality/static-analysis';
        var caSecDetailsRoute = '/api/quality/security-analysis';
        var caLeakageInfoRoute = '/api/jiraMVP/leakageInfo';
        var caDefectRejectionRoute = '/api/jiraMVP/defectRejectionRate';
        var defectFixRateRoute = '/api/jira/defect-fix-rate';
        var automationPercentageRoute = 'api/kanoah/automationPercentage';
        var regressionPassPercentageRoute = '/api/kanoah/regressionPassPercentage';
        var reviewCoverageRoute = '/api/ed/pullrequests';

        return {
            staticDetails: staticDetails,
            securityDetails: securityDetails,
            leakageInfoDetails:leakageInfoDetails,
            defectRejectionRateDetails: defectRejectionRateDetails,
            fetchDefectFixRateDetails : fetchDefectFixRateDetails,
            fetchAutomationPercentageDetails: fetchAutomationPercentageDetails,
	        fetchRegressionPassPercentageDetails: fetchRegressionPassPercentageDetails,
            fetchReviewCoverageDetails: fetchReviewCoverageDetails
        };

        // get the latest code quality data for the component
        function staticDetails(params) {
            return $http.get(HygieiaConfig.local ? testStaticDetailRoute : caStaticDetailsRoute, { params: params })
                .then(function (response) { return response.data; });
        }

        function securityDetails(params) {
            return $http.get(HygieiaConfig.local ? testSecDetailRoute : caSecDetailsRoute, { params: params })
                .then(function (response) { return response.data; });
        }
        function leakageInfoDetails(params) {
            return $http.get(HygieiaConfig.local ? testLeakageInfoRoute : caLeakageInfoRoute, { params: params })
                .then(function (response) { return response.data; });
        }
        function defectRejectionRateDetails(params) {
            return $http.get(HygieiaConfig.local ? testLeakageInfoRoute : caDefectRejectionRoute, { params: params })
                .then(function (response) { return response.data; });
        
        } 
        function fetchDefectFixRateDetails(params){
        	return $http
        	.get(defectFixRateRoute,{ params: params })
        	.then(function (response) {
                return response.data;
            });
        }
        function fetchAutomationPercentageDetails(params){
        	return $http
        	.get(automationPercentageRoute,{ params: params })
        	.then(function (response) {
                return response.data;
            });
        }
		function fetchRegressionPassPercentageDetails(params){
            return $http
            .get(regressionPassPercentageRoute,{ params: params })
            .then(function (response) {
                return response.data;
            });
        }
        function fetchReviewCoverageDetails(params){
        	return $http
        	.get(reviewCoverageRoute,{ params: params })
        	.then(function (response) {
                return response.data;
            });
        }
       

    }
})();
