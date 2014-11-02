'use strict';
angular.module('forms')
    .directive('studentForm', function(FORMSURL, formBuilder, CourseList){
        return formBuilder({
            templateUrl: FORMSURL + 'student/student.tmpl.html',
            formName: 'studentForm',
            link: function(scope, iEl, iAttr, ctrl){
                ctrl.courseList = CourseList.get();
            }
        });
    });
        // Validators
        // ###########
        // name : 
        // email : email
        // first-session: date, when create/future, when edit (can only change to make future)
        // session-day: weekday
        // session-time: hh:mm p
        // course: course-exists
        // timezone: 
        // hours: 
        // os: 
        // github & google: url
        // 