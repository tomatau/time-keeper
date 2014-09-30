angular.module('core')
    .constant('dependencyMap', {
        gateways: {
            'courseGateway': 'firebaseCourseGateway'
            //e.g. , userGateway: "localStorageUserGateway"
        }
    });