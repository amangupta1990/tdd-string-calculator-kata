const stringCalculator = require('../src/stringCalculator');

describe('String Calculator', () => {
    it('should return 0 if string is empty', () => {
        expect(stringCalculator('')).toBe(0);
    });

});