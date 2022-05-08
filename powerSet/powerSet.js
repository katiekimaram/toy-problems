/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note:
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same.
 *
 * Example 2 :
 *
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 *
 * I = A string
 * O = An array of all possible subsets
 * C = Exponential
 * E = An empty string, duplicate characters
 *
 */

var powerSet = function(str) {
  // remove duplicates
  var uniq = str.split('').filter((ch, i, arr) => arr.indexOf(ch) === i);

  // storage
  var storage = [[]];

  // iterate over the array
  uniq.forEach((ch, i) => {
    var length = storage.length;
    for(var i = 0; i < length; i++){
      storage.push(storage[i].concat(ch));
    }
  });

  return storage.map(subset => subset.join(''));
};

// module.exports = powerSet;
