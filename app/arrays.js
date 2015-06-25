exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

    indexOf: function (arr, item) {
        'use strict';
        return arr.indexOf(item);
    },

    sum: function (arr) {
        'use strict';
        return arr.reduce(function (previousValue, currentValue) {
            return previousValue + currentValue;
        });
    },

    remove: function (arr, item) {
        'use strict';
        return arr.filter(function (element) {
            return element !== item;
        });
    },

    removeWithoutCopy: function (arr, item) {
        'use strict';
        var arrayCopy = this.remove(arr, item);

        arr.join = function (string) {
            return arrayCopy.join(string);
        };

        arr.length = arrayCopy.length;

        return arr;
    },

    append: function (arr, item) {
        'use strict';
        arr.push(item);
        return arr;
    },

    truncate: function (arr) {
        'use strict';
        arr.pop();
        return arr;
    },

    prepend: function (arr, item) {
        'use strict';
        arr.unshift(item);
        return arr;
    },

    curtail: function (arr) {
        'use strict';
        arr.shift();
        return arr;
    },

    concat: function (arr1, arr2) {
        'use strict';
        return arr1.concat(arr2);
    },

    insert: function (arr, item, index) {
        'use strict';
        arr.splice(index, 0, item);
        return arr;
    },

    count: function (arr, item) {
        'use strict';
        return arr.reduce(function(count, current) {
            return current === item ? ++count : count;
        }, 0);
    },

    duplicates: function (arr) {
        'use strict';

        function unique(a) {
            var seen = {};
            return a.filter(function(item) {
                return seen.hasOwnProperty(item) ? false : (seen[item] = true);
            });
        }

        function getDuplicates(a){
            return a.filter(function (current, index, array) {
                return index !== array.lastIndexOf(current);
            });
        }

        return unique(getDuplicates(arr));
    },

    square: function (arr) {
        'use strict';
        return arr.map(function (current) {
            return current*current;
        });
    },

    findAllOccurrences: function (arr, target) {
        'use strict';
        return arr.reduce(function(indexes, current, index) {
            if (current === target){
                indexes.push(index);
            }
            return indexes;
        }, []);
    }
};
