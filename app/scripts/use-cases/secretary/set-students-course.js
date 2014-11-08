'use strict';
angular.module('useCases')
    .factory('setStudentsCourse', function(StudentList, CourseList){
        return function setStudentsCourse(){
            _.each( StudentList.get(), function(student){
                CourseList.addStudent(student.courseId);
                student.course = CourseList.get( student.courseId );
            });
        };
    })
;