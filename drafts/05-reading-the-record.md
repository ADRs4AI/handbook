---
title: Reading the record
description: Six months later, someone asks why you built it this way — and the answer isn't "let me think back."
status: draft
wave: 1
---

Six months after chapter 3's QST-FIRST-STORAGE got answered, a new engineer
on the project opens the upload handler, sees it writing to S3 instead of
the database, and asks the question every undocumented codebase eventually
gets asked: *why didn't we just use a blob column?*

Nobody has to remember. They run:

```bash
grep -rln "blob column" docs/adr/
```

and land on the same ADR from chapter 3 — not a summary of it, the actual
file, with the actual options, the actual recommendation ("blob columns
bloat backups and slow every unrelated query"), the confidence (0.8), and
the condition that would have flipped it (tiny files, transactional
guarantees needed). They don't have to trust a comment or track down
whoever was in the room. The reasoning is sitting where the decision is.

## This is the actual payoff, not a side benefit

Everything in the three chapters before this one — writing seeds, reading
recommendations, answering in whatever shape — was in service of this one
moment: a decision from months ago being exactly as legible as it was the
day it was made. A codebase without this keeps the *what* in the diff and
loses the *why* to whoever happened to remember it, if anyone does.

## The same habit, pointed backward

Finding old decisions uses the identical tools chapter 4 already gave you
for finding open ones — `grep`, or the extension's sidebar — just searching
committed history instead of today's open questions. There's no separate
"archive" to learn, because the record was never written to be archived;
it was written to still be the record.

## When it's working

You'll know this chapter's payoff is real, not aspirational, the first time
someone asks "why" about something you built and you answer by pointing
instead of remembering. That's the whole method, closed: dump, split,
answer, and — later, whenever later turns out to be — read.
