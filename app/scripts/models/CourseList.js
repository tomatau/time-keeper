'use strict';
angular.module('models')
    .factory('CourseList', function(BaseCollection){
        var CourseList = BaseCollection.extend({
            addStudent: function(courseId){
                var course = this.get(courseId);
                ( course.studentCount != null )
                    ? course.studentCount ++ : course.studentCount = 1;
            }
        });
        return new CourseList();
    });