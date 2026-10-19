---
title: Your first question, your first answer
description: What a QST actually is, how to read the recommendation that comes with it, and why one word can be a complete answer.
status: draft
wave: 1
---

Your new collaborator reads your raw thoughts and, within the first few
minutes, writes back something with a heading like this:

```markdown
### QST-FIRST-STORAGE: Where does uploaded user content live?
- Status: unanswered
- Why asking: Changes the schema and the retention policy both.

Options:
- **A — Object storage** (S3-compatible), a row keeps the pointer.
- **B — Directly in the database**, as a blob column.

**Recommendation**: (by Claude Sonnet 5)
**A.** *Rationale*: blob columns bloat backups and slow every unrelated
query that touches the row; object storage scales independently and is
what every managed Postgres host recommends. *Confidence*: 0.8. *If
wrong*: if files are consistently tiny (under a few KB) and you need
transactional guarantees across the file and its row, B is simpler and
this flips.
```

That block is a **QST** — a question, kept in the file instead of in a
chat window that scrolls away. Four things are worth knowing about it
before you touch it.

## It already contains a position, not just a menu

Notice the model didn't just list A and B and wait. It picked one, told you
why, attached a number for how sure it is, and — this is the part worth
reading twice — said exactly what fact would change its mind. That's a
**recommendation**, and every open question in this methodology carries one.

The reason is not politeness. A question with no stated lean puts the whole
cognitive load on you: read every option, guess what the model actually
thinks from how it phrased things, then decide. A question with a stated
lean splits the work — the model commits to a position where you can see it,
and you spend your attention judging *that* position instead of
reconstructing one from scratch.

## You can answer in one word

Because the reasoning is already on the page, your answer doesn't have to
repeat it. Write this, anywhere below the question, and you're done:

```markdown
**ANS:** A, agreed.
```

That's a real, complete answer — not a shortcut you're getting away with.
The recommendation did the work of carrying the argument; your job was to
judge it, and two words is plenty of room to do that in when you agree.
Disagree, want a hybrid, or need to add a condition the model didn't see?
Write a paragraph instead — the field has no limit and expects whatever
length your actual answer needs.

## Every question is one command away

You don't have to remember which file held which question, or scroll back
through a conversation to find one you half-answered last week:

```bash
grep -rn '^### QST' docs/adr/
```

That's the whole retrieval mechanism. No search feature to learn, no
database to query — a question written to a file is a question `grep` can
find, forever, by anyone with the repository.

## What happens after you answer

Your collaborator reads the `ANS:` line, updates the record with the
decision and why, and moves on to whatever that decision unblocks. Nothing
asks you to re-explain yourself later — the file already says what you
decided and, because the recommendation is still sitting right above your
answer, *why the model thought what it thought when you decided it*. The
next page is what happens when you do this more than once a day, on purpose.
