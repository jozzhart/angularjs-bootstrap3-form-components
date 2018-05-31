/**
 * Fetches data for Team Dashboard
 */
(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module + '.core', [])
        .factory('customDashboardData', customDashboardData);
    
    customDashboardData.$inject = ['$http'];
    function customDashboardData($http) {

        return {
            fetchProjectDetails: fetchProjectDetails,
            fetchWidgetDetails: fetchWidgetDetails,
            fetchWidgetHoverText: fetchWidgetHoverText,
            sendWidgetDetails: sendWidgetDetails,
            fetchHelpers : fetchHelpers
        };

        function fetchProjectDetails() {
            return $http.get('/api/excel/projectDetails').then(function (response) {
                return response.data;
            });
        }

        function fetchWidgetDetails(route) {
            return $http.get(route).then(function (response) {
                return response.data;
            });
        }

        function sendWidgetDetails(route, dataObj) {
            return $http.post(route, dataObj).then(function (response) {
                return response.data;
            });
        }
                
        function fetchHelpers() {
            return $http.get('../helpers/common-resource.json').then(function (response) {
                return response.data;
            });
        }
        
        function fetchWidgetHoverText() {
            return {
                'storyDorToDod': 'Time taken from ready to start development to reaching definition of done i.e. completing code with all the testing',
                'storyDodToLive': 'Time taken from definition of done to Complete to Live',
                'storyBacklogToDor': 'Time taken from Backlog to definition of ready',
                'storyLeadTime': 'Time taken from Development & Test Complete to Live',
                'defectInjectionRate': 'Number of defects identified post done (pre-live) over story count',
                'noOfCheckins': 'Number of check-ins and builds per day on the master branch',
                'flowEfficiency': "flow efficiency measures the percentage of time spent actively working on items that are ‘in the system’ and dividing it by the overall lead time which includes both active working time and wait time for those items",
                'cfd': 'Statuses of stories for a particular time interval',
                'envCreationTime': 'Time it takes to new environment for Dev / QA',
                'happinessIndex': 'Rating provided by the team against 4 parameters: (Work life balance, Recognition, Learning & Innovation) in the standup',
                'appDemonstration': 'Demonstration to Product owner',
                'sprintPredictablity': 'The +/- of velocity delivered based on a previous average.  This is calculated by dividing the velocity in the last sprint by the average velocity in the last 3 sprints',
                'releaseDeployTime': 'Time required to release the packet on Prod like cluster and  bringing the services back for use',
                'autoPercentage': 'Percent of automated tests (functional and Non functional) over Total tests',
                'codeQuality': 'The rating given to the project related to the value of its Technical Debt Ratio',
                'coveragePercentage': 'JUNIT COVERAGE: Code coverage over number of lines of Java code <br> JSUNIT COVERAGE: Code coverage over number of lines of JS code',
                'passPercentage': 'PASS %: Percentage of test cases getting passed',
                'improvement': 'Kaizen Mindset - Retrospectives regularly held and action items recorded and progressed',
                'citime': 'TIME TO FIX A BROKEN BUILD: Time lag between broken (including compilation or quality gate failure) build to the fixed build <br> CODE BUILD TIME: Time required to build the deployable packet, passing all gates of CI  (incl. code quality, sanity etc.) <br> FUNCTIONAL TEST EXECUTION TIME: Time taken to execute the testing',
                'commitmentReliability': 'The average story points delivered in the last 3 sprints divided by the average story points committed in the last 3 sprints',
                'techDebt': 'Aggregated effort of all tech stories in given project having label TECH_DEBT',
                'agingIssue':'Ageing analysis of the open issues,  median of the difference between issue create date and current date',
                'issues': 'All the open P1 issues of type issue',
                'sonarTechDebt': 'Aggregated effort from the Sonar related to tech debt',
                'assignedValuePercentage':'Percentage of stories that have assigned value over overall stories in Current Sprint ',
                'backlogHealthPercentage': 'The total number of stories in the Product Backlog status at the end of the last sprint divided by the average number of stories delivered in the last 3 sprints.',
                'assignmentValueTrend': 'Trend of stories that have assigned value over overall stories across sprints in given project',
                'risks': 'Top n issues of type risk',
                'topIssues':'Top n Issues',
                'defectCount': 'Number of open defects based on priority',
                'deploymentFrequency': 'Number of deployments in last 3 months',
                'trendOverAutoVsManual': 'Trend over time for auto vs manual test',
                'trendOverFunctionalTestExecutionTime': 'Trend over functional test execution',
                'trendOverFrontEndJUnit':'Trend over front end JUnit',
                'trendOverBackEndJUnit': 'Trend over back end JUnit',
                'trendOverCodeQuality': 'Trend Over code quality',
                'trendOverSprintPredictability': 'Trend over sprint predictability',
                'trendOverCommitmentReliability': 'Trend over commitment reliability',
                'trendOverTimeToFixedBrokenBuild': 'Trend Over time to fixed broken build',
                'trendOverCodeBuildTime': 'Trend over code build time',
                'trendOverStoryLeadTime': 'Trend over story lead time',
                'trendOverStoryLiveLeadTime': 'Trend over story live lead time',
                'defectInjectionRatePostLive': 'Number of defects identified post live'
            };
        }
    }
})();
