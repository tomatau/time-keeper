angular.module('forms', [
        'core',
        'models',
        'ngMessages',
        'mgcrea.ngStrap.datepicker',
        'mgcrea.ngStrap.timepicker'
    ])
    .constant('FORMSURL', 'scripts/forms/')
    .run(function($rootScope){
        $rootScope.inputDefaults = {
            updateOn: 'default blur', 
            debounce: {'default': 200, 'blur': 0}
        }
    });