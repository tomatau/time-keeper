'use strict';
angular.module('core')
    .factory('notify', function(Notifications, uuid) {
        // types: success, info, warning, danger
        return function notify(type, message){
            Notifications.push({
                id: uuid(),
                type: type || 'info',
                message: message,
            });
        };
    })
    .factory('Notifications', function(){
        return [];
    })
    .directive('tmNotifications', function(
        COREURL,
        Notifications
    ){
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
                                }, 5000);
                            }, 100);
                        }
                    });
                noti.list = [];
            }
        };
    })
;