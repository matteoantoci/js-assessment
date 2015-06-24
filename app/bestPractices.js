exports = (typeof window === 'undefined') ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
    globals: function () {
        'use strict';
        return false;
    },

    functions: function (flag) {
        'use strict';

        var getValue = flag ?
            function getValueA() {
            return 'a';
        } : function getValueB() {
            return 'b';
        };

        return getValue();
    },

    parseInt: function (num) {
        'use strict';
        return parseInt(num, 10);
    },

    identity: function (val1, val2) {
        'use strict';
        return val1 === val2;
    }
};
