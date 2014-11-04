'use strict';
angular.module('indexeddbGateways', [ ])
    .factory('idbGateway', function(
        $q,
        $window,
        ENV
    ){
        var stores = [];
        if (ENV.name === 'DEV') $window.stores = stores;

        return function idbGateway(name){
            var def = $q.defer();
            name = name || 'Root';
            stores[name] = new IDBStore( angular.extend({
                    storeName: name,
                    storePrefix: 'TimeKeeper-',
                    dbVersion: 1,
                    keyPath: 'id',
                    autoIncrement: true,
                    onStoreReady: function(){
                        def.resolve(stores[name]);
                    }
                }, { storeName: name })
            );
            return def.promise;
        };
    })
    .factory('parseDates', function(){
        return function parseDates(entity){
            _.each(entity, function(val, key){
                if ( _.isDate(val) ) entity[key] = val.toJSON();
            });
            return entity;
        };
    });