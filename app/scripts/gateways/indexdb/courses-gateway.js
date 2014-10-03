'use strict';
angular.module('indexdbGateways')
    .factory('indexdbCoursesGateway', function($q){
        return {
            add: function(){
                var d = $q.defer();
                d.resolve();
                return d.promise;
            }
        };
    });