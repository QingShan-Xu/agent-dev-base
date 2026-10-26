# Lessons

Drafts for defects found in self-test or testing. Write them after the fact.

On-the-spot preferences go in `.agents/prefs/`. Decision records go in `.agents/notes/`. Stable rules go in `docs/code-standards.md`. Accident write-ups go in `docs/postmortems/`.

## How a draft is written

Add a new section. Do not rewrite an existing draft into a different failure.

Write a draft only after a bug shows up in self-test or testing.

```markdown
## YYYY-MM-DD — <short title>

Seen: YYYY-MM-DD
Status: draft

What failed:

Why:

Rule candidate:

Not tried:
```

`Seen:` names one calendar day the failure was observed. When it shows up again on another calendar day, add another `Seen:` line and leave the earlier ones. Two lines with the same date count as one day.

## When to promote

Promote when `Status` is still `draft`, the rule candidate is still right, and `Seen:` names at least 3 different calendar days.

Then:

1. Append the rule candidate under `## Promoted rules` in `docs/code-standards.md`. Present tense. No story, no dates, no `Seen` lines.
2. In this draft, set `Status: promoted` and add one link to the rule you added.
3. Leave the draft here. Do not delete it. Do not paste the promoted rule back into this file.

If a later observation shows the candidate was wrong before promotion, set `Status: dropped` and add one line saying why. Do not promote it.

## When to demote

Demotion returns a promoted rule on this same pipeline.

A periodic retro may propose demotion when:

- the rule has been quiet for a long time
- tooling already catches the failure
- the rule is harmful

The proposal picks one outcome:

- return the rule here as `Status: draft` and remove it from `docs/code-standards.md`
- set `Status: dropped` or `Status: superseded`, and remove or replace the rule in `docs/code-standards.md`

A human confirms before `docs/code-standards.md` changes. Do not add a hook or a required retro skill for this. The retro proposes; the human gates.

## Drafts

None yet.
