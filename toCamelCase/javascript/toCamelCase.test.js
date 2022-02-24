var toCamelCase = require('./toCamelCase.js');
describe("toCamelCase", () => {
    it('should return an empty string when input is empty', () => {
        expect(toCamelCase('')).toEqual('');
    });

    it('should return the correct value for "the_stealth_warrior"', () => {
        expect(toCamelCase("the_stealth_warrior")).toEqual("theStealthWarrior");
    });

    it('should return the correct value for "The-Stealth-Warrior"', () => {
        expect(toCamelCase("The-Stealth-Warrior")).toEqual("TheStealthWarrior");
    });

    it('should return the correct value for "A-B-C"', () => {
        expect(toCamelCase("A-B-C")).toEqual("ABC");
    });

});
  