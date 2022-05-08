const commonCharacters = require('./commonCharacters');

describe('Common Characters', () => {

  it('should be a function', () => {
    expect(typeof commonCharacters).toBe('function');
  });

  it('should return something', () => {
    expect(commonCharacters('acexivou', 'aegihobu')).toEqual(expect.anything());
  });

  it('should not return an Array', () => {
    expect(Array.isArray(commonCharacters())).toBeFalsy();
  });

  it('should return a string', () => {
    expect(typeof commonCharacters()).toBe('string');
  });

  it('should return common characters for simple strings', () => {
    expect(commonCharacters('abc', 'abc')).toEqual('abc');
    expect(commonCharacters('ab', 'bc')).toEqual('b');
  });

  it('should return the common characters in the order they appear', () => {
    expect(commonCharacters('zyx', 'xzy')).toEqual('zyx');
  });

  it('should return the original string for repeated versions of a characters', () => {
    expect(commonCharacters('aeiou', 'aaeeiioouu')).toEqual('aeiou');
  });

  it('should return "" if the first string is ""', () => {
    expect(commonCharacters('', 'aegihobu')).toEqual('');
  });

  it('should return the common characters for this anagram', () => {
    var string1 = 'all boys love fudge';
    var string2 = 'boys all love fudge';
    expect(commonCharacters(string1, string2)).toEqual('alboysvefudg');
  });

  it('should return an empty string when comparing two empty strings', () => {
    expect(commonCharacters('', '')).toEqual('');
  });

  it('should return common characters between more than two strings', () => {
    var result = commonCharacters('qwerty', 'wertyu', 'ertyui', 'rtyui', 'tyuiop', 'yuiopa');
    expect(result).toBe('y');
  });

})