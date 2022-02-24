/*

I = a string that has dashes and underscores
O = a string with no dashes or underscores, with each of the first letters of the word capitalized
- the first word should not be capitalized, unless it was capitalized
C = Linear?
E = empty string should return an empty string

*/

// ORIGINAL

// function toCamelCase(str){
//     if (str === '') return str;
    
//     var arr = str.split(str.includes('-') ? '-' : '_');
//     var convert = arr[0];
    
//     arr.map((word, i) => convert += i = 0 ? word : word.charAt(0).toUpperCase() + word.slice(1));
    
//     return convert; 
// }

// REFACTORED

function toCamelCase(str){
    return str === '' ? str : str.split(str.includes('-') ? '-' : '_').map((word, i) => i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

module.exports = toCamelCase;