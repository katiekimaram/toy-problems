const powerSet = require('./powerSet');

describe('powerSet', () => {
  it('powerSet should return an array', () => {
    expect(Array.isArray(powerSet("abc"))).toBeTruthy();
  });

  it('powerSet should contain the original set', () => {
    expect(JSON.stringify(powerSet("a"))).toBe(JSON.stringify([ '' , 'a']));
  });

  it('powerSet should work for sets of length 3', () => {
    var result = powerSet("abc");

    expect(result).toEqual(expect.arrayContaining(['']));
    expect(result).toEqual(expect.arrayContaining(['a']));
    expect(result).toEqual(expect.arrayContaining(['b']));
    expect(result).toEqual(expect.arrayContaining(['c']));
    expect(result).toEqual(expect.arrayContaining(['ab']));
    expect(result).toEqual(expect.arrayContaining(['ac']));
    expect(result).toEqual(expect.arrayContaining(['bc']));
    expect(result).toEqual(expect.arrayContaining(['abc']));
  });

  it('powerSet should contain the original set for larger sets', () => {
    var result = powerSet("jump");

    expect(result).toEqual(expect.arrayContaining(['']));
    expect(result).toEqual(expect.arrayContaining(['j']));
    expect(result).toEqual(expect.arrayContaining(['ju']));
    expect(result).toEqual(expect.arrayContaining(['jm']));
    expect(result).toEqual(expect.arrayContaining(['jp']));
    expect(result).toEqual(expect.arrayContaining(['jmp']));
    expect(result).toEqual(expect.arrayContaining(['jum']));
    expect(result).toEqual(expect.arrayContaining(['u']));
    expect(result).toEqual(expect.arrayContaining(['m']));
    expect(result).toEqual(expect.arrayContaining(['p']));
    expect(result).toEqual(expect.arrayContaining(['mp']));
    expect(result).toEqual(expect.arrayContaining(['jump']));
  });

  it('powerSet should remove duplicates from the original set', () => {
    var sortSet = function sortSet(set) {
      return set.split('').sort().join('');
    }; // `result` is the power set of `"bbbaaa"`


    var result = powerSet('bbbaaa'); // sort each set in the power set

    for (var i = 0; i < result.length; i++) {
      result[i] = sortSet(result[i]);
    }

    expect(result).toEqual(expect.not.arrayContaining(['aa']));
    expect(result).toEqual(expect.not.arrayContaining(['aaa']));
    expect(result).toEqual(expect.not.arrayContaining(['bb']));
    expect(result).toEqual(expect.not.arrayContaining(['bbb']));
    expect(result).toEqual(expect.arrayContaining(['a']));
    expect(result).toEqual(expect.arrayContaining(['b']));
  });

  it('powerSet should include the empty set', () => {
    expect(powerSet("abc")).toEqual(expect.arrayContaining(['']));
  });
});