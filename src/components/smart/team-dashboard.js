import TeamDashboardTemplate from './team-dashboard.html';

class TeamDashboardController {

  constructor(HealthService, $q, $scope, $controller) {
    'ngInject'; // ng-annotate

    this.$controller = $controller;
    this.$scope = $scope;  

    this.fetchData = function(){
      return $q(function(resolve, reject) {
        setTimeout(resolve({
          title: 'Mocked Widget'
        }), 1);
      })   
    };
  }

  $onInit() {

    // this.layout = {
    //   speed: [{
    //     classes: ['cellDoubleWidth'],
    //     visible: true
    //   },{
    //     visible: true
    //   }]
    // }

    var defaultLayout = {
      improvement: {
          classes: 'cellDoubleWidth'
      },
      happiness: {
          classes: 'cellDoubleWidth cellDoubleHeight'
      },
      value: {
          classes: 'cellDoubleWidth'
      },
      backlogToDOR: {
          classes: 'cellDoubleWidth'
      },
      storyDORtoDOD: {
          classes: 'cellDoubleWidth'
      },
      dodToLive: {
          classes: 'cellDoubleWidth'
      },
      storyLeadTime: {
          classes: 'cellDoubleWidth'
      },
      sprintPredictability: {
          classes: ''
      },
      commitmentReliability: {
          classes: ''
      },
      cfdData: {
          classes: 'cellDoubleWidth'
      },
      backlogHealth: {
          classes: 'cellDoubleWidth'
      },
      noOfCheckins: {
          classes: 'cellDoubleWidth'
      },
      ciTime: {
          classes: 'cellTripleWidth'
      },
      releaseDeployTime: {
          classes: ''
      },
      techDebit: {
          classes: ''
      },
      envCreationTime: {
          classes: ''
      },
      defectInjectionRate: {
          classes: ''
      },
      autoVsManualTest: {
          classes: ''
      },
      codeQuality: {
          classes: 'cellDoubleWidth'
      },
      jUnitCoverage: {
          classes: 'cellDoubleWidth'
      },
      appDemonstration: {
          classes: 'cellDoubleWidth'
      }

      
      
    }
    
    this.layout = defaultLayout;

    angular.extend(this, this.$controller('CustomTemplateController', {$scope: this.$scope}));

    console.log(this)


    

  }
}

let TeamDashboardComponent = {
  template: TeamDashboardTemplate,
  controller: TeamDashboardController
}

export default TeamDashboardComponent;
