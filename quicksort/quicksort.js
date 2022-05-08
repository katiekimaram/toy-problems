/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */

 /*

O = An array
I = An array and a value to pivot on
C =
E =

Unsorted = [6, 7, 3, 1, 5]
Pivot = 5
Sorted [1, 3, 5, 6, 7]

 */

var sorting = (array) => {
  var sort = (arr) => {
      var isSwapped = false;
      arr.forEach((item, index) => {
          // if the item (1) is less than the previous index(2)
          if (item < arr[index-1]){
              var previous = arr[index-1];
              // then change the items
              arr[index-1] = arr[index];
              arr[index] = previous;
              isSwapped = true;
          }
      });

      if (isSwapped){
        sort(arr);
      } else {
        return arr;
      }
  };

  sort(array);

  return array;
};


var quicksort = function(array) {
  var joined = []; // empty array to combine
  var pivot = array[array.length - 1]; // selecting the last element
  var firstArr = []; // lesser values of the pivot value will go here
  var secondArr = []; // higher values of the pivot value will go here

  array.forEach(num => {
    if (num < pivot && num !== pivot) {
      firstArr.push(num);
    } else if (num > pivot && num !== pivot){
    secondArr.push(num);
    } else {
      secondArr.push(num)
    }
  });

  firstArr = sorting(firstArr);
  secondArr = sorting(secondArr);
  joined = firstArr.concat(secondArr);

  return joined;
};