'use strict';
angular.module('gateways', [
        'core',
        'firebaseGateways'
    ])
    .config(function( dependencyMap, $provide ){
        // create a factory for each key in dependencyMap
        angular.forEach( dependencyMap.gateways, function(source, target){
            var injectFn = function(v){ return v; };
            injectFn.$inject = [ source ];
            $provide.factory(target, injectFn);
        });
    });