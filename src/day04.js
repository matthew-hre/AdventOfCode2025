import { Template } from "./template.js";

export class Day04 extends Template {
  constructor(fileLocation = null) {
    super(4, fileLocation);
  }

  parseData(rawData) {
    return rawData.trim().split("\n").map(row => row.split(''));
  }

  directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  part1() {
    const grid = this.data;
    const rows = grid.length;
    const cols = grid[0].length;
    let accessible = 0;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (grid[i][j] === '@') {
          let adjacentRolls = 0;
          for (const [di, dj] of this.directions) {
            const ni = i + di;
            const nj = j + dj;
            if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
              if (grid[ni][nj] === '@') {
                adjacentRolls++;
              }
            }
          }
          if (adjacentRolls < 4) {
            accessible++;
          }
        }
      }
    }

    return accessible;
  }

  part2() {
    const grid = this.data;
    const rows = grid.length;
    const cols = grid[0].length;
    let totalRemoved = 0;

    let removed = true;
    while (removed) {
      removed = false;
      const toRemove = [];

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          if (grid[i][j] === '@') {
            let adjacentRolls = 0;
            for (const [di, dj] of this.directions) {
              const ni = i + di;
              const nj = j + dj;
              if (ni >= 0 && ni < rows && nj >= 0 && nj < cols) {
                if (grid[ni][nj] === '@') {
                  adjacentRolls++;
                }
              }
            }
            if (adjacentRolls < 4) {
              toRemove.push([i, j]);
            }
          }
        }
      }

      if (toRemove.length > 0) {
        removed = true;
        for (const [i, j] of toRemove) {
          grid[i][j] = '.';
          totalRemoved++;
        }
      }
    }

    return totalRemoved;
  }
}
