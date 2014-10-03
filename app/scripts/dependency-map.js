'use strict';
angular.module('config', [
    ])
// untrack this so diff environments can change what they use?
// move it into main instead of core... use-cases need it first
    .constant('dependencyMap', {
        gateways: {
            'coursesGateway': 'firebaseCoursesGateway'
            //e.g. , userGateway: "localStorageUserGateway"
        }
    });