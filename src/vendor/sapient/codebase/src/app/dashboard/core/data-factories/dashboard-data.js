/**
 * Communicates with dashboard methods on the api
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module + '.core')
        .constant('DashboardType', {
            PRODUCT: 'product',
            TEAM: 'team',
            CUSTOM: 'custom'
        })
        .factory('dashboardData', dashboardData);

    function dashboardData($http, $q) {
        var testSearchRoute = 'test-data/dashboard_search.json';
        var testDetailRoute = 'test-data/dashboard_detail.json';
        var testOwnedRoute='test-data/dashboard_owned.json';
        var testAllUsersRoute= 'test-data/all_users.json';
        var testOwnersRoute = 'test-data/owners.json';
        var  testMatchversion = 'test-data/matchversion.json';
        var testLogoImagePath = 'test-data/logo.json';
        var testAggregateDashboardRoute = 'test-data/aggregate-dashboard.json';
        var testAggregateProjectSettingsRoute = 'test-data/aggregate-project-settings.json';

        var dashboardRoute = '/api/dashboard';
        var mydashboardRoute = "/api/dashboard/mydashboard";
        var myownerRoute = "/api/dashboard/myowner";
        var updateBusItemsRoute = '/api/dashboard/updateBusItems'
        var  matchversion = 'api/speedy/getversionmetadata';
        var logoImagePath = 'api/file/logo';
        var aggregateDashboardRoute = 'api/aggregated/gridaccountview';
        var aggregateDashboardProjectViewRoute = 'api/aggregated/gridprojectview';
        var aggregateFilterListRoute = "api/aggregated/filteredlist";
        var kpimastermapRoute = "api/aggregated/kpimastermap";
        var acrossviewkpiRoute = "api/aggregated/acrossviewkpi";
        var aggregateProjectSettingsRoute = 'api/aggregated/orgHierarchy';
        var saveOrgHierarchyRoute = 'api/aggregated/saveOrgHierarchy';
        var kpiDataRoute = 'api/aggregated/getKpiData';
        var saveKpiDataRoute = 'api/aggregated/saveKpiData';

        return {
            search: search,
            mydashboard: mydashboard,
            myowner: myowner,
            owners: owners,
            updateOwners: updateOwners,
            detail: detail,
            create: create,
            delete: deleteDashboard,
            rename: renameDashboard,
            upsertWidget: upsertWidget,
            types: types,
            getComponent:getComponent,
            updateBusItems:updateBusItems,
            getMatchVersions: getMatchVersions,
            getLogoImage: getLogoImage,
            getAggregateDashboard: getAggregateDashboard,
            getAggregateFilteredlist: getAggregateFilteredlist,
            getKpimastermap: getKpimastermap,
            getAcrossviewkpi: getAcrossviewkpi,
            getAggregateProjectSetting: getAggregateProjectSetting,
            saveOrgHierarchy: saveOrgHierarchy,
            getKpiData: getKpiData,
            saveKpiData: saveKpiData
        };

        // reusable helper
        function getPromise(route) {
            return $http.get(route).then(function (response) {
                return response.data;
            });
        }
        
        // gets list of dashboards
        function search() {
            return getPromise(HygieiaConfig.local ? testSearchRoute : dashboardRoute);
        }

        //gets list of owned dashboard
        function mydashboard(username){
          return getPromise(HygieiaConfig.local ? testOwnedRoute : mydashboardRoute);
        }

        //gets dashboard owner from dashboard title
        function myowner(id)
        {
            return getPromise(HygieiaConfig.local ? testOwnedRoute : myownerRoute + "/" + id );
        }

        //gets component from componentId
        function getComponent(componentId){
            return getPromise(HygieiaConfig.local ? testOwnedRoute : myComponentRoute+ '/' + componentId);
        }

        function owners(id) {
            return getPromise(HygieiaConfig.local ? testOwnersRoute : dashboardRoute + "/" + id + "/owners");
        }
        
        function updateOwners(id, owners) {
        	return $http.put(dashboardRoute + "/" + id + "/owners", owners).then(function (response) {
                return response.data;
            });
        }

        // gets info for a single dashboard including available widgets
        function detail(id) {
            return getPromise(HygieiaConfig.local ? testDetailRoute : dashboardRoute + '/' + id);
        }

        // creates a new dashboard
        function create(data) {
            return $http.post(dashboardRoute, data)
                .success(function (response) {
                    return response.data;
                })
                .error(function (response) {
                    return null;
                });
        }


        // renames a dashboard

        function renameDashboard(id,newDashboardName, dashboardType, aggrFlag){
             console.log("In data renaming dashboard");
            var postData= {
                 title: newDashboardName
            }
            if(dashboardType === 'Team') {
                postData.aggrFlag = aggrFlag
            }
            return $http.put(dashboardRoute+"/rename/"+id, postData)
                .success(
                    function (response) {
                    return response.data;
                })
                .error (function (response) {
                    console.log("Error Occured while renaming Dashboard in Data layer:"+JSON.stringify(response));
                    return response.data;
                });
        }

        // deletes a dashboard
        function deleteDashboard(id) {
            return $http.delete(dashboardRoute + '/' + id)
                .then(function (response) {
                    return response.data;
            });
        }

        function types() {
            return [
                {
                    "id": "team",
                    "name": "Engineering Team"
                },
                {
                    "id": "product",
                    "name": "Product"
                },
                {
                    "id": "custom",
                    "name": "Team"
                }
            ];

        }

        // can be used to add a new widget or update an existing one
        function upsertWidget(dashboardId, widget) {
            // create a copy so we don't modify the original
            widget = angular.copy(widget);

            console.log('New Widget Config', widget);

            var widgetId = widget.id,
            widgetUrl = widget.baseUrl || 'widget';

            if (widgetId) {
                // remove the id since that would cause an api failure
                delete widget.id;
            }

            delete widget.baseUrl;

            var route = widgetId ?
                $http.put(dashboardRoute + '/' + dashboardId + "/" + widgetUrl + "/" + widgetId, widget) :
                $http.post(dashboardRoute + '/' + dashboardId + "/" + widgetUrl, widget);

            return route.then(function (response) {
                return response.data;
            });
        }

        function updateBusItems(id, data) {
            return $http.put(updateBusItemsRoute+"/"+id, data)
                .success(function (response) {
                    return response.data;
                })
                .error(function (response) {
                    return null;
                });
        }

        //gets list of owned dashboard
        function getMatchVersions(){
            return getPromise(HygieiaConfig.local ? testMatchversion : matchversion);
        }

        //get logo from db
        function getLogoImage(){
            return getPromise(HygieiaConfig.local ? testLogoImagePath : logoImagePath);
        }

        // gets aggregrated dashboard
        function getAggregateDashboard(postData, viewType) {            
            var route;
            if(viewType == 'account') {
                route = $http.post(aggregateDashboardRoute, postData);
            }else {
                route = $http.post(aggregateDashboardProjectViewRoute, postData);
            }
            return route.then(function (response) {
                return response.data;
            });
        }

        //get aggregrated filterlist
        function getAggregateFilteredlist(postData, queryParam) {
            var route = $http.post(aggregateFilterListRoute+'?selection='+ queryParam, postData);
            return route.then(function (response) {
                return response.data;
            });
        }
        
         //get Kpimastermap
         function getKpimastermap(postData, queryParam) {
            return getPromise(HygieiaConfig.local ? kpimastermapRoute : kpimastermapRoute);
        }

        //get Acrossviewkpi
        function getAcrossviewkpi(postData, firstKpi, graphtype, kpiRequestType, secondKpi) {
            var route = $http.post(acrossviewkpiRoute+'?firstkpi='+ firstKpi+'&graphtype='+graphtype+'&secondkpi='+secondKpi, postData);
            // return route.then(function (response) {
            //     return response.data;
            // });

                var deferred = $q.defer();                
                route.success(function (response) {
                       // deferred.resolve(response);
                       deferred.resolve({
                           response: response,
                           kpiRequestType: kpiRequestType
                    })
                    })
                    .error(function (response) {
                        deferred.reject(response);
                    });

                return deferred.promise;
        }

        function getAggregateProjectSetting(){
            return getPromise(HygieiaConfig.local ? testAggregateProjectSettingsRoute : aggregateProjectSettingsRoute);
        }
 
        function saveOrgHierarchy(postData) {
            var route = $http.post(saveOrgHierarchyRoute, postData);
            return route.then(function (response) {
                return response.data;
            });
        }

        function getKpiData(){
            return getPromise(HygieiaConfig.local ? kpiDataRoute : kpiDataRoute);
        }
        function saveKpiData(postData){
            var route = $http.post(saveKpiDataRoute, postData);
            return route.then(function (response) {
                return response.data;
            });
        }
    }
})();
