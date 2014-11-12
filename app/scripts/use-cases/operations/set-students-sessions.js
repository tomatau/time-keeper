'use strict';
angular.module('useCases')
    .factory('setStudentsSessions', function(StudentList, SessionList){
        return function setStudentsSessions(){
            _.each( StudentList.get(), function(student){
                var sessions = SessionList.getStudentSessions( student.id );
                student.sessions = sessions;
            });
        };
    })
;