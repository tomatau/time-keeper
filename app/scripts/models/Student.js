(function(){
    'use strict';
    function Student(){
        this.data = {};
    }

    Student.prototype.set = function(student){
        angular.extend(this.data, student);
    };

    Student.prototype.get = function(prop) {
        if (prop == null) return this.data;
        return this.data[prop];
    };

    Student.prototype.reset = function() {
        // keep reference but clear all properties
        for (var member in this.data) delete this.data[member];
    };

    angular.module('models')
        .service('Student', Student);
})();