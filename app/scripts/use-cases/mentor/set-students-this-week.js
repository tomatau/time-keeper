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
                var sessionsHad = student.sessions.length - student.numSessions;
                var sessionTime = moment(student.sessionTime);
                return angular.copy(firstSession)
                        .add(sessionsHad, 'weeks')
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