'use strict';
angular.module('routes')
    .config(function($stateProvider, ROUTESURL, URLMAP){
        $stateProvider
            .state('manageLayout', {
                abstract: true,
                templateUrl: ROUTESURL + 'manage/manage.tmpl.html',
                controllerAs: 'manage',
                controller: 'manageCtrl',
                resolve: {
                    studentCount: function(
                        $q,
                        syncCourseList,
                        syncStudentList,
                        CourseList,
                        StudentList
                    ){
                        return $q.all([syncCourseList(), syncStudentList()])
                            .then(function () {
                                _.each(StudentList.get(), function(student){
                                    CourseList.addStudent(student.course);
                                });
                            });
                    },
                }
            })
            .state('manage', {
                url: URLMAP.manage,
                parent: 'manageLayout',
                views: {
                    addCourse: {
                        templateUrl: ROUTESURL + 'manage/add-course.tmpl.html',
                        controller: 'addCourseCtrl',
                        controllerAs: 'aC',
                    },
                    addStudent: {
                        templateUrl: ROUTESURL + 'manage/add-student.tmpl.html',
                        controller: 'addStudentCtrl',
                        controllerAs: 'aS',
                    }
                }
            });
    })
    .controller('manageCtrl', function(CourseList, StudentList){
        var vm = this;
        vm.courseList = CourseList.get();
        vm.studentList = StudentList.get();
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
    });