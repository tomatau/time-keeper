'use strict';
angular.module('routes')
    .controller('addCourseCtrl', function(Course, addCourse, closeModal){
        var vm = this;
        vm.course = Course.get();
        vm.addModalId = 'create-course-modal';
        vm.modalAction = function modalAction(){
            return addCourse()
                .then(function(){
                    closeModal(vm.addModalId);
                });
        };
    })
;
