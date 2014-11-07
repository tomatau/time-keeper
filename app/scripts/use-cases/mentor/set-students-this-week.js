'use strict';
angular.module('useCases')
    .factory('setStudentsThisWeek', function(ActiveStudents, StudentsThisWeek){
        return function setStudentsThisWeek(){
            var thisWeek = moment();
            StudentsThisWeek.reset();

            function hasSessionThisWeek(student, firstSession){
                return ( firstSession.week() <= thisWeek.week() );
            }

            function getThisWeeksSession(student, firstSession){
                var sessionTime = moment(student.sessionTime);
                return angular.copy(firstSession)
                        .add(thisWeek.week() - firstSession.week(), 'weeks')
                        .day(student.sessionDay)
                        .hour(sessionTime.hour())
                        .minute(sessionTime.minute())
                        .toDate();
            }

            _.each(ActiveStudents.get(), function(student){
                var firstSession = moment(student.firstSession);
                if ( hasSessionThisWeek(student, firstSession) ) {
                    student.weeksSession = getThisWeeksSession(
                        student, firstSession
                    );
                    StudentsThisWeek.add(student);
                }
            });
        };
    })
;