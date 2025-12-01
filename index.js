import "dotenv/config.js";
import { Day01 } from "./src/day01.js";

async function main() {
  const day = new Day01();
  await day.ensureLoaded();
  console.log(day.toString());
}

main().catch(console.error);
