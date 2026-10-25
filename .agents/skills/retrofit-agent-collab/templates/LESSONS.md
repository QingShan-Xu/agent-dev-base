# Lessons

Draft pool for failures noticed after the fact. This is not the decision record (that home is `.agents/notes/`) and not the stable rule book (that home is `docs/code-standards.md`).

## How a draft is written

Add a new section. Do not edit an existing draft into a different failure.

```markdown
## YYYY-MM-DD — <short title>

Seen: YYYY-MM-DD
Status: draft

What failed:

Why:

Rule candidate:

Not tried:
```

`Seen:` is one calendar day this failure was observed. When the same failure shows up again on a different calendar day, add another `Seen:` line. Do not change an earlier `Seen:` line. A second line with the same date counts as the same day.

## When to promote

A lesson promotes when it has been Seen on at least 3 different calendar days, and both of these are still true:

1. The draft's `Status` is `draft`, and the rule candidate is still right.
2. The `Seen:` lines name at least 3 different calendar days. Two lines that share a date count as one day. Fewer than 3 different dates stays a draft.

Then:

1. Append the rule candidate under `## Promoted rules` in `docs/code-standards.md`. Present tense. No story, no dates, no `Seen` lines.
2. In this draft, set `Status: promoted` and add one link to the rule you added.
3. Leave the draft here. Do not delete it, and do not paste the promoted rule back into this file.

If a later observation shows the candidate was wrong, set `Status: dropped` and add one line saying why. Do not promote it.

## Drafts

None yet.
