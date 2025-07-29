import { describe, expect, test } from "vitest";
import { addS, addTwo, map } from "./closures";

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
