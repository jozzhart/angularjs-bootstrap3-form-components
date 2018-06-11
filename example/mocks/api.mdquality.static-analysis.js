angular.module('app')
.run(function ($httpBackend) {

  var codeQuality = {"maturityLevel":"5","qualityGrade":"A","codeCoveragePercentage":"93","junitSuccessPercentage":"100","jsCodeCoveragePercentage":"NA","jsJunitSuccessPercentage":"NA","beMaturityLevel":"4","feMaturityLevel":"0","coveragePercentage":{"symbol":"","value":"93","unit":"%"},"jUnitSuccessPercentage":{"symbol":"","value":"100","unit":"%"},"techDebt":{"symbol":"","value":"132.0","unit":"hrs"}};

  $httpBackend.whenGET('/api/mdquality/static-analysis').respond(codeQuality);
  
});