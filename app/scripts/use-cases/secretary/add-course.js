'use strict';
angular.module('useCases')
    .factory('addCourse', function(Course, CourseList, coursesGateway, notify){
        return function addCourse(){
            return coursesGateway.save(Course.get())
                .then(function(savedCourse){
                    notify('<strong>Success!</strong> Course saved!', 'success');
                    CourseList.add(savedCourse);
                    Course.reset();
                });
        };
    })
;