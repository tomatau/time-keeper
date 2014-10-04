'use strict';
angular.module('models')
    .factory('CourseList', function(){
        var courseList = [];
        return {
            get: function(){ // also get by specific ID
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