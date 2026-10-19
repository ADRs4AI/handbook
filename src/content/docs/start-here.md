---
title: Start here
description: What deliberative programming is, in one sitting — and your first ten minutes.
---

The most valuable byproduct of working with an AI is the thinking — and in
ordinary practice, all of it evaporates. Deliberative programming keeps it:
Decisions become first-class, durable artifacts that humans and AI agents
write, question, and answer together, so the reasoning survives every
session, model change, and handover.

## The loop, in one breath

Dump your thinking into a **seed** — messy is fine, dictation is fine. Your
AI chunks it into **ADRs** (Architectural Deliberation Records) that keep
your actual words, the options considered, the open questions. Every open
question arrives with the AI's **recommendation** — options, rationale,
stated confidence, and what would prove it wrong — so answering starts from
carried reasoning rather than a blank page. You rule, in any shape; the
record keeps the why, forever.

## Your first ten minutes

```bash
# 1 · Your copy of the template
gh repo create my-project --private --clone \
  --template ADRs4AI/human-ai-collaboration-template-A
cd my-project

# 2 · Fill CLAUDE.md's top block, then stake the record before any work:
git add -A && git commit -m "chore: the record begins before the building does"

# 3 · Recruit — open your agent and offer the mission:
claude    # or your agent of choice
```

Then answer the first question your AI stakes. Every open question is one
grep away, always:

```bash
grep -rn '^### QST' docs/adr/
```

One seed, one question, one answered ruling — the loop is running, and it
already compounds.
