import Template from './input-text.component.html';

class Controller {

  constructor() {}

  $onInit() {}

  $onChanges() {
    this.placeholder = this.placeholder || this.name;
  }
}

let InputTextComponent = {
  template: Template,
  bindings: {
    placeholder: '@',
    name: '@',
    description: '@',
    value: '='
  },
  controller: Controller
}

export default InputTextComponent;