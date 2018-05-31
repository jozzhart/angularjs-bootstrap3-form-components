describe('Controller : MaturityRadarController', function () {
    var controller,
        scope,
        httpBackend;
    var  data = {
        "textLines": [
          "Engineering",
          "Maturity"
        ],
        "groups": [
          {
            "textLines": [
              "Productivity"
            ],
            "bars": [
              {
                "textLines": [
                  "Code Build",
                  "Time"
                ],
                "value": 5
              },
              {
                "textLines": [
                  "Time to Fix",
                  "a Broken Build"
                ],
                "value": 1
              },
              {
                "textLines": [
                  "Release and",
                  "Deploy Time"
                ],
                "value": 0
              },
              {
                "textLines": [
                  "Time to Create",
                  "a New Environment"
                ],
                "value": 0
              },
              {
                "textLines": [
                  "Number of",
                  "Check-ins Per Day",
                  "in Master"
                ],
                "value": 1
              },
              {
                "textLines": [
                  "DOD",
                  "to Live"
                ],
                "value": 5
              },
              {
                "textLines": [
                  "DOR",
                  "to DOD"
                ],
                "value": 5
              },
              {
                "textLines": [
                  "Sprint",
                  "Predictability"
                ],
                "value": 1
              },
              {
                "textLines": [
                  "Functional Test",
                  "Execution Time"
                ],
                "value": 5
              },
              {
                "textLines": [
                  "Flow",
                  "Efficiency"
                ],
                "value": 5
              }
            ]
          },
          {
            "textLines": [
              "Quality"
            ],
            "bars": [
              {
                "textLines": [
                  "Code",
                  "Quality"
                ],
                "value": 5
              },
              {
                "textLines": [
                  "JUnit Coverage",
                  "& Pass %"
                ],
                "value": 0
              },
              {
                "textLines": [
                  "JSUnit Coverage",
                  "& Pass %"
                ],
                "value": 3
              },
              {
                "textLines": [
                  "Defect Injection",
                  "Rate"
                ],
                "value": 1
              },
              {
                "textLines": [
                  "Automated",
                  "Test %"
                ],
                "value": 2
              },
              {
                "textLines": [
                  "Completed Story",
                  "Demonstrated to",
                  "Product Owner"
                ],
                "value": 0
              }
            ]
          },
          {
            "textLines": [
              "People"
            ],
            "bars": [
              {
                "textLines": [
                  "Happiness",
                  "Index"
                ],
                "value": 0
              },
              {
                "textLines": [
                  "Improvement"
                ],
                "value": 3
              }
            ]
          }
        ]
      }
    // load the controller's module
    beforeEach(module(HygieiaConfig.module));    
    
    // inject the required services and instantiate the controller
    beforeEach(inject(function ($rootScope, $controller, $httpBackend) {
        scope = $rootScope.$new();  
        controller = $controller('MaturityRadarController', {$scope: scope});
        httpBackend = $httpBackend;       
    }));

    describe('Testing MaturityRadarController', function(){
        it("Should verify that the MaturityRadarController exists", function(){ 
            expect(controller).toBeDefined();     
        });

        it("Test fetch maturity level api data function and verify request is sent and will resolve service route", function(){   
            httpBackend.expectGET('api/maturitylevels').respond(data);
            httpBackend.expectGET('app/dashboard/views/site.html').respond(""); 
            httpBackend.expectGET('app/dashboard/views/login.html').respond("");
            httpBackend.flush();  
        });
    });
    
});