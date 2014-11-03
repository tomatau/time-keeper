'use strict';
angular.module('indexeddbGateways')
    .factory('indexeddbStudentsGateway', function(
        $q,
        idbGateway,
        parseDates
    ){
        var studentsPromise = idbGateway('Students');
        return {
            save: function(student){
                var d = $q.defer();
                student = parseDates(angular.copy(student));
                studentsPromise.then(function(store){
                    store.put( student, function success(id){
                        d.resolve(angular.extend(student, { id: id }));
                    });
                });
                return d.promise;
            },
            getAll: function(){
                var d = $q.defer();
                studentsPromise.then(function(store){
                    store.getAll(function success(studentList){
                        d.resolve(studentList);
                    });
                });
                return d.promise;
            }
        };
    });