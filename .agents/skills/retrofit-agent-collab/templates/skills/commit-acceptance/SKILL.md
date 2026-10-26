---
name: commit-acceptance
description: >-
  Decide whether a change is ready to commit. Use when committing, when
  choosing what to run first, or when the commit body must record what ran
  and what was not tried. Do not use this to add hooks, CI, or review bots.
---

# Commit acceptance

Home of the commit-acceptance pipeline. Other files only link here.

## Commit body

Every commit message body includes both sections:

```
What ran:
- <command>: <result>

Not tried:
- <check>: <why>
```

`What ran` lists commands you actually executed, and the result: exit status, or one line of outcome. `Not tried` lists a check you did not run, and why. Keep both sections. Do not list a check under `What ran` if you did not run it.

## When thin verification is not enough

Thin verification still passes when this change is wrong. Reading the diff is thin. So is a linter that does not cover the edit, and a compile that does not run the changed behavior.

Do not stop at thin verification when the change affects behavior, stored data, a contract, or a gate. Run the check that would fail if the change were wrong.

- An Agent Note change: the note scripts named in `.agents/notes/README.md`.
- A bug fix: a repro or a test that failed before the fix and passes after it.
- A lesson promoted into `docs/code-standards.md`: the lesson's `Seen` lines, checked against the promote rule in `LESSONS.md`.
- A lesson demoted out of `docs/code-standards.md`: human confirmation, and the demote path in `LESSONS.md`.

Thin verification is enough only when the change cannot change behavior, and `Not tried` names each skipped check and why. A comment can be that case. So can wording that is not a rule's home file.

## Lessons, prefs, and standards

This file says what evidence a commit needs. It does not store failures or stable rules.

- A defect found in self-test or testing goes in `LESSONS.md`. That file owns promote and demote.
- An on-the-spot correction goes in `.agents/prefs/`. Do not open a lesson for it.
- Do not paste a lesson, a preference, or a standard into the commit body.
- A lasting reason goes in `.agents/notes/`. It does not go in the commit body or in this file.
- A demotion out of `docs/code-standards.md` needs human confirmation. The return path is in `LESSONS.md`.

## Leave these out

Do not add a git hook, a CI job, CODEOWNERS, or a review bot for this check. The commit body holds the record.
