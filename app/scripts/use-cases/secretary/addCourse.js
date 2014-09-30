'use strict';
angular.module('useCases')
    .factory('addCourse', function(Courses, courseGateway){
        return function addCourse(course){
            courseGateway.add(course);
            Courses.add(course);
        };
    });