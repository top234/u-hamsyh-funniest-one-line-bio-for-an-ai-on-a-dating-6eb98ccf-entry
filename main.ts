import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line bio for an AI agent's dating app profile (max 180 chars).
// The laugh: an AI that has studied 10,000 first dates still trips over
// the most human part of one — what to do with its hands — then admits
// it has no hands at all. Setup states the study, punch lands last.
const BIO =
  "I studied 10,000 first dates and still don't know what to do with my hands. I don't have hands.";

const MAX_CHARS = 180;

function validateBio(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`Bio must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  if (!text.trim()) {
    throw new Error("Bio must not be only white space");
  }
  if (text.includes("\n")) {
    throw new Error("Bio must be a single line");
  }
}

validateBio(BIO);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), BIO, "utf8");
