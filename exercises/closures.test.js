import { describe, expect, test } from "vitest";
import { addS, addTwo, map, foreach, mapWith, reduce } from "./closures";

describe("Add two with input", () => {
  test("add two", () => {
    expect(addTwo(2)).toBe(4);
  });

  test("add ten", () => {
    expect(addTwo(10)).toBe(12);
  });
});

describe("Add s at the end of input", () => {
  test("add s to pizza", () => {
    expect(addS("pizza")).toBe("pizzas");
  });

  test("add s to bagel", () => {
    expect(addS("bagel")).toBe("bagels");
  });
});

describe("Add 2 to the end of the inputs", () => {
  test("add 2 to the inputs", () => {
    expect(map([1, 2, 3], addTwo)).toEqual([3, 4, 5]);
  });
});

// describe("Apply callback action to array", () => {
//   const toLowerCase = (input) => input.toLowerCase();

//   test("make array irems lowercase", () => {
//     expect(foreach(["A", "B", "c"], toLowerCase)).toEqual(["a", "b", "c"]);
//   });
// });
describe("extension 1", () => {
  const toLowerCase = (input) => input.toLowerCase();

  test("make array items lowercase", () => {
    expect(mapWith(["A", "B", "c"], toLowerCase)).toEqual(["a", "b", "c"]);
  });
  test("make array not upercase", () => {
    expect(mapWith(["A", "B", "c"], toLowerCase)).not.toEqual(["A", "B", "c"]);
  });
});
describe("extension 2", () => {
  const addition = (input, increaseBy) => increaseBy + input;
  const subtraction = (input, decreaseBy) => decreaseBy - input;

  test("Addition total", () => {
    expect(reduce([1, 2, 3, 4], addition, 0)).toBe(10);
  });
  test("Subtract total", () => {
    expect(reduce([1, 2, 3, 4], subtraction, 0)).toBe(-10);
  });
});
