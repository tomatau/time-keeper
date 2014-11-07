'use strict';
angular.module('useCases')
    .factory('addCourse', function(
        $interpolate,
        coursesGateway,
        Course,
        CourseList,
        notify
    ){
        var msgExp = $interpolate('<strong>Success!</strong> Course {{ name }} saved!');
        return function addCourse(){
            return coursesGateway.save(Course.get())
                .then(function(savedCourse){
                    notify('success', msgExp({ name: savedCourse.name }));
                    CourseList.add(savedCourse);
                    Course.reset();
                });
        };
    })
;