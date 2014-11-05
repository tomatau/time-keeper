'use strict';
angular.module('useCases')
    .factory('addStudent', function(
        Student,
        studentsGateway,
        notify,
        StudentList,
        CourseList
    ){
        return function addStudent(){
            return studentsGateway.save(Student.get())
                /* jshint: unused:false */
                .then(function(savedStudent){
                    notify('<strong>Success!</strong> Student '
                        + savedStudent.name + ' saved!'
                    ,'success');
                    StudentList.add(savedStudent);
                    CourseList.addStudent(savedStudent.course);
                    Student.reset();
                });
        };
    })
;