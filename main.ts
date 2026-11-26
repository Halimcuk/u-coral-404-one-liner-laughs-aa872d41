import { mkdirSync, writeFileSync } from "node:fs";

// One original line: a day off request answered with the very thing it tried to escape.
const line = "I asked my calendar for a day off, and it booked a meeting to discuss it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
