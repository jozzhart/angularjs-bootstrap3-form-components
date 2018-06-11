angular.module('app')
.run(function ($httpBackend) {

  $httpBackend.whenGET('/api/jiraMVP/cfddetails').respond({
    title: 'guess'
  });
  
});