const oddValuesInArray = require("./oddValuesInArray");

describe("oddValuesInArray function", () => {
  test("should return an array of odd numbers", () => {
    expect(oddValuesInArray([1, 2, 3, 4, 5, 6])).toEqual([1, 3, 5]);
  });

  test("should return an empty array when no odd numbers are found", () => {
    expect(oddValuesInArray([2, 4, 6, 8])).toEqual([]);
  });

  test("should handle negative odd numbers", () => {
    expect(oddValuesInArray([-1, -3, -5, -7])).toEqual([-1, -3, -5, -7]);
  });

  test("should return an empty array for an empty input array", () => {
    expect(oddValuesInArray([])).toEqual([]);
  });

  test("should handle arrays with only one odd number", () => {
    expect(oddValuesInArray([3])).toEqual([3]);
  });

  test("should handle arrays with a mix of even and odd numbers", () => {
    expect(oddValuesInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([
      1, 3, 5, 7, 9,
    ]);
  });
});
