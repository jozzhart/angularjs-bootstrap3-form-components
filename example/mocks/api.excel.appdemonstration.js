angular.module('app')
  .run(function ($httpBackend) {

    $httpBackend.whenGET('/api/excel/appdemonstration').respond({
      "maturityLevel": "0",
      "labels": ["RnP Sprint 5", "RnP Sprint 8", "RnP Sprint 14", "RnP Sprint 7", "RnP Sprint 12", "RnP Sprint 10", "RnP Sprint 13", "RnP Sprint 6", "RnP Sprint 15", "RnP Sprint 9", "RnP Sprint 11", "RnP Sprint 16", "RnP Sprint 22", "RnP Sprint 19", "RnP Sprint 20", "RnP Sprint 24", "RnP Sprint 18", "RnP Sprint 17", "RnP Sprint 21", "RnP Sprint 26", "RnP Sprint 27", "CSRV Sprint 28", "CSRV Sprint 29", "CSRV Sprint 30", "RnP Sprint 23", "RnP Sprint 25", "CSRV Sprint 31", "CSRV Sprint 32", "CSRV Sprint 33", "CSRV Sprint 34", "CSRV Sprint 35"],
      "data": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      "totalStories": [9, 13, 12, 13, 7, 7, 4, 5, 16, 8, 18, 11, 12, 13, 10, 9, 13, 9, 16, 13, 10, 25, 25, 28, 11, 4, 28, 31, 14, 33, 35]
    });

  });
