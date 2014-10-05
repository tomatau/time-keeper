'use strict';
angular.module('indexeddbGateways')
    .factory('indexeddbCoursesGateway', function($q, timeKeeperGateway){
        var coursesStore = timeKeeperGateway({
            storeName: 'Courses'
        });
        return {
            save: function(course){
                var d = $q.defer();
                course = angular.copy(course);
                coursesStore.put( course,
                    function success(id){
                        d.resolve(angular.extend(course, { id: id }));
                    }
                );
                return d.promise;
            }
        };
    });