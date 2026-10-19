---
title: The daily loop
description: What this looks like on an ordinary Tuesday — more than one question at a time, across more than one thread.
status: draft
wave: 1
---

Chapter 3 walked one question to one answer. An ordinary day has several
threads open at once, and the loop is the same shape repeated, not a new
one to learn.

## You keep dumping, not just once

A **seed** isn't a one-time setup step — it's what you write whenever
something's on your mind and not yet structured: a frustration mid-bug, a
new requirement from a meeting, three unrelated worries at once. Dictation
is fine. Fragments are fine. You're not writing documentation; you're
evacuating your head into a file your collaborator will read.

## One dump, several questions

Your collaborator reads the dump and splits it — usually into two to five
distinct threads, each becoming its own ADR, because one ADR holding three
unrelated decisions is three decisions you can't review independently. Each
thread gets its own `### QST` blocks, each with its own recommendation, each
answerable on its own schedule. You don't have to clear all of them before
lunch; you answer what you have an opinion on and leave the rest `unanswered`
— nothing about the system punishes a question sitting open overnight.

## Finding what's open, at any hive size

One command surfaces everything waiting on you, across every ADR in the
repository:

```bash
grep -rn '^### QST' docs/adr/
```

If you'd rather not grep, the companion
[VS Code extension](https://github.com/ADRs4AI/vscode-adrs-for-ai) puts the
same information in a sidebar: every ADR with a live status badge (draft,
accepted, superseded), an open-question count, and a panel for answering
without leaving the editor. Same record either way — the extension reads
the files, it doesn't keep a second copy of the truth.

## Ruling, and what it unlocks

Answering isn't a formality: the ruling on one QST is frequently what
unblocks the work a different thread was waiting on. "Object storage, not a
blob column" doesn't just close a question — it tells whoever's writing the
upload handler which library to reach for. The record isn't a log of what
happened; in a live project it's closer to a dependency graph that happens
to be made of paragraphs.

That's the loop, run as many times a day as you have things on your mind:
dump, split, rule, unblock. The next page is what it buys you a month in,
when "why did we do it this way" stops being a question anyone has to
remember the answer to.
