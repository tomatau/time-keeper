'use strict';
angular.module('config', [
        'gateways' // this is weird... but whatever
    ])
// untrack this so diff environments can change what they use?
// move it into main instead of core... use-cases need it first
    .constant('dependencyMap', {
        gateways: {
            'coursesGateway': 'firebaseCoursesGateway'
            //e.g. , userGateway: "localStorageUserGateway"
        }
    })
    .config(function( dependencyMap, $provide ){
        // create a factory for each gateway in dependencyMap
        angular.forEach( dependencyMap.gateways, function(source, target){
            var injectFn = function(v){ return v; };
            injectFn.$inject = [ source ];
            $provide.factory(target, injectFn);
        });
    });