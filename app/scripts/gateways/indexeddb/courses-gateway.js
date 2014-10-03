'use strict';
angular.module('indexeddbGateways')
    .factory('indexeddbCoursesGateway', function($q){
        return {
            add: function(){
                var d = $q.defer();
                d.resolve();
                return d.promise;
            }
        };
    });