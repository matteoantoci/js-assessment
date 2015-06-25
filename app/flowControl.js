exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
    fizzBuzz: function (num) {
        'use strict';
        var input = parseInt(num, 10);
        var output = '';

        if(!input){
            return false;
        }

        if(input % 3 === 0){
            output += 'fizz';
        }

        if(input % 5 === 0){
            output += 'buzz';
        }

        return output !== '' ? output : input;
    }
};
