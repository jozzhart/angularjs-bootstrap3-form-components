angular.module('app')
.run(function ($httpBackend) {

  $httpBackend.whenPOST('/api/trend/sprintPredictability').respond({"labels":["CSRV Sprint 34","CSRV Sprint 33","CSRV Sprint 32","CSRV Sprint 31","CSRV Sprint 30","CSRV Sprint 29","CSRV Sprint 28"],"data":["122","16","120","126","93","180","258"],"unit":"%","fromSprint":"CSRV Sprint 34","toSprint":"CSRV Sprint 28"});


  
  
});