---
title: When it goes wrong
description: The honest-failures chapter — how records break, how tools lie about them, and why none of it loses your thinking.
born_of: https://github.com/ADRs4AI/human-ai-collaboration-template-A
---

Your AI swears it answered your question yesterday. You open the file, and
the answer slot says `[Fill this in]`. Nothing is lost — but something went
wrong, and this chapter is the map of the ways that happens.

The comfort first, because it's structural: in this practice, failures are
*visible*. A broken record looks broken. That is by design — the
alternative, thinking that evaporates silently, never looks like anything
at all.

## The four ways records break

These aren't hypotheticals — they're the four most common malformations
found by auditing over a thousand real records. Each one makes your
questions invisible to every tool that looks for them.

**1. The bolded fake heading.** `**QST-1: Should we...?**` *looks* like a
question, but to every parser it's just bold prose. Questions are headings:

```markdown
### QST-1: Should we batch the imports?
```

**2. The space where a hyphen belongs.** `### QST 1:` reads naturally aloud
— and matches nothing. The grammar wants `### QST-1:` (or plain `### QST:`).
Written the way you'd say it, lost the way tools read it.

**3. The floating status line.** A `- Status: unanswered` with no question
heading above it lies in both directions: it looks open when nothing is
asking, or the real question above went invisible. Every status line sits
directly under its `### QST:` heading.

**4. Wrong heading depth.** `## QST-1:` or `#### QST-1:` — parsers scan
exactly three hashes. Two or four, and your question walks out of every
tree view and count.

> **For the agent**: run the lint before claiming the record is clean —
> `just qst-lint` where available; otherwise verify with
> `grep -E '^### QST(-[A-Za-z0-9-]{1,24})?:' -r docs/adr/` and confirm every
> `- Status:` line follows a matched heading.

## The placeholder is load-bearing

`[Fill this in]` under an **ANS:** is not sloppiness — it is a machine-readable
promise that nobody has answered yet. Tools detect open questions by that
exact text. "Tidying" it into friendly prose makes an unanswered question
read as answered — the quietest possible way to lose a decision. Leave it
verbatim until there is a real answer to put there.

## When the count lies

The naive check — grep for `Status: unanswered` — once reported 61 open
questions in a project whose true count was 12. Templates mention the
pattern; seeds discuss it; prose quotes it. Counting matches isn't counting
questions. Use the anchored tools (the lint, the extension's Open Questions
view, a `### QST:`-anchored grep), and distrust any count that arrives
without its method.

## When the model changes

Mid-project, your assistant may genuinely be a different mind than
yesterday's — models get updated, substituted, rerouted. In most workflows
that's a catastrophe. Here it is a Tuesday: **the record holds, minds
change, and the work resumes either way.** The new mind reads the same
ADRs, the same seeds, the same open questions, and continues — which is
not a workaround. It is part of why the record exists.

## When an answer didn't land

Two usual causes. The attribution is missing its keyword — `**ANS:** (Jérémie)`
reads as answer *content*, while `**ANS:** (by Jérémie)` reads as an
attributed answer; tools lean on the `by`. Or the answer was a fragment and
somebody worried it wasn't enough: it is. **Answers in any shape are the
rule** — a letter, a sentence, a "warmer/colder," a rewrite. The record's
job is to carry your reasoning, not to make you perform completeness.

## Failure is intake

Every page in this handbook carries `born_of:` — the confusion that created
it. When something goes wrong for you and this chapter didn't cover it,
that isn't an embarrassment to hide; it is the next page of this book
asking to be written. [Say so at the front desk](https://github.com/ADRs4AI/community/discussions).
