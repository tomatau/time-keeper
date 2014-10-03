'use strict';
angular.module('routes')
    .config(function($stateProvider){
        $stateProvider
            .state('dashboard', {
              url: "/",
              template: "HAI"
            });
    })
    .controller('dashboard', function($scope, addCourse, closeModal){
        var modal = {
            id: 'create-course-modal',
            header: 'Create Course',
            submitText: 'Create',
            action: function(course){
                addCourse(course).then(function(){ closeModal(modal.id); });
            }
        };
        this.course = {
            id: 'test-id',
            name: 'test-name',
        };
        this.modal = modal;
    })
;