angular.module('app')
  .run(function ($httpBackend) {

    $httpBackend.whenGET('/api/jiraMVP/defectinjectionrate').respond({
      "maturityLevel": "0",
      "defectInjectionRate": {}
    });

  });
