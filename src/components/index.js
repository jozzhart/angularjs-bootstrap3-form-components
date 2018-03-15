let componentsModule = angular.module('app.components', []);

import BasicComponent from './basic/basic.component'
componentsModule.component('spdyBasic', BasicComponent);

import InputTextComponent from './form/input-text/input-text.component'
componentsModule.component('spdyInputText', InputTextComponent);

import InputNumberComponent from './form/input-number/input-number.component'
componentsModule.component('spdyInputNumber', InputNumberComponent);

import InputTextareaComponent from './form/input-textarea/input-textarea.component'
componentsModule.component('spdyInputTextarea', InputTextareaComponent);

export default componentsModule;