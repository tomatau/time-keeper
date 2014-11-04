'use strict';
angular.module('core')
    // .factory('openModal', function(){
    //     return function(ident){
    //         angular.element('#' + ident).modal('show');
    //     };
    // })
    // .factory('closeModal', function(){
    //     return function(ident){
    //         angular.element('#' + ident).modal('hide');
    //     };
    // })
    // .run(function($rootScope, openModal, closeModal){
    //     $rootScope.openModal = openModal;
    //     $rootScope.closeModal = closeModal;
    // })
    .factory('notify', function(Notifications){
        return function notify(alert){

        }
    })
    .factory('Notifications', function(){
        var list = [];
        return list;
    })
    .directive('tmNotifications', function(COREURL, Notifications){

        return {
            templateUrl: COREURL + 'directives/notification.tmpl.html',
            scope: {},
            controllerAs: 'noti',
            controller: function ($scope, $timeout) {
                var noti = this;
                $scope.$watchCollection(
                    function(){ return Notifications; },
                    function(newList){
                        if ( newList.length ) {
                            $timeout(function(){
                                noti.list.push(Notifications.pop());
                                $timeout(function(){
                                    noti.list.shift();
                                }, 2000);
                            }, 1000);
                        }
                    })
                noti.list = [];
            }
        };
    });