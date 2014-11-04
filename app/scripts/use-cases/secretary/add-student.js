'use strict';
angular.module('useCases')
    /**
     */
    .factory('addStudent', function(Student, studentsGateway){
        return function addStudent(){
            return studentsGateway.save(Student.get())
                /* jshint: unused:false */
                .then(function(savedStudent){
                    // notification service
                    // StudentList.add(savedStudent);
                    Student.reset();
                });
        };
    })
    ;