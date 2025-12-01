import { describe, it, expect } from "vitest";
import { Day01 } from "./day01.js";

describe("Day 01", () => {
  const input = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`;

  it("part1 with example input", () => {
    const day = new Day01();
    day.data = day.parseData(input);
    expect(day.part1()).toBe(3);
  });

  it("part2 with example input", () => {
    const day = new Day01();
    day.data = day.parseData(input);
    expect(day.part2()).toBe(6);
  });
});
