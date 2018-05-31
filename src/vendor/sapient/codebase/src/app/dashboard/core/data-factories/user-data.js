(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module + '.core')
        .factory('userData', userData);

    function userData($http) {
        var testDetailRoute = 'test-data/signup_detail.json';
        var adminRoute = '/api/admin';
        var userRoute = '/api/users';
        var featureToggleRoute = 'api/featureToggle';

        return {
            getAllUsers: getAllUsers,
            promoteUserToAdmin: promoteUserToAdmin,
            demoteUserFromAdmin: demoteUserFromAdmin,
            createToken: createToken,
            apitokens: apitokens,
            getConfiguration: getConfiguration,
            getJiraConfiguration: getJiraConfiguration,
            saveConfiguration: saveConfiguration,            
            saveJiraConfiguration: saveJiraConfiguration,
            getJiraConfigurationSchema: getJiraConfigurationSchema,
            getConfigurationSchema: getConfigurationSchema,
            getFeatureToggle: getFeatureToggle
        };


        // reusable helper
        function getPromise(route) {
            return $http.get(route).then(function (response) {
                return response.data;
            });
        }

        function getAllUsers() {

            if (HygieiaConfig.local) {
                console.log("In local testing");
                return getPromise(testDetailRoute);
            } else {
                return $http.get(userRoute);
            }
        }

        function promoteUserToAdmin(user) {
            var route = adminRoute + "/users/addAdmin";
            return $http.post(route, user);
        }

        function demoteUserFromAdmin(user) {
            var route = adminRoute + "/users/removeAdmin";
            return $http.post(route, user);
        }

        function createToken(apitoken) {
            var route = adminRoute + "/createToken";
            return $http.post(route, apitoken);
        }

        function apitokens() {
            var route = adminRoute + "/apitokens";
            return $http.get(route);
        }

        function getConfiguration() {
            return $http.get('/api/properties').then(function (response) {
                return response.data;
            });
        }
        
        function getJiraConfiguration() {
            return $http.get('/api/jira/properties').then(function (response) {
                return response.data;
            });
        }

        function getFeatureToggle() {
            return getPromise(featureToggleRoute);
        }

        function saveConfiguration(data) {
            return $http.put('/api/properties', data).then(function (response) {
                return response.data;
            });
        }

        function saveJiraConfiguration(data) {
            return $http.put('/api/jira/properties', data).then(function (response) {
                return response.data;
            });
        }
        
        function getConfigurationSchema() {
            return {
            	"improvementup": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "false",
                    "label":"Threshold for Improvement",
                    "description": "Provide a numeric value to compare the maturity levels and show thumbs-up or thumbs-down signals"
                },
                "happinessindexdays": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "false",
                    "label":"No. of days in past to consider for happiness index scores",
                    "description": "Provide a numeric value for the number of days that should be presented in the graph"
                },
                "sprintCountForAppDemo": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "false",
                    "label":"No. of Sprints to consider for Completed stories demoed to PO",
                    "description": "For the graph to show the number of times Applications/Stories were demonstrated to the client, provide a numeric value to define the number of Sprints for which this data should be shown"
                },
                "envCreationJob": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"Environment Creation Jenkins Job name",
                    "description": "Provide a Jenkins-configured job name to create a new environment"
                },
                "relAndDeployJob": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"Release and Deploy Jenkins Job name",
                    "description": "Provide a Jenkins-configured job name for release and deployment"
                },
                "jiraDOR": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"DOR Status in JIRA",
                    "description": "DOR means Definition of Ready in the context of a Story, defect or a task. This property is used to define the DOR status from the JIRA issue status workflow. You need to mention the DOR status as followed in your project"
                },
                "jiraDOD": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"DOD Status in JIRA",
                    "description": "DOD means Definition of Done in the context of a Story, defect or a task. This property is used to define the DOD status from the JIRA Story status workflow. You need to mention the DOD status as followed in your project"
                },
                "jiraLive": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"Live Status in JIRA",
                    "description": "This property is used to mark that a Story has been released to the production environment. There are a couple of ways in which this property can be configured:Either provide the status from the JIRA Story status workflow Or a label can be used to mark that the Story has been released to production. This is for cases where Stories are closed before being released to production, (since there's a significant period between a Story getting developed, tested and going into production)"
                },
                "jiracfdmonth": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "false",
                    "label":"No. of months for plotting CFD",
                    "description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "jiraProjectNames": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "false",
                    "label":"JIRA Project Name",
                    "description": "Add JIRA Project Name to fetch data for a particular Project from JIRA.The property supports multiple project names as well and for the same add project names separated by a comma. If this property field is left blank then data for all projects from JIRA will be fetched.",
                    "required": "true"
                },
                "jiradefectcreatedstatus": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"Defect staus upon creation",
                    "description": "Provide the status used to raise a defect for a Story in JIRA"
                },
                "jirastatus": {
                    "type": "object",
                    "inputType": "textarea",
                    "technical": "false",
                    "label":"All JIRA statuses representing issues/stories in Backlog state (for CFD)",
                    "description": "Story statuses in JIRA should be arranged into five groups. Provide comma-separated status value for each group"
                },
                "cfdStatusOrder": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"Status order for the CFD",
                    "description": "Provide the order of the statuses to be shown on Cummulative flow diagram"
                },
                "sprintCountDor": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "false",
                    "label":"No. of Sprints to calculate DOR",
                    "description": "Number of Sprints to consider for calculating DOR"
                },
                "sprintCountDod": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "false",
                    "label":"No. of Sprints to calculate DOD",
                    "description": "Number of Sprints to consider for calculating DOD"
                },
                "daysInWeek": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "false",
                    "label":"No. of Days in week",
                    "description": "Provide a numeric value for no of days in a week"
                },
                "backlogSprintNo": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "false",
                    "label":"No. of Sprints to calculate Backlog Health",
                    "description": "Provide the number of sprints to be considered for calculating Backlog Health"
                },
                "sprintClosedStatus": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"Closed Sprint status in JIRA",
                    "description": "The status in JIRA for a closed Sprint"
                },
                "sprintPredictabilityJson": {
                    "type": "string",
                    "technical": "false",
                    "inputType": "textarea",
                    "label":"Story/issue status representing DOD for a Sprint"
                },
                "sprintCommitmentReliabilityJson": {
                    "type": "string",
                    "inputType": "textarea",
                    "technical": "false",
                    "label":"Story/issue status when they were committed to a Sprint"	
                },
                "predictabilityLastNSprints": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "false",
                    "label":"No. of Sprints to calculate Sprint Predictability",
                    "description": "Provide a numeric value stating that last N sprints to be considered for Sprint predictability."
                },
                "sprintCountCommitmentReliability": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "false",
                    "label":"No. of Sprints to calculate Commitment Reliability",
                    "descriptiob": "Provide a numeric value stating that last N sprints to be considered for Commitment Reliability."
                },
                "effortCalculationCrieteria": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"Criteria used for Estimation",
                    "description": "Provide the Effort calculation criteria which is being used in your project e.g. Story points or Buffered Estimate."
                },
                "jiracfdIssueType": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "false",
                    "label":"JIRA Issue types to be considered for CFD",
                    "description": "Provide the Issue types to be considered for CFD Widget."
                },
                "jiraDorToDodIssueType": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "false",
                    "label":"JIRA Issue types for calculating DOR to DOD",
                    "description": "Provide the Issue types to be considered for DOR to DOD Widget."
                },
                "jiraDodToLiveIssueType": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "false",
                    "label":"JIRA Issue types for calculating DOD to Live",
                    "description": "Provide the Issue types to be considered for DOD to Live Widget."
                },
                "jiraDefectInjectionIssueType": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "false",
                    "label":"JIRA Issue types for calculating Defect Injection Rate",
                    "description": "Provide the Issue types to be considered for Defect Injection Rate Widget."
                },
                "techDebtStoryTypes": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "false",
                    "label":"JIRA Issue types for calculating Technical Debt",
                    "description": "Provide the issue type from JIRA which is being used to define stories/tasks related to Technical Debt."
                },
                "jiraTechStoryLabels": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "false",
                    "label":"Label used to identify Technical debt stories",
                    "description": "Provide the label used in JIRA to identify technical debt stories/tasks."
                },
                "daysInSprint": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "false",
                    "label":"Number of days in a typical Sprint",
                    "description": "Number of days in a typical Sprint."
                },
                "storyTypes": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "false",
                    "label":"JIRA Issue types for calculating Backlog Health",
                    "description": "JIRA issue types to be considered for calculating Backlog Health."
                },
                "jiradefecttype": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "false",
                    "label":"JIRA Issue types to be considered as a defect",
                    "description": "JIRA issue types to be considered for calculating DIR."
                },
                "sprintTeamsNo": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "false",
                    "label":"No. of sub-teams with in a team",
                    "description": "If you have multiple teams in a single JIRA project and want to calculate the KPI's as an aggregate value, use this field else leave it blank."
                },
                "checkIfAppDemoFromJira": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"Use JIRA for calculating Completed Stories demoed to PO?",
                    "description" :"If you want to pick data from offline data sheet, specify value of false. Else, if you want to pick data from JIRA, specify true"
                },
                "storyTypesAppDemo": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "false",
                    "label":"JIRA Issue types to be considered for Completed Stories demoed to PO",
                    "description": "JIRA issue types to be considered for Completed Stories demoed to PO widget"
                },
                "key": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"key"
                },
                "poolSize": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"poolSize"
                    	
                },
                "maturityRadar": {
                    "type": "object",
                    "inputType": "textarea",
                    "technical": "true",
                    "label":"maturityRadar"
                },
                "happinessIndex": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"happinessIndex"
                },
                "sprintPredictability": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"sprintPredictability"
                },
                "functionalTestCaseExecutionTime": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"functionalTestCaseExecutionTime"
                },
                "flowEfficiency": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"flowEfficiency"
                },
                "codeBuildTime": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"codeBuildTime"
                },
                "fixBrokenBuild": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"fixBrokenBuild"
                },
                "defectInjectionRate": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"defectInjectionRate"
                },
                "codeQuality": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"codeQuality"
                },
                "automatedpercentage": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"automatedpercentage"
                },
                "bejunitcoverage": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"bejunitcoverage"
                },
                "fejunitcoverage": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"fejunitcoverage"
                },
                "improvementMaturityLevel": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"improvementMaturityLevel"
                },
                "appdDemoMaturityLevel": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"appdDemoMaturityLevel"
                },
                "commitMaturityLevel": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"commitMaturityLevel"
                },
                "dayscount": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"dayscount",
                    "description": "Provide a numeric value for the number of days that Bitbucket and Jenkins data should be shown"
                },
                "createNewEnv": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"createNewEnv"
                },
                "relAndDeployTime": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"relAndDeployTime"
                },
                "dorToDod": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"dorToDod"
                },
                "dodToLive": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"dodToLive"
                },
                "commitmentReliabilityMaturityLevels": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"commitmentReliabilityMaturityLevels"
                },
                "dorToLive": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"dorToLive"
                },
                "teamSize": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "true",
                    "label":"teamSize"
                },
                "minutesConversionFactor": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "true",
                    "label":"minutesConversionFactor"
                },
                "hoursConversionFactor": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "true",
                    "label":"hoursConversionFactor"
                },
                "secondsConversionFactor": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "true",
                    "label":"secondsConversionFactor"
                },
                "riskPriorities": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"riskPriorities"
                },
                "riskStatus": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"riskStatus"
                },
                "backlogHealthPercentage": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"backlogHealthPercentage"
                },
                "assignedValuePercentage": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"assignedValuePercentage"
                },
                "techDebt": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"techDebt"
                },
                "assignedValueTrend": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "true",
                    "label":"assignedValueTrend"
                },
                "sprintCountForDeployFrequency": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "true",
                    "label":"sprintCountForDeployFrequency"
                },
                "automatedTestTrendLastNDays": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"automatedTestTrendLastNDays"
                },
                "buildFixTimeTrendLastNDays": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"buildFixTimeTrendLastNDays"
                },
                "buildTimeTrendLastNDays": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"buildTimeTrendLastNDays"
                },
                "functionalTestTrendLastNDays": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"functionalTestTrendLastNDays"
                },
                "workUnit": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "true",
                    "label":"workUnit"
                },
                "backEndJunitTrendLastNDays": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"backEndJunitTrendLastNDays"
                },
                "frontEndJunitTrendLastNDays": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"frontEndJunitTrendLastNDays"
                },
                "codeQualityTrendLastNDays": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"codeQualityTrendLastNDays"
                },
                "sprintPredictabilityTrendLastNSprint": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"sprintPredictabilityTrendLastNSprint"
                },
                "isCaptchaRequired": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"isCaptchaRequired"
                },
                "currentSprint": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"currentSprint"
                },
                "issueSelectionCriteria": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"issueSelectionCriteria"
                },
                "assignValueAttribute": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"assignValueAttribute"
                },
                "speedyLatestVersionURL": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"speedyLatestVersionURL"
                },
                "speedyCurrentVersionFile": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"speedyCurrentVersionFile"
                },
                "speedyLatestVersionKey": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"speedyLatestVersionKey"
                },
                "speedyCurrentVersionKey": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"speedyCurrentVersionKey"
                },
                "speedyDefaultLogo": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"speedyDefaultLogo"
                },
                "speedyLatestVersionResponseKey": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"speedyLatestVersionResponseKey"
                },
                "offlineDataLocation": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"offlineDataLocation"
                },
                "featureToggle": {
                    "type": "object",
                    "inputType": "textarea",
                    "technical": "true",
                    "label":"featureToggle"
                },
                "fieldValueYes": {
                	"type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"fieldValueYes"
                }
            }
        }
        
        
        function getJiraConfigurationSchema() {
            return {
            	"cron": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"Refresh frequency",
                    "description": "Frequency at which data should be fetched from JIRA. The value should be a standard cron value in UNIX format. As advised by the LAS team, we should schedule this cron to run once a day only."
                },
                "deltaStartDate": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"Delta data start date and time",
                    "description": "Date and time from when the delta data should be fetched"
                },
                "jiraBaseUrl": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"JIRA URL",
                    "description": "Base JIRA URL to create the REST service URL to fetch data from JIRA"
                },
                "jiraQueryEndpoint": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"JIRA REST API URL",
                    "description": "REST service path to be appended to the base URL to create the REST service URL"
                },
                "jiraCredentials": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"Encrypetd JIRA Credentials",
                    "description": "Credentials in Base64 encoding in the form of username:password, to fetch JIRA data using REST service"
                },
                "storyFirstStatus": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"First Status of Story",
                    "description": "When you create a new issue, the issue gets created with a default status. Provide that value against this property. By Default, it should be Open."
                },
                "jiraIssueTypeNames": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "false",
                    "label":"JIRA issue types being used in the project",
                    "description": "In JIRA, general IssueType IDs are associated with various 'Issue' attributes. However, there is one attribute which the JIRA collector's queries rely on that varies from one JIRA instance to another. Provide a string name reference to your instance's IssueType, for the lowest level of Issues (e.g User Story) specific to your JIRA instance."
                },
                "jiraSprintDataFieldName": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"JIRA field that captures Sprint Name",
                    "description": "In JIRA, your instance should have its own custom field created for 'Sprint' or 'Timebox' details. This field allows you to specify the data field for your instance of JIRA. You can retrieve your instance's Sprint data field name via the following URI: https://[your-jira-domain-name]/rest/api/2/issue/[some-issue-name]. You can look for a package name com.atlassian.greenhopper.service.sprint.Sprint and identify the custome field name.Example: Provide the URI https://jira.devops.lloydsbanking.com/rest/api/2/issue/CBODIG-1699 in your browser and you will get a response where you can search for the custom field associated with the package com.atlassian.greenhopper.service.sprint.Sprint. Use the value for this parameter"
                },
                "jiraEpicIdFieldName": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"JIRA field that captures Epic Name",
                    "description": "In JIRA, your instance will have its own custom field created for 'Super Story' or 'Epic' back-end ID. This field allows you to specify the data field for your instance of JIRA. You can retrieve your instance's Epic ID field name via the following URI, where your queried User Story Issue has a Super Issue (e.g., Epic) tied to it. Your custom field name describes the Epic Value you expect to see, and is the only field that does this for a given issue: https://[your-jira-domain-name]/rest/api/2/issue/[some-issue-name]Example: Provide the URI https://jira.devops.lloydsbanking.com/rest/api/2/issue/CBODIG-1699 in your browser and you will get a response where you can search for the custom field associated with the Epic name. Use the value for this parameter"
                },
                "jiraStoryPointsFieldName": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"JIRA field that captures Story Points",
                    "description": "In JIRA, your instance will have its own custom field created for 'Story Points.' This field allows you to specify that data field for your instance of JIRA. You can retrieve your instance's Story Points ID field name via the following URI, where your queried User Story Issue has Story Points set on it. Your custom field name describes the Story Points value you expect to see: https://[your-jira-domain-name]/rest/api/2/issue/[some-issue-name] Example: Provide the URI https://jira.devops.lloydsbanking.com//rest/api/2/issue/CBODIG-1699 in your browser and you will get a response where you can search for the custom field associated with the Story Ponits. Use the value for this parameter"
                },
                "jiraProjectNames": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "false",
                    "label":"JIRA Project Name",
                    "description": "Add JIRA Project Name to fetch data for a particular Project from JIRA.The property supports multiple project names as well and for the same add project names separated by a comma. If this property field is left blank then data for all projects from JIRA will be fetched.",
                    "required": "true"
                },
                "linkDefectToStoryField": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "false",
                    "label":"Story and Defect Relationship status",
                    "description": "If you want to link a defect with a story to get the DIR, you need to provide a value in this parameter. For example, if you link a defect to a story, the defect will have either a 'blocks' or an 'issue of' relation with the story. Based on your project workflow, provide the values"
                },
                "todoStatuses": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "false",
                    "label":"All JIRA statuses representing issues/stories in to-do state",
                    "description": "You need to specify all those status values which related to your Project's JIRA work flow as an array."
                },
                "doingStatuses": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "false",
                    "label":"All JIRA statuses representing issues/stories in WIP state",
                    "description": "You need to specify all those status values which related to your Project's JIRA work flow as an array."
                },
                "doneStatuses": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "false",
                    "label":"All JIRA statuses representing issues/stories in Done state",
                    "description": "You need to specify all those status values which related to your Project's JIRA work flow as an array."
                },
                "bufferedEstimationFieldName": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"JIRA field that captures buffered Estimate"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "jiradefecttype": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"JIRA Issue types to be considered as a defect",
                    "description": "Specify the issue type considered as Defect"
                },
                "jiraTeamCustomField": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"JIRA field that captures Team Name",
                    "description": "Specify the custom field name that captures the Team Name. Projects use various fields like Epic, Component, Label etc. to capture Team Name. You can right click on the field and click on inspect to get the custom field name from JIRA"
                },
                "jiraTeamCustomName": {
                    "type": "array",
                    "inputType": "text",
                    "technical": "false",
                    "label":"Team name marked in issues/stories",
                    "description": "Specify the team name used to idenify your team's artifacts. For example, if you are using Component to distinguish your artifacts, the value being used in the Component field should be provided against this property"
                },
                "assignValueAttribute": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "false",
                    "label":"JIRA field that captures Assigned Value for a Story",
                    "description": "For calculating assigned value, use a field in JIRA. Specify the custom field name here"
                },
                "jiraTeamFieldName": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"jiraTeamFieldName"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "scheduledPriorMin": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "true",
                    "label":"scheduledPriorMin",
                    "description": "Time in minutes from when the collector starts to fetch data from JIRA"
                },
                "deltaCollectorItemStartDate": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"deltaCollectorItemStartDate"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "masterStartDate": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"masterStartDate"
                    	//"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "queryFolder": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"queryFolder"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "storyQuery": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"storyQuery"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "epicQuery": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"epicQuery"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "projectQuery": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"projectQuery"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "memberQuery": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"memberQuery"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "sprintQuery": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"sprintQuery"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "teamQuery": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"teamQuery"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "trendingQuery": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"trendingQuery"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "sprintDays": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "true",
                    "label":"sprintDays"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "sprintEndPrior": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "true",
                    "label":"sprintEndPrior"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "jiraOauthAuthtoken": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"jiraOauthAuthtoken"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "jiraOauthRefreshtoken": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"jiraOauthRefreshtoken"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "jiraOauthRedirecturi": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"jiraOauthRedirecturi"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "jiraOauthExpiretime": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"jiraOauthExpiretime"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "jiraProxyUrl": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"jiraProxyUrl"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "jiraProxyPort": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"jiraProxyPort"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "socketTimeOut": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "true",
                    "label":"socketTimeOut"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "pageSize": {
                    "type": "number",
                    "inputType": "number",
                    "technical": "true",
                    "label":"pageSize"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "jiraLiveStatusLabel": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"JIRA Live status"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                },
                "jiraLiveStatusFlow": {
                    "type": "string",
                    "inputType": "text",
                    "technical": "true",
                    "label":"JIRA field that captures issues/stories Live status"
                    //"description": "For the Cumulative Flow Diagram, provide the number of months (in the past) for which data should be graphically presented"
                }
            }
        }
    }
})();
