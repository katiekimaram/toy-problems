/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

/*

  Comprehension & Notes:
    - First the FIRST item that occurs an EVEN number of times in an array. - I misunderstood this the first time time

  input = an array of numbers or strings
  output = a value - number or string - or null (for edge cases)
  constraints (time/space complexity) =
  edge = if there are no even occurrence items, then return null

*/

var evenOccurrence = function(arr) {
  // the array that holds the values that occurs an even number of times
  var occursEvenAmount = [];

  // iterate over the given array to get each value
  arr.forEach((value, index) => {
    // if it includes the same value (at the index - to search for those ahead)
    if (arr.includes(value, index)) {
      // filter out and create a new array of just those values - we wont need to count, since we can just get the length
      var valuesArr = arr.filter(checkVal => { if (checkVal === value) return checkVal });

      // if it occurs an even number of times
      if (valuesArr.length % 2 === 0){
        // then push it to the array
        occursEvenAmount.push(value);
      }
    }
  });

  // if there are no even occurrences - this would just be an empty array - then return null
  if (!occursEvenAmount.length) return null;

  // return the first array value - since this would have been the first value that was even
  return occursEvenAmount[0];
};

var number1 = [1, 7, 2, 4, 5, 6, 8, 9, 6, 4]; // only has 4 twice - all other values only occur once.
var number2 = [1, 3, 3, 3, 2, 4, 4, 2, 5]; // 1 occurs once, 3 occurs 3 times, 2 occurs 2 times (FIRST), four occurs even, but not first, 2 and 5 only occur once.
var string1 = ['rob', 'victor', 'fred', 'jess', 'rob', 'rob']; // rob occurs 3 times, the other values occur once - no even occurrences return null
var string2 = ['cat', 'dog', 'dig', 'cat']; // cat occurs twice
var string3 = ['meow', 1, 1, 'meow', 'meow', 'meow']; // meow is first and occurs 4 times, return meow, 1 occurs twice, but is not the first value
var string4 = ['doublerainbow', 'grumpycat', 'grumpycat', 'doublerainbow']; // doublerainbow is first and occurs twice, and grumpycat occurs twice but is not the first value.

var testEvenOccurence = function(actual, expected){
  var result = expected === actual ? `Test passed.` : `Test failed. Expected result of ${expected}, but actually received ${actual}.`;
  console.log(`Should find the first item that occurs an even number of times and returns that number: ${result}`);
};

// testEvenOccurence(evenOccurrence(number1), 4);
// testEvenOccurence(evenOccurrence(number2), 2);
// testEvenOccurence(evenOccurrence(string1), null);
// testEvenOccurence(evenOccurrence(string2), 'cat');
// testEvenOccurence(evenOccurrence(string3), 'meow');
// testEvenOccurence(evenOccurrence(string4), 'doublerainbow');