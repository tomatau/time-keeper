'use strict';
angular.module('useCases')
    .factory('setStudentsCourse', function(StudentList, CourseList){
        return function setStudentsCourse(){
            _.each( StudentList.get(), function(student){
                var course = CourseList.get( student.courseId );
                if ( !_.isEqual(student.course, course) ) {
                    // need to remove student from previous course id
                    CourseList.addStudent(student.courseId);
                    student.course = course;
                }
            });
        };
    })
;