/**
 * Standard trash icon for various widgets
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module + '.core')
        .directive('uploadImage', ['$parse', function($parse) {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    var model = $parse(attrs.uploadImage),
                        modelSetter = model.assign; 
                    element.bind('change', function () {
                        scope.$apply(function () {                            
                            modelSetter(scope, element[0].files[0]);
                        });
                    });
                }
            };
        }]);
})();