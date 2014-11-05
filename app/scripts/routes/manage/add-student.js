'use strict';
angular.module('routes')
    .controller('addStudentCtrl', function(Student, addStudent, closeModal){
        var vm = this;
        vm.student = Student.get();
        vm.addModalId = 'create-student-modal';
        vm.modalAction = function modalAction(){
            return addStudent()
                .then(function(){
                    closeModal(vm.addModalId);
                });
        };
    })
;