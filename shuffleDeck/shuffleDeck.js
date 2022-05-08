/**
 * Given an array containing a deck of cards, implement a function that shuffles
 * the deck.
 *
 * Example:
 *  var deck = orderedDeck();
 *  // ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
 *  shuffleDeck(deck);
 *  // ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]
 *
 * Note:
 *   A shuffled deck should be completely random. That means that a given card should
 *   be as likely as any other to appear in a given deck index, completely independent
 *   of the order of the input deck. Think carefully about how to be sure your algorithm
 *   generates a properly shuffled deck-- it is easy to accidentally create a biased algorithm.
 *
 * Extra credit:
 *   - Even a naive algorithm can easily run in linear time. However, does your
 *     algorithm remain unbiased as N (the deck size) increases? How do you know?
 *   - Once you have created a properly random, linear algorithm, what is its space complexity?
 *     There is an algorithm that uses O(N) time and O(1) space (i.e., an in-place shuffle).
 *
 * A further note on randomness:
 *   Technically, a computer-shuffled deck will usually be "pseudorandom",
 *   not "truly" random. However, the difference between the two is too small to
 *   be detectable by any known test.
 *   See http://en.wikipedia.org/wiki/Pseudorandom_number_generator .
 *
 *   A human shuffler is much more biased; it takes around seven normal "riffle"
 *   shuffles before a real deck is actually randomized.
 *   See https://www.dartmouth.edu/~chance/teaching_aids/books_articles/Mann.pdf .
 */

// Ordered deck generator provided for your testing convenience
// (You may alter this function, but an unaltered copy will be used for tests.)

var shuffleDeck = function(deck) {
  let isDuplicate = false;
  let copyDeck = deck.concat();

  // iterate over each of the cards
  copyDeck.forEach((card, position) => {
    // create an equation to randomly assign the index for the current cards
    let newPos = Math.floor(Math.random() * 52);
    // if the card has not been shuffled yet (compare with the deck index to the current index)
    if (copyDeck[position] !== copyDeck[newPos]){
      // then hold the card and switch the positions of both of the cards
      let holdCard = card;
      copyDeck[position] = copyDeck[newPos];
      copyDeck[newPos] = holdCard;
    }

    // if it includes the card and its at the same index - check for duplicates
    if (copyDeck.includes(card) && copyDeck.indexOf(card) === position){
      isDuplicate = true;
    }
  });

  // return the deck only if there are no duplicates
  if (isDuplicate){
    // otherwise, shuffle the deck again
    shuffleDeck(copyDeck);
  }

  return copyDeck;
};