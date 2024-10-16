const stringCalculator = require('../src/stringCalculator');

describe('String Calculator', () => {
    it('should return 0 if string is empty', () => {
        expect(stringCalculator('')).toBe(0);
    });

    it('should return the same number if string has only one value', () => {
        expect(resultEvaluator("1", 1));
        expect(resultEvaluator("2 ", 2));
        expect(resultEvaluator(" 3", 3));
    })

    it('should return the sum of numbers separated by a comma', () => {
        expect(resultEvaluator("1,2,3,4,5", 15));
    });

    it('should return the sum of numbers separated by a comma and newlines', () => {
        expect(resultEvaluator("1\n4,5", 10));
    });

    const resultEvaluator = (input, expected) => {
        expect(stringCalculator(input)).toBe(expected);
    }

});