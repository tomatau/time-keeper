'use strict';
angular.module('models')
    .factory('StudentList', function(BaseCollection){
        var StudentList = BaseCollection.extend();
        return new StudentList();
    });