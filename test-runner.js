import { spawn } from "child_process";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function runVitest(args) {
  return new Promise((resolve, reject) => {
    const process = spawn("pnpm", ["vitest", ...args], {
      stdio: "inherit",
      cwd: __dirname,
    });

    process.on("close", (code) => {
      if (code === 0 || code === 130) {
        // 0 = normal exit, 130 = SIGINT (Ctrl+C from watch mode)
        resolve();
      } else {
        reject(new Error(`Vitest exited with code ${code}`));
      }
    });

    process.on("error", reject);
  });
}

async function runTests(dayNumber = null, watch = false) {
  const srcDir = path.join(__dirname, "src");
  const files = fs.readdirSync(srcDir).filter(f => f.match(/^day\d+\.test\.js$/));

  const args = watch ? ["--watch"] : ["run"];

  if (dayNumber !== null) {
    const testFile = path.join("src", `day${String(dayNumber).padStart(2, "0")}.test.js`);
    if (!fs.existsSync(path.join(__dirname, testFile))) {
      console.error(`Test for day ${dayNumber} not found`);
      process.exit(1);
    }
    args.push(testFile);
  } else {
    files.sort().forEach(file => {
      args.push(path.join("src", file));
    });
  }

  await runVitest(args);
}

const arg1 = process.argv[2];
const arg2 = process.argv[3];

let dayNumber = null;
let watch = false;

if (arg1 === "--watch") {
  watch = true;
} else if (arg1) {
  dayNumber = parseInt(arg1, 10);
  if (arg2 === "--watch") {
    watch = true;
  }
}

runTests(dayNumber, watch).catch(console.error);
