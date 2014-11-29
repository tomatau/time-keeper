'use strict';
angular.module('useCases')
    .filter('getNextSessions', function(){
        return function getNextSessions(students){
            return _.chain(students)
                .filter(function(student){
                    return student.nextSession > moment().add(1, 'hour');
                })
                .sortBy(function(student){ return student.nextSession; })
                .value();
        };
    });