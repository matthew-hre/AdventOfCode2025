import { describe, it, expect } from "vitest";
import { Day04 } from "./day04.js";

describe("Day 04", () => {
  const input = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.
`;

  it("part1 with example input", () => {
    const day = new Day04();
    day.data = day.parseData(input);
    expect(day.part1()).toBe(13);
  });

  it("part2 with example input", () => {
    const day = new Day04();
    day.data = day.parseData(input);
    expect(day.part2()).toBe(43);
  });
});
