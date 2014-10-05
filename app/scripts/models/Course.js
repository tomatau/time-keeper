(function(){
    'use strict';
    function Course(){
        this.data = {};
    }

    Course.prototype.set = function(course){
        angular.extend(this.data, course);
    };

    Course.prototype.get = function(prop) {
        if (prop == null) return this.data;
        return this.data[prop];
    };

    Course.prototype.reset = function() {
        // keep reference but clear all properties
        for (var member in this.data) delete this.data[member];
    };

    angular.module('models')
        .service('Course', Course);
})();