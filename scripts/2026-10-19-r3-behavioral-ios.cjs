// 2026-10-19 — Pharos 5: round-3 rework behavioral pass on iOS viewport (390×844, live site).
// Proves the It-6 fixes: real conduits (type→write-through→reload-survives), theme toggle
// returns from night, ink-picker re-inks papers, export returns the typed meditation.
const { chromium } = require('/Users/jlumbroso/Programming/caring-form/node_modules/playwright');
const OUT = '/private/tmp/claude-501/-Users-jlumbroso-Programming-adrs4ai-initial-meta-repository/a0217083-9073-4cc4-886a-40a223315137/scratchpad';
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 390, height: 844 }, acceptDownloads: true });
  const log = (k, v) => console.log(k + ': ' + v);
  await p.goto('https://adrs.systems/handbook/etude/round3.html'); await p.waitForTimeout(800);
  await p.fill('textarea[data-med="ink-2-press-blue"]', 'test meditation — survives reload?');
  await p.waitForTimeout(300);
  log('save-chip', await p.textContent('#saveState'));
  await p.click('#themeBtn'); await p.waitForTimeout(200);
  log('night-on', await p.evaluate(() => document.documentElement.getAttribute('data-theme')));
  await p.click('#themeBtn'); await p.waitForTimeout(200);
  log('night-off-returns', await p.evaluate(() => document.documentElement.getAttribute('data-theme')) === null);
  await p.click('.chip[data-ink="#a33b2e"]'); await p.waitForTimeout(200);
  log('papers-reinked-madder', await p.evaluate(() => document.querySelector('#grounds .g').style.getPropertyValue('--ga')));
  await p.reload(); await p.waitForTimeout(800);
  log('reload-survives', await p.inputValue('textarea[data-med="ink-2-press-blue"]'));
  log('restored-chip', await p.textContent('#saveState'));
  const dl = p.waitForEvent('download', { timeout: 6000 });
  await p.click('#exportBtn');
  const d = await dl; const fs = require('fs');
  const payload = JSON.parse(fs.readFileSync(await d.path(), 'utf8'));
  log('export-carries-meditation', payload.meditations['ink-2-press-blue']);
  await p.evaluate(() => window.scrollTo(0, 0));
  await p.screenshot({ path: OUT + '/r3-ios-day.png' });
  await p.click('#themeBtn'); await p.waitForTimeout(300);
  await p.evaluate(() => document.getElementById('grounds').scrollIntoView());
  await p.screenshot({ path: OUT + '/r3-ios-night-grounds.png' });
  // clean the test meditation so his sitting starts blank
  await p.evaluate(() => localStorage.removeItem('handbook-etude-r3-v1'));
  await b.close(); console.log('R3-IOS-DONE');
})();
// OUTCOME (2026-10-19): ALL PASS — save chip live-timestamps, night toggles BOTH ways,
// papers re-ink on chip pick, meditation survives reload w/ restored-1 chip, export
// payload carries it. Test state cleaned so the founder's sitting starts blank.
