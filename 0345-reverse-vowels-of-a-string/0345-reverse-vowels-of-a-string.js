/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  let arr = [];
  s = s.split('');

  // get vowels
  // reverse vowels
  let reverse = s.filter(ch => vowels.includes(ch)).reverse()

  s.map(ch => {
    if(vowels.includes(ch)) {
      arr.push(reverse[0])
      reverse.shift()
    } else {
      arr.push(ch);
    }
  });

  return arr.join('')
};
