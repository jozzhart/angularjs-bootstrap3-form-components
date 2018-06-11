import NavTemplate from './nav.component.html';

class NavController {

  constructor() {}

  $onInit() {
    console.log('nav component initialised');
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
    content: '@'
  },
  controller: NavController
}

export default NavComponent;