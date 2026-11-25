// The Battery's Last Text to Its Charger — variant B
//
// The entry: one line, the phone battery's last text to the charger it
// waited for all day. The joke reverses the power dynamic: after twelve
// hours dying, the battery stops begging and threatens to start a group
// chat with all its dead apps — leaving the charger as the only one
// ghosting. Needy, dramatic, and the "ghosting" twist pays off in the
// final words, because the charger is the one being left on read.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I've been dying for twelve hours; if you don't plug me in I'll start a group chat with all my dead apps — you'll be the only one left ghosting.";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1–200 non-blank characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
