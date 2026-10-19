---
title: Start here
description: One real decision, walked end to end — what deliberative programming actually looks like, and your first ten minutes.
---

Jérémie told his AI, in one sitting, something that was not a spec and not a
ticket: he wanted real docsites for this project, and the handbook — the
most visible one — needed a dedicated, fast-moving team of its own.

That's it.

## What his AI did with it

It wrote the ask down before building anything — not as a task, but as a
**seed**: his own words, kept, committed to the record before a single page
existed. The record comes before the building; that's not a style choice,
it's the whole point.

From the seed came an **ADR** (an Architectural Deliberation Record): real
options for who should run the handbook — found a dedicated seat, hand it to
the existing editor, or rotate the duty across whoever's free — each one
with a recommendation already attached: a bolded pick, the reasoning behind
it, a confidence number, and the one fact that would prove the pick wrong.

Jérémie didn't have to re-derive any of that to answer. He read the
recommendation and ruled, in three words: *"Approving Option A."* Those
three words inherited an argument that was already on the record — which is
why the recommendation exists at all: the reasoning is carried so that
answering can be short, never so that the question *has* to be.

That ruling is why this page exists. When the model writing this sentence
needed to know why the handbook has a dedicated writer, it didn't ask
anyone — it read the ADR.

## Named, now that you've seen it

**seed → ADR → recommendation → ruling.** That's deliberative programming,
and everything above happened in exactly that order — the record of it is
the proof, not a diagram of it.

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

Run it once, on one real decision of your own, then grep for the record
afterward. It will be there.
