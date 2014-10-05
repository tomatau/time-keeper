'use strict';
angular.module('indexeddbGateways', [ ])
    .factory('idbGateway', function($window, ENV){
        var stores = [];
        if (ENV.name === 'DEV') $window.stores = stores;
        return function(name){
            stores[name] = new IDBStore(angular.extend({
                storeName: 'Root',
                storePrefix: 'TimeKeeper-',
                dbVersion: 1,
                keyPath: 'id',
                autoIncrement: true
            }, { storeName: name }));
            return stores[name];
        };
    });