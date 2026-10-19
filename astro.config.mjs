// The Handbook — ADR-0047 pilot (ADRs4AI HQ docs/adr/0047, all QSTs ruled).
// Base: Astro Starlight. Engraved constraint (QST-DOCS-BASE ANS): custom UI is
// Vue and/or Vue-with-scoped-CSS ONLY — no React, no Tailwind (enforced by
// scripts/constraint-check.mjs, first step of `npm run build`). The theme
// package (quire docket, Mint №97) starts life as src/styles/quire.css and
// extracts to its own kintsugi-tended package when site #2 exists.
// Identity facts (site/base/title/summary/repo) live in site.config.mjs —
// one source, three consumers; edit them THERE.
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vue from '@astrojs/vue';
import SITE from './site.config.mjs';

export default defineConfig({
  site: SITE.site,
  base: SITE.base,
  integrations: [
    starlight({
      title: SITE.title,
      description: SITE.summary,
      customCss: ['./src/styles/quire.css'],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/ADRs4AI' },
      ],
      sidebar: [
        { label: 'Start here', slug: 'start-here' },
        { label: 'The marks', slug: 'the-marks' },
      ],
      editLink: {
        baseUrl: `${SITE.repo}/edit/main/`,
      },
    }),
    vue(),
  ],
});
