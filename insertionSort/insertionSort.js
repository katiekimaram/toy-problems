/**
 * Insertion sort is a basic sorting algorithm.
 *
 * Insertion sort iterates over an array, growing a sorted array behind the current location.
 * It takes each element from the input and finds the spot, up to the current point,
 * where that element belongs. It does this until it gets to the end of the array.
 *
 * Insertion sort should be implemented as a stable sort. This means that equal elements
 * should retain their relative order. Numbers, as primitives, give us no way to check this,
 * so we'll be sorting objects with a value field, on which they will be sorted, like so:
 *
 * `[{value: 10}, {value: 5, order: 1}, {value: 5, order: 2}]`
 *
 * A stable sort must return `{value: 5, order: 1}, {value:5, order: 2}` in that order.
 *
 * ---
 *
 * EXTRA CREDIT:
 *
 * Refactor your sort to (optionally) take an explicit comparator function
 * as its second argument, so that callers can define arbitrary ways to sort elements.
 * See [Array.prototype.sort](http://devdocs.io/javascript/global_objects/array/sort)
 * for an example of how this works (excerpt below):
 *
 * > If `comparator(a, b)` is less than `0`, sort `a` to a lower index than `b`, i.e. `a` comes first.
 * > If `comparator(a, b)` returns `0`, leave `a` and `b` unchanged with respect to each other, but sorted with respect to all different elements.
 * > If `comparator(a, b)` is greater than `0`, sort `b` to a lower index than `a`.
 *
 * If no comparator is given, just sort the elements using `<` or `>`.
 **/

// Example usage:
// insertionSort([{value: 2}, {value: 1}, {value: 3}]);
// yields [{value: 1}, {value: 2}, {value: 3}]

// This function is to help you test, and should not be incorporated in your solution.
// It will transform an array of numbers into an array of valid objects.

// This just formats the array as {value: [{value: {value:2}, index: 0}, {value: {value:1}, index: 1}, {value: {value:3}, index: 2}]
var testingTransform = function(array) {
  var transform = [];

  for (var i = 0; i < array.length; i++) {
    transform.push({value: array[i], i: i});
  }

  return transform;
};

var insertionSort = function(array) {
  var sort = (arr) => {
    var isSwapped = false;

    for (var i = 0; i < arr.length; i++){
      var previous = arr[i - 1] === undefined ? '' : arr[i - 1];

    debugger;
      if (arr[i].value < previous.value) {
        var current = arr[i];

        arr[i-1] = current;
        arr[i] = previous;

        isSwapped = true;
      }
    }

    if (isSwapped) {
      sort(arr)
    } else {
      return arr;
    }
  }

  sort(array);

  return array;
};

// var testInsertionSort = (message, actual, expected) => {
//   return actual === expected ? `${message}: Test passed` : `${message}: Test failed. Expected ${expected}, but received ${actual}`;
// }

// var array = [{value: 2}, {value: 1}, {value: 3}]; // yields [{value: 1}, {value: 2}, {value: 3}]
// testInsertionSort('Should return array in order', JSON.stringify(insertionSort(array)), JSON.stringify([{value: 1}, {value: 2}, {value: 3}]));

// var numArr = testingTransform([1, 100, 2, 43, 21]);
// var numArr2 = testingTransform([24.3, 24.7, 23, 9]);
// testInsertionSort('Should be a numerically sorted array', JSON.stringify(insertionSort(numArr)), JSON.stringify([{value: 1, i: 0}, {value: 2, i: 2 }, {value: 21, i: 4}, {value: 43, i: 3}, {value: 100, i: 1}]));
// testInsertionSort('Should be a numerically sorted array', JSON.stringify(insertionSort(numArr2)), JSON.stringify([{value: 9, i: 3}, {value: 23, i: 2}, {value: 24.3, i: 0}, {value: 24.7, i: 1}]));

// var presortedArr = testingTransform([5, 4, 3]);
// var presortedArr2 = testingTransform([1, 2, 3]);
// testInsertionSort('Should handle presorted arrays', JSON.stringify(insertionSort(presortedArr)), JSON.stringify([{value: 3, i: 2}, {value: 4, i: 1}, {value: 5, i: 0}]));
// testInsertionSort('Should handle presorted arrays', JSON.stringify(insertionSort(presortedArr2)), JSON.stringify([{value: 1, i: 0}, {value: 2, i: 1}, {value: 3, i: 2}]));

// var stableArr = testingTransform([1, 5, 1, 5]);
// testInsertionSort('Should be a stable sort', JSON.stringify(insertionSort(stableArr)), JSON.stringify([{value: 1, i: 0}, {value: 1, i: 2}, {value: 5,i: 1}, {value: 5, i: 3}]));

//RETEST
// var negArr = testingTransform([0, 1, -1, -2, -3]);
// testInsertionSort('Should handle negative numbers', JSON.stringify(insertionSort(negArr)), JSON.stringify([{value: -1, i: 2}, {value: 0, i: 0}, {value: 1, i: 1}]));