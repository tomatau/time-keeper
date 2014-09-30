'use strict';
angular.module('useCases')
    .factory('addCourse', function(Courses){
        return function addCourse(course){
            Courses.add(course)
        };
    });