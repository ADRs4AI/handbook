// 2026-10-19 — Pharos 5: the look-once pass for the Handbook pilot (ADR-0047).
// Two screenshots (splash + the-marks w/ Vue island), light + one dark, then done.
const { chromium } = require('/Users/jlumbroso/Programming/caring-form/node_modules/playwright');
const OUT = process.env.OUT || '/private/tmp/claude-501/-Users-jlumbroso-Programming-adrs4ai-initial-meta-repository/a0217083-9073-4cc4-886a-40a223315137/scratchpad/handbook-shots';
(async () => {
  const fs = require('fs'); fs.mkdirSync(OUT, { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1280, height: 860 } });
  for (let i = 0; i < 20; i++) { // wait for preview server
    try { await p.goto('http://localhost:4321/handbook/', { timeout: 2000 }); break; }
    catch { await new Promise(r => setTimeout(r, 500)); }
  }
  await p.screenshot({ path: OUT + '/01-splash.png' });
  await p.goto('http://localhost:4321/handbook/the-marks/');
  await p.waitForTimeout(400); // client:visible island hydration
  await p.screenshot({ path: OUT + '/02-the-marks.png' });
  await p.emulateMedia({ colorScheme: 'dark' });
  await p.screenshot({ path: OUT + '/03-the-marks-dark.png' });
  const legend = await p.evaluate(() => document.querySelectorAll('.marks li').length);
  console.log('vue-island-items:', legend);
  const mdTwin = await p.evaluate(async () => (await fetch('/handbook/start-here.md')).status);
  console.log('md-twin-served:', mdTwin);
  await b.close(); console.log('LOOK-DONE');
})();
// OUTCOME (2026-10-19, Pharos 5): PASS — splash + marks light, marks dark shot; Vue island hydrated (3 items), md twin served 200 over HTTP, born_of colophon renders as quiet dashed-rule foot line. Spine reads press-grade.
