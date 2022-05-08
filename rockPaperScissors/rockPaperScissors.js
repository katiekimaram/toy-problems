/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   ["RRR",
*    "RRP",
*    "RRS",
*    "RPR",
*    ...etc...
*   ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
*
* Example:
* rockPaperScissors(5); // => ['RRRRR', 'RRRRP', 'RRRRS', etc...]
*
*/

/*

I = A number - of rounds
O = An array - of all possible outcomes.
C = Linear? - Recursive/iterative.
E = Negative numbers, 0 rounds

*/

var rockPaperScissors = function (rounds = 3) {
  // set a collection for all possible outcomes
  var possible = [];

  // create a function to iterate through each play - keep track of whats been played
  var playRound = (plays = '') => {

    // if the length of the string is equal to how many rounds
    if (plays.length === rounds) {
      // then add it to the collection
      possible.push(plays);
    // otherwise
    } else {
      // create a list of R P S - iterate over the collection
      ['R','P','S'].forEach(current => {
        // run the function with the current play and the previous plays
        playRound(plays + current);
      });
    }

  };

  // run the function
  playRound();

  // return the possible collection
  return possible;
};

module.exports = rockPaperScissors;