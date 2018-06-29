angular.module('app')
.run(function ($httpBackend) {

  $httpBackend.whenGET('/api/jiraMVP/sprintsList').respond(["1. CSRV Sprint 34","2. CSRV Sprint 33","3. CSRV Sprint 32","4. CSRV Sprint 31","5. CSRV Sprint 30","6. CSRV Sprint 29","7. CSRV Sprint 28","8. RnP Sprint 27","9. RnP Sprint 26","10. RnP Sprint 25","11. RnP Sprint 24","12. RnP Sprint 23","13. RnP Sprint 22","14. RnP Sprint 21","15. RnP Sprint 20","16. RnP Sprint 19","17. RnP Sprint 18","18. RnP Sprint 17","19. RnP Sprint 16","20. RnP Sprint 15","21. RnP Sprint 14","22. RnP Sprint 13","23. RnP Sprint 12","24. RnP Sprint 11","25. RnP Sprint 10","26. RnP Sprint 9","27. RnP Sprint 8","28. RnP Sprint 7","29. RnP Sprint 6","30. RnP Sprint 5"]);
  
});