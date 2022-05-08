/*
 * Write Compose and Pipe functions.
 *
 * Step 1: Implement the function Compose:
 *
 * Compose should return a function that is the composition of a list of
 * functions of arbitrary length.
 *
 * Each function is called on the return value of the function that follows.
 *
 * You can view compose as moving right to left through its arguments.
 *
 * Compose Example:
 *   var greet = function(name){ return 'hi: ' + name;}
 *   var exclaim = function(statement) { return statement.toUpperCase() + '!';}
 *   var welcome = compose(greet, exclaim);
 *   welcome('phillip'); // 'hi: PHILLIP!'
 *
 * Step 2: Implement the function Pipe:
 *
 * Pipe composes a series of functions and returns the resulting function.
 *
 * Each function is called on the return value of the preceding function.
 *
 * You can view pipe as moving left to right through its arguments.
 *
 * Pipe Example:
 *  var add2 = function(number){ return number + 2; }
 *  var multiplyBy3 = function(number){ return number * 3; }
 *  pipe(add2, multiplyBy3)(5) // 21
 *  pipe(add2, multiplyBy3, multiplyBy3)(5) // 63
 */

'use strict';

/*

i = A bunch of functions
o = a function that is a composition of a list of functions of arbitrary length
c = At best, maybe quadratic? Logarithmic.
e = Anonymous functions. Not a function.

!! main difference between compose (reverse order) and pipe (normal order).

*/

var compose = function(funcs) {
  return (value) => Array.from(arguments).reverse().reduce((acc, curr) => curr(acc), value);
};

var pipe = function(funcs) {
  return (value) => Array.from(arguments).reduce((acc, curr) => curr(acc), value);
};

// module.exports = { compose, pipe }