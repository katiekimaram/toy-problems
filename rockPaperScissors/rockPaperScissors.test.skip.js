const rockPaperScissors = require('./rockPaperScissors');
const isUniq = arr => Array.isArray(arr) && new Set(arr).size === arr.length;

describe('General', () => {
  it('should be defined', () => {
    expect(rockPaperScissors(3)).toBeDefined();
  });

  it('should be a function', () => {
    expect(typeof rockPaperScissors).toBe('function');
  });

  it('should be an array', () => {
    expect(Array.isArray(rockPaperScissors(3))).toBeTruthy();
  });

  it('should be an array of strings', () => {
    var isString = rockPaperScissors(3).every(element => {
      return typeof element === 'string';
    });
    expect(isString).toBeTruthy();
  });
});

// 1 ROUND
describe('1 Round' , () => {
  var actual = rockPaperScissors(1);
  var expected = ['R', 'P', 'S'];

  it('should result in 3 possible outcomes', () => {
    expect(actual.length).toBe(3)
  });
});

// 2 ROUNDS
describe('2 Rounds', () => {
  var actual = rockPaperScissors(2);
  var expected = ['RR', 'RP', 'RS', 'PR', 'PP', 'PS', 'SR', 'SP', 'SS'];

  it('should result in 9 possible outcomes', () => {
    expect(actual.length).toBe(9)
  });
});

// 3 ROUNDS
describe('3 Rounds', () => {
  var actual = rockPaperScissors(3);
  var expected = ['RRR', 'RRP', 'RRS', 'RPR', 'RPP', 'RPS', 'RSR', 'RSP', 'RSS', 'PRR', 'PRP', 'PRS', 'PPR', 'PPP', 'PPS', 'PSR', 'PSP', 'PSS', 'SRR', 'SRP', 'SRS', 'SPR', 'SPP', 'SPS', 'SSR', 'SSP', 'SSS'];

  it('should result in 27 possible outcomes', () => {
    expect(actual.length).toBe(27)
  });

  it('should contain every throw', () => {
    var result = rockPaperScissors();
    expect(result.length).toBe(expected.length);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it('should all be unique outcomes', () => {
    expect(isUniq(actual)).toBeTruthy();
  });
});