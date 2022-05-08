/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */

/*
I =  An array of numbers
O = A number
C = Best: Linear
E = negative numbers, zero
*/

var largestProductOfThree = function(array) {
  // sort the array numerically
  array = array.sort((a,b) => a - b);

  // reduce and multiply everything
  var reduce = (arr) => {
    return arr.reduce((currNum, prevNum) => currNum * prevNum)
  }

  // handles array lengths less than 3
  if (array.length <= 3) {
    return reduce(array);
  }

  // larger than 3
  debugger;
  var newArr = [array[array.length - 3], array[array.length - 2], array[array.length - 1]];

  // handling a mix of negative and positive values
  if (!array.every(num => num > 0) && !array.every(num => num < 0)) {
    var mixArr = [array[0], array[1], array[array.length - 1]];
    return Math.max(reduce(newArr), reduce(mixArr));
  }

  return reduce(newArr);
};

// module.exports = largestProductOfThree;
