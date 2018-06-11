angular.module('app')
  .run(function ($httpBackend) {

    $httpBackend.whenGET('/api/jiraMVP/commitmentReliability').respond({
      "maturityLevel": "4",
      "commitmentReliability": {
        "symbol": "",
        "value": "77",
        "unit": "%"
      }
    });

  });
