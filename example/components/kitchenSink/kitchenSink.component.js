angular.module('example.components').component('exampleKitchenSink', {
  template: `
  <spdy-nav></spdy-nav>
  <div class="container">
  <div class="row">
    <div class="jumbotron">
      <spdy-basic content="{{$ctrl.basicContent}}"></spdy-basic>
    </div>
  </div>
  <spdy-input-text name="{{$ctrl.inputText[0].name}}" description="{{$ctrl.inputText[0].description}}" value="inputText[0].value" required="{{$ctrl.inputText[0].required}}"></spdy-input-text>
  <spdy-input-text name="{{$ctrl.inputText[1].name}}" description="{{$ctrl.inputText[1].description}}" value="inputText[1].value" required="{{$ctrl.inputText[1].required}}"></spdy-input-text>
  <spdy-input-number name="{{$ctrl.inputNumber.name}}" description="{{$ctrl.inputNumber.description}}" value="inputNumber.value"></spdy-input-number>
  <spdy-input-textarea name="{{$ctrl.inputTextarea.name}}" value="$ctrl.inputTextarea.value"></spdy-input-textarea>
</div>
  `,
  bindings: {
    hero: '='
  },
  controller: function($scope, $element, $attrs) {
    var ctrl = this;

    ctrl.basicContent = 'Kitchen Sink';

    ctrl.inputText = [{
      name: 'text',
      description: 'A great description',
      value: ''
    }, {
      name: 'required text',
      description: 'A required description',
      value: '',
      required: true
    }];
    ctrl.inputNumber = {
      name: 'number',
      description: 'This has to be a number pal',
      value: 12345
    };
    ctrl.inputTextarea = {
      name: 'textarea',
      description: 'This has to be a number pal',
      value: 'Some longer text and go in here, but I guess its not that long'
    };

  }
});