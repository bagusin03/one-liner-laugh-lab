// One-liner entry for make.fun "One-Liner Laugh Lab".
// Writes exactly one funny line to /output/entry.txt: the excuse a robot
// vacuum gives after eating a sock.
// Fully offline and deterministic: no network, no clock, no randomness,
// no environment reads. The line is a fixed string literal below.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "In my defense, the sock entered my dustbin without a warrant \u2014 so I ate the evidence.";

// Runtime guard: enforce the sealed gate (1-200 chars, one line, not only
// whitespace) before writing, so a bad edit can never ship an invalid file.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error("entry line violates the 1-200 character single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
