/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

/*
I = An array and a value to find.
O = A number that represents that index of the value. If the value does not exist in the array return null
C = Linear or Logarithmic
E = Duplicate values,
*/

var rotatedArraySearch = function (rotated, target) {
  // Your code here:

  // var start = 0;
  // var end = rotated.length - 1;

  // // while the start is less than or equal to end
  // while (start <= end) {
  //   var mid = Math.floor(start + end / 2)

  //   if (rotated[mid] === target) {
  //     return mid;
  //   }

  //   if (rotated[start] < rotated[mid]) {
  //     if (rotated[start] <= target && rotated[mid] > target) {
  //       end = mid - 1;
  //     } else {
  //       start = mid + 1;
  //     }
  //   } else {
  //     if (rotated[mid] <= target && rotated[end] > target) {
  //       start = mid - 1;
  //     } else {
  //       end = mid + 1;
  //     }
  //   }
  // }

  // // return null if it does not exist.

  // will this work instead?

  var index = rotated.indexOf(target);

  return index !== -1 ? index : null;
};

// console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2))

// module.exports = rotatedArraySearch;