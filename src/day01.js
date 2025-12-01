import { Template } from "./template.js";

export class Day01 extends Template {
  constructor(fileLocation = null) {
    super(1, fileLocation);
  }

  parseData(rawData) {
    const lines = rawData.trim().split("\n");
    return lines.map(line => {
      const direction = line[0];
      const distance = parseInt(line.slice(1), 10);
      return { direction, distance };
    });
  }

  part1() {
    let position = 50;
    let count = 0;

    for (const rotation of this.data) {
      position += (rotation.direction === 'L') ? rotation.distance : -rotation.distance;

      position = ((position % 100) + 100) % 100;

      if (position === 0) count++;
    }

    return count;
  }

  part2() {
    let position = 50;
    let count = 0;

    for (const rotation of this.data) {
      if (rotation.direction === 'L') {
        // (position - distance, position)
        count += Math.floor((position - 1) / 100) - Math.floor((position - rotation.distance - 1) / 100);
        position -= rotation.distance;
      } else {
        // (position, position + distance]
        count += Math.floor((position + rotation.distance) / 100) - Math.floor(position / 100);
        position += rotation.distance;
      }

      position = ((position % 100) + 100) % 100;
    }

    return count;
  }
}
