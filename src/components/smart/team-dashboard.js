import TeamDashboardTemplate from './team-dashboard.html';

class TeamDashboardController {

  constructor(HealthService, $q, $scope, $controller, customDashboardData) {
    'ngInject'; // ng-annotate

    this.$controller = $controller;
    this.$scope = $scope;
    this.customDashboardData = customDashboardData;

    this.insights = [{
      message: "It looks like your DOR to DOD is slipping.",
      cta: {
        title: "Find out how to improve this",
        link: "https://confluence.devops.lloydsbanking.com/display/ET/Speedy+FAQ"
      }
    }]

   }

  $onInit() {

    // Currently hard coding the colors
    // this.customDashboardData.fetchHelpers()
    // .then(function(response) {

    angular.extend(this, this.$controller('CustomTemplateController', {
      $scope: this.$scope,
      $rootScope: {
        commonResourseConfig: {
          "0": "#02874f",
          "1": "#18519d",
          "2": "#b2174f",
          "3": "#d74f14"
        }
      }
    }));

   this.$scope.$watch('this.layout', (newValue, oldValue) => {
    
      this.showPeopleHeader = this.layout.col0.improvement.show || this.layout.col0.happiness.show;
      this.showValueHeader = this.layout.col0.value.show;

      this.showSpeedHeader = _.find(this.layout.col1, function(widget){
          return widget.show; 
      });
      this.showQualityHeader = _.find(this.layout.col2, function(widget){
          return widget.show; 
      });
    });
  }
}

let TeamDashboardComponent = {
  template: TeamDashboardTemplate,
  controller: TeamDashboardController
}

export default TeamDashboardComponent;
