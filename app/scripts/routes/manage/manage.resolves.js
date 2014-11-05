'use strict';
angular.module('routes')
    .factory('resolveStudentCount', function(
        $q,
        syncCourseList,
        syncStudentList,
        CourseList,
        StudentList
    ){
        return function(){
            return $q.all( [ syncCourseList(), syncStudentList() ] )
                .then(function () {
                    _.each(StudentList.get(), function(student){
                        CourseList.addStudent(student.course);
                    });
                });
        };
    });