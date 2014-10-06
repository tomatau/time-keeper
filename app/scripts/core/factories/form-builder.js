'use strict';
angular.module('core')
    .factory('formBuilder', function(){
        return function(formDirective){
            return angular.extend({}, {
                scope: {
                    entity: '=entity',
                    submitFn: '&submitFn'
                },
                transclude: true,
                bindToController: true,
                controllerAs: 'form',
                /* jshint unused:false */
                controller: function($scope){ }
            }, formDirective);
        };
    });