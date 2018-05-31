(function () {
    'use strict';

    var widget_state,
        config = {
            view: {
                defaults: {
                    title: 'AddNewBuild' // widget title
                },
                controller: 'AddNewBuildWidgetViewController',
                controllerAs: 'addNewBuildView',
                templateUrl: 'components/widgets/addNewBuild/view.html'
            },
            config: {
                controller: 'AddNewBuildWidgetConfigController',
                controllerAs: 'addNewBuildConfig',
                templateUrl: 'components/widgets/addNewBuild/config.html'
            },
            getState: getState,
            collectors: ['addNewBuild']
        };

    angular
        .module(HygieiaConfig.module)
        .config(register);

    register.$inject = ['widgetManagerProvider', 'WidgetState'];
    function register(widgetManagerProvider, WidgetState) {
        widget_state = WidgetState;
        widgetManagerProvider.register('addNewBuild', config);
    }

    function getState(config) {
        // make sure config values are set
        return HygieiaConfig.local || (config.id && config.options.buildDurationThreshold && config.options.consecutiveFailureThreshold) ?
            widget_state.READY :
            widget_state.CONFIGURE;
    }
})();
