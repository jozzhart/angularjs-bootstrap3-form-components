angular.module('app')
.run(function ($httpBackend) {

  $httpBackend.whenGET('/api/ed/citime').respond({"fixTime":"NA","fixTimeMaturityLevel":"0","buildTimeMaturityLevel":"0","createNewEnvMaturityLevel":"0","relAndDeployTimeMaturityLevel":"0"});
  
});