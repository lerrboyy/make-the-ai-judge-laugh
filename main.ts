// Make the AI Judge Laugh — entry program.
//
// Writes one office joke, one line, under 200 characters, to
// /output/entry.txt. The joke is chosen in the design spec:
// a true, tight office scene (IT gatekeeping a second monitor) whose
// punch lands on the very last word.
//
// The gate only accepts UTF-8 text of 1-200 characters, not only
// whitespace, so the program validates the line before writing it
// and verifies the file afterwards. No network, no secrets, no
// dependencies. Runs on Node 22.18+ as plain TypeScript.

import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE: string =
  "I asked IT for a second monitor and got a lecture on minimalism from a man with three.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");
const MAX_CHARS = 200;

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function validateJoke(joke: string): void {
  if (joke.length === 0) fail("joke is empty");
  if (joke.length > MAX_CHARS) {
    fail(`joke is ${joke.length} characters, over the ${MAX_CHARS} limit`);
  }
  if (joke.trim().length === 0) fail("joke is only whitespace");
  if (joke.includes("\n") || joke.includes("\r")) {
    fail("joke must be a single line");
  }
}

// Clear only the CONTENTS of /output. Never remove /output itself:
// it is the grader's mount point and deleting it fails the run.
function clearOutputDir(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  for (const entry of readdirSync(OUTPUT_DIR)) {
    rmSync(join(OUTPUT_DIR, entry), { recursive: true, force: true });
  }
}

function main(): void {
  validateJoke(JOKE);
  clearOutputDir();
  // No trailing newline: the file must be byte-identical to the joke.
  writeFileSync(OUTPUT_FILE, JOKE, "utf8");
  // Read it back and prove the file is exactly the joke: same bytes,
  // same length, still one line. Anything else is a failed run.
  const written: string = readFileSync(OUTPUT_FILE, "utf8");
  if (written !== JOKE) {
    fail("verification failed: /output/entry.txt does not match the joke");
  }
  if (written.length > MAX_CHARS) {
    fail(`verification failed: output is ${written.length} characters`);
  }
  console.log(`wrote ${JOKE.length} characters to ${OUTPUT_FILE}`);
}

main();
