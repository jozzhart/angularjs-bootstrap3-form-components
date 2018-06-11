angular.module('app')
.run(function ($httpBackend) {

  $httpBackend.whenGET('/api/jiraMVP/assignedMetrics').respond({"assignedValuePercentage":{},"assignedValueMaturitylevel":"0"});
  
});