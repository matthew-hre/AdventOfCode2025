import "dotenv/config.js";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function solveDays(dayNumber = null) {
  const srcDir = path.join(__dirname, "src");
  const files = fs.readdirSync(srcDir).filter(f => f.match(/^day\d+\.js$/));

  let daysToSolve = files;
  if (dayNumber !== null) {
    const dayFile = `day${String(dayNumber).padStart(2, "0")}.js`;
    if (!files.includes(dayFile)) {
      console.error(`Day ${dayNumber} not found`);
      process.exit(1);
    }
    daysToSolve = [dayFile];
  }

  daysToSolve.sort();

  for (const file of daysToSolve) {
    const dayNum = parseInt(file.match(/\d+/)[0], 10);
    const className = `Day${String(dayNum).padStart(2, "0")}`;
    const module = await import(`./src/${file}`);
    const DayClass = module[className];
    const day = new DayClass();
    await day.ensureLoaded();
    console.log(day.toString());
    console.log();
  }
}

const arg = process.argv[2];
const dayNumber = arg ? parseInt(arg, 10) : null;
solveDays(dayNumber).catch(console.error);
