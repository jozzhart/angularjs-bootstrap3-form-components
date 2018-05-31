/**
 * Custom widget directive
 */
(function () {
    'use strict';

  angular
    .module(HygieiaConfig.module + '.core')
    .directive('customCalendar', customCalendar);

    customCalendar.$inject = ['$http'];
  function customCalendar($http) {
    return {
        templateUrl: 'app/dashboard/views/custom-calendar.html',
        restrict: 'E',
        scope:{
          fromDate: '=',
          toDate: '=',
          click: '&'
        },
        link: link
    };

    function link(scope, element, attrs) {
      scope.errorMessage = '';          
      scope.enableApplyButton = true;
      scope.inlineOptions = {
        minDate: new Date(),
        showWeeks: true
      };

      scope.dateOptions = {
        //dateDisabled: disabled,
        formatYear: 'yy',
        maxDate: DisabledCalender(),
        minDate: new Date("1900", "01", "01"),
        startingDay: 1
      };

      scope.formats = ['dd-MM-yyyy', 'dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      scope.format = scope.formats[0];
      scope.altInputFormats = ['M!/d!/yyyy'];

      scope.startDateCalendarPopup = {
        opened: false
      };
    
      scope.endDateCalendarPopup = {
        opened: false
      };
            
      scope.$watchCollection('[fromDate, toDate]', function(newValues) {
        if(newValues && newValues[0]) {
          var minDate = newValues[0].split('-');
          //scope.dateOptions.minDate =  new Date(minDate[2], minDate[1], minDate[0]);
          scope.startDate =  new Date(minDate[2], (minDate[1]-1), minDate[0]);
        }
        if(newValues && newValues[1]) {
          var maxDate = newValues[1].split('-');          
          scope.endDate =  new Date(maxDate[2], (maxDate[1]-1), maxDate[0]);
        }        
      });
      
      scope.$watch('startDate', function(newval, oldval){
        scope.errorMessage = '';
        if(scope.endDate < scope.startDate) {
            scope.endDate = '';
            scope.errorMessage = 'Start date must be less than End date';
        }
        if(scope.startDate < scope.endDate) {
          scope.enableApplyButton = false;
        }
      });
      
      scope.$watch('endDate', function(newval, oldval){
        scope.errorMessage = '';
          if(scope.endDate < scope.startDate) {
              scope.endDate = '';
              scope.errorMessage = 'End date must be greater than Start date';
          }
          if(scope.startDate < scope.endDate) {
            scope.enableApplyButton = false;
          }
      });
            
      scope.clear = function() {
        scope.startDate = null;
        scope.endDate = null;
        scope.enableApplyButton = true;
      }; 

      scope.startDateCalendarPopupOpen = function() {
        scope.startDateCalendarPopup.opened = true;                
      };
    
      scope.endDateCalendarPopupOpen = function() {
        scope.endDateCalendarPopup.opened = true;
      };
    
      scope.setDate = function(year, month, day) {
        scope.dt = new Date(year, month, day);
      };
      
      scope.applyDates = function(){
        scope.click({selectedDates: {startDate: formatDate(scope.startDate), endDate: formatDate(scope.endDate)}});
      }
          
      // Disable weekend selection
      function disabled(data) {
        var date = data.date,
          mode = data.mode;
        return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
      }

      function formatDate(date) {       
        return ("0" + date.getDate()).slice(-2) + "-"
           + ("0"+(date.getMonth()+1)).slice(-2) + "-" 
           + date.getFullYear()
      }

      function DisabledCalender() {
        var dateObj = new Date();         
          var month = ("0"+(dateObj.getMonth()+1)).slice(-2)
          var day =  ("0" + dateObj.getDate()).slice(-2)
          var year = dateObj.getUTCFullYear();
          return new Date(year, month-1, day);
      }
    }
  }
})();
