(function () {
    'use strict';

    angular
        .module(HygieiaConfig.module)
        .controller('GridContainer', GridContainer);

        GridContainer.$inject = ['$scope', '$rootScope', '$timeout'];

        function GridContainer($scope){
            $scope.filters = [[['tabs', 'contains', 'home']]];
            $scope.rankers = null;
      
            $scope.isDropdownOpen = {
              orderBy: false,
              filter: false
            };
      
            /**
             * Update the filters array based on the given filter
             * $param filter: the name of a tab like 'work'  
             */
            $scope.filter = function(filter){
              $scope.filters = [[['tabs', 'contains', filter]]];
            }
      
            $scope.isTabActive = function(tab){
              return $scope.filters && $scope.filters[0][0][2] === tab;
            }
      
            /**
             * Update the rankers array based on the given ranker
             * $param ranker: the name of a card's property or a custom function 
             */
            $scope.orderBy = function(ranker){
              $scope.rankers = [[ranker, "asc"]];
            }
      
            $scope.isRankerActive = function(ranker){
              return $scope.rankers && $scope.rankers[0][0] === ranker;
            }
      
            /**
             * Delete a given card
             * $param index: the index of the card in the cards array 
             */
            $scope.deleteCard = function(id){
              var index = -1;
              for(var i in $scope.cards){
                if($scope.cards[i].id == id){
                  index = i;
                  break;
                }
              }
              if(index !== -1){
                $scope.cards.splice(index, 1);
              }
            }
      
            $scope.removeFirstCard = function(){
              $scope.deleteCard($scope.filteredItems[0].id)
            }
      
            /**
             * The pile of cards to be added
             */
            var cardsToAdd =  [
              {
                id: 9,
                template : "components/templates/partials/home.html",
                tabs : ["home", "work"],
                added : 1474871272105,
              },
              {
                id: 10,
                template : "components/templates/partials/education.html",
                tabs : ["home", "work"],
                added : 1467871272105,
              },
              {
                id: 11,
                template : "components/templates/partials/work1.html",
                tabs : ["home", "education"],
                data : {
                  "degree" : "PhD",
                  "field": "Artificial Intelligence",
                  "school" : "MIT"
                },
                added : 1479871272105
              }
            ];
      
            /**
             * Add a card to the main view
             * Takes a card from the pile of cardsToAdd and prepend it to the list of 
             * cards. Take a card belonging to the selected tab
             */
            $scope.addCard = function(){
              var getCurrentTab = function(){
                return $scope.filters[0][0][2];
              };
      
              var getIndexOfNextCardInTab = function(tab){
                var index = -1;
      
                for(var i in cardsToAdd){
                  if(cardsToAdd[i].tabs.indexOf(tab) !== -1){
                    index = i;
                    break;
                  }
                }
                return index;
              };
      
              var index =  getIndexOfNextCardInTab(getCurrentTab());        
      
              if(index !== -1){
                $scope.cards.unshift(cardsToAdd[index]);
                cardsToAdd.splice(index, 1);
              }
            }
      
            /**
             * The list of cards that show initialy
             */
            $scope.cards = [
              {
                id: 1,
                template : "components/templates/partials/education.html",
                tabs : ["home", "work"],
                data : {
                  "position" : "Web Developer",
                  "company" : "Hacker Inc."
                },
                added : 1444871272105,
              },
              {
                id: 2,
                template : "components/templates/partials/home.html",
                tabs : ["home", "work"],
                data : {
                  "position" : "Data Scientist",
                  "company" : "Big Data Inc."
                },
                added : 1423871272105,
              },
              {
                id: 4,
                template : "components/templates/partials/work1.html",
                tabs : ["home"],
                added : 1434871272105
              },
              {
                id: 3,
                template : "components/templates/partials/work2.html",
                tabs : ["home"],
                added : 1454871272105
              },
              {
                id: 5,
                template : "components/templates/partials/education.html",
                tabs : ["home"],
                added : 1484871272105
              },
              {
                id: 6,
                template : "components/templates/partials/home.html",
                tabs : ["home", "education"],
                data : {
                  "degree" : "Master",
                  "field": "Physics",
                  "school" : "ETH Zurich"
                },
                added : 1474871272105
              },
              {
                id: 7,
                template : "components/templates/partials/education.html",
                tabs : ["home", "education"],
                data : {
                  "degree" : "Bachelor",
                  "field": "Mathematics",
                  "school" : "EPFL"
                },
                added : 1464871272105
              },
              {
                id: 8,
                template : "components/templates/partials/work1.html",
                tabs : ["home", "work"],
                added : 1434871272105
              }
            ];

        }
   
})();

