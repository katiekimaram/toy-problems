/**
 * A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
 * subsequent number is the sum of the previous two.
 *
 * For example, the first five Fibonacci numbers are:
 *
 *   0 1 1 2 3
 *
 * If n were 4, your function should return 3; for 5, it should return 5.
 *
 * Write a function that accepts a number, n, and returns the nth Fibonacci
 * number. Use a recursive solution to this problem; if you finish with time
 * left over, implement an iterative solution.
 *
 * example usage:
 * nthFibonacci(2); // => 1
 * nthFibonacci(3); // => 2
 * nthFibonacci(4); // => 3
 * etc...
 *
 */

/*
I = A number
O = A number - it adds the previous two values before the input value.
C = Best: Linear
E = Zero, Negative

0 1 2 3 4 5
0 1 1 2 3 5

index 0 + index 1 = 1
0 + 1 = 1

index 1 + index 2 = 2
1 + 1 = 2

index 2 + index 3 = 3
1 + 2 = 3

*/

var nthFibonacci = function (n) {
  // store previous values
  var previous = 0;
  var current = 1;

  if (n < 2) {
    return n;
  }

  previous = current; // setting up for when its greater than 2


  for(var i = 2; i < n; i++) {
    current += previous;
    previous = current - previous;
  }

  // return sum
  return current;
};

// module.exports = nthFibonacci;
