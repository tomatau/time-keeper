'use strict';
angular.module('dexiedbGateways', [ ])
    .factory('dexiedbGateway', function(
        $q,
        ENV
    ){
        var stores = [];
        if ( ENV.DEV ) $window.stores = stores;
// https://github.com/dfahlander/Dexie.js/wiki/Samples
        return function dexiedbGateway(name){
            var db = new Dexie(name);
            db.version(1);
            // add stores
            return db.open()
        };
    });