/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    var throwErr = (err) => {throw new Error(err)};
    
    return {
        toBe: (val2) => val === val2 || throwErr("Not Equal"),
        notToBe: (val2) => val !== val2 || throwErr("Equal")
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */