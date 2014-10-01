'use strict';
angular.module('models')
    .factory('Courses', function(){
        var courseList = [];
        return {
            add: function(){},
            find: function(course){
                return _.findWhere(courseList, course);
            }
        };
    });