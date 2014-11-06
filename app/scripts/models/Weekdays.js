'use strict';
angular.module('models')
    .factory('Weekdays', function(){
        return [{
            num: 1,
            day: 'monday',
            label : 'Monday',
            shortName: 'Mon',
        },{
            num: 2,
            day: 'tuesday',
            label : 'Tuesday',
            shortName: '',
        },{
            num: 3,
            day: 'wednesday',
            label : 'Wednesday',
            shortName: '',
        },{
            num: 4,
            day: 'thursday',
            label : 'Thursday',
            shortName: '',
        },{
            num: 5,
            day: 'friday',
            label : 'Friday',
            shortName: '',
        }];
    });