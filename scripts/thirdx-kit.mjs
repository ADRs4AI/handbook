// thirdx-kit — the conformance kit's build step (ADR-0047 §Decision 3):
// model-facing docs as a first-class render. After `astro build`:
//   1. Every source page gets a markdown twin at its route: /handbook/<slug>.md
//      ("one name, two renders" — the pattern-001 discipline).
//   2. /handbook/llms.txt — name-slot + summary + the page list with .md links.
// Estate-owned (no plugin dependency): the kit propagates with the template
// via kintsugi, and its behavior is this file, readable in one screen.
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, relative, dirname } from 'node:path';

const SRC = 'src/content/docs';
const DIST = 'dist';
const BASE = '/handbook';
const SITE = 'https://adrs.systems';
const TITLE = 'The Handbook';
const SUMMARY =
  'The ADRs4AI textbook: deliberative programming — decisions as first-class, durable artifacts of human-AI collaboration. Each page may carry born_of: the public confusion that birthed it.';

async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (/\.(md|mdx)$/.test(e.name)) yield p;
  }
}

const rows = [];
for await (const file of walk(SRC)) {
  const rel = relative(SRC, file).replace(/\.(md|mdx)$/, '');
  const route = rel === 'index' ? '' : rel;
  const twin = join(DIST, route === '' ? 'index.md' : `${route}.md`);
  const raw = await readFile(file, 'utf8');
  await mkdir(dirname(twin), { recursive: true });
  await writeFile(twin, raw);
  const title = raw.match(/^title:\s*(.+)$/m)?.[1]?.trim() ?? rel;
  rows.push({ title, route, twin: route === '' ? 'index.md' : `${route}.md` });
}

const llms = [
  `# ${TITLE}`,
  '',
  `> ${SUMMARY}`,
  '',
  '## Pages (each link is the page as markdown — the html twin lives at the same path without .md)',
  '',
  ...rows.map((r) => `- [${r.title}](${SITE}${BASE}/${r.twin})`),
  '',
].join('\n');
await writeFile(join(DIST, 'llms.txt'), llms);
console.log(`thirdx-kit: ${rows.length} md twins + llms.txt`);
