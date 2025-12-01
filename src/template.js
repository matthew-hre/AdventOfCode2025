import axios from "axios";
import fs from "fs";
import pc from "picocolors";
import { COOKIE } from "./constants.js";

const cache = new Map();
const session = axios.create({
  headers: {
    Cookie: `session=${COOKIE}`,
  },
});

export async function getInputData(day) {
  if (cache.has(day)) return cache.get(day);

  const url = `https://adventofcode.com/2025/day/${day}/input`;
  const response = await session.get(url);
  cache.set(day, response.data);
  return response.data;
}

export class Template {
  constructor(day, fileLocation = null) {
    this.day = day;
    this.link = `https://adventofcode.com/2025/day/${day}`;
    this.isLoaded = !!fileLocation;
    this.data = null;
    if (fileLocation) {
      const rawData = fs.readFileSync(fileLocation, "utf-8");
      this.data = this.parseData(rawData);
    }
  }

  async ensureLoaded() {
    if (!this.isLoaded) {
      await this._loadInputAsync(this.day);
      this.isLoaded = true;
    }
  }

  async _loadInputAsync(day) {
    const rawData = await getInputData(day);
    this.data = this.parseData(rawData);
  }

  parseData(rawData) {
    return rawData.trim();
  }

  part1() {
    throw new Error("part1 not implemented");
  }

  part2() {
    throw new Error("part2 not implemented");
  }

  toString() {
    return `${pc.bold(`  -=-=- ${pc.green("ADVENT")} ${pc.red("OF")} ${pc.green("CODE")} ${pc.red("DAY")} ${pc.green(this.day)} -=-=-`)}
${pc.underline(pc.cyan(this.link))}

${this.getPart1Timing()}
${this.getPart2Timing()}`;
  }

  getPart1Timing() {
    try {
      const start = performance.now();
      const result = this.part1();
      const end = performance.now();
      const time = ((end - start) / 1000).toFixed(7);

      return `${pc.bold("Part One:")} ${pc.green(result)} (${pc.cyan(time)} seconds)`;
    } catch (error) {
      return `${pc.bold("Part One:")} ${pc.yellow("Not implemented")}`;
    }
  }

  getPart2Timing() {
    try {
      const start = performance.now();
      const result = this.part2();
      const end = performance.now();
      const time = ((end - start) / 1000).toFixed(7);

      return `${pc.bold("Part Two:")} ${pc.green(result)} (${pc.cyan(time)} seconds)`;
    } catch (error) {
      return `${pc.bold("Part Two:")} ${pc.yellow("Not implemented")}`;
    }
  }
}
