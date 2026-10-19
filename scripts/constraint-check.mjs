// scripts/constraint-check.mjs — the engraved constraint, enforced where drift happens
// (ADR-0047 QST-DOCS-BASE ANS: custom UI is Vue / Vue-with-scoped-CSS ONLY —
// no React, no Tailwind). Runs FIRST in `npm run build`; the same file runs in
// CI, so there is one derivation of the law and its teaching. Stencil row in
// docsite-template-A: every constellation site inherits it.
import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const BANNED_DEPS = /react|tailwind/i;
const BANNED_IMPORTS = /from\s+['"](react|react-dom|@astrojs\/react|tailwindcss|@tailwind)/;

const pkg = JSON.parse(await readFile('package.json', 'utf8'));
const deps = { ...(pkg.dependencies ?? {}), ...(pkg.devDependencies ?? {}) };
const badDeps = Object.keys(deps).filter((d) => BANNED_DEPS.test(d));

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (/\.(astro|vue|ts|mjs|js|jsx|tsx|mdx)$/.test(e.name)) yield p;
  }
}
const badFiles = [];
for await (const f of walk('src'))
  if (BANNED_IMPORTS.test(await readFile(f, 'utf8'))) badFiles.push(f);

if (badDeps.length || badFiles.length) {
  console.error(
    '❌ The series constraint (HQ ADR-0047, engraved): custom UI is Vue/scoped-CSS ONLY — no React, no Tailwind.'
  );
  for (const d of badDeps) console.error(`   package.json dependency: ${d}`);
  for (const f of badFiles) console.error(`   banned import in: ${f}`);
  console.error(
    '   If this site truly needs an exception, that is a series ruling (HQ ADR-0047), not a dependency add.'
  );
  process.exit(1);
}
console.log('✓ constraint-check: Vue-only holds');
