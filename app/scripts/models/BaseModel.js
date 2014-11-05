'use strict';
angular.module('models')
    .factory('BaseModel', function(extend){
        function BaseModel(){
            this.data = {};
        }

        BaseModel.prototype.set = function(modelData){
            angular.extend(this.data, modelData);
        };

        BaseModel.prototype.get = function(prop) {
            if (prop == null) return this.data;
            return this.data[prop];
        };

        BaseModel.prototype.reset = function() {
            // keep reference but clear all properties
            for (var member in this.data) delete this.data[member];
        };

        BaseModel.extend = extend;
        return BaseModel;
    });