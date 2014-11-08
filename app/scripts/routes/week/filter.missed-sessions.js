'use strict';
angular.module('routes')
    .filter('getMissedSessions', function(){
        var now = moment();
        return function getNextStudents(students){
            return _.chain(students)
                .filter(function(student){ return student.nextSession < now; })
                .filter(function(student){
                    var nsW = moment(
                        students.firsSession
                    ).week() + student.sessions.length;
                    return now.week() <= nsW;
                })
                .sortBy(function(student){ return student.nextSession; })
                .value();
        };
    });