'use strict';
angular.module('models')
    .factory('ActiveStudents', function(BaseCollection){
        var ActiveStudents = BaseCollection.extend();
        return new ActiveStudents();
    });