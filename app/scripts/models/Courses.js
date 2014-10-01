'use strict';
angular.module('models')
    .factory('Courses', function(){
        var courseList = [];
        return {
            get: function(){
                return courseList;
            },
            set: function(newList){
                courseList.length = 0;
                angular.extend(courseList,newList);
            },
            add: function(course){
                courseList.push(course);
            },
            remove: function(course){ // keeps the reference
                var idx = courseList.indexOf(course);
                if ( idx > -1 ) courseList.splice(idx, 1);
            },
            find: function(course){
                return _.findWhere(courseList, course);
            }
        };
    });