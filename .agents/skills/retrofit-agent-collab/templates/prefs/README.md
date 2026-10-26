# Prefs

On-the-spot corrections from a human. One short sentence each.

## Record

Put the sentence in this directory:

- one file per preference: `yyyy-mm-dd-short-topic.md`, or
- append to a themed file that already holds the same kind of correction

Do not also paste it into `AGENTS.md`, `LESSONS.md`, or `docs/code-standards.md`.

## Repeat

When the same preference shows up again, promote it into the engineering system:

1. Open [docs/architecture-index.md](../../docs/architecture-index.md).
2. Use the Authorities table and the Prefs promotion lookup to pick which home to create, update, or delete.
3. Hard-rule homes wait for a human before you edit them. Until then, keep the sentence here and name the intended home.

## One-off

A preference that never recurs stays here. A periodic retro may propose moving the file to `archived/` under this directory, or deleting it. Do not archive or delete it in the same session that recorded it.

## Not here

A defect found in self-test or testing goes in [LESSONS.md](../../LESSONS.md). An accident goes in [docs/postmortems/](../../docs/postmortems/). A decision that will still matter after the diff goes in [.agents/notes/](../notes/README.md).
