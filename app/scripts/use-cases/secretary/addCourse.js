'use strict';
angular.module('useCases')
    .factory('addCourse', function(Courses, coursesGateway){
        return function addCourse(course){
            coursesGateway.add(course);
            Courses.add(course);
        };
    });