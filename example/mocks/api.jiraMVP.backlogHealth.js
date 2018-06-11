angular.module('app')
.run(function ($httpBackend) {

  $httpBackend.whenGET('/api/jiraMVP/backlogHealth').respond({"backlogHealthPercentage":{"symbol":"","value":"1.4","unit":"x"},"backlogHealthMaturitylevel":"1","validationFlag":"false"});
  
});