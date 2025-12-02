import { Template } from "./template.js";

export class Day02 extends Template {
  constructor(fileLocation = null) {
    super(2, fileLocation);
  }

  parseData(rawData) {
    const rangesStr = rawData.trim();
    return rangesStr.split(",").map((range) => {
      const [start, end] = range.trim().split("-").map(Number);
      return { start, end };
    });
  }

  part1() {
    const isInvalidId = (num) => {
      const str = num.toString();
      const len = str.length;

      if (len % 2 !== 0) return false;

      const half = len / 2;
      const firstHalf = str.substring(0, half);
      const secondHalf = str.substring(half);

      return firstHalf === secondHalf;
    }

    let totalSum = 0;

    for (const range of this.data) {
      for (let id = range.start; id <= range.end; id++) {
        if (isInvalidId(id)) {
          totalSum += id;
        }
      }
    }

    return totalSum;
  }

  part2() {
    const isInvalidId = (num) => {
      const str = num.toString();
      const len = str.length;

      for (let patternLen = 1; patternLen <= len / 2; patternLen++) {
        if (len % patternLen !== 0) continue;

        const pattern = str.substring(0, patternLen);
        const repetitions = len / patternLen;

        if (pattern.repeat(repetitions) === str) {
          return true;
        }
      }

      return false;
    }

    let totalSum = 0;

    for (const range of this.data) {
      for (let id = range.start; id <= range.end; id++) {
        if (isInvalidId(id)) {
          totalSum += id;
        }
      }
    }

    return totalSum;
  }
}
