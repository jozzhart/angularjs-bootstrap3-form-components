/**
 * Service to handle all user operations
*/
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .service('fileUploadService', fileUploadService);

    fileUploadService.$inject = ['$http', '$q'];
    function fileUploadService($http, $q) {
      this.uploadFileToUrl = function (file) {
        var fileFormData = new FormData();
        fileFormData.append('file', file);
        
        var uploadUrl = "api/file/upload"; //Url of webservice/api/server
        var deffered = $q.defer();
        $http.post(uploadUrl, fileFormData, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}

        }).success(function (response) {
            deffered.resolve(response);

        }).error(function (response) {
            deffered.reject(response);
        });

        return deffered.promise;
    }
      this.uploadOfflineData = function(file) {
			var fileFormData = new FormData();
			fileFormData.append('file', file);

			var uploadUrl = "api/excel/uploadOfflineData"; // Url of webservice/api/server
			var deffered = $q.defer();
			$http.post(uploadUrl, fileFormData, {
				transformRequest : angular.identity,
				headers : {
					'Content-Type' : undefined
				}

			}).success(function(response) {
				deffered.resolve(response);

			}).error(function(response) {
				deffered.reject(response);
			});

			return deffered.promise;

		}
    }
})();
