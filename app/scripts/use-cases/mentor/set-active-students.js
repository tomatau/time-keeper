'use strict';
angular.module('useCases')
    .factory('setActiveStudents', function(StudentList, ActiveStudents){
        return function setActiveStudents(){
            ActiveStudents.reset();
            _.each(StudentList.get(), function(student){
                if ( student.numSessions - student.sessions.length )
                    ActiveStudents.add(student);
            });
        };
    })
;