angular.module('app')
  .run(function ($httpBackend) {

    $httpBackend.whenGET('/api/jiraMVP/sprintsListWithoutStatus').respond(["1. CSRV Sprint 35", "2. CSRV Sprint 34", "3. CSRV Sprint 33", "4. CSRV Sprint 32", "5. CSRV Sprint 31", "6. CSRV Sprint 30", "7. CSRV Sprint 29", "8. CSRV Sprint 28", "9. RnP Sprint 27", "10. RnP Sprint 26", "11. RnP Sprint 25", "12. RnP Sprint 24", "13. RnP Sprint 23", "14. RnP Sprint 22", "15. RnP Sprint 21", "16. RnP Sprint 20", "17. RnP Sprint 19", "18. RnP Sprint 18", "19. RnP Sprint 17", "20. RnP Sprint 16", "21. RnP Sprint 15", "22. RnP Sprint 14", "23. RnP Sprint 13", "24. RnP Sprint 12", "25. RnP Sprint 11", "26. RnP Sprint 10", "27. RnP Sprint 9", "28. RnP Sprint 8", "29. RnP Sprint 7", "30. RnP Sprint 6", "31. RnP Sprint 5"]);

  });
