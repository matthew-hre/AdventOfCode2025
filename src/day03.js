import { Template } from "./template.js";

export class Day03 extends Template {
  constructor(fileLocation = null) {
    super(3, fileLocation);
  }

  parseData(rawData) {
    return rawData
      .trim()
      .split("\n")
      .map((line) => line.split("").map((c) => parseInt(c)));
  }

  select(bank, needed) {
    const len = bank.length;
    const result = [];
    let start = 0;

    for (let i = 0; i < needed; i++) {
      const remaining = needed - i - 1;
      const maxPos = len - remaining - 1;

      let maxDigit = -1;
      let maxIdx = -1;
      for (let j = start; j <= maxPos; j++) {
        const digit = bank[j];
        if (digit > maxDigit) {
          maxDigit = digit;
          maxIdx = j;
        }
      }

      result.push(maxDigit);
      start = maxIdx + 1;
    }

    return parseInt(result.join(""));
  }

  part1() {
    let total = 0;

    for (const bank of this.data) {
      total += this.select(bank, 2);
    }

    return total;
  }

  part2() {
    let total = 0;

    for (const bank of this.data) {
      total += this.select(bank, 12);
    }

    return total;
  }
}
