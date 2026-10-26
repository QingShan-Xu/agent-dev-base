# Lessons

Drafts for failures noticed after the fact. Decision records live in `.agents/notes/`. Stable rules live in `docs/code-standards.md`.

## How a draft is written

Add a new section. Do not turn an existing draft into a different failure.

```markdown
## YYYY-MM-DD — <short title>

Seen: YYYY-MM-DD
Status: draft

What failed:

Why:

Rule candidate:

Not tried:
```

`Seen:` is one calendar day this failure was observed. When it shows up again on another calendar day, add another `Seen:` line. Leave earlier `Seen:` lines as they are. Two lines with the same date count as one day.

## When to promote

A lesson promotes when it has been Seen on at least 3 different calendar days, `Status` is still `draft`, and the rule candidate is still right.

The `Seen:` lines must name at least 3 different calendar days. Two lines that share a date count as one day. Fewer than 3 different dates stays a draft.

Then:

1. Append the rule candidate under `## Promoted rules` in `docs/code-standards.md`. Present tense. No story, no dates, no `Seen` lines.
2. In this draft, set `Status: promoted` and add one link to the rule you added.
3. Leave the draft here. Do not delete it. Do not paste the promoted rule back into this file.

If a later observation shows the candidate was wrong, set `Status: dropped` and add one line saying why. Do not promote it.

## Drafts

None yet.
