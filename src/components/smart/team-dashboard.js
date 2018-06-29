import TeamDashboardTemplate from './team-dashboard.html';

class TeamDashboardController {

  constructor(HealthService, $q, $scope, $controller, customDashboardData, $sce) {
    'ngInject'; // ng-annotate

    this.$controller = $controller;
    this.$scope = $scope;
    this.$sce = $sce;
    this.customDashboardData = customDashboardData;

    this.insights = [];

   }

  $onInit() {

    this.chartdata = {
      data: 'wow'
    }

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

    // console.log(this.chartModalDialog)
    this.customWidgetClick = function(){
      this.trendOverChartModal()
    }

    this.trendOverChartModal = function() {

      console.log('aiaiaiaiaiaiaiiaiai parent')

        console.log(this.chartdata)
    }

    console.log(this)


    // setInterval(()=>{
    //   console.log('interval', this)
    //   console.log('interval', this.$scope)
    // }, 100000)

  //  this.$scope.$watch('this.layout', (newValue, oldValue) => {
    
  //     this.showPeopleHeader = this.layout.col0.improvement.show || this.layout.col0.happiness.show;
  //     this.showValueHeader = this.layout.col0.value.show;

  //     this.showSpeedHeader = _.find(this.layout.col1, function(widget){
  //         return widget.show; 
  //     });
  //     this.showQualityHeader = _.find(this.layout.col2, function(widget){
  //         return widget.show; 
  //     });
  //   });


    //  Check happiness
    this.fetchHappinessIndex()
    .then((res) => {
      var data = res.data.data;

      if(parseFloat(data[0]) > parseFloat(data[1])) this.insights = [{
        type: "answer",
        message: this.$sce.trustAsHtml("Your happiness index has fallen over the last 5 weeks."),
        cta: {
          title: "Find out how to improve this",
          link: "https://confluence.devops.lloydsbanking.com/display/ET/Speedy+FAQ"
        }
      },{
        type: "button",
        message: this.$sce.trustAsHtml("Tell me more.")
      }];
    });
  }
}

let TeamDashboardComponent = {
  template: TeamDashboardTemplate,
  controller: TeamDashboardController
}

export default TeamDashboardComponent;
