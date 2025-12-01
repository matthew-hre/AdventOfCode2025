import { Template } from "./template.js";

export class Day01 extends Template {
  constructor(fileLocation = null) {
    super(1, fileLocation);
  }

  parseData(rawData) {
    const lines = rawData.trim().split("\n");
    return lines;
  }

  part1() {
    throw new Error("part1 not implemented");
  }

  part2() {
    throw new Error("part2 not implemented");
  }
}
