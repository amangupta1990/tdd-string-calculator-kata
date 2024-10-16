const stringCalculator = require('../src/stringCalculator');

describe('String Calculator', () => {
    it('should return 0 if string is empty', () => {
        expect(stringCalculator('')).toBe(0);
    });

    it('should return 1 if string is "1"', () => {
        expect(stringCalculator('1')).toBe(1);
    })

});