'use strict';
angular.module('indexeddbGateways')
    .factory('indexeddbCoursesGateway', function($q, idbGateway){
        var coursesStore = idbGateway('Courses');
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