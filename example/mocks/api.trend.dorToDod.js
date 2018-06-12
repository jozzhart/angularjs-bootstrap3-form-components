angular.module('app')
  .run(function ($httpBackend) {

    $httpBackend.whenPOST('/api/trend/dorToDod').respond({
      "labels": ["CSRV Sprint 35", "CSRV Sprint 34", "CSRV Sprint 33", "CSRV Sprint 32", "CSRV Sprint 31", "CSRV Sprint 30", "CSRV Sprint 29"],
      "data": ["4", "35", "41", "12", "12", "23", "13"],
      "unit": "Days",
      "fromSprint": "CSRV Sprint 35",
      "toSprint": "CSRV Sprint 29"
    });

  });
