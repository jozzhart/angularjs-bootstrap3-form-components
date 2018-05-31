/**
 * Manages all communication with widgets and placeholders
 * Should be included at the root of the layout file and pass in the dashboard
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module + '.core')
        .directive('widgetContainer', widgetContainer);

    widgetContainer.$inject = ['$compile'];
    function widgetContainer($compile) {
        return {
            restrict: 'A',
            scope: {
                dashboard: '='
            },
            link: link,
            controller: controller

        };

        function controller($scope) {
            /*jshint validthis:true */
            if (!$scope.dashboard) {
                throw new Error('dashboard not accessible by widget-container directive');
            }

            // keep track of the various types of widgets
            $scope.placeholders = [];
            $scope.registeredWidgets = {};
            $scope.processedWidgetNames = [];

            // public methods
            this.registerPlaceholder = registerPlaceholder;
            this.registerWidget = registerWidget;
            this.upsertWidget = upsertWidget;
            this.upsertComponent = upsertComponent;

            // add a new placeholder
            function registerPlaceholder(placeholder) {
                $scope.placeholders.push(placeholder);
            }

            // add a new widget
            function registerWidget(widget) {
                if(!widget.attrs.name) {
                    throw new Error('Widget name not defined');
                }

                var name = widget.attrs.name = widget.attrs.name.toLowerCase();

                if(!$scope.registeredWidgets[name]) {
                    $scope.registeredWidgets[name] = [];
                }

                $scope.registeredWidgets[name].push(widget);

                // give the widget an id based on index
                /**
                 * TODO: this widget naming is a hack that won't work with placeholders
                 * and configuring widgets out of order in a layout.
                 * Maybe adding a placeholder index to the widget
                 */
                var widgetId = name + ($scope.registeredWidgets[name].length - 1);
                var foundConfig = {options: {id: widgetId}};
                var configInDashboard = false;

                var selectedWidgetCollectorItemId="";
                var selectedBuildWidgetName="";
                
                
                
                if($('.build-nav-tabs li:hover').text()){
                	selectedBuildWidgetName=$('.build-nav-tabs li:hover').text().trim();
                  }else if($('.build-nav-tabs li.active').text()){
                	  selectedBuildWidgetName=$('.build-nav-tabs li.active').text().trim();
                  }
                _($scope.dashboard.application.components[0].collectorItems.Build).forEach(function (buildData) {
                	if(buildData.description==selectedBuildWidgetName){
                		selectedWidgetCollectorItemId=buildData.id;
                	}
                });
                
                
                // get currently saved widget config
                _($scope.dashboard.widgets).forEach(function (config) {
                    if (config.options && config.options.id == widgetId) {
                    	if(widgetId=='build0'){
                    		if(config.collectorItemIds[0]==selectedWidgetCollectorItemId){
                    			 foundConfig = config;
                                 configInDashboard = true;
                    		}
                    	}else{
                    		 // process widget with the config object
                            foundConfig = config;
                            configInDashboard = true;
                    	}
                       
                    }
                });

                if (widget.callback) {
                    $scope.processedWidgetNames.push(widgetId);
                    widget.callback(configInDashboard, foundConfig, $scope.dashboard);
                }
            }

            function upsertComponent(newComponent) {
                // not all widgets have to have components so this may be null
                if(newComponent == null) {
                    return;
                }

                // Currently there will only be one component on the dashboard, but this logic should work
                // when that changes and multiple are available
                
                
                var foundComponent = false;

                var addBuild={};

                
                addBuild.description="Add New";
                newComponent.collectorItems.Build=newComponent.collectorItems.Build||[];
               
                
                
                
                
               var buildArray=[];
                for(var g=0;g<newComponent.collectorItems.Build.length;g++){
                	var buildId=newComponent.collectorItems.Build[g].id;
                	if($scope.dashboard.widgets){
        	        	for(var f=0;f<$scope.dashboard.widgets.length;f++){
        	        		if(buildId==$scope.dashboard.widgets[f].collectorItemIds[0] && $scope.dashboard.widgets[f].name=="build"){
        	        			buildArray.push(JSON.parse(JSON.stringify(newComponent.collectorItems.Build[g])));	        			
        	        		}
        	        	}
                	}
                }
                newComponent.collectorItems.Build=[];
                newComponent.collectorItems.Build=buildArray;
                
                
               
                
                
                
                var buildLen=newComponent.collectorItems.Build.length;
                var addNewPresent=false;
                
              
                		for(var i=0;i<buildLen;i++){
                			if(newComponent.collectorItems.Build[i].description=="Add New"){
                				addNewPresent=true;
                			}
                		}
                
                	if(!addNewPresent){
                		newComponent.collectorItems.Build.push(addBuild);
                	}
                
                
                
                

                _($scope.dashboard.application.components).forEach(function (component, idx) {
                    if(component.id == newComponent.id) {
                        foundComponent = true;
                        $scope.dashboard.application.components[idx] = newComponent;
                    }
                });
                
                if(!foundComponent) {
                    $scope.dashboard.application.components.push(newComponent);
                }
            }

            function upsertWidget(newConfig) {
                // update the local config id
                // widget directive handles api updates
                var foundMatch = false;

                $.each($scope.dashboard.widgets, function(index, config) {
                	if(newConfig.name=="build"){
                		if(config.id === newConfig.id) {
                            foundMatch = true;
                            $scope.dashboard.widgets[index] = angular.extend(config, newConfig);
                        }
                	}
                	else if(config.options.id === newConfig.options.id) {
                        foundMatch = true;
                        $scope.dashboard.widgets[index] = angular.extend(config, newConfig);
                    }
                }); 

                //Commented the below snippet to replace the logic by the above snippet. The change in logic is to accommodate the QualityJS Tab in the Capone Dashboard.
                
               /* _($scope.dashboard.widgets)
                    .filter(function(config) {
                        return config.options.id === newConfig.options.id;
                    }).forEach(function (config, idx) {
                        foundMatch = true;

                        $scope.dashboard.widgets[idx] = angular.extend(config, newConfig);
                    });*/

                if(!foundMatch) {
                    $scope.dashboard.widgets.push(newConfig);
                }
            }
        }

        // TODO: loop through placeholders and place any widgets not already processed in them
        function link($scope) {
            // process placeholders
            // get the dashboard controller (just need widgets?)
            if ($scope.placeholders.length === 0) {
                return;
            }

            _($scope.dashboard.widgets)
                .filter(function (widget) {
                    return $scope.processedWidgetNames.indexOf(widget.options.id) == -1;
                })
                .forEach(function (item, idx) {
                    var remainder = idx % $scope.placeholders.length;
                    var widget = $scope.dashboard.widgets[idx];

                    var el = $compile('<widget name="' + widget.name + '"></widget>')($scope);

                    $scope.placeholders[remainder].element.append(el);
                });
        }
    }
})();