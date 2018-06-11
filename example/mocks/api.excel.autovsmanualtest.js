angular.module('app')
.run(function ($httpBackend) {

  $httpBackend.whenGET('/api/excel/autovsmanualtest').respond({"maturityLevel":"5","autoPercentage":{"symbol":"","value":"96","unit":"%"},"sumTestExecution":{"symbol":"<","value":"3","unit":"hrs"},"funcTestExecTimeMaturityLevel":"4"});
  
});