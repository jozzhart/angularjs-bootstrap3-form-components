import BasicTemplate from './basic.component.html';

class BasicController {

  constructor() {}

  $onInit() {
    console.log('basic component initialised');
  }

  $onChanges() {
    console.log('basic component changed');
  }

  $onDestroy() {
    console.log('basic component destroyed');
  }

}

let BasicComponent = {
  template: BasicTemplate,
  bindings: {
    content: '@'
  },
  controller: BasicController
}

export default BasicComponent;