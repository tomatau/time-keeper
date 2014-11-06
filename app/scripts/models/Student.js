'use strict';
angular.module('models')
    .factory('Student', function(BaseModel){
        var Student = BaseModel.extend();
        return new Student();
    });