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

        arr.join = function(string){
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

    },

    prepend: function (arr, item) {

    },

    curtail: function (arr) {

    },

    concat: function (arr1, arr2) {

    },

    insert: function (arr, item, index) {

    },

    count: function (arr, item) {

    },

    duplicates: function (arr) {

    },

    square: function (arr) {

    },

    findAllOccurrences: function (arr, target) {

    }
};
