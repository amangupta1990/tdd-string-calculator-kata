const stringCalculator = require("../src/stringCalculator");

describe("String Calculator", () => {
  it("should return 0 if string is empty", () => {
    expect(stringCalculator("")).toBe(0);
  });

  it("should return the same number if string has only one value", () => {
    expect(resultEvaluator("1", 1));
    expect(resultEvaluator("2 ", 2));
    expect(resultEvaluator(" 3", 3));
  });

  it("should return the sum of numbers separated by a comma", () => {
    expect(resultEvaluator("1,2,3,4,5", 15));
  });

  it("should return the sum of numbers separated by spaces", () => {
    expect(resultEvaluator("5 10", 15));
    expect(resultEvaluator("5   10", 15));
  });

  it("should return the sum of numbers separated by a comma and newlines", () => {
    expect(resultEvaluator("1\n4,5", 10));
  });

  it("should use the delimiter specified in the first line", () => {
    expect(resultEvaluator("//[;]\n1;2", 3));
  });

  it("should use delimiters of any length", () => {
    expect(resultEvaluator("//[;;]\n1;;2;;3", 6));
  });

  it("should use multiple delimiters", () => {
    expect(resultEvaluator("//[;][,]\n1;2,3", 6));
  });

  it("should use multiple delimiters of any length", () => {
    expect(resultEvaluator("//[;;][,]\n1;;2,3", 6));
  });

  it("show throw an exception if a negative number(s) is found", () => {
    expect(() => stringCalculator("-1")).toThrow("Negatives not allowed: -1");
    expect(() => stringCalculator("1,-2")).toThrow("Negatives not allowed: -2");
  });

  it("should skip numbers bigger than 1000", () => {
    expect(resultEvaluator("1001", 0));
    expect(resultEvaluator("1000,1001", 1000));
    expect(resultEvaluator("1001,1002", 0));
    expect(resultEvaluator("1000,2,1001,1002,3", 1005));
  });

  const resultEvaluator = (input, expected) => {
    expect(stringCalculator(input)).toBe(expected);
  };
});
