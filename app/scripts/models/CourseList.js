'use strict';
angular.module('models')
    .factory('CourseList', function(BaseCollection){
        var CourseList = BaseCollection.extend({
            addStudent: function(courseId){
                var course = this.get(courseId);
                course.studentCount = ( course.studentCount != null )
                    ? course.studentCount + 1 : 1;
            }
        });
        return new CourseList();
    });