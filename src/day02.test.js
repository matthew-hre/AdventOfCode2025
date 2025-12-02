import { describe, it, expect } from "vitest";
import { Day02 } from "./day02.js";

describe("Day 02", () => {
  const input = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`;

  it("part1 with example input", () => {
    const day = new Day02();
    day.data = day.parseData(input);
    expect(day.part1()).toBe(1227775554);
  });

  it("part2 with example input", () => {
    const day = new Day02();
    day.data = day.parseData(input);
    expect(day.part2()).toBe(4174379265);
  });
});
