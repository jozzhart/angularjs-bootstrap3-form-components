angular.module('app')
.run(function ($httpBackend) {

  var codeQuality = {"maturityLevel":"5","qualityGrade":"A","codeCoveragePercentage":"97","junitSuccessPercentage":"0","jsCodeCoveragePercentage":"96","jsJunitSuccessPercentage":"0","beMaturityLevel":"4","feMaturityLevel":"4","coveragePercentage":{"symbol":"","value":"97","unit":"%"},"jUnitSuccessPercentage":{"symbol":"","value":"0","unit":"%"},"jscoveragePercentage":{"symbol":"","value":"96","unit":"%"},"jsJUnitSuccessPercentage":{"symbol":"","value":"0","unit":"%"},"techDebt":{"symbol":"","value":"184.0","unit":"hrs"}};

  $httpBackend.whenGET('/api/mdquality/static-analysis').respond(codeQuality);
  
});