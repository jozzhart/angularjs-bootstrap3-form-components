import StatusTemplate from './status.html';

class StatusController {

  constructor() {}

  $onInit() {
    console.log('status component initialised');
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

export default StatusComponent;