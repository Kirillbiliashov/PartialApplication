'use strict';

// Check 4 digit pin.
const EXPECTED_PIN = '4967';
const checkPin = (...code) => code.join('') === EXPECTED_PIN; 

// Define function curry that accepts the length of the function
// (amount of function arguments) and the function.

const curry = (length, fn) => (...args) => {
       length -= args.length;
       if (length === 0) return fn(...args);
        return curry(length, fn.bind(null, ...args))
};

// Allows to enter pin code by one character,
// Usage: press('3')('4')('5')('6')

const press = curry(4, checkPin);

console.log(press('4')('9')('6')('7')) //logs true

module.exports = { press };
