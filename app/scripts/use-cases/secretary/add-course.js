'use strict';
angular.module('useCases')
    /**
     * Add a Course to the local state model
     * then add it to the persistence layer
     * if the persistence layer doesn't work, remove it from the model
     * this could be called from a form which would validate
     * but may be called from another location such as... i dunno
     * when not called from a form, this should handle the validation
     */
    .factory('addCourse', function(Courses, coursesGateway){
        return function addCourse(course){
            // generate a course id?
            Courses.add(course);
            return coursesGateway.add(course)
                .catch(function(){
                    Courses.remove(course);
                });
        };
    })
    ;