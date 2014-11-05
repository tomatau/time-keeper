'use strict';
angular.module('models')
    .factory('Course', function(BaseModel){
        var Course = BaseModel.extend();
        return new Course();
    });