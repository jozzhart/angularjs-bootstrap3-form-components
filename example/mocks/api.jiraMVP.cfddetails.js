angular.module('app')
.run(function ($httpBackend) {

  $httpBackend.whenGET('/api/jiraMVP/cfddetails').respond({"statusList":["Backlog","In_Progress","Final_Review","Done"],"monthList":["MAR","APR","MAY","JUN"],"countList":[[58,89,108,100],[19,13,14,14],[0,2,1,1],[85,155,220,231]]});
  
});