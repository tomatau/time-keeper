'use strict';
angular.module('forms')
    .directive('studentForm', function(
        FORMSURL,
        formBuilder,
        CourseList,
        firstSessionValidator
    ){
        var defaults = {
            firstSession: moment(),
            sessionTime: moment().startOf('day').add(12, 'hours'),
            timezone: 'ET',
            hoursPerWeek: 10,
        };

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
            templateUrl: FORMSURL + 'student/student.tmpl.html',
            formName: 'studentForm',
            validators: {
                'firstSession': firstSessionValidator
            },
            link: function(scope, iEl, iAttr, ctrl){
                ctrl.courseList = CourseList.get();
                ctrl.daysOfWeek = daysOfWeek;
                if (ctrl.original.id == null) {
                    angular.extend(ctrl.entity, defaults);
                }
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