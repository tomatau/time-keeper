'use strict';
angular.module('models')
    .factory('BaseCollection', function(extend){
        function BaseCollection(){
            this.list = [];
        }

        BaseCollection.prototype.reset = function() {
            this.list.length = 0;
        };

        BaseCollection.prototype.set = function(newList) {
            console.table(newList);
            this.reset();
            angular.extend(this.list, newList);
        };

        BaseCollection.prototype.get = function(id) {
            if ( id != null )
                return _.findWhere(this.list, { id: Number(id) });
            return this.list;
        };

        BaseCollection.prototype.add = function(item) {
            this.list.push(item);
        };

        BaseCollection.prototype.remove = function(item) {
            var idx = this.list.indexOf(item);
            if ( ~idx ) this.list.splice(idx, 1);
        };

        BaseCollection.prototype.find = function(item) {
            return _.findWhere(this.list, item);
        };

        BaseCollection.extend = extend;
        return BaseCollection;
    });