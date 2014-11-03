'use strict';
angular.module('indexeddbGateways')
    .factory('indexeddbCoursesGateway', function(
        $q,
        idbGateway
    ){
        var coursesPromise = idbGateway('Courses');
        return {
            save: function(course){
                var d = $q.defer();
                course = angular.copy(course);
                coursesPromise.then(function(store){
                    store.put( course, function success(id){
                        d.resolve(angular.extend(course, { id: id }));
                    });
                });
                return d.promise;
            },
            getAll: function(){
                var d = $q.defer();
                coursesPromise.then(function(store){
                    store.getAll(function success(courseList){
                        d.resolve(courseList);
                    });
                });
                return d.promise;
            }
        };
    });