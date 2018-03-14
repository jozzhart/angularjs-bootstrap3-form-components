let componentsModule = angular.module('app.components', []);

import BasicComponent from './basic/basic.component'
componentsModule.component('spdyBasic', BasicComponent);

export default componentsModule;