'use strict';
angular.module('forms')
    .factory('courseUniqueValidator', function(CourseList){
        return function(entity, original){
            var valid = false,
                nameExists = _.where(CourseList.get(), { name: entity.name });
            // creating
            if ( entity.id == null ) {
                // name:unique
                if ( !nameExists.length ) {
                    valid = true;
                } else
                // name:taken, version: unique
                if ( !_.findWhere(nameExists, { version: entity.version }) ) {
                    valid = true;
                }
            }
            // editing
            else {
                // version is the same too
                if ( _.isEqual(entity, original) ) {
                    valid = true;
                } else
                // hasid, name:unique
                if ( !nameExists.length ) {
                    valid = true;
                } else
                // hasid, name:not same but exists, version:unique
                if ( !_.findWhere(nameExists, { version: entity.version }) ) {
                    valid = true;
                }
            }
            return valid;
        }
    });