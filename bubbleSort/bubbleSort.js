/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]

I = an array of numbers that is out of order
O = an array of numbers that is now in order
C = Best: Linear - Probably going to solve this in quadratic though.
E = Is the input modified? Is the array increased in size? What about an empty array? Also consider the numbers, is there any negative values? Any duplicate values? Zero values?

How it works:

[2, 1, 3]

2 compared to 1
swap 1 and 2  because 2 is greater than 1
new: [1, 2, 3]
compare 2 and 3
no need to switch because 2 is less than 3.

*/

// Feel free to add helper functions if needed.

var bubbleSort = function(array) {
  var compare = (array) => {
    var swapped = false;
    // iterate through the array
    array.forEach((current, index) => {
      // store the previous value
      var previous = array[index - 1];

      // if the current value is less than the previous value
      if (current < previous) {
        // then assign the previous index to the current value
        array[index - 1] = current;
        // assign the current index to the previous value
        array[index] = previous;
        // set swapped to true
        swapped = true;
      }
    });

    return swapped ? bubbleSort(array) : array;
  }

  return compare(array);
};

// module.exports = bubbleSort;
