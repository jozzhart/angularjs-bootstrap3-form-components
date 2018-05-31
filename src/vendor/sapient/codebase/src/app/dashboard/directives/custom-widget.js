/**
 * Custom widget directive
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module + '.core')
        .directive('customWidget', customWidgetDirective);

    customWidgetDirective.$inject = ['$http'];

    function customWidgetDirective($http) {
        return {
            templateUrl: 'app/dashboard/views/custom-widget.html',
            restrict: 'E',
            scope: {
                customWidget: '=',
                fetchData: '&',
                chartModalDialog: '=',
                chartModalData: '=',
                onWidgetClick: '&'
            },
            link: link
        };

        function link(scope, element, attrs) {
            var overlayDiv = $('#overlay'),
                textPopup = $('#textPopup');

            if (scope.chartModalDialog) {
                scope.$watch('chartModalData', function () {
                    scope.widgetInfo = scope.chartModalData;
                });
            } else {
                scope.fetchData().then(function (widgetInfo) {
                    scope.widgetInfo = widgetInfo;
                });
            }
            scope.showTooltip = function (event) {
                var sourceOffset = $(event.target).offset();
                overlayDiv.show();
                textPopup.html('<p>' + $(event.target).attr('data-tooltip-text') + '<br /><a target="_blank" href="https://confluence.devops.lloydsbanking.com/display/ENGTRAN/KPI+Definitions">Further details</a></p>');
                textPopup.offset({
                    top: sourceOffset.top,
                    left: sourceOffset.left + 10
                });
            };

            scope.hideTooltip = function (e) {
                var interval = setInterval(function () {
                    if (!textPopup.is(':hover')) {
                        clearInterval(interval)
                        overlayDiv.hide();
                    }
                }, 500);
            };

            scope.widgetInfoClicked = function (widgetType) {
                var modalElement = $('.modal');
                modalElement.modal('show')
                scope.onWidgetClick({
                    widgetType: widgetType
                })
            }
        }
    }
})();