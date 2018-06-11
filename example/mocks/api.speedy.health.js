angular.module('app')
.run(function ($httpBackend) {

  var collectors = [{
    "collectorName": "UDeploy",
    "lastExecuted": 1524651360141,
    "errors": [{
        "errorCode": "Unreachable",
        "errorMessage": "https://ucd.intranet.group/rest/deploy/application",
        "timestamp": 1524651360140
      },
      {
        "errorCode": "Unreachable",
        "errorMessage": "https://ucd.intranet.group/rest/deploy/application",
        "timestamp": 1524651360140
      }
    ]
  }, {
    "collectorName": "Github",
    "lastExecuted": 1524651300141,
    "errors": []
  }];

  $httpBackend.whenGET('/api/speedy/health').respond(collectors);
});