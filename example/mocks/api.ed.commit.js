angular.module('app')
.run(function ($httpBackend) {

  $httpBackend.whenGET('/api/ed/commit').respond({"maturityLevel":"0","labels":[],"data":[]});
  
});