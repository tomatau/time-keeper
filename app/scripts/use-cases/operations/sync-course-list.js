'use strict';
angular.module('useCases')
    .factory('syncCourseList', function(CourseList, coursesGateway){
        return function syncCourseList(){
            return coursesGateway.getAll()
                .then(function(courseList){
                    CourseList.set(courseList);
                });
        };
    })
;