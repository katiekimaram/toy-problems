/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function(s, k) {
    
    if (k == 1 ) {
        let storage = s;
        
        for (let i = 1; i < s.length; i++) {
            let tmp = s.slice(i) + s.slice(0, i);
            if (tmp < storage) storage = tmp
        }
        
        return storage;
    }
    
    return s.split('').sort().join('')
};