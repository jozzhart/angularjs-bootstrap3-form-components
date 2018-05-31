(function () {
    'use strict';

    var app = angular
        .module(HygieiaConfig.module);

    var directives = [
        'buildsAccessibilityPerDay',
        'averageAccessibilityBuildDuration',
        'latestAccessibilityBuilds',
        'totalAccessibilityBuilds'
    ];

    _(directives).forEach(function (name) {
        app.directive(name, function () {
            return {
                restrict: 'E',
                templateUrl: 'components/widgets/accessibility/directives/' + name + '.html'
            };
        });
    });


})();
