import TeamDashboardTemplate from './team-dashboard.html';

class TeamDashboardController {

  constructor(HealthService, $q, $scope, $controller, customDashboardData) {
    'ngInject'; // ng-annotate

    this.$controller = $controller;
    this.$scope = $scope;
    this.customDashboardData = customDashboardData;

    this.minimised = true;

    this.insightsCount = 1;
    
    this.firstColumnBgColor = "#02874f";
    this.secondColumnBgColor = "#18519d";
    this.thirdColumnBgColor = "#b2174f";
    this.fourthColumnBgColor = "#d74f14";
    

    // this.fetchData = function () {
    //   return $q(function (resolve, reject) {
    //     setTimeout(resolve({
    //       title: 'Mocked Widget'
    //     }), 1);
    //   })
    // };
  }

  showHide(state) {
    this.minimised = state === 'hide' ? true : false;
  }

  
  also(){
    this.insightsCount = null;
    console.log()
  }

  $onInit() {

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
