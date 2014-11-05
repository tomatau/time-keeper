'use strict';
angular.module('routes')
    .factory('resolve.studentCount', function(
        $q,
        syncCourseList,
        syncStudentList,
        CourseList,
        StudentList
    ){
        return $q.all( [ syncCourseList(), syncStudentList() ] )
            .then(function () {
                _.each(StudentList.get(), function(student){
                    CourseList.addStudent(student.course);
                });
            });
    });