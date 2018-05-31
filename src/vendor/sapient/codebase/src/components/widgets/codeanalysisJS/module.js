(function () {
    'use strict';

    var widget_state,
        config = {
            view: {
                defaults: {
                    title: 'Quality' // widget title
                },
                controller: 'CodeAnalysisJSViewController',
                controllerAs: 'caWidget',
                templateUrl: 'components/widgets/codeanalysisJS/view.html'
            },
            config: {
                controller: 'CodeAnalysisJSConfigController',
                controllerAs: 'caWidget',
                templateUrl: 'components/widgets/codeanalysisJS/config.html'
            },
            getState: getState,
            collectors: ['codequality']
        };

    angular
        .module(HygieiaConfig.module)
        .config(register);

    register.$inject = ['widgetManagerProvider', 'WidgetState'];
    function register(widgetManagerProvider, WidgetState) {
        widget_state = WidgetState;
        widgetManagerProvider.register('codeanalysisJS', config);
    }

    function getState(widgetConfig) {
        // make sure config values are set
        return HygieiaConfig.local || (widgetConfig.id) ? widget_state.READY : widget_state.CONFIGURE;
    }
})();
