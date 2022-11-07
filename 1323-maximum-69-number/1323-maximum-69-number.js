/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {

    let arr = num.toString().split(''),
      i = 0;

    while (i < arr.length) {
      if(arr[i] !== '9') {
        arr[i] = '9'
        break;
      }

      i++;
    }
    
    return parseInt(arr.join(''))
};