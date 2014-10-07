'use strict';
angular.module('core')
    .factory('formBuilder', function(){
        return function(formDirective){
            return angular.extend({}, {
                scope: {
                    original: '=entity',
                    submitFn: '&submitFn'
                },
                transclude: true,
                bindToController: true,
                controllerAs: 'form',
                /* jshint unused:false */
                controller: function($scope){
                    // copy the entity so we can change it
                    this.entity = angular.copy(this.original);
                }
            }, formDirective);
        };
    });