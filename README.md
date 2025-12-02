# AdventOfCode2025

[![Tests](https://github.com/matthew-hre/AdventOfCode2025/actions/workflows/test.yml/badge.svg)](https://github.com/matthew-hre/AdventOfCode2025/actions)
[![Days Completed](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fmatthew-hre%2FAdventOfCode2025%2Frefs%2Fheads%2Fmain%2F.github%2Fbadge-data.json&query=$.daysCompleted&suffix=%2F12&label=Days%20Completed&color=blue)](https://github.com/matthew-hre/AdventOfCode2025)
[![Test Files](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fmatthew-hre%2FAdventOfCode2025%2Frefs%2Fheads%2Fmain%2F.github%2Fbadge-data.json&query=$.testsCount&label=Test%20Files&color=green)](https://github.com/matthew-hre/AdventOfCode2025)

My half-baked solutions repo for Advent of Code 2025 (JavaScript, sorry).

## Setup

### Grab your session (Firefox)

1. Open `https://adventofcode.com` in Firefox and sign in.
2. Press `F12` to open Developer Tools and choose the **Storage** tab.
3. Under **Cookies**, select `https://adventofcode.com` and find the cookie named `session`.
4. Copy the cookie value.
5. Add it to a `.env` file in the root of this project as `COOKIE=your_cookie_value`.

### Commands

- **Run tests:** `pnpm test:run`
- **Watch tests:** `pnpm test`
- **Run all days:** `pnpm solve`
