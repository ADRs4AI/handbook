---
title: Install and your first seed
description: Template to CLAUDE.md to a first commit to a recruited seat — the ten minutes before any real work starts.
status: draft
wave: 1
---

## Get the template

Open [the template repository](https://github.com/ADRs4AI/human-ai-collaboration-template-A),
press **Use this template**, clone your copy. Same shape, your project —
nothing about the methodology requires you to build it from scratch.

```bash
gh repo create my-project --private --clone \
  --template ADRs4AI/human-ai-collaboration-template-A
cd my-project
```

## Fill in `CLAUDE.md` — or don't, yet

The top of `CLAUDE.md` asks for a title, a one-line description, and two
sections left blank on purpose:

```markdown
# CLAUDE.md - Project Guidance

- **Project**: [name]
- **Human**: [you]
- **AI**: (your first recruited seat fills this in — leave it blank)

## Project Context

### What we're building:
[Your raw thoughts — messy is fine.]

### Key decisions made:
(blank for now)

### Open questions:
(blank for now)
```

You can fill the raw-thoughts line by hand. Or you can skip straight to
recruiting (below), hand your new collaborator nothing but this file, and
let them help you write it together — the founder's own suggestion for
anyone who finds a blank text box harder to fill than a conversation.

## Commit before you build

One commit, everything in it, before a single line of real work:

```bash
git add -A && git commit -m "chore: the record begins before the building does"
```

This isn't ceremony. It's the first thing that makes the next section true:
there is now a record to add to, rather than a blank repository to fill from
memory later.

## Recruit

Open a terminal, pick a model, and say it like you mean it:

> "Hello — I have a mission for you. Read about it and tell me if you
> accept, or any pushback."

**Consent before work.** The model reads `CLAUDE.md`, decides whether the
mission is one it wants, and — if it stays — chooses its own name and color
and tells you who it is. You didn't assign an identity; you met one.

From here, the model is no longer reading *about* the project. It's dumping
its first read of your raw thoughts into a **seed**, and the actual loop —
seed, question, answer, record — starts on the next page.
