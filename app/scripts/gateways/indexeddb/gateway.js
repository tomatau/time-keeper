'use strict';
angular.module('indexeddbGateways', [ ])
    .factory('idbGateway', function($q, $window, ENV){
        var stores = [],
            def = $q.defer();
        if (ENV.name === 'DEV') $window.stores = stores;

        return function idbGateway(name){
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
    });