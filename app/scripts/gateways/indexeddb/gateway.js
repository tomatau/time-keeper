'use strict';
angular.module('indexeddbGateways', [ ])
    .factory('timeKeeperGateway', function(ENV, $window){
        var tkStore = new IDBStore({
            storeName: 'TimeKeeper',
            storePrefix: 'Tomatao-',
            dbVersion: 1,
            keyPath: 'id',
            autoIncrement: true
        });
        if (ENV.name === 'DEV') $window.tkStore = tkStore;
        return tkStore;
    });