'use strict';
angular.module('routes')
    .constant('nextSessionView', {
        controllerAs: 'nS',
        controller: 'nextSessionsCtrl',
        resolve: {
            nextResolve: function(weekResolve, setStudentsNextSession){
                setStudentsNextSession();
            }
        }
    })
    .controller('nextSessionsCtrl', function(ActiveStudents){
        var vm = this;
        vm.studentList = ActiveStudents.get();
    });