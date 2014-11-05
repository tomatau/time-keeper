'use strict';
angular.module('routes')
    .config(function($stateProvider, ROUTESURL, URLMAP){
        $stateProvider
            .state('studentsLayout', {
                abstract: true,
                templateUrl: ROUTESURL + 'students/students.tmpl.html',
                controllerAs: 'students',
                controller: 'studentsCtrl',
                resolve: {
                    students: function(syncStudentList){
                        return syncStudentList();
                    },
                    courses: function(syncCourseList){
                        return syncCourseList();
                    }
                }
            })
            .state('students', {
                url: URLMAP.students,
                parent: 'studentsLayout',
                views: {
                    studentList: {
                        templateUrl: ROUTESURL + 'students/student-list.tmpl.html',
                        controllerAs: 'sL',
                        controller: 'studentListCtrl',
                    }
                }
            });
    })
    .controller('studentsCtrl', function(){
    })
    .controller('studentListCtrl', function(StudentList, CourseList){
        var vm = this,
            studentList = StudentList.get();
        _.each(studentList, function(student, id){
            studentList[id].course = CourseList.get(student.course);
        });
        vm.studentList = studentList;
    })
;