/*
*
* Integer Reverse
*
* Given a positive integer, return its digits reversed.
*
* - DO NOT CONVERT THE INPUT INTO A STRING OR ARRAY.
* - Only use integers and math in your solution.
*
*/

/*

I = A number
O = A number that is reverse of the input.
C = Linear
E = Negative numbers, zero, duplicates

*/

function reverseInteger(num){
  var digit, result = 0
  var sign = Math.sign(num);
  num = Math.abs(num);

  while (num) {
    // get the right most digit
    digit = num % 10;
    // multiply the result to shift it to the left, then add the digit
    result *= 10;
    result += digit;
    // remove the right most digit from the original number
    num /= 10
    num = Math.floor(num)

  }

  return  sign * result;
}

// module.exports = reverseInteger;
