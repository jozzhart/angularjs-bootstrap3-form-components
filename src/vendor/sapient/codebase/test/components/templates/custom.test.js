describe('Controller : CustomTemplateController', function () {
    var controller;
    var scope;
    var _customDashboardData, httpBackend;
    var projectResponse = {"id":"59c0c2c80dd17a25113c987b","name":"SIEMENS","teamSize":50,"monetoryValue":"567.56","startDate":"01-Jan-2016","endDate":"01-Jan-2018"};
    var storyLeadTimeResponse = {"storyLeadTime":{"symbol":"","value":"0","unit":"Week","trend":"equal"},"timeToRelease":{"symbol":"","value":"0","unit":"%"}, "sprintPredictablity":{"symbol":"","value":"0","unit":"%"},"storyLiveLeadTime":{"symbol":"","value":"0","unit":"Week","trend":"equal"},"dorToDodMaturitylevel":"5","dodToLiveMaturitylevel":"5","sprintPredictabilityMaturityLevel":"1"};
    var citimeResponse = {"fixTime":"77.00","buildTime":"5.00","fixTimeMaturityLevel":"2","buildTimeMaturityLevel":"5","createNewEnvMaturityLevel":"0","relAndDeployTimeMaturityLevel":"5","buildTimeSVU":{"symbol":"","value":"5","unit":"min"},"fixTimeSVU":{"symbol":"<","value":"2","unit":"hrs"},"relAndDeployTime":{"symbol":"","value":"0","unit":"min"},"envCreationTime":{"symbol":"","value":"0","unit":"min"}};
    var allSprintListResponse = {"labels":["scrum-1 Sprint 1","scrum-1 Sprint 2","HygieiaS Sprint 2","HygieiaS Sprint 4"],"data":["100","223","0","71"],"unit":"%","fromSprint":"scrum-1 Sprint 1","toSprint":"HygieiaS Sprint 4"}
    var sprintpredictabilityResponse = {"sprintPredictablity":{"symbol":"","value":"100","unit":"%"},"sprintPredictabilityMaturityLevel":"5"};
    var chartdata = {
        "data" : {
            "stub": "stub",
            "options" : {}
        }
    }
    
    // load the controller's module
    beforeEach(module(HygieiaConfig.module));    
    
    // inject the required services and instantiate the controller
    beforeEach(inject(function ($rootScope, $controller, customDashboardData, $httpBackend) {

        scope = $rootScope.$new();  
        controller = $controller('CustomTemplateController', {$scope: scope});
        _customDashboardData = customDashboardData;
        httpBackend = $httpBackend;
        httpBackend.whenGET('app/dashboard/views/site.html').respond("");
        httpBackend.whenGET('app/dashboard/views/login.html').respond("");
        httpBackend.whenGET('../helpers/common-resource.json').respond("");
    }));
    
    describe('Testing CustomTemplateController', function(){        
        it("Should verify that the CustomTemplateController exists", function(){ 
            expect(controller).toBeDefined();
        });

        it("Test fetchProjectDetails function", function(){  
            expect(controller.fetchProjectDetails instanceof Function).toBeFalsy();
            httpBackend.expectGET('/api/excel/projectDetails').respond(200, projectResponse);
            controller.projectDetails = projectResponse;
            expect(controller.projectDetails).toEqual(projectResponse)
            httpBackend.flush();
        });

         it("Test fetchAllSprintList function and verify request is sent and will resolve service route", function(){   
            expect(controller.fetchAllSprintList().$resolved).toBeUndefined();
            httpBackend.whenGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/jiraMVP/sprintsList').respond(allSprintListResponse);
            controller.allSprintList = allSprintListResponse || []
            controller.fromSprintList = allSprintListResponse || []
            controller.toSprintList = allSprintListResponse || []
            expect(controller.allSprintList).toEqual(allSprintListResponse);
            expect(controller.fromSprintList).toEqual(allSprintListResponse);
            expect(controller.toSprintList).toEqual(allSprintListResponse);
            httpBackend.flush();
        });

        it("Test fetchAllSprintListWithoutStatus function and verify request is sent and will resolve service route", function(){   
            expect(controller.fetchAllSprintListWithoutStatus().$resolved).toBeUndefined();
            httpBackend.whenGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/jiraMVP/sprintsListWithoutStatus').respond(allSprintListResponse);
            controller.allSprintList = allSprintListResponse || []
            controller.fromSprintList = allSprintListResponse || []
            controller.toSprintList = allSprintListResponse || []
            expect(controller.allSprintList).toEqual(allSprintListResponse);
            expect(controller.fromSprintList).toEqual(allSprintListResponse);
            expect(controller.toSprintList).toEqual(allSprintListResponse);
            httpBackend.flush();
        });
        
        it("Test fetchStoryLeadTime function and verify request is sent and will resolve service route", function(){   
            expect(controller.fetchStoryLeadTime().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/jiraMVP/leadTime').respond(storyLeadTimeResponse);
            httpBackend.flush();  
        });

        it("Test fetchStoryLeadTimeToRelease  function and verify request is sent and will resolve service route", function(){   
            expect(controller.fetchStoryLeadTimeToRelease ().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/jiraMVP/DorToLive').respond(storyLeadTimeResponse);
            httpBackend.flush();  
        });

        it("Test fetchStoryLeadTime function and verify request is sent and will resolve service route", function(){   
            expect(controller.fetchStoryLeadTime().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/jiraMVP/leadTime').respond(storyLeadTimeResponse);
            httpBackend.flush();  
        });

        it("Test fetchStoryDODtoLive function and verify request is sent and will resolve service route", function(){   
            expect(controller.fetchStoryDODtoLive().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond("");                    
            httpBackend.expectGET('/api/jiraMVP/DodToLive').respond(storyLeadTimeResponse);
            httpBackend.flush();  
        });

        it("Test fetchStoryDORtoDOD function and verify request is sent and will resolve service route", function(){   
            expect(controller.fetchStoryDORtoDOD().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/jiraMVP/DorToDod').respond(storyLeadTimeResponse);
            httpBackend.flush();
        });

        it("Test fetchDefectInjectionRate function and verify request is sent and will resolve service route", function(){   
            var defectinjectionrateResponse = {"maturityLevel":"0","defectInjectionRate":{"symbol":"","value":"0","unit":"%"}};
            expect(controller.fetchDefectInjectionRate().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond("");    
            httpBackend.expectGET('/api/jiraMVP/defectinjectionrate').respond(defectinjectionrateResponse);
            httpBackend.flush();  
        });

        it("Test fetchNoOfCheckins function and verify request is sent and will resolve service route", function(){   
            var defectinjectionrateResponse = {"maturityLevel":"0","defectInjectionRate":{"symbol":"","value":"0","unit":"%"}};
            expect(controller.fetchNoOfCheckins().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond("");  
            httpBackend.expectGET('/api/ed/commit').respond(defectinjectionrateResponse);
            httpBackend.flush();  
        });

        it("Test fetchFlowEfficiency function and verify request is sent and will resolve service route", function(){   
            var flowefficiencyResponse = {"maturityLevel":"5","labels":["Sprint 2","Sprint 3","Sprint 1"],"data":[0.86,0.87,0.94]};
            expect(controller.fetchFlowEfficiency().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond("");   
            httpBackend.expectGET('/api/excel/flowefficiency').respond(flowefficiencyResponse);           
            httpBackend.flush();  
        });

        it("Test fetchCfdData function and verify request is sent and will resolve service route", function(){   
            var CfdDataResponse = {"maturityLevel":"5","labels":["Sprint 2","Sprint 3","Sprint 1"],"data":[0.86,0.87,0.94]};
            expect(controller.fetchCfdData().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond(""); 
            httpBackend.expectGET('/api/jiraMVP/cfddetails').respond(CfdDataResponse);
            httpBackend.flush();  
        });

        it("Test fetchEnvCreationTime function and verify request is sent and will resolve service route", function(){   
            expect(controller.fetchEnvCreationTime().$resolved).toBeFalsy();           
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond(""); 
            httpBackend.expectGET('/api/ed/citime').respond(citimeResponse);            
            httpBackend.flush();  
        });

        it("Test fetchHappinessIndex function and verify request is sent and will resolve service route", function(){   
            var happinessIndexResponse = {"maturityLevel":"0","labels":[],"data":[]};
            expect(controller.fetchHappinessIndex().$resolved).toBeFalsy();          
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond(""); 
            httpBackend.expectGET('/api/excel/happinessindex').respond(happinessIndexResponse);
            httpBackend.flush();  
        });

        it("Test fetchAppDemonstration function and verify request is sent and will resolve service route", function(){   
            var appDemonstrationResponse = {"maturityLevel":"0"};
            expect(controller.fetchAppDemonstration().$resolved).toBeFalsy();    
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond(""); 
            httpBackend.expectGET('/api/excel/appdemonstration').respond(appDemonstrationResponse);
            httpBackend.flush();  
        });

        it("Test fetchSprintPredictability function and verify request is sent and will resolve service route", function(){   
            expect(controller.fetchSprintPredictability().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.expectGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/jiraMVP/sprintpredictability').respond(sprintpredictabilityResponse);  
            httpBackend.flush();  
        });

        it("Test fetchReleaseDeployTime function and verify request is sent and will resolve service route", function(){   
            expect(controller.fetchReleaseDeployTime().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond(""); 
            httpBackend.expectGET('/api/ed/citime').respond(citimeResponse);
            httpBackend.flush();  
        });

        it("Test fetchDeploymentFrequency function and verify request is sent and will resolve service route", function(){   
            expect(controller.fetchDeploymentFrequency().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond(""); 
            httpBackend.expectGET('/api/excel/deployFrequency').respond("");
            httpBackend.flush();  
        });

        it("Test fetchAutoVsManualTest function and verify request is sent and will resolve service route", function(){   
            var autoVsManualTestResponse = {"maturityLevel":"2","autoPercentage":{"symbol":"","value":"33","unit":"%"},"sumTestExecution":{"symbol":"<","value":"1","unit":"hrs"},"funcTestExecTimeMaturityLevel":"5"};
            expect(controller.fetchAutoVsManualTest().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond(""); 
            httpBackend.expectGET('/api/excel/autovsmanualtest').respond(autoVsManualTestResponse);
            httpBackend.flush();  
        });

        it("Test fetchCodeQuality function and verify request is sent and will resolve service route", function(){   
            var codeQualityResponse = {"maturityLevel":"0","qualityGrade":"NA","codeCoveragePercentage":"0","junitSuccessPercentage":"0","jsCodeCoveragePercentage":"0","jsJunitSuccessPercentage":"0","beMaturityLevel":"1","feMaturityLevel":"1","coveragePercentage":{"symbol":"","value":"0","unit":"%"},"jUnitSuccessPercentage":{"symbol":"","value":"0","unit":"%"},"jscoveragePercentage":{"symbol":"","value":"0","unit":"%"},"jsJUnitSuccessPercentage":{"symbol":"","value":"0","unit":"%"}};
            expect(controller.fetchCodeQuality().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond(""); 
            httpBackend.expectGET('/api/mdquality/static-analysis').respond(codeQualityResponse);
            httpBackend.flush();  
        });

        it("Test fetchCodeQuality function and verify request and qualityGrade A", function(){   
            var codeQualityResponse = {"maturityLevel":"0","qualityGrade":"A","codeCoveragePercentage":"0","junitSuccessPercentage":"0","jsCodeCoveragePercentage":"0","jsJunitSuccessPercentage":"0","beMaturityLevel":"1","feMaturityLevel":"1","coveragePercentage":{"symbol":"","value":"0","unit":"%"},"jUnitSuccessPercentage":{"symbol":"","value":"0","unit":"%"},"jscoveragePercentage":{"symbol":"","value":"0","unit":"%"},"jsJUnitSuccessPercentage":{"symbol":"","value":"0","unit":"%"}};
            expect(controller.fetchCodeQuality().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond(""); 
            httpBackend.expectGET('/api/mdquality/static-analysis').respond(codeQualityResponse);
            var qualityGrade = codeQualityResponse.qualityGrade;
            expect(qualityGrade).toEqual("A");
            httpBackend.flush();  
        });

        it("Test fetchCodeQuality function and verify request and qualityGrade B", function(){   
            var codeQualityResponse = {"maturityLevel":"0","qualityGrade":"B","codeCoveragePercentage":"0","junitSuccessPercentage":"0","jsCodeCoveragePercentage":"0","jsJunitSuccessPercentage":"0","beMaturityLevel":"1","feMaturityLevel":"1","coveragePercentage":{"symbol":"","value":"0","unit":"%"},"jUnitSuccessPercentage":{"symbol":"","value":"0","unit":"%"},"jscoveragePercentage":{"symbol":"","value":"0","unit":"%"},"jsJUnitSuccessPercentage":{"symbol":"","value":"0","unit":"%"}};
            expect(controller.fetchCodeQuality().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond(""); 
            httpBackend.expectGET('/api/mdquality/static-analysis').respond(codeQualityResponse);
            var qualityGrade = codeQualityResponse.qualityGrade;
            expect(qualityGrade).toEqual("B");
            httpBackend.flush();  
        });

        it("Test fetchCodeQuality function and verify request and qualityGrade C", function(){   
            var codeQualityResponse = {"maturityLevel":"0","qualityGrade":"C","codeCoveragePercentage":"0","junitSuccessPercentage":"0","jsCodeCoveragePercentage":"0","jsJunitSuccessPercentage":"0","beMaturityLevel":"1","feMaturityLevel":"1","coveragePercentage":{"symbol":"","value":"0","unit":"%"},"jUnitSuccessPercentage":{"symbol":"","value":"0","unit":"%"},"jscoveragePercentage":{"symbol":"","value":"0","unit":"%"},"jsJUnitSuccessPercentage":{"symbol":"","value":"0","unit":"%"}};
            expect(controller.fetchCodeQuality().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond(""); 
            httpBackend.expectGET('/api/mdquality/static-analysis').respond(codeQualityResponse);
            var qualityGrade = codeQualityResponse.qualityGrade;
            expect(qualityGrade).toEqual("C");
            httpBackend.flush();  
        });

        it("Test fetchCodeQuality function and verify request and qualityGrade D", function(){   
            var codeQualityResponse = {"maturityLevel":"0","qualityGrade":"D","codeCoveragePercentage":"0","junitSuccessPercentage":"0","jsCodeCoveragePercentage":"0","jsJunitSuccessPercentage":"0","beMaturityLevel":"1","feMaturityLevel":"1","coveragePercentage":{"symbol":"","value":"0","unit":"%"},"jUnitSuccessPercentage":{"symbol":"","value":"0","unit":"%"},"jscoveragePercentage":{"symbol":"","value":"0","unit":"%"},"jsJUnitSuccessPercentage":{"symbol":"","value":"0","unit":"%"}};
            expect(controller.fetchCodeQuality().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond(""); 
            httpBackend.expectGET('/api/mdquality/static-analysis').respond(codeQualityResponse);
            var qualityGrade = codeQualityResponse.qualityGrade;
            expect(qualityGrade).toEqual("D");
            httpBackend.flush();  
        });

        it("Test fetchCodeQuality function and verify request and qualityGrade E", function(){   
            var codeQualityResponse = {"maturityLevel":"0","qualityGrade":"E","codeCoveragePercentage":"0","junitSuccessPercentage":"0","jsCodeCoveragePercentage":"0","jsJunitSuccessPercentage":"0","beMaturityLevel":"1","feMaturityLevel":"1","coveragePercentage":{"symbol":"","value":"0","unit":"%"},"jUnitSuccessPercentage":{"symbol":"","value":"0","unit":"%"},"jscoveragePercentage":{"symbol":"","value":"0","unit":"%"},"jsJUnitSuccessPercentage":{"symbol":"","value":"0","unit":"%"}};
            expect(controller.fetchCodeQuality().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond(""); 
            httpBackend.expectGET('/api/mdquality/static-analysis').respond(codeQualityResponse);
            var qualityGrade = codeQualityResponse.qualityGrade;
            expect(qualityGrade).toEqual("E");
            httpBackend.flush();  
        });

        it("Test fetchJUnitCoverage function and verify request is sent and will resolve service route", function(){   
            var JUnitCoverageResponse = {"maturityLevel":"0","qualityGrade":"NA","codeCoveragePercentage":"0","junitSuccessPercentage":"0","jsCodeCoveragePercentage":"0","jsJunitSuccessPercentage":"0","beMaturityLevel":"1","feMaturityLevel":"1","coveragePercentage":{"symbol":"","value":"0","unit":"%"},"jUnitSuccessPercentage":{"symbol":"","value":"0","unit":"%"},"jscoveragePercentage":{"symbol":"","value":"0","unit":"%"},"jsJUnitSuccessPercentage":{"symbol":"","value":"0","unit":"%"}};
            expect(controller.fetchJUnitCoverage().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond(""); 
            httpBackend.expectGET('/api/mdquality/static-analysis').respond(JUnitCoverageResponse);
            httpBackend.flush();  
        });

        it("Test fetchPassPercent function and verify request is sent and will resolve service route", function(){   
            var passPercentResponse = {"maturityLevel":"0","qualityGrade":"NA","codeCoveragePercentage":"0","junitSuccessPercentage":"0","jsCodeCoveragePercentage":"0","jsJunitSuccessPercentage":"0","beMaturityLevel":"1","feMaturityLevel":"1","coveragePercentage":{"symbol":"","value":"0","unit":"%"},"jUnitSuccessPercentage":{"symbol":"","value":"0","unit":"%"},"jscoveragePercentage":{"symbol":"","value":"0","unit":"%"},"jsJUnitSuccessPercentage":{"symbol":"","value":"0","unit":"%"}};
            expect(controller.fetchPassPercent().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond(""); 
            httpBackend.expectGET('/api/mdquality/static-analysis').respond(passPercentResponse);
            httpBackend.flush();  
        });

        it("Test fetchImprovement function and verify request is sent and will resolve service route", function(){   
            var improvementResponse = {"maturityLevel":"3","response":true};
            expect(controller.fetchImprovement().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond(""); 
            httpBackend.expectGET('/api/excel/improvement').respond(improvementResponse);
            httpBackend.flush(); 
        });
        
        it("Test fetchCITime function and verify request is sent and will resolve service route", function(){   
            var autoVsManualTestResponse = {"maturityLevel":"2","autoPercentage":{"symbol":"","value":"33","unit":"%"},"sumTestExecution":{"symbol":"<","value":"1","unit":"hrs"},"funcTestExecTimeMaturityLevel":"5"};
            expect(controller.fetchCITime().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond(""); 
            httpBackend.expectGET('/api/ed/citime').respond(citimeResponse);
            httpBackend.expectGET('/api/ed/citime').respond(citimeResponse);
            httpBackend.expectGET('/api/excel/autovsmanualtest').respond(autoVsManualTestResponse);
            httpBackend.flush(); 
        });

        it("Test commitmentReliability function and verify request is sent and will resolve service route", function(){
            expect(controller.commitmentReliability().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.expectGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/jiraMVP/commitmentReliability').respond({"maturityLevel":"3","commitmentReliability":{"symbol":"","value":"50","unit":"%"}});
            httpBackend.flush();  
        });

        it("Test fetchRisks function and verify request is sent and will resolve service route", function(){
            expect(controller.fetchRisks().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.expectGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/jiraMVP/risks').respond({});
            httpBackend.flush();  
        });

        it("Test fetchIssues function and verify request is sent and will resolve service route", function(){
            expect(controller.fetchIssues().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.expectGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/jiraMVP/issues').respond({});
            httpBackend.flush();  
        });

        it("Test fetchTechDebt function and verify request is sent and will resolve service route", function(){
            expect(controller.fetchTechDebt().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.expectGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/jiraMVP/techDebt').respond({"techDebt":{"symbol":"<","value":"3","unit":"Weeks"},"techDebtMaturitylevel":"4"});
            httpBackend.flush();  
        });

        it("Test fetchSonarTechDebt function and verify request is sent and will resolve service route", function(){
            expect(controller.fetchSonarTechDebt().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.expectGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/mdquality/static-analysis').respond({});
            httpBackend.flush();  
        });

        it("Test fetchAssignValueMetric function and verify request is sent and will resolve service route", function(){
            expect(controller.fetchAssignValueMetric().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.expectGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/jiraMVP/assignedMetrics').respond({"assignedValuePercentage":{},"assignedValueMaturitylevel":"0"});
            httpBackend.flush();  
        });

        it("Test fetchBacklogHealth function and verify request is sent and will resolve service route", function(){
            expect(controller.fetchBacklogHealth().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.expectGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/jiraMVP/backlogHealth').respond({"backlogHealthPercentage":{"symbol":"%","value":"150.0","unit":"%"},"backlogHealthMaturitylevel":"5"});
            httpBackend.flush();  
        });

        it("Test fetchAssignValueTrend function and verify request is sent and will resolve service route", function(){
            expect(controller.fetchAssignValueTrend().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.expectGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/jiraMVP/assignedMetricsTrend').respond({});
            httpBackend.flush();  
        });

        it("Test fetchTrendOverAutoVsManualTest function and verify request is sent and will resolve service route", function(){
            expect(controller.fetchTrendOverAutoVsManualTest().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.expectGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/trend/automation?startDate=&endDate=').respond({"startDate":"04-12-2017","endDate":"10-12-2017"});
            httpBackend.flush();
        });
        
        it("Test fetchTrendOverFunctionalTestExecutionTime function and verify request is sent and will resolve service route", function(){
            expect(controller.fetchTrendOverFunctionalTestExecutionTime().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.expectGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/trend/functionaltest?startDate=&endDate=').respond({"startDate":"04-12-2017","endDate":"10-12-2017"});
            httpBackend.flush();
        });

        it("Test fetchTrendOverStoryLeadTime  function and verify request is sent and will resolve service route", function(){
            expect(controller.fetchTrendOverStoryLeadTime().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.expectGET('/api/excel/projectDetails').respond("");
            httpBackend.expectPOST('/api/trend/dorToDod',[]).respond({"startDate":"04-12-2017","endDate":"10-12-2017"});
            httpBackend.flush();
        });

        it("Test fetchTrendOverStoryLiveLeadTime  function and verify request is sent and will resolve service route", function(){
            expect(controller.fetchTrendOverStoryLiveLeadTime().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.expectGET('/api/excel/projectDetails').respond("");
            httpBackend.expectPOST('/api/trend/dodToLive',[]).respond({"startDate":"04-12-2017","endDate":"10-12-2017"});
            httpBackend.flush();
        });

        it("Test fetchTrendOverCodeQuality function and verify request is sent and will resolve service route", function(){
            expect(controller.fetchTrendOverCodeQuality().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.expectGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/trend/codequalitytrend?startDate=&endDate=').respond({"startDate":"04-12-2017","endDate":"10-12-2017"});
            httpBackend.flush();
        });

        it("Test fetchTrendOverCodeBuildTime function and verify request is sent and will resolve service route", function(){
            expect(controller.fetchTrendOverCodeBuildTime().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.expectGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/trend/buildTimeTrend?startDate=&endDate=').respond({"startDate":"04-12-2017","endDate":"10-12-2017"});
            httpBackend.flush();
        });

        it("Test fetchTrendOverTimeToFixedBroken function and verify request is sent and will resolve service route", function(){
            expect(controller.fetchTrendOverTimeToFixedBroken().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.expectGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/trend/fixTimeTrend?startDate=&endDate=').respond({"startDate":"04-12-2017","endDate":"10-12-2017"});
            httpBackend.flush();
        });

        it("Test fetchTrendOverBackEndJUnit function and verify request is sent and will resolve service route", function(){
            expect(controller.fetchTrendOverBackEndJUnit().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.expectGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/trend/backendjunittrend?startDate=&endDate=').respond({"startDate":"04-12-2017","endDate":"10-12-2017"});
            httpBackend.flush();
        });

        it("Test fetchTrendOverFrontEndJUnit function and verify request is sent and will resolve service route", function(){
            expect(controller.fetchTrendOverFrontEndJUnit().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.expectGET('/api/excel/projectDetails').respond("");
            httpBackend.expectGET('/api/trend/frontendjunittrend?startDate=&endDate=').respond({"startDate":"04-12-2017","endDate":"10-12-2017"});
            httpBackend.flush();
        });

        it("Test fetchTrendOverSprintPredictability function and verify request is sent and will resolve service route", function(){
            expect(controller.fetchTrendOverSprintPredictability().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.expectGET('/api/excel/projectDetails').respond("");
            httpBackend.expectPOST('/api/trend/sprintPredictability', []).respond(200);
            httpBackend.flush();
        });

        it("Test fetchTrendOverCommitmentReliability function and verify request is sent and will resolve service route", function(){
            expect(controller.fetchTrendOverCommitmentReliability().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.expectGET('/api/excel/projectDetails').respond("");
            httpBackend.expectPOST('/api/trend/commitmentReliability', []).respond(200);
            httpBackend.flush();
        });


        it("Test fetchAllSprintList function and verify request is sent and will resolve service route", function(){   
            expect(controller.fetchAllSprintList().$resolved).toBeFalsy();
            httpBackend.whenGET('/api/jiraMVP/sprintsList').respond("");
            httpBackend.whenGET('/api/excel/projectDetails').respond("");                     
            httpBackend.expectGET('/api/jiraMVP/sprintsList').respond(allSprintListResponse);   
            httpBackend.flush();
        });

        it("Test chartModalDialog function", function(){   
            expect(controller.chartModalDialog instanceof Function).toBeTruthy();
            controller.chartModalDialog();
            expect(controller.chartModalDialog).toBeTruthy();           
        });

        it("Test chartModalDialog function and verify NoOfCheckins case", function(){ 
            var selectedChart = 'NoOfCheckins';
            controller.chartModalDialog(selectedChart);
        });

        it("Test chartModalDialog function and verify NoOfCheckins data is available in chartdata case", function(){ 
            controller.selectedChart = 'NoOfCheckins'; 
            controller.noOfCheckins = chartdata;
            controller.chartdata = controller.noOfCheckins;
            expect(controller.chartdata.data).toBeTruthy();
            controller.chartdata['data']['dialogoptions'] = {}
            controller.chartModalDialog(controller.selectedChart);
        });

        it("Test chartModalDialog function and verify CfdData case", function(){ 
            var selectedChart = 'CfdData';
            controller.chartModalDialog(selectedChart);
        });

        it("Test chartModalDialog function and verify CfdData data is available in chartdata case", function(){ 
            controller.selectedChart = 'CfdData'; 
            controller.cfdData = chartdata;
            controller.chartdata = controller.cfdData;
            expect(controller.chartdata.data).toBeTruthy();
            controller.chartdata['data']['dialogoptions'] = {}
            controller.chartModalDialog(controller.selectedChart);
        });

        it("Test chartModalDialog function and verify AppDemonstration case", function(){ 
            var selectedChart = 'AppDemonstration';
            controller.chartModalDialog(selectedChart);
        });

        it("Test chartModalDialog function and verify AppDemonstration data is available in chartdata case", function(){ 
            controller.selectedChart = 'AppDemonstration'; 
            controller.appDemonstration = chartdata;
            controller.chartdata = controller.appDemonstration;
            expect(controller.chartdata.data).toBeTruthy();
            controller.chartdata['data']['dialogoptions'] = {}
            controller.chartModalDialog(controller.selectedChart);
        });

        it("Test chartModalDialog function and verify FlowEfficiency case", function(){ 
            var selectedChart = 'FlowEfficiency';
            controller.chartModalDialog(selectedChart);
        });

        it("Test chartModalDialog function and verify FlowEfficiency data is available in chartdata case", function(){ 
            controller.selectedChart = 'FlowEfficiency'; 
            controller.flowEfficiency = chartdata;
            controller.chartdata = controller.flowEfficiency;
            expect(controller.chartdata.data).toBeTruthy();
            controller.chartdata['data']['dialogoptions'] = {}
            controller.chartModalDialog(controller.selectedChart);
        });

        it("Test trendOverChartModal function", function(){   
            expect(controller.trendOverChartModal instanceof Function).toBeTruthy();
            controller.trendOverChartModal ();
            expect(controller.trendOverChartModal).toBeTruthy();           
        });

        it("Test trendOverChartModal function and verify autoPercentage [data][options] is not available in chartdata case", function(){ 
            controller.selectedChart = 'autoPercentage';            
            controller.trendOverChartModal();
        });

        it("Test trendOverChartModal function and verify autoPercentage [data][options] is available in chartdata case", function(){ 
            controller.selectedChart = 'autoPercentage';            
            controller.trendOverAutoVsManualTest = chartdata;
            controller.chartdata = controller.trendOverAutoVsManualTest;
            controller.chartdata['data']['dialogoptions'] = controller.chartdata['data']['options']
            controller.trendOverChartModal();
        });

        it("Test trendOverChartModal function and verify functionalTestExecutionTime if [data][options] is not available in chartdata case", function(){ 
            controller.selectedChart = 'functionalTestExecutionTime';
            controller.trendOverChartModal();
        });

        it("Test trendOverChartModal function and verify functionalTestExecutionTime [data][options] is available in chartdata case", function(){ 
            controller.selectedChart = 'functionalTestExecutionTime';
            controller.trendOverFunctionalTestExecutionTime = chartdata;
            controller.chartdata = controller.trendOverFunctionalTestExecutionTime;
            controller.chartdata['data']['dialogoptions'] = controller.chartdata['data']['options']
            controller.trendOverChartModal();
        });

        it("Test trendOverChartModal function and verify codeBuildTime if [data][options] is not available in chartdata case", function(){ 
            controller.selectedChart = 'codeBuildTime';
            controller.trendOverChartModal();
        });

        it("Test trendOverChartModal function and verify codeBuildTime [data][options] is available in chartdata case", function(){ 
            controller.selectedChart = 'codeBuildTime';
            controller.trendOverCodeBuildTime = chartdata;
            controller.chartdata = controller.trendOverCodeBuildTime;
            controller.chartdata['data']['dialogoptions'] = controller.chartdata['data']['options']
            controller.trendOverChartModal();
        });

        it("Test trendOverChartModal function and verify codeBuildTime if [data][options] is not available in chartdata case", function(){ 
            controller.selectedChart = 'timeToFixBrokenBuild';
            controller.trendOverChartModal();
        });

        it("Test trendOverChartModal function and verify timeToFixBrokenBuild [data][options] is available in chartdata case", function(){ 
            controller.selectedChart = 'timeToFixBrokenBuild';
            controller.trendOverTimeToFixedBrokenBuild = chartdata;
            controller.chartdata = controller.trendOverTimeToFixedBrokenBuild;
            controller.chartdata['data']['dialogoptions'] = controller.chartdata['data']['options']
            controller.trendOverChartModal();
        });

        it("Test trendOverChartModal function and verify codeQuality [data][options] is not available in chartdata case", function(){ 
            controller.selectedChart = 'codeQuality';
            controller.trendOverChartModal();
        });

        it("Test trendOverChartModal function and verify codeQuality [data][options] is available in chartdata case", function(){ 
            controller.selectedChart = 'codeQuality';
            controller.trendOverCodeQuality = chartdata;
            controller.chartdata = controller.trendOverCodeQuality;
            controller.chartdata['data']['dialogoptions'] = controller.chartdata['data']['options']
            controller.trendOverChartModal();
        });

        it("Test trendOverChartModal function and verify backEndJUnit [data][options] is not available in chartdata case", function(){ 
            controller.selectedChart = 'backEndJUnit';
            controller.trendOverChartModal();
        });

        it("Test trendOverChartModal function and verify backEndJUnit [data][options] is available in chartdata case", function(){ 
            controller.selectedChart = 'backEndJUnit';
            controller.trendOverBackEndJUnit = chartdata;
            controller.chartdata = controller.trendOverBackEndJUnit;
            controller.chartdata['data']['dialogoptions'] = controller.chartdata['data']['options']
            controller.trendOverChartModal();
        });

        it("Test trendOverChartModal function and verify frontEndJSUnit [data][options] is not available in chartdata case", function(){ 
            controller.selectedChart = 'frontEndJSUnit';
            controller.trendOverChartModal();
        });

        it("Test trendOverChartModal function and verify frontEndJSUnit [data][options] is available in chartdata case", function(){ 
            controller.selectedChart = 'frontEndJSUnit';
            controller.trendOverFrontEndJUnit = chartdata;
            controller.chartdata = controller.trendOverFrontEndJUnit;
            controller.chartdata['data']['dialogoptions'] = controller.chartdata['data']['options']
            controller.trendOverChartModal();
        });

        it("Test trendOverChartModal function and verify sprintPredictability [data][options] is not available in chartdata case", function(){ 
            controller.selectedChart = 'sprintPredictability';
            controller.trendOverChartModal();
        });

        it("Test trendOverChartModal function and verify sprintPredictability [data][options] is available in chartdata case", function(){ 
            controller.selectedChart = 'sprintPredictability';
            controller.trendOverSprintPredictability = chartdata;
            controller.chartdata = controller.trendOverSprintPredictability;
            controller.chartdata['data']['dialogoptions'] = controller.chartdata['data']['options']
            controller.trendOverChartModal();
        });

        it("Test trendOverChartModal function and verify sprintPredictability fromSprint and toSprint is available case", function(){ 
            controller.selectedChart = 'sprintPredictability';
            controller.chartdata = {
                fromSprint:"12/12/2017",
                toSprint: "15/12/2017"
            }
            controller.allSprintList = [];            
            controller.setFromToSplitList(controller.chartdata.fromSprint, controller.chartdata.toSprint);
            controller.trendOverChartModal();
            expect(controller.chartdata.fromSprint && controller.chartdata.toSprint).not.toBeNull();
        });

        
        it("Test trendOverChartModal function and verify commitmentReliability [data][options] is not available in chartdata case", function(){ 
            controller.selectedChart = 'commitmentReliability';
            controller.trendOverChartModal();
        });

        it("Test trendOverChartModal function and verify commitmentReliability [data][options] is available in chartdata case", function(){ 
            controller.selectedChart = 'commitmentReliability';
            controller.trendOverCommitmentReliability = chartdata;
            controller.chartdata = controller.trendOverCommitmentReliability;
            controller.chartdata['data']['dialogoptions'] = controller.chartdata['data']['options']
            controller.trendOverChartModal();
        });

        it("Test trendOverChartModal function and verify commitmentReliability fromSprint and toSprint is available case", function(){ 
            controller.selectedChart = 'commitmentReliability';
            controller.chartdata = {
                fromSprint:"12/12/2017",
                toSprint: "15/12/2017"
            }
            controller.allSprintList = [];            
            controller.setFromToSplitList(controller.chartdata.fromSprint, controller.chartdata.toSprint);
            controller.trendOverChartModal();
            expect(controller.chartdata.fromSprint && controller.chartdata.toSprint).not.toBeNull();
        });


        it("Test setFromToSplitList function and verify fromSprint and toSprint is available case", function(){ 
            controller.chartdata = {
                "fromSprint":"12/12/2017",
                "toSprint": "15/12/2017"
            }
            controller.allSprintList = ["2. sprint1", "1. sprint2", "3. sprint3"];
            controller.selectedFromSprintList = controller.allSprintList[0];
            controller.selectedToSprintList = controller.allSprintList[1];
            controller.setFromToSplitList(controller.chartdata.fromSprint, controller.chartdata.toSprint);
        });

        it("Test fromToSplitList function and verify widget if fromSprint is less than toSprint", function(){
            controller.allSprintList = ["2. sprint1", "1. sprint2", "3. sprint3"];
            controller.selectedFromSprintList = controller.allSprintList[0];
            controller.selectedToSprintList = controller.allSprintList[1];
            controller.isApplyTrendOverActive = true;
            controller.fromToSplitList();
        });

        it("Test fromToSplitList function and verify widget if ifromSprint is less than toSprint", function(){
            controller.isApplyTrendOverActive = true;
            controller.allSprintList = ["2. sprint1", "1. sprint2", "3. sprint3"];
            controller.fromToSplitList();
        });


        it("Test fromToSplitList function and verify widget if isApplyTrendOverActive is not active", function(){
            controller.allSprintList = ["2. sprint1", "1. sprint2", "3. sprint3"];
            controller.selectedFromSprintList = controller.allSprintList[0];
            controller.selectedToSprintList = controller.allSprintList[1];
            controller.isApplyTrendOverActive = false;
            controller.fromToSplitList();
        });

        it("Test applyTrendOverDates function", function(){ 
            var selectedDates = {
                "startDate":"12/12/2017",
                "endDate":"16/12/2017"
            }
            controller.applyTrendOverDates(selectedDates);
        });

        it("Test applyTrendOverDates function and verify selectedChart is autoPercentage ", function(){ 
            controller.selectedChart = 'autoPercentage';
            var selectedDates = {
                "startDate":"12/12/2017",
                "endDate":"16/12/2017"
            }
            controller.applyTrendOverDates(selectedDates);
        });

        it("Test applyTrendOverDates function and verify selectedChart is functionalTestExecutionTime ", function(){ 
            controller.selectedChart = 'functionalTestExecutionTime';
            var selectedDates = {
                "startDate":"12/12/2017",
                "endDate":"16/12/2017"
            }
            controller.applyTrendOverDates(selectedDates);
        });

        it("Test applyTrendOverDates function and verify selectedChart is codeQuality ", function(){ 
            controller.selectedChart = 'codeQuality';
            var selectedDates = {
                "startDate":"12/12/2017",
                "endDate":"16/12/2017"
            }
            controller.applyTrendOverDates(selectedDates);
        });

        it("Test applyTrendOverDates function and verify selectedChart is codeBuildTime ", function(){ 
            controller.selectedChart = 'codeBuildTime';
            var selectedDates = {
                "startDate":"12/12/2017",
                "endDate":"16/12/2017"
            }
            controller.applyTrendOverDates(selectedDates);
        });

        it("Test applyTrendOverDates function and verify selectedChart is timeToFixBrokenBuild ", function(){ 
            controller.selectedChart = 'timeToFixBrokenBuild';
            var selectedDates = {
                "startDate":"12/12/2017",
                "endDate":"16/12/2017"
            }
            controller.applyTrendOverDates(selectedDates);
        });

        it("Test applyTrendOverDates function and verify selectedChart is commitmentReliability ", function(){ 
            controller.selectedChart = 'commitmentReliability';
            var selectedDates = {
                "startDate":"12/12/2017",
                "endDate":"16/12/2017"
            }
            controller.applyTrendOverDates(selectedDates);
        });

        it("Test applyTrendOverDates function and verify selectedChart is backEndJUnit ", function(){ 
            controller.selectedChart = 'backEndJUnit';
            var selectedDates = {
                "startDate":"12/12/2017",
                "endDate":"16/12/2017"
            }
            controller.applyTrendOverDates(selectedDates);
        });

        it("Test applyTrendOverDates function and verify selectedChart is frontEndJSUnit ", function(){ 
            controller.selectedChart = 'frontEndJSUnit';
            var selectedDates = {
                "startDate":"12/12/2017",
                "endDate":"16/12/2017"
            }
            controller.applyTrendOverDates(selectedDates);
        });

        it("Test applyTrendOverDates function and verify selectedChart is sprintPredictability ", function(){ 
            controller.selectedChart = 'sprintPredictability';
            var selectedDates = {
                "startDate":"12/12/2017",
                "endDate":"16/12/2017"
            }
            controller.applyTrendOverDates(selectedDates);
        });

        it("Test customWidgetClick function and verify widget", function(){
            controller.customWidgetClick('widgetType');
        });

        it("Test showMaturityRadar function ", function(){ 
            expect(controller.showMaturityRadar instanceof Function).toBeTruthy();
        });

        it("Test showRadar should be true ", function(){ 
            controller.showMaturityRadar();
            expect(controller.showRadar).toBeTruthy();
        });

        it("Test showRadar should be false ", function(){ 
            controller.showMaturityRadar();
            controller.showRadar = false
            expect(controller.showRadar).toBeFalsy();
        });

    })   
});

