import { describe, test, expect, beforeEach, vitest, afterEach } from "vitest";
import { createFunction, createFunctionPrinter, outer } from "./closures";

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
