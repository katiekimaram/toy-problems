/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function(s) {
    
    const data = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    
    let result = [],
        arr = s.split('')

    arr.map((val, i) => {
        switch (val) {
            case 'C':
                if (arr[i + 1] === 'M') arr.splice(i, 2, 'CM');
                if (arr[i + 1] === 'D') arr.splice(i, 2, 'CD');
                break;
            case 'X':
                if (arr[i + 1] === 'C') arr.splice(i, 2, 'XC');
                if (arr[i + 1] === 'L') arr.splice(i, 2, 'XL');
                break;
            case 'I':
                if (arr[i + 1] === 'X') arr.splice(i, 2, 'IX');
                if (arr[i + 1] === 'V') arr.splice(i, 2, 'IV');
                break;
        }
    });
    
    arr.map(val => result.push(data[val]));
    
    return result.reduce((prev, curr) => prev + curr);
};