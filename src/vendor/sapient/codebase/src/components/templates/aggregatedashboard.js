/**
 * Controller for the dashboard route.
 * Render proper template.
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .constant('MasterKpiType', {
            AUTOMATION_PERCENTAGE : "Automation Percentage",
            BACKLOG_HEALTH : "Backlog Health",
            BACKLOG_TO_DOR : "BackLog to DoR",
            DOR_TO_DOD :  "DoR to DoD",
            DOD_TO_LIVE :  "DoD to Live",
            DIR_POST_LIVE: "DIR Post Live",
            LEAD_TIME: "Lead Time",
            HAPPINESS_INDEX : "Happiness Index",
            SPRINT_PREDICTABILITY: "Sprint Predictability"
        })
        .constant('MasterKpiRequestType', {
            AUTOMATION_PERCENTAGE_NOCHART : 'AUTOMATION_PERCENTAGE_NOCHART',
            AUTOMATION_PERCENTAGE_LINECHART : 'AUTOMATION_PERCENTAGE_LINECHART',
            BACKLOG_HEALTH_NOCHART : 'BACKLOG_HEALTH_NOCHART',
            BACKLOG_HEALTH_LINECHART : 'BACKLOG_HEALTH_LINECHART',
            BACKLOG_TO_DOR_NOCHART : 'BACKLOG_TO_DOR_NOCHART',
            BACKLOG_TO_DOR_LINECHART : 'BACKLOG_TO_DOR_LINECHART',
            DOR_TO_DOD_NOCHART : 'BACKLOG_HEALTH_NOCHART',
            DOR_TO_DOD_LINECHART : 'BACKLOG_HEALTH_LINECHART',
            DOD_TO_LIVE_NOCHART : 'DOD_TO_LIVE_NOCHART',
            DOD_TO_LIVE_LINECHART : 'DOD_TO_LIVE_LINECHART',
            DIR_POST_LIVE_NOCHART : 'DIR_POST_LIVE_NOCHART',
            DIR_POST_LIVE_LINECHART : 'DIR_POST_LIVE_LINECHART',
            LEAD_TIME_NOCHART : 'LEAD_TIME_NOCHART',
            LEAD_TIME_LINECHART : 'LEAD_TIME_LINECHART',
            LEAD_TIME_PIECHART : 'LEAD_TIME_PIECHART',
            LEAD_TIME_BACKLOG_TO_DOR_BLOCKCHART: 'LEAD_TIME_BACKLOG_TO_DOR_BLOCKCHART',
            LEAD_TIME_DOR_TO_DOD_BLOCKCHART : 'LEAD_TIME_DOR_TO_DOD_BLOCKCHART',
            LEAD_TIME_DOD_TO_LIVE_BLOCKCHART : 'LEAD_TIME_DOD_TO_LIVE_BLOCKCHART',
            HAPPINESS_INDEX_NOCHART : 'HAPPINESS_INDEX_NOCHART',
            HAPPINESS_INDEX_BARCHART : 'HAPPINESS_INDEX_BARCHART',
            SPRINT_PREDICTABILITY_NOCHART : 'SPRINT_PREDICTABILITY_NOCHART',
            SPRINT_PREDICTABILITY_LINECHART : 'SPRINT_PREDICTABILITY_LINECHART'
        })
        .controller('AggregrateTemplateController', AggregrateTemplateController);

    AggregrateTemplateController.$inject = ['$scope','$rootScope', '$http', '$q','$location', 'dashboardData', 'MasterKpiType', 'MasterKpiRequestType'];
    function AggregrateTemplateController($scope, $rootScope, $http, $q, $location, dashboardData, MasterKpiType, MasterKpiRequestType) {
        var ctrl = this;
        ctrl.viewType = 'account';
        ctrl.isBackButtonActive = false;   
        ctrl.isAggregatedDashboardActive = false; 
        ctrl.isAggregatedDashboardDataLoaded = false; 
        var postData = {
            organisation : [],
            businessUnit :[],
            account :[],
            project :[]
        };
        ctrl.selectedFilterIds = {
            organisation : [],
            businessUnit :[],
            account :[],
            project :[]
        };
        ctrl.queryParam = '';
        ctrl.maxStar = 5;
        ctrl.isStarReadonly = true;
        ctrl.leadTimeNochart = {
            value: '',
            unit:'',
            trend:''
        }
        
        function aggregateDashboard(){
            if(ctrl.isAggregatedDashboardActive) {
                dashboardData.getAggregateDashboard(postData, ctrl.viewType).then(processAggregateDashboard, processAggregateDashboardError);
            }
        }
        function aggregateFilteredlist(postData){
            dashboardData.getAggregateFilteredlist(postData, ctrl.queryParam).then(processAggregateFilteredlist, processAggregateFilteredlistError);
        }

        function processAggregateDashboard(data) {
            ctrl.isAggregatedDashboardDataLoaded = true; 
            if(!data.data) {
                ctrl.aggregateDashboardData = {
                    header: [],
                    data : []
                }
            }
            if(data.data) {
                ctrl.aggregateDashboardData = {
                    header : data.header,
                    data : data.data
                }             
            }
            
        }
        function processAggregateDashboardError(data) {
            ctrl.aggregateDashboardData = {
                header : [],
                data : []
            }
        }

        function processAggregateFilteredlist(data) {
            ctrl.data = data;
            // ctrl.businessUnit = data.businessUnit;
            // ctrl.account = data.account;
            // ctrl.project = data.project;
            aggregateDashboard();
        }

        function processAggregateFilteredlistError(data) {
            
        }
        ctrl.aggregateDashboardDetails = function(accountLevel) {
            ctrl.viewType = accountLevel.accountId;
            ctrl.queryParam = 'account';
            ctrl.isBackButtonActive = true;
            postData.account = [];
            postData.account.push({id:accountLevel.accountId, name: accountLevel.accountName, isSelected: true})
            aggregateDashboard();
            aggregateFilteredlist(postData); 
           
        }

        ctrl.applyFilters = function(selectedIds, filterType) {
        
            var filteredPostData = {
                organisation : [],
                businessUnit :[],
                account :[],
                project :[]
            };
            //ctrl.data[filterType] = selectedIds.options;
            //postData[filterType] = selectedIds.ids
            if(filterType === 'organisation') {
                ctrl.data.organisation = selectedIds.options
                postData.organisation = selectedIds.ids
               
            }else if(filterType === 'businessUnit') {
                ctrl.data.businessUnit = selectedIds.options
                postData.businessUnit = selectedIds.ids
               
            }else if(filterType === 'account') {
                ctrl.data.account = selectedIds.options
                postData.account = selectedIds.ids
               
            }else if(filterType === 'project') {
                ctrl.data.project = selectedIds.options
                postData.project = selectedIds.ids               
            }
           if(ctrl.isAggregatedDashboardActive) {
                aggregateDashboard();
           }
           
            ctrl.queryParam = filterType;
           
             _.forEach(_.keys(ctrl.data), function (key) {
                var obj = ctrl.data[key];
                _( obj).forEach(function (opt) {
                    // if(opt.isSelected) {
                    //     filteredPostData[key].push(opt)
                    // }
                    if(key == 'organisation' && opt.isSelected) {
                        filteredPostData.organisation.push(opt)
                    }
                    else if(key == 'businessUnit' && opt.isSelected) {
                        filteredPostData.businessUnit.push(opt)
                    }
                    else if(key == 'account' && opt.isSelected) {
                        filteredPostData.account.push(opt)
                    }
                    else if(key == 'project' && opt.isSelected) {
                        filteredPostData.project.push(opt)
                    }
               });
            });
            //filteredPostData[filterType] = selectedIds.options
            if(filterType === 'organisation') {
                filteredPostData.organisation = selectedIds.options
            }else if(filterType === 'businessUnit') {
                filteredPostData.businessUnit = selectedIds.options
               
            }else if(filterType === 'account') {
                filteredPostData.account = selectedIds.options
               
            }else if(filterType === 'project') {
                filteredPostData.project = selectedIds.options                        
            }
           
            aggregateFilteredlist(filteredPostData);
            if(!ctrl.isAggregatedDashboardActive) {
                kpimastermap();
            }
            
        }
        ctrl.backToHome =  function() {
            postData = {
                organisation : [],
                businessUnit :[],
                account :[],
                project :[]
            };
            ctrl.selectedFilterIds = {
                organisation : [],
                businessUnit :[],
                account :[],
                project :[]           
            };
            
            ctrl.isBackButtonActive = false;
            ctrl.viewType = 'account';
            aggregateDashboard();
            aggregateFilteredlist({}); 
           
        }
        
      
        ctrl.kpi = '';
        ctrl.graphType = '';
        ctrl.leadBlockChart=[];
        
        ctrl.acrosspage = "app/components/templates/acrossdashboard.html"
        function kpimastermap(){
            dashboardData.getKpimastermap().then(processKpimastermap, processKpimastermapError);
        }

        function acrossviewkpi(firstKpi, graphType, kpiRequestType, secondKpi){
            dashboardData.getAcrossviewkpi(postData, firstKpi, graphType, kpiRequestType, secondKpi).then(function(response) {
              if(response.response) {                
                  switch (response.kpiRequestType) {
                        case MasterKpiRequestType.LEAD_TIME_NOCHART:
                            ctrl.leadTimeNochart = {
                                value: '',//response.response.value ? response.response.value : "",
                                unit: response.response.unit,
                                trend : response.response.trend
                            }
                        break;
                        case MasterKpiRequestType.DIR_POST_LIVE_NOCHART:                      
                            ctrl.dirPostLiveNochart = {
                                value:  response.response.value ? response.response.value : "",
                                unit: response.response.unit,
                                trend : response.response.trend
                            }
                            break;
                        case MasterKpiRequestType.BACKLOG_HEALTH_NOCHART:
                            ctrl.backlogHealthNochart = {
                                value:  response.response.value ? response.response.value : "",
                                unit: response.response.unit,
                                trend : response.response.trend
                            }
                        break;
                        case MasterKpiRequestType.HAPPINESS_INDEX_NOCHART:
                            ctrl.happinessIndexNochart = {
                                value:  response.response.value ? response.response.value : "",
                                unit: response.response.unit,
                                trend : response.response.trend
                            }
                        break;
                        case MasterKpiRequestType.AUTOMATION_PERCENTAGE_NOCHART:
                            var value =  response.response.value ? response.response.value.trim()  : "";
                            var displayValue = value
                            ctrl.automationPercentageNochart = {
                                isDataAvailable :value,
                                trend : response.response.trend,
                                type:"doughnut",
                                data : {
                                    data: [displayValue, 100 - (value > 100 ? 100 : value)],
                                    symbol: response.response.unit,
                                    colors: [
                                        '#ed6768',
                                        '#e2e2e2'                        
                                    ],
                                    options: {
                                        legend: {
                                            display: false
                                        },
                                        tooltips: {
                                            enabled: false
                                        },
                                        cutoutPercentage: 77
                                    }
                                }
                            }
                        break;
                        case MasterKpiRequestType.LEAD_TIME_PIECHART:
                            var leadTimePieValue =  response.response.value ? response.response.value : "";
                            var fillLeadTimePieValue = leadTimePieValue > 100 ? 100 : leadTimePieValue
                            ctrl.leadTimePiechart = {
                                isDataAvailable: leadTimePieValue,
                                type: 'pie',
                                data : {
                                    data: [fillLeadTimePieValue, 100-fillLeadTimePieValue],
                                    labels: [MasterKpiType.DOR_TO_DOD, MasterKpiType.DOD_TO_LIVE],
                                    colors: [
                                        '#96cee0',
                                        '#e4e4e4'
                                    ],
                                    options: {
                                        tooltips: {
                                            enabled: false,
                                            custom: function(tooltipModel) {
                                                var current = this;
                                                customTooltip(current, tooltipModel, response.response.dateList);
                                            }
                                        },
                                        legend: {
                                            display: true,
                                            position: 'bottom',
                                            labels: {
                                                boxWidth: 8,
                                                fontSize: 8
                                            }
                                        }
                                    }
                                }
                            }
                        break;
                        case MasterKpiRequestType.SPRINT_PREDICTABILITY_NOCHART:
                            var sprintPredictibilityData =  response.response.value ? response.response.value : "";
                            ctrl.sprintPredictibilityNochart = {
                                isDataAvailable: sprintPredictibilityData,
                                trend : response.response.trend,
                                type:"doughnut",
                                data : {
                                    data: [sprintPredictibilityData, 100 - sprintPredictibilityData],
                                    symbol: response.response.unit,
                                    colors: [
                                        '#96cee0',
                                        '#e4e4e4'                        
                                    ],
                                    options: {
                                        legend: {
                                            display: false
                                        },
                                        tooltips: {
                                            enabled: false
                                        },
                                        cutoutPercentage: 80
                                    }
                                }
                            }
                        break;
                        case MasterKpiRequestType.LEAD_TIME_LINECHART:   
                            ctrl.leadTimeLineChart = {
                                type:"line",
                                data : {
                                    data: response.response.data,
                                    labels: response.response.labels,
                                    symbol: response.response.unit,
                                    options: {
                                        elements: { point: { radius:1.3, hoverRadius: 1.3 } },//reduce dots canvas dots size
                                        maintainAspectRatio: false,
                                        tooltips: {
                                            enabled: false,
                                            custom: function(tooltipModel) {
                                                var current = this;
                                                customTooltip(current, tooltipModel, response.response.dateList);
                                            }
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
                                            },
                                            scaleLabel: {
                                                display: true,
                                                labelString: response.response.yAxisLabel || ''
                                            }
                                            }
                                        ],
                                        xAxes: [
                                            {
                                            id: 'x-axis',
                                            display: true,
                                            stacked: true,
                                            ticks: {
                                                fontSize: 8,
                                                autoSkip: false
                                            },
                                            scaleLabel: {
                                                display: true,
                                                labelString: response.response.xAxisLabel || ''
                                            },
                                            gridLines: {
                                                display: false
                                            }
                                            }
                                        ]
                                        }
                                    },
                                    datasetOverride: {
                                        borderColor: '#666666',
                                        backgroundColor: '#6666661c',
                                        borderWidth: "0.8",
                                    }
                                }
                            }
                        break;
                        case MasterKpiRequestType.AUTOMATION_PERCENTAGE_LINECHART:
                            ctrl.automationPercentageLineChart = {
                                type:"line",
                                data : {
                                    data: response.response.data,
                                    labels: response.response.labels,
                                    symbol: response.response.unit,
                                    options: {
                                        elements: { point: { radius:1.3, hoverRadius: 1.3 } },
                                        maintainAspectRatio: false,
                                        tooltips: {
                                            enabled: false,
                                            custom: function(tooltipModel) {
                                                var current = this;
                                                customTooltip(current, tooltipModel, response.response.dateList);
                                            }
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
                                            },
                                            scaleLabel: {
                                                display: true,
                                                labelString: response.response.yAxisLabel || ''
                                            }
                                            }
                                        ],
                                        xAxes: [
                                            {
                                            id: 'x-axis',
                                            display: true,
                                            stacked: true,
                                            ticks: {
                                                fontSize: 8,
                                                autoSkip: false
                                            },
                                            scaleLabel: {
                                                display: true,
                                                labelString: response.response.xAxisLabel || ''
                                            },
                                            gridLines: {
                                                display: false
                                            }
                                            }
                                        ]
                                        }
                                    },
                                    datasetOverride: {
                                        borderColor: '#666666',
                                        backgroundColor: '#6666661c',
                                        borderWidth: "0.8",
                                    }
                                }
                            }
                        break;
                        case MasterKpiRequestType.SPRINT_PREDICTABILITY_LINECHART:
                            ctrl.sprintPredictibilityLineChart = {
                                type:"line",
                                data : {
                                    data: response.response.data,
                                    labels: response.response.labels,
                                    symbol: response.response.unit,
                                    options: {
                                        elements: { point: { radius:1.3, hoverRadius: 1.3 } },
                                        maintainAspectRatio: false,
                                        tooltips: {
                                            enabled: false,
                                            custom: function(tooltipModel) {
                                                var current = this;
                                                customTooltip(current, tooltipModel, response.response.dateList);
                                            }
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
                                            },
                                            scaleLabel: {
                                                display: true,
                                                labelString: response.response.yAxisLabel || ''
                                            }
                                            }
                                        ],
                                        xAxes: [
                                            {
                                            id: 'x-axis',
                                            display: true,
                                            stacked: true,
                                            ticks: {
                                                fontSize: 8,
                                                autoSkip: false
                                            },
                                            scaleLabel: {
                                                display: true,
                                                labelString: response.response.xAxisLabel || ''
                                            },
                                            gridLines: {
                                                display: false
                                            }
                                            }
                                        ]
                                        }
                                    },
                                    datasetOverride: {
                                        borderColor: '#666666',
                                        backgroundColor: '#6666661c',
                                        borderWidth: "0.8",
                                    }
                                }
                            }
                        break;
                        case MasterKpiRequestType.BACKLOG_HEALTH_LINECHART:
                            ctrl.backlogHealthLineChart = {
                                type:"line",
                                data : {
                                    data: response.response.data,
                                    labels: response.response.labels,
                                    symbol: response.response.unit,
                                    options: {
                                        elements: { point: { radius:1.3, hoverRadius: 1.3 } },
                                        maintainAspectRatio: false,
                                        tooltips: {
                                            enabled: false,
                                            custom: function(tooltipModel) {
                                                var current = this;
                                                customTooltip(current, tooltipModel, response.response.dateList);
                                            }
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
                                            },
                                            scaleLabel: {
                                                display: true,
                                                labelString: response.response.yAxisLabel || ''
                                            }
                                            }
                                        ],
                                        xAxes: [
                                            {
                                            id: 'x-axis',
                                            display: true,
                                            stacked: true,
                                            ticks: {
                                                fontSize: 8,
                                                autoSkip: false
                                            },
                                            scaleLabel: {
                                                display: true,
                                                labelString: response.response.xAxisLabel || ''
                                            },
                                            gridLines: {
                                                display: false
                                            }
                                            }
                                        ]
                                        }
                                    },
                                    datasetOverride: {
                                        borderColor: '#666666',
                                        backgroundColor: '#6666661c',
                                        borderWidth: "0.8",
                                    }
                                }
                            }
                        break;
                        case MasterKpiRequestType.DIR_POST_LIVE_LINECHART:
                            ctrl.dirPostLiveLineChart = {
                                type:"line",
                                data : {
                                    data: response.response.data,
                                    labels: response.response.labels,
                                    symbol: response.response.unit,
                                    options: {
                                        elements: { point: { radius:1.3, hoverRadius: 1.3 } },
                                        maintainAspectRatio: false,
                                        tooltips: {
                                            enabled: false,
                                            custom: function(tooltipModel) {
                                                var current = this;
                                                customTooltip(current, tooltipModel, response.response.dateList);
                                            }
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
                                            },
                                            scaleLabel: {
                                                display: true,
                                                labelString: response.response.yAxisLabel || ''
                                            }
                                            }
                                        ],
                                        xAxes: [
                                            {
                                            id: 'x-axis',
                                            display: true,
                                            stacked: true,
                                            ticks: {
                                                fontSize: 8,
                                                autoSkip: false
                                            },
                                            scaleLabel: {
                                                display: true,
                                                labelString: response.response.xAxisLabel || ''
                                            },
                                            gridLines: {
                                                display: false
                                            }
                                            }
                                        ]
                                        }
                                    },
                                    datasetOverride: {
                                        borderColor: '#666666',
                                        backgroundColor: '#6666661c',
                                        borderWidth: "0.8",
                                    }
                                }
                            }
                        break;
                        case MasterKpiRequestType.HAPPINESS_INDEX_BARCHART:
                            ctrl.happinessIndexBarChart = {
                                type:"bar",
                                data : {
                                    data: response.response.data,
                                    labels: response.response.labels,
                                    symbol: response.response.unit,
                                    options: {
                                        maintainAspectRatio: false,
                                        tooltips: {
                                            enabled: false,
                                            custom: function(tooltipModel) {
                                                var current = this;
                                                customTooltip(current, tooltipModel, response.response.dateList);
                                            }
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
                                            },
                                            scaleLabel: {
                                                display: true,
                                                labelString: response.response.yAxisLabel || ''
                                            }                                          
                                            }
                                        ],
                                        xAxes: [
                                            {
                                            id: 'x-axis',
                                            display: true,
                                            stacked: true,
                                            ticks: {
                                                fontSize: 8,
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
                                        backgroundColor: '#96cee0',
                                        borderColor: '#709dca'
                                    }
                                }
                            }
                        break;
                        case MasterKpiRequestType.LEAD_TIME_BACKLOG_TO_DOR_BLOCKCHART:
                            ctrl.leadTimeBacklogtoDOR_BlockChart = parseInt(response.response.value);
                        break;
                        case MasterKpiRequestType.LEAD_TIME_DOR_TO_DOD_BLOCKCHART:
                            ctrl.leadTimeDORtoDOD_BlockChart = parseInt(response.response.value);
                        break;
                        case MasterKpiRequestType.LEAD_TIME_DOD_TO_LIVE_BLOCKCHART:
                            ctrl.leadTimeDODtoLive_BlockChart = parseInt(response.response.value);
                        break;
                        default:
                            break;
                  }
              }
              ctrl.backlogBox = "";
              ctrl.dORtoDODBox = "";
              ctrl.dODtoLiveBox = "";
              if(ctrl.leadTimeBacklogtoDOR_BlockChart && ctrl.leadTimeDORtoDOD_BlockChart && ctrl.leadTimeDODtoLive_BlockChart) {
                  var total = ctrl.leadTimeBacklogtoDOR_BlockChart + ctrl.leadTimeDORtoDOD_BlockChart + ctrl.leadTimeDODtoLive_BlockChart;
                  ctrl.leadTimeNochart.value = total;
                  
                  ctrl.backlogBox = 100 * ctrl.leadTimeBacklogtoDOR_BlockChart/(total)
                  ctrl.dORtoDODBox = 100 * ctrl.leadTimeDORtoDOD_BlockChart/(total)
                  ctrl.dODtoLiveBox= 100 * ctrl.leadTimeDODtoLive_BlockChart/(total)
              }
            });
        }

        function processKpimastermap(data) {
            var accrossDashboard = [];
            var doDtoLive='';
            var doRtoDoD='';
            for(var i=0; i< data.length; i++) {
                console.log("data[i].kpiName", MasterKpiType, data[i].kpiName)
                if(MasterKpiType.LEAD_TIME === data[i].kpiName) {
                    acrossviewkpi(data[i].kpiId, 'NoChart', MasterKpiRequestType.LEAD_TIME_NOCHART, '');
                    acrossviewkpi(data[i].kpiId, 'LineChart', MasterKpiRequestType.LEAD_TIME_LINECHART, '');
                } else if(MasterKpiType.HAPPINESS_INDEX === data[i].kpiName) {
                    acrossviewkpi(data[i].kpiId, 'NoChart', MasterKpiRequestType.HAPPINESS_INDEX_NOCHART, '')
                    acrossviewkpi(data[i].kpiId, 'BarChart', MasterKpiRequestType.HAPPINESS_INDEX_BARCHART, '')
                } else if(MasterKpiType.AUTOMATION_PERCENTAGE === data[i].kpiName) {
                    acrossviewkpi(data[i].kpiId, 'NoChart', MasterKpiRequestType.AUTOMATION_PERCENTAGE_NOCHART, '')
                    acrossviewkpi(data[i].kpiId, 'LineChart', MasterKpiRequestType.AUTOMATION_PERCENTAGE_LINECHART, '')
                } else if(MasterKpiType.SPRINT_PREDICTABILITY == data[i].kpiName) {
                    acrossviewkpi(data[i].kpiId, 'NoChart', MasterKpiRequestType.SPRINT_PREDICTABILITY_NOCHART, '')
                    acrossviewkpi(data[i].kpiId, 'LineChart', MasterKpiRequestType.SPRINT_PREDICTABILITY_LINECHART, '')
                } else if(MasterKpiType.DIR_POST_LIVE === data[i].kpiName) {
                    acrossviewkpi(data[i].kpiId, 'NoChart', MasterKpiRequestType.DIR_POST_LIVE_NOCHART, '')
                    acrossviewkpi(data[i].kpiId, 'LineChart', MasterKpiRequestType.DIR_POST_LIVE_LINECHART, '')
                } else if(MasterKpiType.BACKLOG_HEALTH === data[i].kpiName) {
                    acrossviewkpi(data[i].kpiId, 'NoChart', MasterKpiRequestType.BACKLOG_HEALTH_NOCHART, '')
                    acrossviewkpi(data[i].kpiId, 'LineChart', MasterKpiRequestType.BACKLOG_HEALTH_LINECHART, '')
                } else if(MasterKpiType.DOR_TO_DOD === data[i].kpiName) {
                    doRtoDoD = data[i].kpiId;
                    acrossviewkpi(data[i].kpiId, 'BlockChart', MasterKpiRequestType.LEAD_TIME_DOR_TO_DOD_BLOCKCHART, '')
                } else if(MasterKpiType.DOD_TO_LIVE === data[i].kpiName) {
                    doDtoLive = data[i].kpiId;
                    acrossviewkpi(data[i].kpiId, 'BlockChart', MasterKpiRequestType.LEAD_TIME_DOD_TO_LIVE_BLOCKCHART, '')
                } else if(MasterKpiType.BACKLOG_TO_DOR === data[i].kpiName) {
                    acrossviewkpi(data[i].kpiId, 'BlockChart', MasterKpiRequestType.LEAD_TIME_BACKLOG_TO_DOR_BLOCKCHART, '')
                }
            }
            if(doRtoDoD && doDtoLive) {
                acrossviewkpi(doRtoDoD, 'PieChart', MasterKpiRequestType.LEAD_TIME_PIECHART, doDtoLive)
            }           
        }
        
        function processKpimastermapError() {
            
        }

        ctrl.openAggregateDashboardDetails = function() {
            ctrl.isAggregatedDashboardActive = true;
            aggregateDashboard();
        }

        ctrl.backToAcrossView = function() {
            ctrl.isAggregatedDashboardActive = false;
            kpimastermap();
        }

        function customTooltip(current, tooltipModel, dateList) {
                // Tooltip Element
                var tooltipEl = document.getElementById('chartjs-tooltip');

                // Create element on first render
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.style="background:#000;color:#fff;border:1px solid gray";
                    tooltipEl.innerHTML = "<table></table>";
                    document.body.appendChild(tooltipEl);
                }

                // Hide if no tooltip
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                }

                // Set caret Position
                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                    return bodyItem.lines//bodyItem.lines[0] === "-1"? ["NA"] : bodyItem.lines;
                }

                // Set Text
                if (tooltipModel.body) {
                    var titleLines = dateList && [dateList[tooltipModel.dataPoints[0].index]] || []//tooltipModel.title || [];//hide x-lables on tooltip and display external dateList objects
                    var bodyLines = tooltipModel.body.map(getBody);

                    var innerHtml = '<thead>';

                    titleLines.forEach(function(title) {
                        innerHtml += '<tr><th>' + title + '</th></tr>';
                    });
                    innerHtml += '</thead><tbody>';

                    bodyLines.forEach(function(body, i) {
                        var colors = tooltipModel.labelColors[i];
                        var style = 'background:#fff' + colors.backgroundColor;
                        style += '; border-color:' + colors.borderColor;
                        style += '; border-width: 2px';
                        var span = '<span style="' + style + '">'+body+'</span>';
                        innerHtml += '<tr><td>' + span + '</td></tr>';
                    });
                    innerHtml += '</tbody>';

                    var tableRoot = tooltipEl.querySelector('table');
                    tableRoot.innerHTML = innerHtml;
                }

                // `this` will be the overall tooltip
                var position = current._chart.canvas.getBoundingClientRect();
                
                // Display, position, and set styles for font
                tooltipEl.style.opacity = 1;
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.left = position.left + tooltipModel.caretX + 'px';
                tooltipEl.style.top = window.scrollY + position.top + tooltipModel.caretY + 'px';
                tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
                tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
                tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
        }
        aggregateDashboard();
        
        kpimastermap()

        aggregateFilteredlist({});

        $scope.$watch('$root.logoImage', function() {
            ctrl.logoImage = $rootScope.logoImage || localStorage.getItem('logoImage');
        });
    }
})();