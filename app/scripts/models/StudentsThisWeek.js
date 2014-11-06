'use strict';
angular.module('models')
    .factory('StudentsThisWeek', function(BaseCollection){
        var StudentsThisWeek = BaseCollection.extend();
        return new StudentsThisWeek();
    });