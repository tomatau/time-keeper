angular.module('core') // untrack this so diff environments can change what they use?
    .constant('dependencyMap', {
        gateways: {
            'coursesGateway': 'firebaseCoursesGateway'
            //e.g. , userGateway: "localStorageUserGateway"
        }
    });