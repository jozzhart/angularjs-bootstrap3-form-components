(function () {
    'use strict';

    var widget_state,
        config = {
            view: {
                defaults: {
                    title: 'Security' // widget title
                },
                controller: 'SecurityWidgetViewController',
                controllerAs: 'buildSecurityView',
                templateUrl: 'components/widgets/security/view.html'
            },
            config: {
                controller: 'SecurityWidgetConfigController',
                controllerAs: 'buildSecurityConfig',
                templateUrl: 'components/widgets/security/config.html'
            },
            getState: getState,
            collectors: ['security']
        };

    angular
        .module(HygieiaConfig.module)
        .config(register);

    register.$inject = ['widgetManagerProvider', 'WidgetState'];
    function register(widgetManagerProvider, WidgetState) {
        widget_state = WidgetState;
        widgetManagerProvider.register('security', config);
    }

    function getState(config) {
        // make sure config values are set
        return HygieiaConfig.local || (config.id && config.options.buildDurationThreshold && config.options.consecutiveFailureThreshold) ?
            widget_state.READY :
            widget_state.CONFIGURE;
    }
})();
