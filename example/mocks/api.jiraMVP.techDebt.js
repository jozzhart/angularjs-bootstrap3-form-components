angular.module('app')
.run(function ($httpBackend) {

  $httpBackend.whenGET('/api/jiraMVP/techDebt').respond({"techDebt":{"symbol":"","value":"6","unit":"Pts"},"techDebtMaturitylevel":"4","validationFlag":"false"});
  
});