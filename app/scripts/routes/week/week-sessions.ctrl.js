'use strict';
angular.module('routes')
    .constant('weekSessionView', {
        controllerAs: 'wS',
        controller: 'weekSessionsCtrl',
        resolve: {
            weekSessResolve: function(weekResolve, setStudentsThisWeek){
                setStudentsThisWeek();
            }
        }
    })
    .controller('weekSessionsCtrl', function(StudentsThisWeek){
        var vm = this;
        vm.studentList = StudentsThisWeek.get();
    });