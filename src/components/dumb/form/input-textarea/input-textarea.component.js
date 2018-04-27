import Template from './input-textarea.component.html';

class Controller {

  constructor() {}

  $onInit() {}

  $onChanges() {
    this.placeholder = this.placeholder || this.name;
  }
}

let InputTextareaComponent = {
  template: Template,
  bindings: {
    value: '=',
    name: '@',
    description: '@'
  },
  controller: Controller
}

export default InputTextareaComponent;