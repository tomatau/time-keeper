'use strict';
angular.module('forms')
    .factory('courseUniqueValidator', function(CourseList){
        return function(entity, original){
            if ( entity == null || original == null )
                throw new Error('Must supply both original and updated entity');
            var valid = false,
                nameExists = _.where(CourseList.get(), { name: entity.name });

            // editing
            if ( (entity.id != null) && _.isEqual(entity, original) ) {
                valid = true;
            } else 
            if ( ! nameExists.length ) {
                valid = true;
            } else 
            if ( !_.findWhere(nameExists, { version: entity.version }) ) {
                valid = true;
            }
            return valid;
        };
    });