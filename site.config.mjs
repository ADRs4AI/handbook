// site.config.mjs — THE one source for this docsite's identity facts
// (Shipwright's F1, template-mechanics return 2026-10-19: astro.config.mjs,
// scripts/thirdx-kit.mjs, and scripts/constraint-check.mjs all consume THIS
// file; none re-declares a fact. In `docsite-template-A` this is the file
// that carries the ⟦sigils⟧ — `site` alone stays literal, the series
// constant under adrs.systems path-tenancy.)
export default {
  site: 'https://adrs.systems',
  base: '/handbook',
  title: 'The Handbook',
  summary:
    'The ADRs4AI textbook: deliberative programming, explained the way real confusions asked for it. Each page may carry born_of: the public confusion that birthed it.',
  repo: 'https://github.com/ADRs4AI/handbook',
};
