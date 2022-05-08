const Range = require('./rangeClass');

describe('Range Class', () => {
  it('should exist', () => {
    expect(Range).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof Range).toBe('function');
  });

  it('should be a constructor', () => {
    var result = new Range(3);
    expect(typeof result).toBe('object');
  });

  it('should not use an array', () => {
    var result = new Range(3);
    expect(Object.values(result).some(val => Array.isArray(val))).toBeFalsy();
  });

  it('should have size() method that returns number of elements', () => {
    var result = new Range(0, 10);
    expect(result.size()).toEqual(10);

    var countdown = new Range(10, 0);
    expect(countdown.size()).toEqual(10);
  });

  it('should be able to count backwards', () => {
    var countdown = new Range(10, 0, -1);
    var elements = [];
    countdown.each(function (val) {
      elements.push(val);
    });
    expect(elements).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });

  it('should be able to count backwards implicitly', () => {
    var countdown = new Range(10, 0);
    var elements = [];
    countdown.each(function (val) {
      elements.push(val);
    });
    expect(elements).toEqual([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });

  it('should be able to count down by 2', () => {
    var countdown = new Range(10, 0, -2);
    var elements = [];
    countdown.each(function (val) {
      elements.push(val);
    });
    expect(elements).toEqual([10, 8, 6, 4, 2, 0]);
  });

  it('should count up', () => {
    var threes = new Range(0, 3);
    var elements = [];
    threes.each(function (val) {
      elements.push(val);
    });
    expect(elements).toEqual([0,1,2,3]);
  });

  it('#includes should tell us if a number is in the series', () => {
    var justOne = new Range(1);
    expect(justOne.includes(1)).toBeTruthy();
    expect(justOne.includes(50)).toBeFalsy();

    var threes = new Range(3, 100, 3);
    expect(threes.includes(3)).toBeTruthy();
    expect(threes.includes(4)).toBeFalsy();
    expect(threes.includes(33)).toBeTruthy();
    expect(threes.includes(99)).toBeTruthy();
  });
});