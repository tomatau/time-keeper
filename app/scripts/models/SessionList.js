'use strict';
angular.module('models')
    .factory('SessionList', function(BaseCollection){
        var SessionList = BaseCollection.extend({
            getStudentSessions: function(studentId){
                return _.where(this.list, {
                    student: studentId
                });
            }
        });
        return new SessionList();
    });