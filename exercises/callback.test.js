import { describe, expect, test } from "vitest";
import {
  addS,
  addTwo,
  map,
  foreach,
  mapWith,
  reduce,
  intersection,
  union,
  objOfMatched,
  multiMap,
  objectFilter,
} from "./callback";

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

//   test("make array items lowercase", () => {
//     expect(foreach(["A", "B", "c"], toLowerCase)).toEqual(["a", "b", "c"]);
//   });
// });
describe("extension 1", () => {
  const toLowerCase = (input) => input.toLowerCase();

  test("make array items lowercase", () => {
    expect(mapWith(["A", "B", "c"], toLowerCase)).toEqual(["a", "b", "c"]);
  });
  test("make array not uppercase", () => {
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

describe("extension 3", () => {
  test("intersection ", () => {
    expect(
      intersection([
        [5, 10, 15],
        [15, 5, 7],
        [15, 5],
      ])
    ).toEqual([5, 15]);
  });
  test("intersection not found ", () => {
    expect(
      intersection([
        [5, 10, 15],
        [151, 45, 7],
        [157, 75],
      ])
    ).toEqual([]);
  });

  test("intersection not found ", () => {
    expect(
      intersection([
        [5, 10, 15],
        [5, 10, 7],
        [157, 75],
      ])
    ).toEqual([]);
  });
});

describe("extension 4 union", () => {
  test("expect [1,2,3,4]", () => {
    expect(union([[1, 2], [2, 3], [4]])).toEqual([1, 2, 3, 4]);
  });
  test("expect [1,2]", () => {
    expect(
      union([
        [1, 2],
        [1, 2],
        [1, 2],
      ])
    ).toEqual([1, 2]);
  });

  test("expect [1,2]", () => {
    expect(union([[1, 2], [], []])).toEqual([1, 2]);
  });

  test("expect [1,2,3,4,5,6]", () => {
    expect(
      union([
        [1, 2],
        [3, 4],
        [5, 6],
      ])
    ).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe("extension 5 obj matched", () => {
  const convertUppercase = (item) => {
    return item.toUpperCase();
  };

  const convertLowerCase = (item) => {
    return item.toLowerCase();
  };

  test("object matched when callback is uppercase", () => {
    expect(
      objOfMatched(["hi", "bye"], ["HI", "BYE"], convertUppercase)
    ).toEqual({
      hi: "HI",
      bye: "BYE",
    });
  });

  test("object matched when callback is lowercase", () => {
    expect(
      objOfMatched(["hi", "bye"], ["HI", "BYE"], convertLowerCase)
    ).toEqual({
      hi: "HI",
      bye: "BYE",
    });
  });
});

describe("extension 6 multiMap", () => {
  test("object matched with callback conditions", () => {
    expect(
      multiMap(["food"], [(str) => str.toUpperCase(), (str) => str + str])
    ).toEqual({ food: ["FOOD", "foodfood"] });
  });
});

describe("extension 7 object filter", () => {
  test("return object based on matched value between callback and obj value", () => {
    expect(
      objectFilter(
        {
          London: "LONDON",
          Paris: "PARIS",
          Tokyo: "Japan",
        },
        (city) => city.toUpperCase()
      )
    ).toEqual({
      London: "LONDON",
      Paris: "PARIS",
    });
  });
});
