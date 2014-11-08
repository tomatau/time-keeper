'use strict';
angular.module('useCases')
    .factory('addStudent', function(
        $interpolate,
        studentsGateway,
        Student,
        StudentList,
        CourseList,
        notify
    ){
        var msgExp = $interpolate('<strong>Success!</strong> Student {{ name }} saved!');
        return function addStudent(){
            return studentsGateway.save(Student.get())
                .then(function(savedStudent){
                    notify('success', msgExp({ name: savedStudent.name }));
                    StudentList.add(savedStudent);
                    CourseList.addStudent(savedStudent.courseId);
                    Student.reset();
                });
        };
    })
;