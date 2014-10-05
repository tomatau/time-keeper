'use strict';
angular.module('indexeddbGateways', [ ])
    .factory('timeKeeperGateway', function($window, ENV){
        var stores = [];
        if (ENV.name === 'DEV') $window.stores = stores;
        return function(options){
            stores[options.storeName] = new IDBStore(angular.extend({
                storeName: 'Root',
                storePrefix: 'TimeKeeper-',
                dbVersion: 1,
                keyPath: 'id',
                autoIncrement: true
            }, options));
            return stores[options.storeName];
        };
    });