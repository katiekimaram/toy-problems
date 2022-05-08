const shuffleDeck = require('./shuffleDeck');

// creating an ordered deck
var orderedDeck = function() {
  var suits = [ '♥', '♣', '♠', '♦' ];
  var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  var deck = [];

  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
};

var input = orderedDeck();
var control = orderedDeck();
var result = shuffleDeck(input);

describe('ShuffleDeck', () => {
  test('Should return an array', () => {
    expect(Array.isArray(result)).toBe(true);
  });

  test('Should return an array with every card in the deck', () => {
    for (var i = 0; i < control.length; i++) {
      expect(result).toContain(control[i]);
    }

    for (var i = 0; i < result.length; i++) {
      expect(result).toContain(result[i]);
    }
  });

  test('Should not return the deck in input order', () => {
    expect(result).not.toEqual(control);
  });

  test('Should not return the deck in the same order twice', () => {
    var input2 = orderedDeck();
    var result2 = shuffleDeck(input2);

    expect(result).not.toEqual(result2);
  });

  test('Should not have any bias from a uniform distribution', () => {
    var deck = orderedDeck();
    var cardPositionCounts = {};

    for (var i = 0; i < deck.length; i++) {
      var cardPosition = cardPositionCounts[deck[i]] = {};

      for (var j = 0; j < deck.length; j++) {
        cardPosition[j] = 0;
      }
    }

    var iterations = 52 * 10;

    for (var i = 0; i < iterations; i++) {
      deck = orderedDeck();
      var randomDeck = shuffleDeck(deck);

      for (var j = 0; j < randomDeck.length; j++) {
        cardPositionCounts[randomDeck[j]][j] += 1;
      }
    } // The result should not betray any obvious statistical bias.


    deck = orderedDeck(); // The expected number of occurrences for a particular card in a particular index is
    // iterations/52 = 10

    var expected = 10;
    var chi2 = 0;

    for (var i = 0; i < deck.length; i++) {
      var cardPosition = cardPositionCounts[deck[i]];

      for (var j = 0; j < deck.length; j++) {
        // calculate chi-squared test
        chi2 += Math.pow(cardPosition[j] - expected, 2) / expected;
      }
    } // quick and dirty statistical test:
    // if your shuffles are uniformly distributed, chi-squared should be roughly 52^2


    chi2.should.be.approximately(52 * 52, 52 * 10);
    return chi2;
  });
});

describe('Extra Credit', () => {
  test('for large N, should not have any bias from a uniform distribution', () => {
    var orderedArray = function orderedArray() {
      var output = [];

      for (var i = 0; i < 1000; i++) {
        output.push(i);
      }

      return output;
    };

    var deck = orderedArray(); // Keep a table of how often each integer appears in each array position...

    var cardPositionCounts = {};

    for (var i = 0; i < deck.length; i++) {
      var cardPosition = cardPositionCounts[deck[i]] = {};

      for (var j = 0; j < deck.length; j++) {
        cardPosition[j] = 0;
      }
    } // ...over the course of five thousand shuffles


    var iterations = 1000 * 5;

    for (var i = 0; i < iterations; i++) {
      deck = orderedArray();
      var randomDeck = shuffleDeck(deck);

      for (var j = 0; j < randomDeck.length; j++) {
        cardPositionCounts[randomDeck[j]][j] += 1;
      }
    } // The result should not betray any obvious statistical bias.


    deck = orderedArray(); // The expected number of occurrences for a particular card in a particular index is
    // iterations/1000 = 1

    var expected = 5;
    var chi2 = 0;

    for (var i = 0; i < deck.length; i++) {
      var cardPosition = cardPositionCounts[deck[i]];

      for (var j = 0; j < deck.length; j++) {
        // calculate chi-squared test
        chi2 += Math.pow(cardPosition[j] - expected, 2) / expected;
      }
    } // quick and dirty statistical test:
    // if your shuffles are uniformly distributed, chi-squared should be roughly 1000^2


    chi2.should.be.approximately(1000 * 1000, 1000 * 10);
  })
});

// TESTING
// var testingShuffleDeck = (message, actual, expected) => {
//   return actual !== expected && actual !== undefined ? `${message}: Test passed.` : `${message}: Test failed. Expected deck to not be ordered.`
// };

// var testingDeck = orderedDeck();
// testingShuffleDeck('Should give anything but the ordered deck and not empty', shuffleDeck(testingDeck), orderedDeck());
// // console.log(shuffleDeck(deck));
// // console.log(deck);