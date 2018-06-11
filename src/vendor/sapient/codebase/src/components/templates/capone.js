/***********
 * Controller for the dashboard route.
 * Render proper template.
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('CapOneTemplateController', CapOneTemplateController);

    CapOneTemplateController.$inject = ['$scope','$rootScope'];
    function CapOneTemplateController($scope, $rootScope) {
        var ctrl = this;

        //  Temp work around to allow calling repo widget function 
        ctrl.repoWidgetFunctions ={} 

        ctrl.tabs = [
            { name: "Widget"},
            { name: "Pipeline"},
            { name: "Cloud"}
        ];
ctrl.dashboardGlobalData=dashboardGlobalData;

        ctrl.generateName = function(url){
            return _.last(url.split('/'));
        }


        ctrl.minitabs = [
            { name: "Quality"},
            { name: "QualityJS"},
            { name: "Performance"},
            { name: "Security"},
            { name: "Accessibility"}

        ];

        ctrl.widgetView = ctrl.tabs[0].name;
        ctrl.toggleView = function (index) {
            ctrl.widgetView = typeof ctrl.tabs[index] === 'undefined' ? ctrl.tabs[0].name : ctrl.tabs[index].name;
        };

        ctrl.miniWidgetView = ctrl.minitabs[0].name;
        ctrl.miniToggleView = function (index) {
            ctrl.miniWidgetView = typeof ctrl.minitabs[index] === 'undefined' ? ctrl.minitabs[0].name : ctrl.minitabs[index].name;
        };
        
       var addBuild={};
        
        addBuild.description="Add New";
       
            
        
        ctrl.dashboardGlobalData.application.components[0].collectorItems.Build=ctrl.dashboardGlobalData.application.components[0].collectorItems.Build||[];
        var buildArray=[];
        for(var g=0;g<ctrl.dashboardGlobalData.application.components[0].collectorItems.Build.length;g++){
        	var buildId=ctrl.dashboardGlobalData.application.components[0].collectorItems.Build[g].id;
        	if(ctrl.dashboardGlobalData.widgets){
	        	for(var f=0;f<ctrl.dashboardGlobalData.widgets.length;f++){
	        		if(buildId==ctrl.dashboardGlobalData.widgets[f].collectorItemIds[0] && ctrl.dashboardGlobalData.widgets[f].name=="build"){
	        			buildArray.push(JSON.parse(JSON.stringify(ctrl.dashboardGlobalData.application.components[0].collectorItems.Build[g])));	        			
	        		}
	        	}
        	}
        }
        ctrl.dashboardGlobalData.application.components[0].collectorItems.Build=[];
        ctrl.dashboardGlobalData.application.components[0].collectorItems.Build=buildArray;
        var buildLen=ctrl.dashboardGlobalData.application.components[0].collectorItems.Build.length;
        var addNewPresent=false;
        
      
        		for(var i=0;i<buildLen;i++){
        			if(ctrl.dashboardGlobalData.application.components[0].collectorItems.Build[i].description=="Add New"){
        				addNewPresent=true;
        			}
        		}
        
        	if(!addNewPresent){
        	 ctrl.dashboardGlobalData.application.components[0].collectorItems.Build.push(addBuild);
        	}
        	
        	
        	
        ctrl.miniBuildWidgetView = ctrl.dashboardGlobalData.application.components[0].collectorItems.Build[0].description;
       
        ctrl.miniBuildToggleView = function (index) {
        	
        	
        	ctrl.dashboardGlobalData=dashboardGlobalData;
        	 var addBuild={};
             
             addBuild.description="Add New";
             ctrl.dashboardGlobalData.application.components[0].collectorItems.Build=ctrl.dashboardGlobalData.application.components[0].collectorItems.Build||[];
            
             var buildLen=ctrl.dashboardGlobalData.application.components[0].collectorItems.Build.length;
             var addNewPresent=false;
             
           
             		for(var i=0;i<buildLen;i++){
             			if(ctrl.dashboardGlobalData.application.components[0].collectorItems.Build[i].description=="Add New"){
             				addNewPresent=true;
             			}
             		}
             
             	if(!addNewPresent){
             	 ctrl.dashboardGlobalData.application.components[0].collectorItems.Build.push(addBuild);
             	}
             ctrl.miniBuildWidgetView = ctrl.dashboardGlobalData.application.components[0].collectorItems.Build[0].description;
            
        	
        	
        	
            ctrl.miniBuildWidgetView = typeof ctrl.dashboardGlobalData.application.components[0].collectorItems.Build[index] === 'undefined' ? ctrl.dashboardGlobalData.application.components[0].collectorItems.Build[0].description : ctrl.dashboardGlobalData.application.components[0].collectorItems.Build[index].description;
        };
        
        // if we have a repo widget, lets show it
        if(ctrl.dashboardGlobalData.application.components[0].collectorItems.SCM) ctrl.dashboardGlobalData.application.components[0].collectorItems.SCM[0].show = true;

        //  This shows tabed repos
        ctrl.showRepoWidget = function(widget){
          _.each(ctrl.dashboardGlobalData.application.components[0].collectorItems.SCM, function(item) {
            item.show = false;
          });
          widget.show = true;
        }

        $scope.$watch('$root.logoImage', function() {
             ctrl.logoImage = $rootScope.logoImage;
         });
 
    }
    
})();
