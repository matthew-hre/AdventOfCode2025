import { describe, it, expect } from "vitest";
import { Day03 } from "./day03.js";

describe("Day 01", () => {
  const input = `987654321111111
811111111111119
234234234234278
818181911112111
`;

  it("part1 with example input", () => {
    const day = new Day03();
    day.data = day.parseData(input);
    expect(day.part1()).toBe(357);
  });

  it("part2 with example input", () => {
    const day = new Day03();
    day.data = day.parseData(input);
    expect(day.part2()).toBe(3121910778619);
  });
});
