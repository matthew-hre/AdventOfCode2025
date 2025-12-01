# AdventOfCode2025

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
