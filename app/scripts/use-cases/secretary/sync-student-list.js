'use strict';
angular.module('useCases')
    .factory('syncStudentList', function(StudentList, studentsGateway){
        return function syncStudentList(){
            return studentsGateway.getAll()
                .then(function(list){
                    StudentList.set(list);
                });
        };
    })
;