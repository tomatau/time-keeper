'use strict';
angular.module('config', [])
    .constant('dependencyMap', {
        gateways: {
            'coursesGateway': 'firebaseCoursesGateway'
            //e.g. , userGateway: "localStorageUserGateway"
        }
    });