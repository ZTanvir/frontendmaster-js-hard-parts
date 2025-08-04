import { describe, test, expect, beforeEach, vitest, afterEach } from "vitest";
import {
  createFunction,
  createFunctionPrinter,
  outer,
  addByX,
  once,
  after,
} from "./closures";

describe("Challenge 1", () => {
  let logSpy;
  beforeEach(() => {
    logSpy = vitest.spyOn(console, "log");
  });
  afterEach(() => {
    logSpy.mockRestore();
  });
  test("print hello", () => {
    const hellofun = createFunction();
    hellofun();
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toBeCalledWith("hello");
    expect(logSpy).toBeCalledTimes(1);
  });
});

describe("Challenge 2", () => {
  let logSpy;
  beforeEach(() => {
    logSpy = vitest.spyOn(console, "log");
  });
  afterEach(() => {
    logSpy.mockRestore();
  });
  test("print input text", () => {
    const printFunc = createFunctionPrinter("input");
    printFunc();
    expect(logSpy).toHaveBeenCalled();
    expect(logSpy).toBeCalledWith("input");
    expect(logSpy).toBeCalledTimes(1);
  });
});

describe("Challenge 3", () => {
  test("counter has different value when call mulitple times", () => {
    const counterA = outer();
    const counterB = outer();

    counterA(); // ➞ "counter 1"
    counterA(); // ➞ "counter 2"

    expect(counterA()).toBe(3);
    expect(counterB()).toBe(1);
  });
});

describe("Challenge 4", () => {
  const addByTwo = addByX(2);

  test("add x with inner function input", () => {
    expect(addByTwo(1)).toBe(3);
    expect(addByTwo(5)).toBe(7);
  });
});

describe("Challenge 5", () => {
  const addByTwo = addByX(2);
  const onceAddByTwo = once(addByTwo);

  test("callback function will run.Once return 6", () => {
    expect(onceAddByTwo(4)).toBe(6);
  });

  test("callback function will not.Once return 100", () => {
    expect(onceAddByTwo(100)).toBe(6);
  });
  test("callback function will not run.Once return 9001", () => {
    expect(onceAddByTwo(9001)).toBe(6);
  });
});

describe("Challenge 6", () => {
  const afterCalled = after(3, () => console.log("hello"));
  let logSpy;
  beforeEach(() => {
    logSpy = vitest.spyOn(console, "log");
  });
  afterEach(() => {
    logSpy.mockRestore();
  });

  test("No output", () => {
    afterCalled();
    expect(logSpy).not.toBeCalled();
  });
  test("No output", () => {
    afterCalled();
    expect(logSpy).not.toBeCalled();
  });
  test("hello", () => {
    afterCalled();
    expect(logSpy).toBeCalled();
    expect(logSpy).toBeCalledWith("hello");
    expect(logSpy).toBeCalledTimes(1);
  });
  test("hello", () => {
    afterCalled();
    expect(logSpy).toBeCalled();
    expect(logSpy).toBeCalledWith("hello");
    expect(logSpy).toBeCalledTimes(1);
  });
});
