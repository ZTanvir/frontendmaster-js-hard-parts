import { describe, test, expect, beforeEach, vitest, afterEach } from "vitest";
import { createFunction } from "./closures";

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
