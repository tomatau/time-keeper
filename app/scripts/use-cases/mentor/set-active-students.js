'use strict';
angular.module('useCases')
    .factory('setActiveStudents', function(StudentList, ActiveStudents){
        return function setActiveStudents(){
            ActiveStudents.reset();
            _.each(StudentList.get(), function(student){
                // should take into account skipped sessions
                // alternative:
                //  could make the saving of last session set an 'inactive' property
                //  then just filter by that property here
                if ( student.numSessions - student.sessions.length )
                    ActiveStudents.add(student);
            });
        };
    })
;