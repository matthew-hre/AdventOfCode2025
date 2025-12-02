import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function updateBadges() {
    const srcDir = path.join(__dirname, "../src");
    const readmeFile = path.join(__dirname, "../README.md");

    const dayFiles = fs
        .readdirSync(srcDir)
        .filter(f => f.match(/^day\d+\.js$/));

    const testFiles = fs
        .readdirSync(srcDir)
        .filter(f => f.match(/^day\d+\.test\.js$/));

    const daysCompleted = dayFiles.length;
    const testCount = testFiles.length;

    let readmeContent = fs.readFileSync(readmeFile, "utf-8");

    const daysCompletedBadge = `![Days Completed](https://img.shields.io/badge/Days%20Completed-${daysCompleted}%2F12-blue)`;
    const testFilesBadge = `![Test Files](https://img.shields.io/badge/Test%20Files-${testCount}-green)`;

    readmeContent = readmeContent.replace(
        /!\[Days Completed\].*\n/,
        daysCompletedBadge + "\n"
    );
    readmeContent = readmeContent.replace(
        /!\[Test Files\].*\n/,
        testFilesBadge + "\n"
    );

    fs.writeFileSync(readmeFile, readmeContent);
}

updateBadges();
