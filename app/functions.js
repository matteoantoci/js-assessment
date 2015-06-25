exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
    argsAsArray: function (fn, arr) {
        'use strict';
        return fn.apply(this, arr);
    },

    speak: function (fn, obj) {
        'use strict';
        return fn.apply(obj);
    },

    functionFunction: function (str) {
        'use strict';
        return function(second){
            return str + ', ' + second;
        };
    },

    makeClosures: function (arr, fn) {
        'use strict';
        return arr.map(function(current){
            return function getSquare(){
                return fn(current);
            };
        });
    },

    partial: function (fn, str1, str2) {
        'use strict';
        return fn.bind(this, str1, str2);
    },

    useArguments: function () {
        'use strict';
        return Array.prototype.reduce.call(arguments, function(count, next){
            return count + next;
        }, 0);
    },

    _toArray: function(list){
        'use strict';
        return Array.prototype.map.call(list, function(current){
            return current;
        });
    },

    callIt: function () {
        'use strict';
        var args = this._toArray(arguments);
        var fn = args.shift();
        return fn.apply(this, args);
    },

    partialUsingArguments: function () {
        'use strict';
        var self = this;
        var boundArgs = this._toArray(arguments);
        var fn = boundArgs.shift();
        return function(){
            var args = boundArgs.concat(self._toArray(arguments));
            return fn.apply(this, args);
        };
    },

    curryIt: function (fn) {
        'use strict';
        var argsCount = fn.length;
        function getCurriedFn(prev) {
            return function(arg) {
                var args = prev.concat(arg);
                if (args.length < argsCount) {
                    return getCurriedFn(args);
                } else {
                    return fn.apply(this, args);
                }
            };
        }
        return getCurriedFn([]);
    }
};
