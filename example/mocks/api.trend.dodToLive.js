angular.module('app')
  .run(function ($httpBackend) {

    $httpBackend.whenGET('/api/trend/dorToDod').respond({
      "labels": ["CSRV Sprint 35", "CSRV Sprint 34", "CSRV Sprint 33", "CSRV Sprint 32", "CSRV Sprint 31", "CSRV Sprint 30", "CSRV Sprint 29"],
      "data": ["0", "0", "0", "0", "0", "0", "0"],
      "unit": "Days",
      "fromSprint": "CSRV Sprint 35",
      "toSprint": "CSRV Sprint 29"
    });

  });
