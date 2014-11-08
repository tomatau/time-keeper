'use strict';
angular.module('routes')
    .filter('getNextSessions', function(){
        return function getNextSessions(students, count){
            return _.chain(students)
                .filter(function(student){
                    return student.nextSession > moment().add(1, 'hour');
                })
                .sortBy(function(student){ return student.nextSession; })
                .first(Number(count) || 2)
                .value();
        };
    });