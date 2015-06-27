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

    _toArray: function(list, skip){
        'use strict';
        var args = Array.prototype.map.call(list, function(current){
            return current;
        });
        return skip ? args.slice(skip) : args;
    },

    callIt: function (fn) {
        'use strict';
        var args = this._toArray(arguments, 1);
        return fn.apply(this, args);
    },

    partialUsingArguments: function (fn) {
        'use strict';
        var boundArgs = this._toArray(arguments, 1);
        return function(){
            var args = boundArgs.concat(this._toArray(arguments));
            return fn.apply(this, args);
        }.bind(this);
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
