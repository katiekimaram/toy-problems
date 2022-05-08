/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

/*

I = number - amount of money in pence
O = number - of all possible combination of change
C =
E =

*/

var makeChange = function(total) {
  // create an array of the 8 coins
  var coins = [1,2,5,10,20,50,100,200]
  // count the possible ways of making change
  var changeCount = 0;

  // go to the cashRegister and get the change needed for the current coin
  var cashRegister = (value, index) => {
      // get the current coin at the index
      var currentCoin = coins[index];

      // if the index is 0
      if (index === 0) {
          // check if the value has any remainder for the current coin
          if (value % currentCoin === 0){
              // if it does, then add it to the count
              changeCount++;
          }
          // otherwise, stop
          return;
      }

      // continue to go through the value until it is 0
      while (value >= 0) {
          // continue checking the cashRegister for the current value and current coin
          cashRegister(value, index - 1);
          // subtract the coin from the total
          value -= currentCoin;
      }
  };

  // check the cashRegister for the total and
  cashRegister(total, coins.length - 1);

  // return the count
  return changeCount;
};

// // aka, there's only one way to make 1p. that's with a single 1p piece
// console.log(makeChange(1) === 1);
// // aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
// console.log(makeChange(2) === 2);

