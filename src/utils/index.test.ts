import { describe, expect, test } from "vitest";
import { sum } from ".";

describe("sum", () => {
  test("should return a sum of the arguments", () => {
    const result = sum(1, 2);

    expect(result).toBe(3);
  });
});
