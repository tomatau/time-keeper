angular.module('core')
    .constant('dependencyMap', {
        gateways: {
            'coursesGateway': 'firebaseCoursesGateway'
            //e.g. , userGateway: "localStorageUserGateway"
        }
    });