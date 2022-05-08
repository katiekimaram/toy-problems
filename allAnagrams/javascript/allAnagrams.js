/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 * 
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example usage:
  * var anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

/*

I = String
O = Array
C =
E = undefined, null, or non strings as the param -> 

*/



// var allAnagrams = function(string) {
//   // create array results variable
//   var results = [];

//   // start with the first letter in the string
//   var anagrams = (firstLetter, start) => {
//     // reate start string, 
//     var startString = string.slice(start).concat(string.substring(0, start));
//     // select a random number to be the index between the remaining letters
//     var randomIndex = Math.floor(Math.random() * (startString.length - 1) + 1);

//     var currentString = '';
//     currentString += firstLetter;
//     currentString += startString[randomIndex];

//     var rest = string.slice(1).replace(string[randomIndex],'');
//     currentString += rest;

//     // return the string
//     if (currentString.length === string.length){
//       results.push(currentString);
//     }
//     // repeat until no options are left for the first letter
//   };

//   // shift the first letter to the last letter now
//   // repeat the steps above starting with the new letter
//   for(var i = 0; i < string.length; i++){
//     anagrams(string[i], i);
//   }

//   // when all letters are iterated through, then return the array
//   return results;

// };

// var anagrams = allAnagrams('abc');
// console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
