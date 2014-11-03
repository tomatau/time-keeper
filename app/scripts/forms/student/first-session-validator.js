'use strict';
angular.module('forms')
    // making a directive wouldn't react to changes for edit
    .factory('firstSessionValidator', function(){
        return function(entity, original){
            if ( entity == null || original == null )
                throw new Error('Must supply both original and updated entity');
            var valid = false,
                now = moment().startOf('day');
            // first-session: date,
            // when creating: future,
            // when edit (can only change to make future)
            // console.log(entity)

            if ( entity.id != null ) { // editing
                // valid = true;
            } else if ( entity.firstSession >= now ) {
                valid = true;
            }

            return valid;
        };
    });