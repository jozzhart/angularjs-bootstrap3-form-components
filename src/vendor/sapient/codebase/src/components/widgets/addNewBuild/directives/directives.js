(function () {
    'use strict';

    var app = angular
        .module(HygieiaConfig.module);

    var directives = [
        'addNewBuildsPerDay',
        'addNewAverageBuildDuration',
        'addNewLatestBuilds',
        'addNewTotalBuilds'
    ];

    _(directives).forEach(function (name) {
        app.directive(name, function () {
            return {
                restrict: 'E',
                templateUrl: 'components/widgets/addNewBuild/directives/' + name + '.html'
            };
        });
    });


})();
