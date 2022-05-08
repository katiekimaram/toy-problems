const firstNonRepeatedCharacter = require('./nonrepeatedCharacter');

describe('First Non Repeated Character', () => {
  it('should exist', () => {
    expect(firstNonRepeatedCharacter('')).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof firstNonRepeatedCharacter).toBe('function');
  });

  it('should return \'null\' for an empty string', () => {
    expect(firstNonRepeatedCharacter('')).toEqual(null);
  });

  it('should return \'null\' for strings that have all the same characters', () => {
    expect(firstNonRepeatedCharacter('AAAA')).toEqual(null);
  });

  it('should return the first nonrepeating character in the string \'AABCAC\'', () => {
    expect(firstNonRepeatedCharacter('AABCAC')).toEqual('B')
  });

  it('should return the first nonrepeating character in the string \'ABCA\'', () => {
    expect(firstNonRepeatedCharacter('ABCA')).toEqual('B')
  });

  it('should return the first nonrepeating character in the string \'AAAACX\'', () => {
    expect(firstNonRepeatedCharacter('AAAACX')).toEqual('C')
  });

  it('should return the first nonrepeating character in the string \'AABCABD\'', () => {
    expect(firstNonRepeatedCharacter('AABCABD')).toEqual('C')
  });

});