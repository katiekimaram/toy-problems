const balancedParens = require('./balancedParens')

describe('balancedParens', () => {
  it('should be a function', ()=> {
    expect(balancedParens('(')).toBeDefined();
    expect(typeof balancedParens).toBe('function') ;
  });

  it('should return a boolean representing if parens are balanced', () => {
    // expect(typeof balancedParens('(')).toBe('boolean');
    expect(balancedParens('[')).toBeFalsy();
    expect(balancedParens(']')).toBeFalsy();
    expect(balancedParens('(')).toBeFalsy();
    expect(balancedParens('()')).toBeTruthy();
    expect(balancedParens(')(')).toBeFalsy();
    expect(balancedParens('(())')).toBeTruthy();
  });

  it('should work with other brackets', () => {
    expect(balancedParens('[](){}')).toBeTruthy();
    expect(balancedParens('[({})]')).toBeTruthy();
    expect(balancedParens('[(]{)}')).toBeFalsy();
  });

  it('should ignore non-bracket characters', () => {
    expect(balancedParens('var wow  = { yo: thisIsAwesome() }')).toBeTruthy();
    expect(balancedParens('var hubble = function() { telescopes.awesome();')).toBeFalsy();
  });

  it('should return true for empty string', () => {
    expect(balancedParens('')).toBeTruthy();
  });

  it('should be able to handle ridiculous', () => {
    expect(balancedParens('))))))))))((((((((((')).toBeFalsy();
    expect(balancedParens('(((((((((())))))))))')).toBeTruthy();
    expect(balancedParens('())()(()')).toBeFalsy();
    expect(balancedParens('(())()(())')).toBeTruthy();
    expect(balancedParens('[[[{{{((()))}}}]]]')).toBeTruthy();
    expect(balancedParens('[]}{()')).toBeFalsy();
  });
});