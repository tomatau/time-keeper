angular.module('gateways', [
        'firebaseGateway'
    ])
    // might wanna move this to "core" or "config"
    .config(function( $injector, $provide ){
        var module = angular.module('gateways');
        var dependencyMap = {
            'courseGateway': 'firebaseCourseGateway'
            //e.g. , userGateway: "localStorageUserGateway"
        };
        // create a factory for each of the map
        // use the value from the map as the actual factory
        angular.forEach(dependencyMap, function(source, target){
            var inject = function(v){ return v; }
            inject.$inject = [ source ];
            $provide.factory(target, inject)
        })
    });