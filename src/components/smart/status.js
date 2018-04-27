import StatusTemplate from './status.html';

class StatusController {

  constructor(collectorService) {
    this.collectorService = collectorService;
  }

  $onInit() {
    this.collectorService.status()
    .then(data => {
      this.collectors = data;
    })
  }

  $onChanges() {
    console.log('status component changed');
  }

  $onDestroy() {
    console.log('status component destroyed');
  }

}

let StatusComponent = {
  template: StatusTemplate,
  controller: StatusController
}


StatusController.$inject = ['collectorService']


export default StatusComponent;
