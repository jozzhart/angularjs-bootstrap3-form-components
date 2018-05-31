/**
 * Controller for the dashboard route.
 * Render proper template.
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('TemplateController', TemplateController);

    TemplateController.$inject = ['$http', '$q', 'customDashboardData','$scope'];
    function TemplateController($http, $q, customDashboardData,$scope) {
       
    	console.log('ashish');
    

    		$scope.skills = [];
    		console.log(dashboard);
    	//	$scope.skills.push(modalData.dashboard.application.components[0].collectorItems.Build[0].description);
    		$scope.addSkill = function() {
    			$scope.skills.push({'title': $scope.newSkill, 'done':false})
    			$scope.newSkill = ''
    		}

    		$scope.deleteSkill = function(index) {	
    			$scope.skills.splice(index, 1);
    		}
    
    	
    	
    	var ctrl = this,
            widgetHoverText;

        var pageLoad = function () {
            widgetHoverText = customDashboardData.fetchWidgetHoverText();  
        };

        ctrl.fetchHappinessIndex = function() {
            var route = '/api/excel/happinessindex';
            return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                var graphData;

                if(response.data && response.data.length) {
                    graphData = {
                        data: response.data,
                        labels: response.labels,
                        colors: [
                            '#e2e2e2',
                            '#e2e2e2',
                            '#e2e2e2',
                            '#e2e2e2',
                            '#e2e2e2'
                        ],
                        options: {
                            scales: {
                                xAxes: [{
                                    display: false
                                }]
                            }
                        },
                        datasetOverride: {
                            hoverBackgroundColor: '#2d9b4f'
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

        ctrl.fetchStoryLeadTime = function() {
            var route = '/api/jiraMVP/featuredetails';
            return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                return {
                    name: 'storyLeadTime',
                    title: 'Definition of Ready (DoR) to Live',
                    type: 'text',
                    tooltipText: widgetHoverText.storyLeadTime,
                    data: (response.storyLeadTime && response.storyLeadTime.value) ? response.storyLeadTime : null
                };
             });
        };
        
        
        ctrl.fetchStoryLeadTime = function() {
            var route = '/api/jiraMVP/featuredetails';
            return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                return {
                    name: 'storyLeadTime',
                    title: 'Definition of Ready (DoR) to Live ',
                    type: 'text',
                    tooltipText: widgetHoverText.storyLeadTime,
                    data: (response.timeToRelease && response.timeToRelease.value) ? response.timeToRelease : null
                   // data: {"symbol":"","value":"2","unit":"Weeks","trend":"equal"}
                };
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
                return {
                    name: 'flowEfficiency',
                    title: 'Flow Efficiency',
                    type: 'line',
                    tooltipText: widgetHoverText.flowEfficiency,
                    data: graphData
                };
             });
        };

        ctrl.fetchCfdData = function() {
            var route = '/api/jiraMVP/cfddetails';
            return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                var graphData;

                if(response) {
                    graphData = {
                        data: response.countList,
                        labels: response.monthList,
                        series: response.statusList,
                        colors: [
                            '#19484c',
                            '#5fbdcb',
                            '#3299a6',
                            '#aadce4',
                            '#2b7c88',
                            '#76c7d3'
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
                return {
                    name: 'cfd',
                    title: 'Cumulative Flow Diagram',
                    type: 'line',
                    tooltipText: widgetHoverText.cfd,
                    data: graphData
                };
             });
        };

        ctrl.fetchDefects = function(){
            var route = '/api/jiraMVP/defectCount';
            return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                return {
                    name: 'defectCount',
                    title: 'Incidents/Defects',
                    type: 'table',
                    tooltipText: widgetHoverText.defectCount,
                    data: response.dataCount || null
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
        
        ctrl.fetchAssignValueMetric = function() {
            var route = '/api/jiraMVP/assignedMetrics';
             return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                var graphData,
                assignedValuePercentage;
                
                if(response && response.assignedValuePercentage && response.assignedValuePercentage.value) {
                	assignedValuePercentage = response.assignedValuePercentage;
                }

                if(assignedValuePercentage) {
                    graphData = {
                        data: [assignedValuePercentage.value, 100-assignedValuePercentage.value],
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
        
            
        ctrl.fetchBacklogHealth = function() {
            var route = '/api/jiraMVP/backlogHealth';
            return customDashboardData.fetchWidgetDetails(route).then(function(response) {
                var graphData,
                backlogHealthPercentage;
                
                if(response && response.backlogHealthPercentage && response.backlogHealthPercentage.value) {
                	backlogHealthPercentage = response.backlogHealthPercentage;
                }

                if(backlogHealthPercentage) {
                    graphData = {
                        data: [backlogHealthPercentage.value, 100-backlogHealthPercentage.value],
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
                    name: 'backlogHealthPercentage',
                    title:'Backlog Health',
                    type: 'doughnut',
                    tooltipText: widgetHoverText.backlogHealthPercentage,
                    data: graphData
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
                    title:  'Trend for Assign Value Metrics',
                    type: 'line',
                    tooltipText: widgetHoverText.assignmentValueTrend,
                    data: graphData
                };
             });
        };
     
        pageLoad();
    }
})();