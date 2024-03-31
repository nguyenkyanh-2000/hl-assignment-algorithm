const evenValuesInArray = require("./evenValuesInArray");

describe("evenValuesInArray function", () => {
  test("should return an array of even numbers", () => {
    expect(evenValuesInArray([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  test("should return an empty array when no even numbers are found", () => {
    expect(evenValuesInArray([1, 3, 5, 7, 9])).toEqual([]);
  });

  test("should handle negative even numbers", () => {
    expect(evenValuesInArray([-2, -4, -6, -8])).toEqual([-2, -4, -6, -8]);
  });

  test("should return an empty array for an empty input array", () => {
    expect(evenValuesInArray([])).toEqual([]);
  });

  test("should handle arrays with only one even number", () => {
    expect(evenValuesInArray([2])).toEqual([2]);
  });

  test("should handle arrays with a mix of even and odd numbers", () => {
    expect(evenValuesInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([
      2, 4, 6, 8, 10,
    ]);
  });
});
