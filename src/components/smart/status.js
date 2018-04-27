import StatusTemplate from './status.html';

class StatusController {

  constructor(HealthService) {
    this.healthService = HealthService;
  }

  $onInit() {
    this.healthService.collectors()
    .then(data => {
      this.collectors = data;
    })
  }
}

let StatusComponent = {
  template: StatusTemplate,
  controller: StatusController
}

StatusController.$inject = ['HealthService']

export default StatusComponent;
