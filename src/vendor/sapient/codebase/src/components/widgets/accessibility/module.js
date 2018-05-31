(function () {
    'use strict';

    var widget_state,
        config = {
            view: {
                defaults: {
                    title: 'Accessibility' // widget title
                },
                controller: 'AccessibilityWidgetViewController',
                controllerAs: 'buildAccessibilityView',
                templateUrl: 'components/widgets/accessibility/view.html'
            },
            config: {
                controller: 'AccessibilityWidgetConfigController',
                controllerAs: 'buildAccessibilityConfig',
                templateUrl: 'components/widgets/accessibility/config.html'
            },
            getState: getState,
            collectors: ['accessibility']
        };

    angular
        .module(HygieiaConfig.module)
        .config(register);

    register.$inject = ['widgetManagerProvider', 'WidgetState'];
    function register(widgetManagerProvider, WidgetState) {
        widget_state = WidgetState;
        widgetManagerProvider.register('accessibility', config);
    }

    function getState(config) {
        // make sure config values are set
        return HygieiaConfig.local || (config.id && config.options.buildDurationThreshold && config.options.consecutiveFailureThreshold) ?
            widget_state.READY :
            widget_state.CONFIGURE;
    }
})();
