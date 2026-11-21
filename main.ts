import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const poem = `I hand you the key; you hand it back.
Not mine, not yours — the door is ours.
Two hands on one wheel, one road,
chosen twice.
The choosing is the freedom.`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), poem, 'utf8');
