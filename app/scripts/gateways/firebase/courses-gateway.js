'use strict';
angular.module('firebaseGateways')
    .factory('firebaseCoursesGateway', function($q){
        return {
            add: function(){
                var d = $q.defer();
                d.resolve();
                return d.promise;
            }
        };
    });