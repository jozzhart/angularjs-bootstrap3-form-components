angular.module('app')
.run(function ($httpBackend) {

  $httpBackend.whenGET('/api/excel/projectDetails').respond({"id":"5b1e59780eac90336496b5ff","name":"Commercial Servicing Roles & Permissions","teamSize":16,"monetoryValue":"1135686","startDate":"25/04/2018","endDate":"18/08/2018"});
  
});