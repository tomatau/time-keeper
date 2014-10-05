'use strict';
angular.module('indexeddbGateways')
    .factory('indexeddbCoursesGateway', function($q, timeKeeperGateway){
        return {
            add: function(course){
                course = angular.copy(course);
                var d = $q.defer();
                timeKeeperGateway.put( course,
                    function success(id){
                        d.resolve(angular.extend(course, { id: id }));
                    }
                );
                return d.promise;
            }
        };
    });