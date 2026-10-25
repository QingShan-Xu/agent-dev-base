---
name: commit-acceptance
description: >-
  Decide whether a change is ready to commit. Use when committing, when
  choosing what to run first, or when the commit body must record what ran
  and what was not tried. Do not use this to add hooks, CI, or review bots.
---

# Commit acceptance

This file is the home of the commit-acceptance pipeline. Other files only link here.

## Commit body

Every commit message body includes both sections:

```
What ran:
- <command>: <result>

Not tried:
- <check>: <why>
```

`What ran` lists commands you actually executed and the result (exit status or one line of outcome). `Not tried` lists a check you did not run, and why. Do not omit either section. Do not put a check under `What ran` if you did not run it.

## When thin verification is not enough

Thin verification cannot fail when this change is wrong. Reading the diff, a linter that does not cover the edit, and a compile that does not execute the changed behavior are thin.

Thin verification is not enough when the change affects behavior, stored data, a contract, or a gate. Run the check that would fail if the change were wrong.

- An Agent Note change: the note scripts named in `.agents/notes/README.md`.
- A bug fix: a repro or a test that failed before the fix and passes after it.
- A lesson promoted into `docs/code-standards.md`: the lesson's `Seen` lines, checked against the rule in `LESSONS.md`.

Thin verification is enough only when the change cannot change behavior, and `Not tried` names each skipped check and why. A comment, or wording that is not a rule home, can be that case.

## Lessons and standards

This pipeline records the evidence for this commit. It does not own failure memory or stable rules.

- A failure noticed after the commit goes in `LESSONS.md`. Whether that draft is promoted is decided only by `LESSONS.md`.
- Do not paste a lesson or a standard into the commit body.
- A lasting why goes in `.agents/notes/`, not in the commit body and not in this file.

## Not this pipeline

No git hook, CI job, CODEOWNERS, or review bot. The commit body is the record.
