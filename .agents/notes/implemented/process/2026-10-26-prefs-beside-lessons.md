# Agent Note: Prefs sit beside the lessons pipeline

Status: implemented

## Problem

On-the-spot corrections and defects found later are easy to file in the same draft. Giving preferences their own pipeline, or a required retro skill with a hook, would split a path that already ends in an existing rule home.

## Decision

`.agents/prefs/` holds on-the-spot corrections. It is not a fourth pipeline. Root `AGENTS.md` only routes to it. A repeat looks up the rule home in `docs/architecture-index.md`. A hard-rule move waits for a human. A one-off stays until a later retro proposes archive or drop.

`LESSONS.md` takes defects found in self-test or testing. Seen on at least 3 different calendar days promotes into `docs/code-standards.md`. Demotion is the return path on that same pipeline. A retro proposes `Status: draft`, `Status: dropped`, or `Status: superseded`. A human confirms before `docs/code-standards.md` changes. Accidents go in `docs/postmortems/`.

The fill installs no retro skill and no hook. Note gates stay in `.agents/notes/scripts/`.

## Alternatives considered

### Why not a fourth pipeline?

Prefs would sit in the root index as a peer of notes, lessons, and commit-acceptance. The root would become a catalog. A repeated preference already has a home, and the architecture index names it.

### Why not a required retro skill?

Promote and demote are rare, and demotion is human-gated. A skill plus a hook would make that retro mandatory. The proposal text lives in `LESSONS.md` and `.agents/prefs/README.md`.

## Consequences

A session correction does not open a `LESSONS.md` draft. A hard-rule edit, and a demotion, wait for a human. The publish repo and the skill templates carry the same homes. A later retro skill, if any, stays outside this fill.
