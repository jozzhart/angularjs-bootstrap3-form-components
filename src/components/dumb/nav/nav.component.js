import NavTemplate from './nav.component.html';

class NavController {

  constructor(customDashboardData, dashboardData) {
    'ngInject'; // ng-annotate

    this.logo = null;
    this.projectDetails = null;
    this.customDashboardData = customDashboardData;
    this.dashboardData = dashboardData;
  }

  $onInit() {
    console.log('nav component initialised, page:', this.page);

    this.dashboardData.getLogoImage()
    .then((res)=>{
      this.logo = res.image;
    });


    this.customDashboardData.fetchProjectDetails()
    .then((res) => {
      this.projectDetails = res;
    });

  }

  $onChanges() {
    console.log('nav component changed');
  }

  $onDestroy() {
    console.log('nav component destroyed');
  }

}

let NavComponent = {
  template: NavTemplate,
  bindings: {
    page: '@'
  },
  controller: NavController
}

export default NavComponent;