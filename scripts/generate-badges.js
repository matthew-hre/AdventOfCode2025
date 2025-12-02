import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, "..");
const srcDir = path.join(rootDir, "src");

// Count days (day01.js, day02.js, etc.)
const dayFiles = fs.readdirSync(srcDir).filter(f => f.match(/^day\d+\.js$/));
const daysCompleted = dayFiles.length;

// Count test files
const testFiles = fs.readdirSync(srcDir).filter(f => f.match(/^day\d+\.test\.js$/));
const testsCount = testFiles.length;

console.log(`Days completed: ${daysCompleted}`);
console.log(`Test files: ${testsCount}`);

// Output as JSON for GitHub Actions
console.log(JSON.stringify({ daysCompleted, testsCount }));
