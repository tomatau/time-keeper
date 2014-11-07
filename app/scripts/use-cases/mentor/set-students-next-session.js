'use strict';
angular.module('useCases')
    .factory('setStudentsNextSession', function(ActiveStudents){
        function getNextSession(student){
            var sessionTime = moment(student.sessionTime);
            return angular.copy(moment(student.firstSession))
                    .add(student.sessions.length, 'weeks')
                    .day(student.sessionDay)
                    .hour(sessionTime.hour())
                    .minute(sessionTime.minute())
                    .toDate();
        }
        return function setStudentsNextSession(){
            _.each( ActiveStudents.get(), function(student){
                student.nextSession = getNextSession( student );
            });
        };
    })
;