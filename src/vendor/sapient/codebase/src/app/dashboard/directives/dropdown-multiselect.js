/**
 * Custom multiselect dropdown directive
 */
(function () {
    'use strict';

  angular
    .module(HygieiaConfig.module + '.core')
    .directive('dropdownMultiselect', function($document){  
        return {
            restrict: 'E',
            scope: {
                model: '=',
                options: '=',
                click: '&',
                filter: '@',
                isdetail: '=',
                label: '@'             
            },
            template:
                "<div class='multi-combo-container'>" +
                "<text data-target='#{{filter}}' data-toggle='collapse' aria-controls='{{filter}}'>{{label}}&nbsp;<a class='icon-tag collapsed' data-target='#{{filter}}' data-toggle='collapse' aria-controls='{{filter}}' data-tooltip='{{filter}}'></a></text>" +
                "<div id={{filter}} class='collapse'>" +
                "<div class='row'>" +
                "<div class='col-lg-12'>" +            
                "<ul  aria-labelledby='dropdownMenu'>" +                   
                        "<li data-ng-repeat='option in options'> " + 
                        "<input ng-disabled='{{isdetail}}' data-ng-click='toggleSelectItem(option, options)' type='checkbox' ng-checked='{{option.isSelected}}' value='{{option.name}} ' />{{option.name}}</li>" + 
                    "</li>" +
                    "</ul>" +            
                "</div>" +
                "</div>" +
                "</div>" +
                " </div>",
            link: function (scope, $element) { 
                scope.selectAll = function () {
                    scope.model = [];
                    angular.forEach(scope.options, function (item, index) {
                        scope.model.push(item.id);
                    });
                };

                scope.deselectAll = function () {
                    scope.model = [];
                };

                scope.toggleSelectItem = function (option, options) {
                    var intIndex = -1;
                    angular.forEach(scope.model, function (item, index) {
                        if (item.id == option.id) {
                            intIndex = index;
                        }
                    });
                    
                    if (intIndex >= 0) {
                        scope.model.splice(intIndex, 1);
                    }
                    else {
                        scope.model.push({id:option.id, name:option.name, isSelected: !option.isSelected});
                    }
                    _(options).forEach(function (opt) {
                       if(option.id === opt.id) {
                        opt.isSelected = !opt.isSelected;
                       }
                      });
                    scope.click({selectedIds: {ids: scope.model, options: options}});
                };
            }
        }
    })
})();
