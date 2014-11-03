'use strict';
angular.module('config', [])
    .constant('dependencyMap', {
        gateways: {
            'coursesGateway': 'indexeddbCoursesGateway',
            'studentsGateway': 'indexeddbStudentsGateway',
            //e.g. , userGateway: "localStorageUserGateway"
        }
    });