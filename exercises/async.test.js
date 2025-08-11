import { afterEach, beforeEach, describe, expect, test, vitest } from "vitest";
import { testMe } from "./async";

describe("challenge 1", () => {
  let logSpy;
  beforeEach(() => {
    vitest.useFakeTimers();
    logSpy = vitest.spyOn(console, "log");
    vitest.spyOn(global, "setTimeout");
  });
  afterEach(() => {
    vitest.useRealTimers();
    logSpy.mockRestore();
  });

  test("Log Partnah first then Howdy", () => {
    testMe();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 0);
  });
});
