import { describe, it, expect } from "vitest";
import { Day01 } from "./day01.js";

describe("Day 01", () => {
  it.each([["1", 2]])(
    "part1 with example input",
    (input, expected) => {
      const day = new Day01();
      day.setData(day.parseData(input));
      expect(input * 2).toBe(expected);
    }
  );
});
