(function () {
    'use strict';

    var app = angular
        .module(HygieiaConfig.module);

    var directives = [
        'buildsSecurityPerDay',
        'averageSecurityBuildDuration',
        'latestSecurityBuilds',
        'totalSecurityBuilds'
    ];

    _(directives).forEach(function (name) {
        app.directive(name, function () {
            return {
                restrict: 'E',
                templateUrl: 'components/widgets/security/directives/' + name + '.html'
            };
        });
    });


})();
