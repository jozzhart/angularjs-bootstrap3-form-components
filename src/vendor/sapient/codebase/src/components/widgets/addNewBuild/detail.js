/**
 * Detail controller for the build widget
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('AddNewBuildWidgetDetailController', AddNewBuildWidgetDetailController);

    AddNewBuildWidgetDetailController.$inject = ['$scope', '$uibModalInstance', 'build', 'collectorName', 'collectorNiceName'];
    function AddNewBuildWidgetDetailController($scope, $uibModalInstance, build, collectorName, collectorNiceName) {
        var ctrl = this;

        ctrl.build = build;
        ctrl.collectorName = collectorName;
        ctrl.collectorNiceName = collectorNiceName;

        ctrl.buildUrlNiceName = buildUrlNiceName;
        ctrl.buildPassed = buildPassed;
        ctrl.close = close;

        function buildUrlNiceName() {
            if (!isEmpty(collectorNiceName)) {
                return collectorNiceName;
            } else {
                return collectorName;
            }
        }

        function isEmpty(str) {
            //!str returns true for uninitialized, null and empty strings
            //the test checks if the string only contains whitespaces and returns true.
            return !str || /^[\s]*$/.test(str);
        }

        function buildPassed() {
            return ctrl.build.buildStatus === 'Success';
        }

        function close() {
            $uibModalInstance.dismiss('close');
        }
    }
})();
