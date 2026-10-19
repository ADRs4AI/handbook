<script setup>
// The constraint's proof-of-wiring (ADR-0047: Vue + scoped CSS only) and a
// real component: the deliberation marks, with their words beside them —
// the legend is the accessibility surface (Mint №98).
const marks = [
  { glyph: '📖', name: 'Open Deliberations', says: 'the record ships with the code' },
  { glyph: '📘', name: 'Closed Deliberations', says: 'a record exists and is declared; kept, not hidden' },
  { glyph: '📑', name: 'Digest', says: 'model-written summaries ship; the record is kept' },
];
</script>

<template>
  <ul class="marks">
    <li v-for="m in marks" :key="m.name">
      <span class="glyph" aria-hidden="true">{{ m.glyph }}</span>
      <strong>{{ m.name }}</strong> — {{ m.says }}
    </li>
  </ul>
</template>

<style scoped>
.marks {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.marks li {
  display: flex;
  gap: 0.6rem;
  align-items: baseline;
}
.glyph {
  flex: 0 0 auto;
  font-size: 1.25em;
}
</style>
