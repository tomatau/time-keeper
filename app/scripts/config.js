'use strict';
angular.module('config', [])
    .constant('dependencyMap', {
        gateways: {
            'coursesGateway': 'indexeddbCoursesGateway'
            //e.g. , userGateway: "localStorageUserGateway"
        }
    });