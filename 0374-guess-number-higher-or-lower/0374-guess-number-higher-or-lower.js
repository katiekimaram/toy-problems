/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(max, min = 0) {
    min = min > 0 ? min - 1 : 0;
    
    let pick = Math.floor(Math.random() * (max - min + 1) + min);
    
    switch (guess(pick)){
        case -1:
            return guessNumber(pick);
        case 1:
            return guessNumber(max, pick);
        case 0:
        default:
            return pick;
    }

};