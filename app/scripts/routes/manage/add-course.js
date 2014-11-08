'use strict';
angular.module('routes')
    .constant('addCourseView', {
        controller: 'addCourseCtrl',
        controllerAs: 'aC',
    })
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
