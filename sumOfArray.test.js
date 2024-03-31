const sumOfArray = require("./sumOfArray");

describe("sumOfArray function", () => {
  test("should return 0 for an empty array", () => {
    expect(sumOfArray([])).toBe(0);
  });

  test("should return the sum of positive integers", () => {
    expect(sumOfArray([1, 2, 3, 4, 5])).toBe(15);
  });

  test("should return the sum of negative integers", () => {
    expect(sumOfArray([-1, -2, -3, -4, -5])).toBe(-15);
  });

  test("should return the sum of mixed positive and negative integers", () => {
    expect(sumOfArray([-1, 2, -3, 4, -5])).toBe(-3);
  });

  test("should return the sum of an array with one 32-bit integer", () => {
    expect(sumOfArray([2147483647])).toBe(2147483647);
  });

  test("should return the sum of an array with multiple 32-bit integers", () => {
    expect(
      sumOfArray([1000000000, -2000000000, 3000000000, -4000000000, 2147483647])
    ).toBe(147483647);
  });
});
