const maxInArray = require("./maxInArray");
describe("maxInArray", () => {
  test("should return the maximum value in the array", () => {
    const input1 = [3, 5, 2, 7, 1];
    const result1 = maxInArray(input1);
    expect(result1).toBe(7);
    const input2 = [-5, -3, -10, -8, -1];
    const result2 = maxInArray(input2);
    expect(result2).toBe(-1);
  });
  test("should return the only element if the array contains only one element", () => {
    const input = [5];
    const result = maxInArray(input);
    expect(result).toBe(5);
  });
  test("should return undefined for an empty array", () => {
    const input = [];
    const result = maxInArray(input);
    expect(result).toBeUndefined();
  });
  test("should return the maximum value if all elements are the same", () => {
    const input = [5, 5, 5, 5, 5];
    const result = maxInArray(input);
    expect(result).toBe(5);
  });
  test("should return the minimum value for an array with mixed positive and negative numbers", () => {
    const input = [-5, 3, -10, 8, -1];
    const result = maxInArray(input);
    expect(result).toBe(8);
  });
});
