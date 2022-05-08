const { compose, pipe } = require('./composePipe');

describe('composePipe', () => {

  describe('compose', () => {

    var greet = function(name){ return 'hi: ' + name;}
    var exclaim = function(statement) { return statement.toUpperCase() + '!';}
    var welcome = compose(greet, exclaim);

    it ('should return a function', () => {
      expect(typeof welcome).toBe('function');
    });

    it ('should be able to compose 2 functions', () => {
      expect(welcome('phillip')).toBe('hi: PHILLIP!');
    });

    it ('should be able to compose more than 2 functions', () => {
      var lowercase = function(statement) { return statement.toLowerCase() + '?';}
      welcome = compose(lowercase, greet, exclaim);

      expect(welcome('phillip')).toBe('hi: phillip!?');
    });
  });

  describe('pipe', () => {

    var add2 = function(number){ return number + 2; }
    var multiplyBy3 = function(number){ return number * 3; }

    it('should return a function', () => {
      expect(typeof pipe).toBe('function');
    });

    it('should pass the input through 2 functions', () => {
      expect(pipe(add2, multiplyBy3)(5)).toBe(21)
    });

    it('should pass the input through more than 2 functions', () => {
      expect(pipe(add2, multiplyBy3, multiplyBy3)(5)).toBe(63)
    });

  });

});