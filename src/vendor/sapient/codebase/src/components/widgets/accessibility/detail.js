/**
 * Detail controller for the build widget
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('AccessibilityWidgetDetailController', AccessibilityWidgetDetailController);

    AccessibilityWidgetDetailController.$inject = ['$scope', '$uibModalInstance', 'accessibility', 'collectorName', 'collectorNiceName'];
    function AccessibilityWidgetDetailController($scope, $uibModalInstance, accessibility, collectorName, collectorNiceName) {
        var ctrl = this;

        ctrl.accessibility = accessibility;
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
            return ctrl.accessibility.buildStatus === 'Success';
        }

        function close() {
            $uibModalInstance.dismiss('close');
        }
    }
})();
