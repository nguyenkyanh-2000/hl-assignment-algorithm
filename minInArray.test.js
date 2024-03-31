const minInArray = require("./minInArray");
describe("minInArray", () => {
  test("should return the minimum value in the array", () => {
    const input1 = [3, 5, 2, 7, 1];
    const result1 = minInArray(input1);
    expect(result1).toBe(1);
    const input2 = [-5, -3, -10, -8, -1];
    const result2 = minInArray(input2);
    expect(result2).toBe(-10);
  });
  test("should return the only element if the array contains only one element", () => {
    const input = [5];
    const result = minInArray(input);
    expect(result).toBe(5);
  });
  test("should return undefined for an empty array", () => {
    const input = [];
    const result = minInArray(input);
    expect(result).toBeUndefined();
  });
  test("should return the minimum value if all elements are the same", () => {
    const input = [5, 5, 5, 5, 5];
    const result = minInArray(input);
    expect(result).toBe(5);
  });
  test("should return the minimum value for an array with mixed positive and negative numbers", () => {
    const input = [-5, 3, -10, 8, -1];
    const result = minInArray(input);
    expect(result).toBe(-10);
  });
});
