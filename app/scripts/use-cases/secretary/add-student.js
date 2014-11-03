'use strict';
angular.module('useCases')
    /**
     */
    .factory('addStudent', function(Student, studentsGateway){
        return function addStudent(){
            return studentsGateway.save(Student.get())
                .then(function(savedStudent){
                    // StudentList.add(savedStudent);
                    Student.reset();
                });
        };
    })
    ;