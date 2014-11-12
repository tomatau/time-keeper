'use strict';
angular.module('routes', [
        'core',
        'models',
        'forms',
        'useCases',
        'ui.router'
    ])
    .constant('ROUTESURL', 'scripts/routes/')
    .constant('URLMAP', {
        'dashboard' : '/',
        'courses'   : '/courses',
        'students'  : '/students',
        'week'      : '/week',
    })
    .config(function($urlRouterProvider){
        $urlRouterProvider.otherwise('/');
    })
    .factory('appResolve', function($q, syncCourseList, syncStudentList){
        // happens only once per page load (not route change)
        return $q.all([
            syncCourseList(),
            syncStudentList()
        ]);
    })
;