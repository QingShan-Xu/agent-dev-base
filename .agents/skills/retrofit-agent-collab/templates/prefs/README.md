# Prefs

On-the-spot human corrections. One short sentence per preference. Not a lesson draft, and not an Agent Note.

## Record

Write the sentence into one short file in this directory, or into a themed file that already holds the same kind of correction. Do not also paste it into `AGENTS.md`, `LESSONS.md`, or `docs/code-standards.md`.

## Repeat

When the same preference shows up again, promote it into the engineering system. Open [docs/architecture-index.md](../../docs/architecture-index.md). The Authorities table decides which rule home to create, update, or delete.

A hard-rule move waits for a human. Do not edit that home until they confirm. Until then, keep the sentence here and name the home.

## One-off

A preference that never recurs stays here. A periodic retro may propose moving the file to `archived/` under this directory, or deleting it. Do not do that in the session that recorded it.

## Not here

A defect found in self-test or testing goes in [LESSONS.md](../../LESSONS.md). An accident goes in [docs/postmortems/](../../docs/postmortems/). A decision that will still matter after the diff goes in [.agents/notes/](../notes/README.md).
