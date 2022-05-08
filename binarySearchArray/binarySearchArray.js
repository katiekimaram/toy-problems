/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 *
 * DO NOT USE INDEX OF OR SLICE
 */

var binarySearch = function (array, target) {
  var start = 0,
      end = array.length - 1;

  while (start <= end) {
    var mid = Math.floor((start + end) / 2),
        midVal = array[mid];

    if (target === midVal) {
      return mid;
    } else if (midVal < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return null;
};

// module.exports = binarySearch;

