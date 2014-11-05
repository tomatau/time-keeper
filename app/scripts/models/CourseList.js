'use strict';
angular.module('models')
    .factory('CourseList', function(BaseCollection){
        var CourseList = BaseCollection.extend({
            addStudent: function(courseId){
                var course = this.find({ id: courseId });
                if ( course.studentCount != null ) {
                    course.studentCount += 1;
                } else {
                    course.studentCount = 1;
                }
            }
        });
        return new CourseList();
    });