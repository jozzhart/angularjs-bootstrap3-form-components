angular.module('app')
.run(function ($httpBackend) {

  $httpBackend.whenGET('/api/jiraMVP/DodToLive').respond({"storyLiveLeadTime":{"symbol":"","value":"22","unit":"Weeks","trend":""},"dodToLiveMaturitylevel":"1","validationFlag":"false"});
  
});