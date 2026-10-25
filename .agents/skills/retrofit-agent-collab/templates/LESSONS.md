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

`Seen:` is the first day this failure was observed. When the same failure shows up again on a later day, add another `Seen:` line under the first. Do not change the original `Seen:` line.

## When to promote

Promote only when both are true:

1. The draft's `Status` is still `draft`, and the rule candidate is still right.
2. The earliest and latest `Seen:` dates are at least 3 calendar days apart. Same-day repeats do not count. A draft with one `Seen:` line stays a draft.

Then:

1. Append the rule candidate under `## Promoted rules` in `docs/code-standards.md`. Present tense. No story, no dates, no `Seen` lines.
2. In this draft, set `Status: promoted` and add one link to the rule you added.
3. Leave the draft here. Do not delete it, and do not paste the promoted rule back into this file.

If a later observation shows the candidate was wrong, set `Status: dropped` and add one line saying why. Do not promote it.

## Drafts

None yet.
