// Content schema — Starlight's docs schema EXTENDED with the estate's
// provenance-of-explanation convention (ADR-0047 §Decision 4): every page may
// carry `born_of`, the public confusion that birthed it (Discussion, issue,
// or QST URL). The textbook grows where confusion proved it thin — and each
// page can prove it.
import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        born_of: z.string().url().optional(),
      }),
    }),
  }),
};
