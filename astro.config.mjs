// The Handbook — ADR-0047 pilot (ADRs4AI HQ docs/adr/0047, all QSTs ruled).
// Base: Astro Starlight. Engraved constraint (QST-DOCS-BASE ANS): custom UI is
// Vue and/or Vue-with-scoped-CSS ONLY — no React, no Tailwind. The theme
// package (quire docket, Mint №97) starts life as src/styles/quire.css and
// extracts to its own kintsugi-tended package when site #2 exists.
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vue from '@astrojs/vue';

export default defineConfig({
  site: 'https://adrs.systems',
  base: '/handbook',
  integrations: [
    starlight({
      title: 'The Handbook',
      description:
        'The ADRs4AI textbook: deliberative programming, explained the way real confusions asked for it.',
      customCss: ['./src/styles/quire.css'],
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/ADRs4AI' },
      ],
      sidebar: [
        { label: 'Start here', slug: 'start-here' },
        { label: 'The marks', slug: 'the-marks' },
      ],
      editLink: {
        // Repo URL lands when QST-HANDBOOK-GO births it; placeholder keeps the
        // affordance visible in dev and is replaced before first deploy.
        baseUrl: 'https://github.com/ADRs4AI/handbook/edit/main/',
      },
    }),
    vue(),
  ],
});
