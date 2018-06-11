angular.module('example.components')
.component('exampleReadme', {
  template: `
  <div class="container">
    <div class="row">
        <div class="col-xs-12" marked="$ctrl.my_markdown"></div>
    </div>
  </div>
  `,
  bindings: {
    hero: '='
  },
  controller: controllerFunction
});
    
controllerFunction.$inject = ['$http'];

function controllerFunction ($http) {
  var ctrl = this;

  $http.get('https://raw.githubusercontent.com/jozzhart/speedy-components/master/README.md')
  .then(function(res){
    ctrl.my_markdown = res.data;
  });
  
};