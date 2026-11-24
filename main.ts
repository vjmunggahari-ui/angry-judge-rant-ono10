// Angry Judge: The Short Rant Contest — entry C09 (231 chars).
// Writes the winning rant to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: UTF-8 text of 1-400 characters, not only white space.
import { createHash } from "node:crypto";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Whoever designed the self-checkout machine gave it the voice of a disappointed teacher. \"Unexpected item in the bagging area.\" The item is a banana. I scanned the banana. The machine and I both know it is a banana. Yet here we are.";

const EXPECTED_SHA256 =
  "c287aeb21f23a0638e54290de084e6fd583554e5ba7acd6b384a4d3116a29cac";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read-back self-check: exact match, 1-400 char gate, non-whitespace,
// pinned sha256, and the entry carries the bus/apology turn.
import { readFileSync } from "node:fs";
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the pinned entry text");
}
if (written.length < 1 || written.length > 400) {
  throw new Error(`entry length ${written.length} outside the 1-400 gate`);
}
if (written.trim().length === 0) {
  throw new Error("entry is only white space");
}
if (createHash("sha256").update(written, "utf8").digest("hex") !== EXPECTED_SHA256) {
  throw new Error(`entry sha256 mismatch, expected ${EXPECTED_SHA256}`);
}
if (!written.includes("disappointed teacher")) {
  throw new Error("entry is missing the bus/apology turn");
}
console.log(`wrote ${outPath} (${ENTRY.length} chars, sha256 ${createHash("sha256").update(ENTRY, "utf8").digest("hex")})`);
