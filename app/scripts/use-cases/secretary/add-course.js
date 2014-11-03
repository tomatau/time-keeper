'use strict';
angular.module('useCases')
    .factory('addCourse', function(Course, CourseList, coursesGateway){
        return function addCourse(){
            return coursesGateway.save(Course.get())
                .then(function(savedCourse){
                    CourseList.add(savedCourse);
                    Course.reset();
                });
        };
    })
    ;