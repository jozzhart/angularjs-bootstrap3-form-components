let componentsModule = angular.module('app.components', [])

import BasicComponent from './dumb/basic/basic.component'
componentsModule.component('spdyBasic', BasicComponent);

import InputTextComponent from './dumb/form/input-text/input-text.component'
componentsModule.component('spdyInputText', InputTextComponent);

import InputNumberComponent from './dumb/form/input-number/input-number.component'
componentsModule.component('spdyInputNumber', InputNumberComponent);

import InputTextareaComponent from './dumb/form/input-textarea/input-textarea.component'
componentsModule.component('spdyInputTextarea', InputTextareaComponent);

import NavComponent from './dumb/nav/nav.component'
componentsModule.component('spdyNav', NavComponent);

import StatusComponent from './smart/status'
componentsModule.component('spdyStatus', StatusComponent);

import TeamDashboardComponent from './smart/team-dashboard'
componentsModule.component('spdyTeamDashboard', TeamDashboardComponent);

// import CustomWidgetComponent from './sapient/custom-widget.component'
// componentsModule.component('customWidget', CustomWidgetComponent);

export default componentsModule;