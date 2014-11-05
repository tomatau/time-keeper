'use strict';
angular.module('forms')
    .directive('studentForm', function(
        FORMSURL,
        formBuilder,
        CourseList,
        firstSessionValidator
    ){
        var daysOfWeek = [{
                day: 'monday',
                label : 'Monday'
            },{
                day: 'tuesday',
                label : 'Tuesday'
            },{
                day: 'wednesday',
                label : 'Wednesday'
            },{
                day: 'thursday',
                label : 'Thursday'
            },{
                day: 'friday',
                label : 'Friday'
            }];

        return formBuilder({
            defaults: {
                firstSession: moment().toDate(),
                sessionTime: moment().startOf('day').add(12, 'hours').toDate(),
                timezone: 'ET',
                numSessions: 12,
            },
            templateUrl: FORMSURL + 'student/student.tmpl.html',
            formName: 'studentForm',
            validators: {
                'firstSession': firstSessionValidator
            },
            link: function(scope, iEl, iAttr, ctrl){
                ctrl.courseList = CourseList.get();
                ctrl.daysOfWeek = daysOfWeek;
            }
        });
    });