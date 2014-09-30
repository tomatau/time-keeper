angular.module('core')
    .value('dependencyMap', {
        gateways: {
            'courseGateway': 'firebaseCourseGateway'
            //e.g. , userGateway: "localStorageUserGateway"
        }
    });