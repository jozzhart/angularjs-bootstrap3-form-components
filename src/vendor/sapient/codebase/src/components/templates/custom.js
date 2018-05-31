/**
 * Controller for the dashboard route.
 * Render proper template.
 */

(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module + '.core')
        .controller('CustomTemplateController', CustomTemplateController);

    CustomTemplateController.$inject = ['$scope','$rootScope','$http', '$q', 'customDashboardData', 'dashboardData'];
    function CustomTemplateController($scope, $rootScope, $http, $q, customDashboardData, dashboardData ) {
        var ctrl = this,
            widgetHoverText;            
  
        customDashboardData.fetchHelpers().then(function(response) {
            ctrl.resourceHelpers = response;
        });
       
        var pageLoad = function() {
                ctrl.showRadar = false;
                ctrl.startDate = '';
                ctrl.endDate = '' ;
                fetchProjectDetails();
                widgetHoverText = customDashboardData.fetchWidgetHoverText();
            },

            fetchProjectDetails = function() {
                customDashboardData.fetchProjectDetails().then(function(response) {
                    ctrl.projectDetails = response;
                });
            };

            ctrl.chartModalDialog= function (selectedChart) {
                ctrl.selectedChart= selectedChart;
                ctrl.chartdata = {};
                ctrl.startDate = '';
                ctrl.endDate = '';
                ctrl.isCalendarOpen = false;
                ctrl.isTrendOverDropdownActive = false;
                switch (selectedChart) {
                    case 'NoOfCheckins':
                        var noOfCheckinsOptions = {
                            maintainAspectRatio: false,
                            tooltips: {
                                enabled: false
                            },
                            scales: {
                            yAxes: [
                                {
                                id: 'y-axis',
                                type: 'linear',
                                display: true,
                                position: 'left',
                                ticks: {
                                    fontSize: 10
                                }
                                }
                            ],
                            xAxes: [
                                {
                                id: 'x-axis',
                                display: true,
                                ticks: {
                                    fontSize: 10
                                },
                                gridLines: {
                                    display: false
                                }
                                }
                            ]
                            }
                        };
                        ctrl.chartdata = _.assign({}, ctrl.noOfCheckins);
                        if(ctrl.chartdata.data) {
                            ctrl.chartdata['data']['dialogoptions'] = noOfCheckinsOptions;
                        }
                        break;
                    case 'FlowEfficiency':
                        ctrl.isCalendarOpen = false;
                        var flowEfficiencyOptions = {
                            maintainAspectRatio: false,
                            tooltips: {
                                enabled: false
                            },
                            scales: {
                            yAxes: [
                                {
                                id: 'y-axis',
                                type: 'linear',
                                display: true,
                                position: 'left',
                                ticks: {
                                    fontSize: 10
                                }
                                }
                            ],
                            xAxes: [
                                {
                                id: 'x-axis',
                                display: true,
                                ticks: {
                                    fontSize: 10
                                },
                                gridLines: {
                                    display: false
                                }
                                }
                            ]
                            }
                        }
                        ctrl.chartdata = _.assign({}, ctrl.flowEfficiency);
                        if(ctrl.chartdata.data) {
                            ctrl.chartdata['data']['dialogoptions'] = flowEfficiencyOptions;
                        }
                    break;

                    case 'CfdData':
                        ctrl.isCalendarOpen = false;
                        var cfdDataOptions = {
                            responsive: true,
                            maintainAspectRatio: false,
                            tooltips: {
                                enabled: false
                            },
                            scales: {
                                yAxes: [{
                                    stacked: true,
                                    ticks  : {
                                        beginAtZero: true,
                                        fontSize: 10
                                    }
                                }],
                                xAxes: [{
                                    stacked: true,
                                    ticks  : {
                                        beginAtZero: true,
                                        fontSize: 10
                                    }
                                }]
                            },
                            fontSize: 20,
                            legend: {
                                display: true,
                                position: 'bottom',
                                labels: {
                                    boxWidth: 10,
                                    fontSize: 14
                                }
                            }
                        };
                        ctrl.chartdata = _.assign({}, ctrl.cfdData);
                        if(ctrl.chartdata.data) {
                            ctrl.chartdata['data']['dialogoptions'] = cfdDataOptions;
                        }
                    break;

                    case 'AppDemonstration':
                        ctrl.isCalendarOpen = false;
                        var appDemonstrationOptions = {
                            maintainAspectRatio: false,
                            tooltips: {
                                enabled: false
                            },
                            scales: {
                            yAxes: [
                                {
                                id: 'y-axis',
                                type: 'linear',
                                display: true,
                                position: 'left',
                                ticks: {
                                    beginAtZero: true,
                                    fontSize: 10,
                                    fixedStepSize: 1
                                }
                                }
                            ],
                            xAxes: [
                                {
                                id: 'x-axis',
                                display: true,
                                ticks: {
                                    fontSize: 12
                                },
                                gridLines: {
                                    display: false
                                }
                                }
                            ]
                            }
                        };
                        ctrl.chartdata = _.assign({}, ctrl.appDemonstration);
                        if(ctrl.chartdata['data']) {
                            ctrl.chartdata['data']['dialogoptions'] = appDemonstrationOptions;
                        }                        
                        break;
                    default:
                        break;
                }
            };

            ctrl.applyTrendOverDates = function(selectedDates) {
                ctrl.chartdata = {};
                ctrl.startDate = selectedDates && selectedDates.startDate || '' ;
                ctrl.endDate = selectedDates && selectedDates.endDate || '';
                ctrl.selectedFromSprintList = '';
                ctrl.selectedToSprintList = '';
                switch (ctrl.selectedChart) {
                    case 'autoPercentage':
                        ctrl.fetchTrendOverAutoVsManualTest();
                        break; 
                    case 'functionalTestExecutionTime':
                        ctrl.fetchTrendOverFunctionalTestExecutionTime();
                        break;
                    case 'codeBuildTime':
                        ctrl.fetchTrendOverCodeBuildTime();
                        break;
                    case 'timeToFixBrokenBuild':
                        ctrl.fetchTrendOverTimeToFixedBroken();
                        break;
                    case 'backEndJUnit':
                        ctrl.fetchTrendOverBackEndJUnit();
                        break;
                    case 'frontEndJSUnit':
                        ctrl.fetchTrendOverFrontEndJUnit();
                        break;
                    case 'sprintPredictability':
                        ctrl.fetchAllSprintList();
                        ctrl.fetchTrendOverSprintPredictability();
                        break;
                    case 'commitmentReliability':
                        ctrl.fetchAllSprintList();
                        ctrl.fetchTrendOverCommitmentReliability();
                        break;
                    case 'storyLeadTime':
                        ctrl.fetchAllSprintListWithoutStatus();
                        ctrl.fetchTrendOverStoryLeadTime();
                        break;
                    case 'storyLiveLeadTime':
                        ctrl.fetchAllSprintListWithoutStatus();
                        ctrl.fetchTrendOverStoryLiveLeadTime();
                        break;
                    default:
                        ctrl.isTrendOverDropdownActive = false;
                        ctrl.isCalendarOpen = false;
                        break;
                }
            }

            ctrl.trendOverChartModal = function() {
                ctrl.chartdata = {};
                ctrl.isTrendOverDropdownActive = false;
                switch (ctrl.selectedChart) {
                    case 'autoPercentage':
                        ctrl.chartdata = _.assign({}, ctrl.trendOverAutoVsManualTest);
                        if(ctrl.chartdata['data']) {
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                        }
                        ctrl.startDate = ctrl.chartdata.startDate || '';
                        ctrl.endDate = ctrl.chartdata.endDate || '';
                        ctrl.isCalendarOpen = true;
                        break;
                    case 'functionalTestExecutionTime':
                        ctrl.chartdata = _.assign({}, ctrl.trendOverFunctionalTestExecutionTime);
                        if(ctrl.chartdata['data']) {
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                         }
                        ctrl.startDate = ctrl.chartdata.startDate || '';
                        ctrl.endDate = ctrl.chartdata.endDate || '';
                        ctrl.isCalendarOpen = true;
                        break;
                    case 'codeBuildTime':
                        ctrl.chartdata = _.assign({}, ctrl.trendOverCodeBuildTime);
                        if(ctrl.chartdata['data']) {
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                         }
                        ctrl.startDate = ctrl.chartdata.startDate || '';
                        ctrl.endDate = ctrl.chartdata.endDate || '';
                        ctrl.isCalendarOpen = true;
                        break;
                    case 'timeToFixBrokenBuild':
                        ctrl.chartdata = _.assign({}, ctrl.trendOverTimeToFixedBrokenBuild);
                        if(ctrl.chartdata['data']) {
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                         }
                        ctrl.startDate = ctrl.chartdata.startDate || '';
                        ctrl.endDate = ctrl.chartdata.endDate || '';
                        ctrl.isCalendarOpen = true;
                        break;
                    case 'codeQuality':
                        ctrl.chartdata = _.assign({}, ctrl.trendOverCodeQuality);
                        if(ctrl.chartdata['data']) {
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                        }
                        ctrl.startDate = ctrl.chartdata.startDate || '';
                        ctrl.endDate = ctrl.chartdata.endDate || '';
                        ctrl.isCalendarOpen = true;
                        break;  
                    case 'backEndJUnit':
                        ctrl.chartdata = _.assign({}, ctrl.trendOverBackEndJUnit);
                        if(ctrl.chartdata['data']) {
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                        }
                        ctrl.startDate = ctrl.chartdata.startDate || '';
                        ctrl.endDate = ctrl.chartdata.endDate || '';
                        ctrl.isCalendarOpen = true;
                        break;
                    case 'frontEndJSUnit':
                        ctrl.chartdata = _.assign({}, ctrl.trendOverFrontEndJUnit);
                        if(ctrl.chartdata['data']) {
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                        }
                        ctrl.startDate = ctrl.chartdata.startDate || '';
                        ctrl.endDate = ctrl.chartdata.endDate || '';
                        ctrl.isCalendarOpen = true;
                        break;
                    case 'sprintPredictability':
                        ctrl.isCalendarOpen = false;
                        ctrl.isTrendOverDropdownActive = true;
                        ctrl.chartdata = _.assign({}, ctrl.trendOverSprintPredictability);
                        if(ctrl.chartdata['data']) {
                            ctrl.isApplyTrendOverActive =  false;
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                        }
                        if(ctrl.chartdata.fromSprint && ctrl.chartdata.toSprint) {
                            ctrl.setFromToSplitList(ctrl.chartdata.fromSprint, ctrl.chartdata.toSprint)
                        }
                        ctrl.tooltipText = ctrl.chartdata.tooltipText;
                        ctrl.paramSprintList = [];
                        break;
                    case 'commitmentReliability':
                        ctrl.isCalendarOpen = false;
                        ctrl.isTrendOverDropdownActive = true;
                        ctrl.chartdata = _.assign({}, ctrl.trendOverCommitmentReliability);
                        if(ctrl.chartdata['data']) {
                            ctrl.isApplyTrendOverActive =  false;
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                        }
                        if(ctrl.chartdata.fromSprint && ctrl.chartdata.toSprint) {
                            ctrl.setFromToSplitList(ctrl.chartdata.fromSprint, ctrl.chartdata.toSprint)
                        }
                        ctrl.tooltipText = ctrl.chartdata.tooltipText;
                        ctrl.paramSprintList = [];
                        break;
                    case 'storyLeadTime':
                        ctrl.isCalendarOpen = false;
                        ctrl.isTrendOverDropdownActive = true;
                        ctrl.chartdata = _.assign({}, ctrl.trendOverStoryLeadTime);
                        if(ctrl.chartdata['data']) {
                            ctrl.isApplyTrendOverActive =  false;
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                        }
                        if(ctrl.chartdata.fromSprint && ctrl.chartdata.toSprint) {
                            ctrl.setFromToSplitList(ctrl.chartdata.fromSprint, ctrl.chartdata.toSprint)
                        }
                        ctrl.tooltipText = ctrl.chartdata.tooltipText;
                        ctrl.paramSprintList = [];
                        break;
                    case 'storyLiveLeadTime':
                        ctrl.isCalendarOpen = false;
                        ctrl.isTrendOverDropdownActive = true;
                        ctrl.chartdata = _.assign({}, ctrl.trendOverStoryLiveLeadTime);
                        if(ctrl.chartdata['data']) {
                            ctrl.isApplyTrendOverActive =  false;
                            ctrl.chartdata['data']['dialogoptions'] =  ctrl.chartdata['data']['options'];
                        }
                        if(ctrl.chartdata.fromSprint && ctrl.chartdata.toSprint) {
                            ctrl.setFromToSplitList(ctrl.chartdata.fromSprint, ctrl.chartdata.toSprint)
                        }
                        ctrl.tooltipText = ctrl.chartdata.tooltipText;
                        ctrl.paramSprintList = [];
                        break;
                    default:
                        break;
                }
            }

            ctrl.fromToSplitList = function(){
                var fromSprint = ctrl.selectedFromSprintList && ctrl.selectedFromSprintList.split(".");
                var toSprint = ctrl.selectedToSprintList && ctrl.selectedToSprintList.split(".");
                var sprintList = [];
                var fromCounter = fromSprint && parseInt(fromSprint[0]);
                var toCounter = toSprint && parseInt(toSprint[0]);
                if(fromCounter && toCounter && fromCounter >= toCounter){
                   ctrl.errorMessage = 'To sprint must be greater than from sprint';
                   ctrl.isApplyTrendOverActive = true;
                }else {
                    ctrl.isApplyTrendOverActive = false;
                    ctrl.errorMessage = '';
                    ctrl.allSprintList.forEach(function(item) {
                        var sprint = item.split(".");
                        if(fromCounter && toCounter && fromCounter <= toCounter && (parseInt(sprint[0]) >= fromCounter && parseInt(sprint[0]) <=toCounter)) {
                            sprintList.push(item)
                        }
                    }, this);
                }
                ctrl.paramSprintList = sprintList;
            }

            ctrl.setFromToSplitList = function(fromSprint, toSprint){              
                ctrl.allSprintList.forEach(function(item) {
                    var sprint = item.split(".");
                    if(sprint[1].trim() == fromSprint.trim()) {
                        ctrl.selectedFromSprintList = item
                    }
                    if(sprint[1].trim() === toSprint.trim()){
                        ctrl.selectedToSprintList = item
                    }
                }, this);              
            }

            ctrl.customWidgetClick = function(widgetType) {
                ctrl.chartdata = {};
                ctrl.selectedChart = widgetType;                
                ctrl.applyTrendOverDates();
            }

            ctrl.fetchStoryDORtoDOD = function() {
                var route = '/api/jiraMVP/DorToDod';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'storyDorToDod',
                        title: 'Definition of Ready (DoR) to Definition of Done (DoD)',
                        type: 'text',
                        tooltipText: widgetHoverText.storyDorToDod,
                        data: (response.storyLeadTime && response.storyLeadTime.value) ? response.storyLeadTime : null
                    };
                 });
            };

            ctrl.fetchStoryDODtoLive = function() {
                var route = '/api/jiraMVP/DodToLive';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'storyDodToLive',
                        title: 'Definition of Done to Live',
                        type: 'text',
                        tooltipText: widgetHoverText.storyDodToLive,
                        data: (response.storyLiveLeadTime && response.storyLiveLeadTime.value) ? response.storyLiveLeadTime : null
                    };
                 });
            };
            
            ctrl.fetchStoryLeadTime = function() {
                var route = '/api/jiraMVP/leadTime';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'storyLeadTime',
                        title: 'Lead Time',
                        type: 'text',
                        tooltipText: widgetHoverText.storyLeadTime,
                        data: (response.storyLeadTime && response.storyLeadTime.value) ? response.storyLeadTime : null
                    };
                 });
            };

            ctrl.fetchStoryBacklogtoDOR = function() {
                var route = '/api/jiraMVP/backlogToDor';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'storyBacklogToDor',
                        title: 'Backlog to Definition of Ready (DoR)',
                        type: 'text',
                        tooltipText: widgetHoverText.storyBacklogToDor,
                        data: (response.storyLeadTime && response.storyLeadTime.value) ? response.storyLeadTime : null
                    };
                 });
            };

            ctrl.fetchDefectInjectionRate = function() {
                var route = '/api/jiraMVP/defectinjectionrate';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'defectInjectionRate',
                        title: 'Defect Injection Rate',
                        type: 'text',
                        tooltipText: widgetHoverText.defectInjectionRate,
                        data: (response.defectInjectionRate && response.defectInjectionRate.value) ? response.defectInjectionRate : null
                    };
                 });
            };

            ctrl.fetchDefectInjectionRatePostlive = function() {
                var route = '/api/jiraMVP/defectinjectionratepostlive';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'defectInjectionRatePostLive',
                        title: 'Defect Injection Rate Post Live',
                        type: 'text',
                        tooltipText: widgetHoverText.defectInjectionRatePostLive,
                        data: (response.defectInjectionRatePostLive && response.defectInjectionRatePostLive.value) ? response.defectInjectionRatePostLive : null
                    };
                 });
            };

            ctrl.fetchDeploymentFrequency = function() {
                var route = '/api/excel/deployFrequency';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: false
                                },
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 4
                                      }
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 4
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderColor: '#709dca'
                            }
                        };
                    }
                    return {
                    	 name: 'deploymentFrequency',
                         title: 'Deployment Frequency',
                         type: 'line',
                        tooltipText: widgetHoverText.deploymentFrequency,
                        data: graphData
                    };
                 });
            };

            ctrl.fetchNoOfCheckins = function() {
                var route = '/api/ed/commit';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response && response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: false
                                },
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 4
                                      }
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 4
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderColor: '#709dca'
                            }
                        };
                    }
                    var noOfCheckins = {
                        name: 'noOfCheckins',
                        title: 'Number of Check-in Per Day in Master',
                        type: 'line',
                        tooltipText: widgetHoverText.noOfCheckins,
                        data: graphData
                    };
                    ctrl.noOfCheckins = noOfCheckins;
                    return noOfCheckins;
                 }); 
            };

            ctrl.fetchFlowEfficiency = function() {
                var route = '/api/excel/flowefficiency';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: false
                                },
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 4
                                      }
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 4
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderColor: '#709dca'
                            }
                        };
                    }
                    var flowEfficiency = {
                        name: 'flowEfficiency',
                        title: 'Flow Efficiency',
                        type: 'line',
                        tooltipText: widgetHoverText.flowEfficiency,
                        data: graphData
                    };
                    ctrl.flowEfficiency = flowEfficiency;
                    return flowEfficiency;
                 });
            };

            ctrl.fetchCfdData = function() {
                var route = '/api/jiraMVP/cfddetails';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response && response.countList) {
                        graphData = {
                            data: response.countList,
                            labels: response.monthList,
                            series: response.statusList,
                            colors: [
                                '#3f0f99',
                                '#f4424e',
                                '#2b3547',
                                '#1194db',
                                '#24513f',
                                '#09f9d9'
                            ],
                            options: {
                                responsive: true,
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: false
                                },
                                scales: {
                                    yAxes: [{
                                        stacked: true,
                                        ticks  : {
                                            beginAtZero: true,
                                            fontSize: 3
                                        }
                                    }],
                                    xAxes: [{
                                        stacked: true,
                                        ticks  : {
                                            beginAtZero: true,
                                            fontSize: 3
                                        }
                                    }]
                                },
                                fontSize: 8,
                                legend: {
                                    display: true,
                                    position: 'bottom',
                                    labels: {
                                        boxWidth: 3,
                                        fontSize: 3
                                    }
                                }
                            }
                        };
                    }
                    var cfdData = {
                        name: 'cfd',
                        title: 'Cumulative Flow Diagram',
                        type: 'line',
                        tooltipText: widgetHoverText.cfd,
                        data: graphData
                    };
                    ctrl.cfdData = cfdData;
                    return cfdData;
                 });
            };

            ctrl.fetchEnvCreationTime = function() {
                var route = '/api/ed/citime';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'envCreationTime ',
                        title: 'Time to Create a New Environment',
                        type: 'text',
                        tooltipText: widgetHoverText.envCreationTime,
                        data: (response.envCreationTime && response.envCreationTime.value) ? response.envCreationTime : null
                    };
                 });
            };

            ctrl.fetchHappinessIndex = function() {
                var route = '/api/excel/happinessindex';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;
                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                scales: {
                                    xAxes: [{
                                        display: false
                                    }],
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                }
                            },
                            datasetOverride: {
                                hoverBackgroundColor: '#2d9b4f',
                                backgroundColor: '#5fb24f',
                                borderColor: '#709dca'
                            }
                        };
                    }
                    return {
                        name: 'happinessIndex',
                        title: 'Happiness Index',
                        type: 'bar',
                        tooltipText: widgetHoverText.happinessIndex,
                        data: graphData
                    };
                 });
            };

            ctrl.fetchAppDemonstration = function() {
                var route = '/api/excel/appdemonstration';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            colors: [
                                '#f8b2b5'
                            ],
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: false
                                },
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 4
                                      }
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 4
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderColor: '#ad1852'
                            }
                        };
                    }
                    var appDemonstration = {
                        name: 'appDemonstration',
                        title: 'Completed Stories are Demonstrated to Product Owner',
                        type: 'line',
                        tooltipText: widgetHoverText.appDemonstration,
                        data: graphData
                    };
                    ctrl.appDemonstration = appDemonstration;
                    return appDemonstration;
                 });
            };

            ctrl.fetchSprintPredictability = function() {
                var route = '/api/jiraMVP/sprintpredictability';
                
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData,
                        sprintPredictablity;
                   
                    if(response && response.sprintPredictablity && response.sprintPredictablity.value) {
                        sprintPredictablity = response.sprintPredictablity.value;
                    }
                      
                    if(sprintPredictablity) {
                        var fillSprintPredictablityPercentage = parseInt(sprintPredictablity) > 100 ? 100 : sprintPredictablity
                        graphData = {
                            data: [sprintPredictablity, 100-fillSprintPredictablityPercentage],
                            symbol: response.sprintPredictablity.unit,
                            colors: [
                                '#2779bc',
                                '#e2e2e2'
                            ],
                            options: {
                                legend: {
                                    display: false
                                },
                                tooltips: {
                                    enabled: false
                                },
                                cutoutPercentage: 70
                            }
                        };
                    }
                    return {
                        name: 'sprintPredictablity',
                        title: 'Sprint Predictability',
                        type: 'doughnut',
                        tooltipText: widgetHoverText.sprintPredictablity,
                        data: graphData
                    };
                 });
            };

            ctrl.fetchReleaseDeployTime = function() {
                var route = '/api/ed/citime';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'releaseDeployTime',
                        title: 'Release and Deploy Time',
                        type: 'text',
                        tooltipText: widgetHoverText.releaseDeployTime,
                        data: (response.relAndDeployTime && response.relAndDeployTime.value) ? response.relAndDeployTime : null
                    };
                 });
            };

            ctrl.fetchAutoVsManualTest = function() {
                var route ='/api/excel/autovsmanualtest';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData,
                        autoPercentage;

                    if(response && response.autoPercentage && response.autoPercentage.value) {
                        autoPercentage = response.autoPercentage.value;
                    }

                    if(autoPercentage) {
                        var fillAutoPercentage = parseInt(autoPercentage) > 100 ? 100 : autoPercentage
                        graphData = {
                            data: [autoPercentage, 100-fillAutoPercentage],
                            labels: ['Automated', 'Manual'],
                            colors: [
                                '#b2174f',
                                '#e2e2e2'
                            ],
                            options: {
                                tooltips: {
                                    enabled: false
                                }
                            }
                        };
                    }
                    var autoVsManualTest = {
                        name: 'autoPercentage',
                        title: 'Automated Test %',
                        type: 'pie',
                        tooltipText: widgetHoverText.autoPercentage,
                        data: graphData
                    };

                    ctrl.autoVsManualTest = autoVsManualTest;
                    return autoVsManualTest;
                 });
            };

            ctrl.fetchCodeQuality = function() {
                var route = '/api/mdquality/static-analysis';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    console.log('comone', response)
                    var graphData,
                        qualityGrade,
                        colors = [
                            '#e2e2e2',
                            '#e2e2e2',
                            '#e2e2e2',
                            '#e2e2e2',
                            '#e2e2e2'
                        ];

                    qualityGrade = (response && response.qualityGrade) ? response.qualityGrade : null;
                    //qualityGrade = 'A';

                    switch(qualityGrade) {
                        case 'A':
                            qualityGrade = 5;
                            break;
                        case 'B':
                            qualityGrade = 4;
                            break;
                        case 'C':
                            qualityGrade = 3;
                            break;
                        case 'D':
                            qualityGrade = 2;
                            break;
                        case 'E':
                            qualityGrade = 1;
                            break;
                    };

                    colors[qualityGrade-1] = '#b2174f';

                    if(qualityGrade) {
                        graphData = {
                            data: [1,2,3,4,5],
                            labels: ['E','D','C','B','A'],
                            colors: colors,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true,
                                    callbacks: {
                                        label: function() {
                                            return "";
                                        }
                                    }
                                },
                                scales: {
                                  yAxes: [
                                    {
                                        display: false,
                                        gridLines: {
                                            display: false
                                        }
                                    }
                                  ],
                                  xAxes: [
                                    {
                                        display: true,
                                        ticks: {
                                            fontSize: 7
                                          },
                                        gridLines: {
                                            display: false
                                        }
                                    }
                                  ]
                                }
                            }
                        };
                    }
                    return {
                        name: 'codeQuality',
                        title: 'Code Quality',
                        type: 'bar',
                        tooltipText: widgetHoverText.codeQuality,
                        data: qualityGrade !== 'NA' ? graphData : undefined
                    };
                 });
            };

            ctrl.fetchJUnitCoverage = function() {
                var route = '/api/mdquality/static-analysis';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var data,
                        coveragePercentage,
                        jscoveragePercentage;

                    if(response && response.coveragePercentage && response.coveragePercentage.value) {
                        coveragePercentage = response.coveragePercentage;
                    }

                    if(response && response.jscoveragePercentage && response.jscoveragePercentage.value) {
                        jscoveragePercentage = response.jscoveragePercentage;
                    }

                   data = [
                        {
                            name: 'backEndJUnit',
                            title: 'Back End Code Coverage',
                            data: coveragePercentage ? coveragePercentage : null
                        },
                        {
                            name: 'frontEndJSUnit',
                            title: 'Front End Code Coverage',
                            data: jscoveragePercentage ? jscoveragePercentage : null
                        }
                    ];

                    return {
                        name: 'coveragePercentage',
                        title: 'Coverage',
                        type: 'multipleTextWidget',
                        tooltipText: widgetHoverText.coveragePercentage,
                        width: (100/data.length)+'%',
                        data: data
                    };
                 });
            };

            ctrl.fetchPassPercent = function() {
                var route = '/api/mdquality/static-analysis';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var data,
                        jUnitSuccessPercentage,
                        jsJUnitSuccessPercentage;

                    if(response && response.jUnitSuccessPercentage && response.jUnitSuccessPercentage.value) {
                        jUnitSuccessPercentage = response.jUnitSuccessPercentage;
                    }

                    if(response && response.jsJUnitSuccessPercentage && response.jsJUnitSuccessPercentage.value) {
                        jsJUnitSuccessPercentage = response.jsJUnitSuccessPercentage;
                    }

                   data = [
                        {
                            title: 'Pass %',
                            data: jUnitSuccessPercentage ? jUnitSuccessPercentage : null
                        },
                        {
                            title: 'JS Pass %',
                            data: jsJUnitSuccessPercentage ? jsJUnitSuccessPercentage : null
                        }
                    ];

                    return {
                        name: 'passPercentage',
                        title: 'Pass %',
                        type: 'multipleTextWidget',
                        tooltipText: widgetHoverText.passPercentage,
                        width: (100/data.length)+'%',
                        data: data
                    };
                 });
            };  

            ctrl.fetchImprovement = function() {
                var route = '/api/excel/improvement';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'improvement',
                        title: 'Improvement',
                        type: 'status',
                        tooltipText: widgetHoverText.improvement,
                        data: (response && response.response !== undefined) ? response : null
                    };
                 });
            };

            ctrl.fetchCITime = function() {
                var fetchFixTime = function() {
                        var route = '/api/ed/citime';
                        return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                            return (response.fixTimeSVU && response.fixTimeSVU.value) ? response.fixTimeSVU : null;
                         });
                    },

                    fetchBuildTime = function() {
                        var route = '/api/ed/citime';
                        return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                            return (response.buildTimeSVU && response.buildTimeSVU.value) ? response.buildTimeSVU : null;
                         });
                    },

                    fetchSumTestExecution = function() {
                        var route = '/api/excel/autovsmanualtest';
                        return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                            return (response.sumTestExecution && response.sumTestExecution.value) ? response.sumTestExecution : null;
                         });
                    },

                    deferred = $q.defer();

                    $q.all([

                        fetchFixTime(),
                        fetchBuildTime(),
                        fetchSumTestExecution()

                    ]).then(function(response) {
                        var data = [
                                {
                                    name: 'timeToFixBrokenBuild',
                                    title: 'Time to fix a Broken Build',
                                    data: response[0] ? response[0] : null
                                },
                                {
                                    name:'codeBuildTime',
                                    title: 'Code Build Time',
                                    data: response[1] ? response[1] : null
                                },
                                {
                                    name:'functionalTestExecutionTime',
                                    title: 'Functional Test Execution Time',
                                    data: response[2] ? response[2] : null
                                }
                            ],
                            widgetData = {
                                name: 'citime',
                                title: 'CI Time',
                                type: 'multipleTextWidget',
                                tooltipText: widgetHoverText.citime,
                                width: (100/data.length)+'%',
                                data: data
                            };
                        deferred.resolve(widgetData);
                    });

                    return deferred.promise;
            };          

            ctrl.showMaturityRadar = function(event) {
                var button = $('.radar-button');
                ctrl.showRadar = !ctrl.showRadar;
                if(ctrl.showRadar) {
                    button.text('Executive Dashboard');
                }else {
                    button.text('Maturity Radar');
                    d3.select(".maturity-radar").select("svg").remove();
                }
            };

            ctrl.commitmentReliability = function() {
                var route = '/api/jiraMVP/commitmentReliability';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'commitmentReliability',
                        title: 'Commitment Reliability',
                        type: 'text',
                        tooltipText: widgetHoverText.commitmentReliability,
                        data: (response.commitmentReliability && response.commitmentReliability.value) ? response.commitmentReliability : null
                    };
                 });
            };
            
            ctrl.fetchRisks = function(){
                var route = '/api/jiraMVP/risks';
               
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'risks',
                        title: 'Risks',
                        type: 'list',
                        tooltipText: widgetHoverText.risks,
                        data:response.dataCount || null
                    };
                });
            };

            ctrl.fetchTopIssues = function(){
                var route = '/api/jiraMVP/topIssues';
               
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'topIssues',
                        title: 'Top Issues',
                        type: 'list',
                        tooltipText: widgetHoverText.topIssues,
                        data:response.dataCount || null
                    };
                });
            };
            
            ctrl.fetchIssues = function(){
                var route = '/api/jiraMVP/issues';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'issues',
                        title: 'Issues',
                        type: 'list',
                        tooltipText: widgetHoverText.issues,
                       data:response.dataCount || null
                    };
                });
            };
            
            ctrl.fetchAgingIssue = function(){
                var route = '/api/jiraMVP/agingIssue';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                	return {
                        name: 'agingIssue',
                        title: 'Aging Issue',
                        type: 'text',
                        tooltipText: widgetHoverText.agingIssue,
                        data: (response.agingIssueLevel && response.agingIssueLevel.value) ? response.agingIssueLevel : null
                        //data: '{"agingIssueLevel":{"symbol":"","value":"65","unit":"%"}}'
                    };
                });
            };
            
            ctrl.fetchTechDebt = function(){
                var route = '/api/jiraMVP/techDebt';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'techDebt',
                        title: 'Tech Debt',
                        type: 'text',
                        tooltipText: widgetHoverText.techDebt,
                        data: (response.techDebt && response.techDebt.value) ? response.techDebt : null
                    };
                });
            };
            
            ctrl.fetchSonarTechDebt = function(){
                var route =  '/api/mdquality/static-analysis';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'techDebt',
                        title: 'Sonar Tech Debt',
                        type: 'text',
                        tooltipText: widgetHoverText.sonarTechDebt,
                        data: (response.techDebt && response.techDebt.value) ? response.techDebt : null
                    };
                });
            };
            
           /* ctrl.fetchAssignValueMetric = function() {
                var route = '/api/jiraMVP/assignedMetrics';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData,
                    assignedValuePercentage;
                    
                    if(response && response.assignedValuePercentage && response.assignedValuePercentage.value) {
                    	assignedValuePercentage = response.assignedValuePercentage;
                    }

                    if(assignedValuePercentage) {
                        var fillAssignedValuePercentage = parseInt(assignedValuePercentage.value) > 100 ? 100 : assignedValuePercentage.value
                        graphData = {
                            data: [assignedValuePercentage.value, 100-fillAssignedValuePercentage],
                            symbol:"%",
                            colors: [
                                '#2779bc',
                                '#e2e2e2'
                            ],
                            options: {
                                legend: {
                                    display: false
                                },
                                tooltips: {
                                    enabled: false
                                },
                                cutoutPercentage: 70
                            }
                        };
                   }
                    return {
                        name: 'assignedValuePercentage',
                        title: 'Assign Value Metrics',
                        type: 'doughnut',
                        tooltipText: widgetHoverText.assignedValuePercentage,
                        data: graphData
                    };
                 });
            };           
            */
            ctrl.fetchAssignValueMetric = function() {
                var route = '/api/jiraMVP/assignedMetrics';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'assignedValuePercentage',
                        title: 'Assign Value Metrics',
                        type: 'text',
                        tooltipText: widgetHoverText.assignedValuePercentage,
                        data: (response.assignedValuePercentage && response.assignedValuePercentage.value) ? response.assignedValuePercentage : null
                    };
                 });
            };
           
/*            ctrl.fetchBacklogHealth = function() {
                var route = '/api/jiraMVP/backlogHealth';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData,
                    backlogHealthPercentage;
                    
                    if(response && response.backlogHealthPercentage && response.backlogHealthPercentage.value) {
                    	backlogHealthPercentage = response.backlogHealthPercentage;
                    }
                    if(backlogHealthPercentage) {
                        var color  = ctrl.resourceHelpers && ctrl.resourceHelpers.backlogHealthBackgroundColor && ctrl.resourceHelpers.backlogHealthBackgroundColor[colorType]                       
                        var fillBacklogHealthPercentage = parseInt(backlogHealthPercentage.value) > 100 ? 100 : backlogHealthPercentage.value
                        graphData = {
                            data: [backlogHealthPercentage.value, 100-fillBacklogHealthPercentage],
                            symbol:"%",
                            colors: [
                                color,
                                '#e2e2e2'
                            ],
                            options: {
                                legend: {
                                    display: false
                                },
                                tooltips: {
                                    enabled: false
                                },
                                cutoutPercentage: 70
                            }
                        };
                   }
                    return {
                        name: 'backlogHealthPercentage',
                        title:'Backlog Health',
                        type: 'doughnut',
                        tooltipText: widgetHoverText.backlogHealthPercentage,
                        data: graphData
                    };
                 });
            };  */   
            ctrl.fetchBacklogHealth = function() {
                var route = '/api/jiraMVP/backlogHealth';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'backlogHealthPercentage',
                        title: 'Backlog Health',
                        type: 'text',
                        tooltipText: widgetHoverText.backlogHealthPercentage,
                        data: (response.backlogHealthPercentage && response.backlogHealthPercentage.value) ? response.backlogHealthPercentage : null
                    };
                 });
            };
            
            ctrl.fetchAssignValueTrend = function() {
                var route = '/api/jiraMVP/assignedMetricsTrend';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: false
                                },
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 4
                                      }
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 4
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderColor: '#709dca'
                            }
                        };
                    }
                    return {
                        name: 'assignmentTrend',
                        title: 'Trend for Assign Value Metrics',
                        type: 'line',
                        tooltipText: widgetHoverText.assignmentValueTrend,
                        data: graphData
                    };
                 });
            };

            ctrl.fetchTrendOverAutoVsManualTest = function() {
                var route = '/api/trend/automation?startDate='+ctrl.startDate+'&endDate='+ctrl.endDate+'';
                 return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 10,
                                        callback: function(label, index, labels) {
                                               return parseFloat(Math.round(label * 100) / 100).toFixed(2) + (response.unit || '') 
                                        }
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderColor: '#709dca'
                            }
                        };
                    }

                    var trendOverAutoVsManualTest = {
                        name: 'TrendOverAutomation',
                        title: 'Trend over automation',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverAutoVsManual,
                        data: graphData,
                        startDate: response.startDate,
                        endDate: response.endDate
                    };

                    ctrl.trendOverAutoVsManualTest = trendOverAutoVsManualTest;
                    ctrl.trendOverChartModal();
                    return trendOverAutoVsManualTest;
                 });
            };

            ctrl.fetchTrendOverFunctionalTestExecutionTime = function() {
                var route = '/api/trend/functionaltest?startDate='+ctrl.startDate+'&endDate='+ctrl.endDate+'';
                 return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },                                
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 10,
                                        callback: function(label, index, labels) {
                                               return parseFloat(Math.round(label * 100) / 100).toFixed(2) + (response.unit || '') 
                                        }
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderColor: '#709dca'
                            }
                        };
                    }

                    var trendOverFunctionalTestExecutionTime = {
                        name: 'trendOverFunctionalTestExecutionTime',
                        title: 'Trend over functional test execution',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverFunctionalTestExecutionTime,
                        data: graphData,
                        startDate: response.startDate,
                        endDate: response.endDate
                    };

                    ctrl.trendOverFunctionalTestExecutionTime = trendOverFunctionalTestExecutionTime;
                    ctrl.trendOverChartModal();
                    return trendOverFunctionalTestExecutionTime;
                 });
            };

            ctrl.fetchTrendOverCodeBuildTime = function() {
                var route = '/api/trend/buildTimeTrend?startDate='+ctrl.startDate+'&endDate='+ctrl.endDate+'';
                 return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },                                
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 10,
                                        callback: function(label, index, labels) {
                                               return parseFloat(Math.round(label * 100) / 100).toFixed(2) + (response.unit || '') 
                                        }
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderColor: '#709dca'
                            }
                        };
                    }

                    var trendOverCodeBuildTime = {
                        name: 'trendOverCodeBuildTime',
                        title: 'Trend over Code Build Time',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverCodeBuildTime,
                        data: graphData,
                        startDate: response.startDate,
                        endDate: response.endDate
                    };

                    ctrl.trendOverCodeBuildTime = trendOverCodeBuildTime;
                    ctrl.trendOverChartModal();
                    return trendOverCodeBuildTime;
                 });
            };

            ctrl.fetchTrendOverTimeToFixedBroken = function() {
                var route = '/api/trend/fixTimeTrend?startDate='+ctrl.startDate+'&endDate='+ctrl.endDate+'';
                 return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },                                
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 10,
                                        callback: function(label, index, labels) {
                                               return parseFloat(Math.round(label * 100) / 100).toFixed(2) + (response.unit || '') 
                                        }
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderColor: '#709dca'
                            }
                        };
                    }

                    var trendOverTimeToFixedBrokenBuild = {
                        name: 'trendOverTimeToFixedBrokenBuild',
                        title: 'Trend over time to fixed broken build',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverTimeToFixedBrokenBuild,
                        data: graphData,
                        startDate: response.startDate,
                        endDate: response.endDate
                    };

                    ctrl.trendOverTimeToFixedBrokenBuild = trendOverTimeToFixedBrokenBuild;
                    ctrl.trendOverChartModal();
                    return trendOverTimeToFixedBrokenBuild;
                 });
            };

            ctrl.fetchTrendOverCodeQuality = function() {
                var route = '/api/trend/codequalitytrend?startDate='+ctrl.startDate+'&endDate='+ctrl.endDate+'';
                 return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;
                    if(response.data && response.data.length) {
                        var data = [];
                        var unique = {};
                        var distinct = [];
                        var gradeItem = ["E","D","C","B","A"];
                        response.data.forEach(function(item){
                            if(!unique[item]) {
                                distinct.push(item);
                                unique[item] = true;                              
                            }
                            data.push(gradeItem.indexOf(item));
                        })
                       
                        graphData = {
                            data: data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: false
                                },
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',     
                                      ticks: {
                                        beginAtZero: true,                                       
                                        min: 0,
                                        stepSize: 1,
                                        max:4,
                                        callback: function(value, index, values) {                                         
                                          return ["A","B","C","D","E"][index];
                                        },
                                        autoSkip: true,
                                        maxTicksLimit: data.length
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in ' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10
                                      },
                                      gridLines: {
                                        display: false                                       
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderColor: '#709dca'
                            }
                        };
                    }

                    var trendOverCodeQuality = {
                        name: 'trendOverCodeQuality',
                        title: 'Trend over Code quality',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverCodeQuality,
                        data: graphData,
                        startDate: response.startDate || '',
                        endDate: response.endDate || ''
                    };

                    ctrl.trendOverCodeQuality = trendOverCodeQuality;
                    ctrl.trendOverChartModal();
                    return trendOverCodeQuality;
             });
            };

            ctrl.fetchTrendOverBackEndJUnit = function() {
                var route = '/api/trend/backendjunittrend?startDate='+ctrl.startDate+'&endDate='+ctrl.endDate+'';
                 return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },                                
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 10,
                                        callback: function(label, index, labels) {
                                               return parseFloat(Math.round(label * 100) / 100).toFixed(2) + (response.unit || '') 
                                        }
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderColor: '#709dca'
                            }
                        };
                    }

                    var trendOverBackEndJUnit = {
                        name: 'trendOverBackEndJUnit',
                        title: 'Trend over back end JUnit',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverBackEndJUnit,
                        data: graphData,
                        startDate: response.startDate,
                        endDate: response.endDate
                    };

                    ctrl.trendOverBackEndJUnit = trendOverBackEndJUnit;
                    ctrl.trendOverChartModal();
                    return trendOverBackEndJUnit;
                 });
            };

            ctrl.fetchTrendOverFrontEndJUnit = function() {
                var route = '/api/trend/frontendjunittrend?startDate='+ctrl.startDate+'&endDate='+ctrl.endDate+'';
                 return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;

                    if(response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },                                
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 10,
                                        callback: function(label, index, labels) {
                                               return parseFloat(Math.round(label * 100) / 100).toFixed(2) + (response.unit || '') 
                                        }
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderColor: '#709dca'
                            }
                        };
                    }

                    var trendOverFrontEndJUnit = {
                        name: 'trendOverFrontEndJUnit',
                        title: 'Trend over front end JUnit',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverFrontEndJUnit,
                        data: graphData,
                        startDate: response.startDate,
                        endDate: response.endDate
                    };

                    ctrl.trendOverFrontEndJUnit = trendOverFrontEndJUnit;
                    ctrl.trendOverChartModal();
                    return trendOverFrontEndJUnit;
                 });
            };

            ctrl.fetchTrendOverSprintPredictability = function() {
                var route = '/api/trend/sprintPredictability';
                return customDashboardData.sendWidgetDetails(route, ctrl.paramSprintList || []).then(function(response) {
                    var graphData;
                    if(response && response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },                                
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 10,
                                        callback: function(label, index, labels) {
                                            if(response.unit === '%') {
                                                return parseFloat(Math.round(label * 100) / 100) + (response.unit || '')  
                                            }else {
                                                return parseFloat(Math.round(label * 100) / 100).toFixed(2) + (response.unit || '')  
                                            }
                                        }
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10,
                                        autoSkip: false
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderColor: '#709dca'
                            }
                        };
                    }

                    var trendOverSprintPredictability = {
                        name: 'trendOverSprintPredictability',
                        title: 'Trend over sprint predictability',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverSprintPredictability,
                        data: graphData,                       
                        fromSprint: response && response.fromSprint || '',
                        toSprint: response && response.toSprint || ''                     
                    };

                    ctrl.trendOverSprintPredictability = trendOverSprintPredictability;
                    ctrl.trendOverChartModal();
                 });
            };

            ctrl.fetchTrendOverCommitmentReliability = function() {
                var route = '/api/trend/commitmentReliability';
                return customDashboardData.sendWidgetDetails(route, ctrl.paramSprintList || []).then(function(response) {
                    var graphData;
                    if(response && response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },                                
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 10,
                                        callback: function(label, index, labels) {
                                            if(response.unit === '%') {
                                                return parseFloat(Math.round(label * 100) / 100) + (response.unit || '')  
                                            }else {
                                                return parseFloat(Math.round(label * 100) / 100).toFixed(2) + (response.unit || '')  
                                            }
                                        }
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10,
                                        autoSkip: false
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderColor: '#709dca'
                            }
                        };
                    }

                    var trendOverCommitmentReliability = {
                        name: 'trendOverCommitmentReliability',
                        title: 'Trend over Commitment Reliability',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverCommitmentReliability,
                        data: graphData,                       
                        fromSprint: response && response.fromSprint || '',
                        toSprint: response && response.toSprint || ''                     
                    };

                    ctrl.trendOverCommitmentReliability = trendOverCommitmentReliability;
                    ctrl.trendOverChartModal();
                 });
            };
            ctrl.fetchDefects = function(){
                var route = '/api/jiraMVP/defectCount';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    var graphData;
                    if(response && response.data && response.data.length) {
                        graphData = {
                            data: response.data,//["35", "5", "4", "1"],
                            labels: response.labels,//["P4 - Minor", "P1 - Blocker", "P2 - Critical", "P3 - Major"],//response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true,
                                    fontSize: 3
                                },
                                scales: {
                                yAxes: [
                                    {
                                    id: 'y-axis',
                                    type: 'linear',
                                    display: true,
                                    position: 'left',
                                    ticks: {
                                        beginAtZero: true,
                                        fontSize: 8
                                    }
                                    }
                                ],
                                xAxes: [
                                    {
                                    id: 'x-axis',
                                    display: true,
                                    ticks: {
                                        fontSize: 8
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                    }
                                ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: '#b2174f'
                            }
                        };
                    }
                    return {
                        name: 'defectCount',
                        title: 'Incidents/Defects',
                        type: 'bar',
                        tooltipText: widgetHoverText.defectCount,
                        data: graphData
                    };
                });
            };

            ctrl.fetchStoryLeadTimeToRelease = function() {
                var route = '/api/jiraMVP/DorToLive';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                    return {
                        name: 'timeToRelease',
                        title: 'Definition of Ready (DoR) to Live',
                        type: 'text',
                        tooltipText: widgetHoverText.storyLeadTime,
                        data: (response.timeToRelease && response.timeToRelease.value) ? response.timeToRelease : null
                    };
                 });
            };
            
            ctrl.fetchTrendOverStoryLeadTime = function() {
                var route = '/api/trend/dorToDod';
                return customDashboardData.sendWidgetDetails(route, ctrl.paramSprintList || []).then(function(response) {
                    var graphData;
                    if(response && response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },                                
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 10,
                                        callback: function(label, index, labels) {
                                            if(response.unit === '%') {
                                                return parseFloat(Math.round(label * 100) / 100) + (response.unit || '')  
                                            }else {
                                                return parseFloat(Math.round(label * 100) / 100) + (response.unit || '')  
                                            }
                                        }
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10,
                                        autoSkip: false
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderColor: '#709dca'
                            }
                        };
                    }

                    var trendOverStoryLeadTime = {
                        name: 'trendOverStoryLeadTime',
                        title: 'Trend over Story Lead Time',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverStoryLeadTime,
                        data: graphData,                       
                        fromSprint: response && response.fromSprint || '',
                        toSprint: response && response.toSprint || ''                     
                    };

                    ctrl.trendOverStoryLeadTime = trendOverStoryLeadTime;
                    ctrl.trendOverChartModal();
                 });
            };

            ctrl.fetchTrendOverStoryLiveLeadTime = function() {
                var route = '/api/trend/dodToLive';
                return customDashboardData.sendWidgetDetails(route, ctrl.paramSprintList || []).then(function(response) {
                    var graphData;
                    if(response && response.data && response.data.length) {
                        graphData = {
                            data: response.data,
                            labels: response.labels,
                            options: {
                                maintainAspectRatio: false,
                                tooltips: {
                                    enabled: true
                                },                                
                                scales: {
                                  yAxes: [
                                    {
                                      id: 'y-axis',
                                      type: 'linear',
                                      display: true,
                                      position: 'left',
                                      ticks: {
                                        fontSize: 10,
                                        callback: function(label, index, labels) {
                                            if(response.unit === '%') {
                                                return parseFloat(Math.round(label * 100) / 100) + (response.unit || '')  
                                            }else {
                                                return parseFloat(Math.round(label * 100) / 100) + (response.unit || '')  
                                            }
                                        }
                                      },
                                        scaleLabel: {
                                            display: true,
                                            labelString: 'value in' + (response.unit || '')
                                        },
                                    }
                                  ],
                                  xAxes: [
                                    {
                                      id: 'x-axis',
                                      display: true,
                                      ticks: {
                                        fontSize: 10,
                                        autoSkip: false
                                      },
                                      gridLines: {
                                        display: false
                                      }
                                    }
                                  ]
                                }
                            },
                            datasetOverride: {
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderColor: '#709dca'
                            }
                        };
                    }

                    var trendOverStoryLiveLeadTime = {
                        name: 'trendOverStoryLiveLeadTime',
                        title: 'Trend over Story Live Lead Time',
                        type: 'line',
                        tooltipText: widgetHoverText.trendOverStoryLiveLeadTime,
                        data: graphData,                       
                        fromSprint: response && response.fromSprint || '',
                        toSprint: response && response.toSprint || ''                     
                    };

                    ctrl.trendOverStoryLiveLeadTime = trendOverStoryLiveLeadTime;
                    ctrl.trendOverChartModal();
                 });
            };

            ctrl.fetchAllSprintList = function() {
                var route = '/api/jiraMVP/sprintsList';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                  ctrl.allSprintList = response || []
                  ctrl.fromSprintList = response || []
                  ctrl.toSprintList = response || []
                });
            };

            ctrl.fetchAllSprintListWithoutStatus = function() {
                var route = '/api/jiraMVP/sprintsListWithoutStatus';
                return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                  ctrl.allSprintList = response || []
                  ctrl.fromSprintList = response || []
                  ctrl.toSprintList = response || []
                });
            };
           
            $scope.$watch('$root.logoImage', function() {
                ctrl.logoImage = $rootScope.logoImage || localStorage.getItem('logoImage');
            });
        
        pageLoad();
    }
})();