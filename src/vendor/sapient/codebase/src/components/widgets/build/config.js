/**
 * Build widget configuration
 */
(function () {
    'use strict';
    angular
        .module(HygieiaConfig.module)
        .controller('BuildWidgetConfigController', BuildWidgetConfigController);
    BuildWidgetConfigController.$inject = ['modalData', '$scope', 'collectorData', '$uibModalInstance'];
    function BuildWidgetConfigController(modalData, $scope, collectorData, $uibModalInstance) {
        var ctrl = this,
        widgetConfig = modalData.widgetConfig;
        
        // public variables
        ctrl.buildDurationThreshold = 3;
        ctrl.buildConsecutiveFailureThreshold = 5;
        
        $scope.getJobs = function (filter) {
        	return collectorData.itemsByType('build', {"search": filter, "size": 20}).then(function (response){
        		return response;
        	});
        }
        
        loadSavedBuildJob();
        // set values from config
        if (widgetConfig) {
            if (widgetConfig.options.buildDurationThreshold) {
                ctrl.buildDurationThreshold = widgetConfig.options.buildDurationThreshold;
            }
            if (widgetConfig.options.consecutiveFailureThreshold) {
                ctrl.buildConsecutiveFailureThreshold = widgetConfig.options.consecutiveFailureThreshold;
            }
        }
        // public methods
        ctrl.submit = submitForm;

        // method implementations
        function loadSavedBuildJob(){
            ctrl.buildId ="";
        	var buildCollector = modalData.dashboard.application.components[0].collectorItems.Build,
            savedCollectorBuildJob = buildCollector ? $('.build-nav-tabs li.active').text().trim() : null;

            if(savedCollectorBuildJob) {
            	for(var i=0;i<buildCollector.length;i++){
            		if(buildCollector[i].description==savedCollectorBuildJob){
            			ctrl.buildId = buildCollector[i].id;
            			if(modalData && modalData.dashboard){
            				
            				var filteredBuildModelWidgets=[];
            				for(var zz=0;zz<modalData.dashboard.widgets.length;zz++){
            					if(modalData.dashboard.widgets[zz].name=="build" && modalData.dashboard.widgets[zz].collectorItemIds[0]==buildCollector[i].id){
            						widgetConfig=JSON.parse(JSON.stringify(modalData.dashboard.widgets[zz]));
            						filteredBuildModelWidgets.push(JSON.parse(JSON.stringify(modalData.dashboard.widgets[zz])));
            					}
            				}
            				
            				
            			//widgetConfig=filteredBuildModelWidgets[i];
            			}
            		}
            	}
                
            	$scope.getJobs(savedCollectorBuildJob).then(getBuildsCallback) 
            }
        }
        
        function getBuildsCallback(data) {
            _(data).forEach(function (item) {
                if(item.id == ctrl.buildId){
                    ctrl.collectorItemId = item;
                }
            });
        }

        function submitForm(valid, collector) {
			if (valid) {
		         var form = document.buildConfigForm;
		         var origWidget=$('.build-nav-tabs li.active').text().trim();
				 var origCollectorItemId="";
				 for(var t=0;t<dashboardGlobalData.application.components[0].collectorItems.Build.length;t++){
				 	if(origWidget==dashboardGlobalData.application.components[0].collectorItems.Build[t].description){
				 		origCollectorItemId=dashboardGlobalData.application.components[0].collectorItems.Build[t].id;
				 	}
				 }
				 var postObj = {
				     name: 'build',
				     options: {
				     	id: widgetConfig.options.id,
				         buildDurationThreshold: parseFloat(form.buildDurationThreshold.value),
				         consecutiveFailureThreshold: parseFloat(form.buildConsecutiveFailureThreshold.value),
				         isNew:false,
				         originalCollectorItemid:origCollectorItemId
				     },
				     componentId: modalData.dashboard.application.components[0].id,
				     collectorItemId: collector.id,
				 };
				 // pass this new config to the modal closing so it's saved
			     $uibModalInstance.close(postObj);
			     
			     setTimeout(function(){ 
			    	 if($('.build-nav-tabs li:last').text().trim()=='Add New'){
	                		$('.build-nav-tabs li:last').click();
	                	}else{
	            	 	$('.build-nav-tabs li:last').click(); }
	            }, 3000);
			 } 
        }
    }
})();
