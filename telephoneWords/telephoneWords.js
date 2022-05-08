/*
  * Each number key on a standard phone keypad has a set of Latin letters written on
  * it as well: http://en.wikipedia.org/wiki/File:Telephone-keypad2.svg
  *
  * Businesses often try to come up with clever ways to spell out their phone number
  * in advertisements to make it more memorable. But there are a lot of combinations!
  *
  * Write a function that takes up to four digits of a phone number, and
  * returns a list of all of the words that can be written on the phone with
  * that number. (You should return all permutations, not only English words.)
  *
  * Example:
  *   telephoneWords('2745');
  *   => ['APGJ',
  *        'APGK',
  *        'APGL',
  *        ..., // many many more of these
  *        'CSIL']
  *
  * Tips:
  *   - Phone numbers are strings! (A phone number can start with a zero.)
  *   - The digits 0 and 1 do not have letters associated with them, so they should be left as numbers.
  *   - Don't return every combination of those digits in any order, just the order given.
  *
  *  Extra credit: There's a list of English dictionary words at /usr/share/dict/words .
  *  Why not filter your results to only return words contained in that file?
  *
  */

var phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'ABC',
  3: 'DEF',
  4: 'GHI',
  5: 'JKL',
  6: 'MNO',
  7: 'PQRS',
  8: 'TUV',
  9: 'WXYZ'
};


/*

I = a string of numbers
O = and array of strings
C = Limited to 4 numbers, no negative numbers
E = 7 and 9 have 4 letters instead of 3

*/

var telephoneWords = function(digitString) {
  // empty string
  var possiblePhoneWords = [];
  var index = 0;

  // if the length of string is more than 4
  if (digitString.length > 4){
    // then return an empty string
    return possiblePhoneWords;
  }

  var words = (digits) => {
    var digits = digits || '';

    if (digits.length === digitString.length) {
      possiblePhoneWords.push(digits);
      return;
    }

    debugger;

    var numberArr = digitString.split('');
    numberArr.forEach((num) => {
      var current = phoneDigitsToLetters[num];
      for (var i = 0; i < current.length; i++) {
         words(digits + current);
      }
    });

  };

//   // iterate over the string
//   for(var i = 0; i < digitString.length; i++){
//     var convertedString = '';
//     var num = digitString[i];

//     // if its 0 or 1
//     if (num === 0 || num === 1) {
//       // add the value to the string
//       convertedString += num;
//     // otherwise
//     } else {
//       var letters = phoneDigitsToLetters[num];
//       // get the value and iterate over the phoneDigitsToLetters for possible combinations
//       convertedString += letters[index]

//       if (index > letters.length){
//         index = 0;
//       }
//       index++;
//     }
//   }

  words();

  // return the string
  return possiblePhoneWords;
};

var testingTelephoneWords = (message, actual, expected) => {
  return actual === expected ? `${message}: Test passed.` : `${message}: Expected ${expected} but actually received ${actual}.`;
};

telephoneWords('2745'); // ['APGJ', 'APGK', 'APGL', '...' 'CSIL']