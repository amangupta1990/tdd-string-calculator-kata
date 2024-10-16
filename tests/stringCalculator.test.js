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

    it('should return the sum of numbers separated by spaces', () => {
        expect(resultEvaluator("5 10", 15));
        expect(resultEvaluator("5   10", 15));
    });

    it('should return the sum of numbers separated by a comma and newlines', () => {
        expect(resultEvaluator("1\n4,5", 10));
    });

    it('should use the delimiter specified in the first line', () => {
        expect(resultEvaluator("//;\n1;2", 3));
        expect(resultEvaluator("//;;\n1;;2;;3", 6));
    });

    it('show throw an exception if a negative number(s) is found', () => {
        expect(() => stringCalculator("-1")).toThrow('Negatives not allowed');
        expect(() => stringCalculator("1,-2")).toThrow('Negatives not allowed: -2');

    })



    const resultEvaluator = (input, expected) => {
        expect(stringCalculator(input)).toBe(expected);
    }

});