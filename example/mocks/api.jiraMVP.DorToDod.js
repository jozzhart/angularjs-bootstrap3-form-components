angular.module('app')
.run(function ($httpBackend) {

  $httpBackend.whenGET('/api/jiraMVP/DorToDod').respond({"storyLeadTime":{"symbol":"","value":"3","unit":"Weeks","trend":""},"dorToDodMaturitylevel":"4","validationFlag":"false"});
  
});