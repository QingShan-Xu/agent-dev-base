# Architecture index

What is in this repository, and which file is the authority. Rule text stays in the file named here.

Standing orders: [AGENTS.md](../AGENTS.md).

## Authorities

| Topic | Authority |
| --- | --- |
| Human overview | [README.md](../README.md) |
| Standing orders, including what this repo refuses to add | [AGENTS.md](../AGENTS.md) |
| Fill algorithm | [.agents/skills/retrofit-agent-collab/SKILL.md](../.agents/skills/retrofit-agent-collab/SKILL.md) |
| On-the-spot corrections, and how a repeat is promoted | [.agents/prefs/README.md](../.agents/prefs/README.md) |
| Lesson drafts, Seen, promote, and demote | [LESSONS.md](../LESSONS.md) |
| Stable coding rules | [code-standards.md](code-standards.md) |
| Accident write-ups | [postmortems/](postmortems/) |
| Decision rationale, note format, lifecycle, classes | [.agents/notes/README.md](../.agents/notes/README.md) |
| Commit acceptance | [.agents/skills/commit-acceptance/SKILL.md](../.agents/skills/commit-acceptance/SKILL.md) |
| Shape of a repo after the skill runs | [examples/after-retrofit.md](../examples/after-retrofit.md) |

## Prefs promotion

When a preference repeats, pick the home from Authorities and this lookup. How to record and when a human must confirm are in [.agents/prefs/README.md](../.agents/prefs/README.md).

| Kind of preference | Usually goes to |
| --- | --- |
| Stable coding rule (always apply when writing code) | [code-standards.md](code-standards.md) |
| Standing order or route for agents | [AGENTS.md](../AGENTS.md) or a nested `AGENTS.md` |
| Decision that still matters after the diff | [.agents/notes/](../.agents/notes/README.md) |
| Defect found in self-test or testing | [LESSONS.md](../LESSONS.md) (open a draft; do not promote a pref straight into LESSONS) |
| Accident | [postmortems/](postmortems/) |

Hard-rule edits to `code-standards.md` or standing orders wait for a human.

## Payload and installed copies

These pairs must stay byte-identical. The left path is what the skill copies into another repo. The right path is this repo, already filled.

| Payload | Installed in this repo |
| --- | --- |
| `.agents/skills/retrofit-agent-collab/templates/LESSONS.md` | `LESSONS.md` |
| `.agents/skills/retrofit-agent-collab/templates/docs/code-standards.md` | `docs/code-standards.md` |
| `.agents/skills/retrofit-agent-collab/templates/docs/postmortems/README.md` | `docs/postmortems/README.md` |
| `.agents/skills/retrofit-agent-collab/templates/prefs/README.md` | `.agents/prefs/README.md` |
| `.agents/skills/retrofit-agent-collab/templates/notes/` | `.agents/notes/` except `proposed/process/2026-10-25-zh-notes-readme-later.md`, except `implemented/process/2026-10-26-prefs-beside-lessons.md`, and except `scripts/` |
| `.agents/skills/retrofit-agent-collab/scripts/` | `.agents/notes/scripts/` |
| `.agents/skills/retrofit-agent-collab/templates/skills/commit-acceptance/SKILL.md` | `.agents/skills/commit-acceptance/SKILL.md` |

`templates/AGENTS.md` is the generic standing orders. Root `AGENTS.md` is that text plus the section `This repository`.

`templates/docs/architecture-index.md` is the blank map the skill fills in a target. This file is the filled map for the skill repo. Both name prefs promotion with an Authorities lookup plus a kind table.

`templates/README.md` is a stub for a target that has no README. This repo's `README.md` is the human page for the skill.

`templates/CLAUDE.md.SYMLINK` is not a file in the target. Root `CLAUDE.md` is a symlink to `AGENTS.md`.

## What is in the tree

Paths only, filled the same way the skill fills a target. What each path is for is in the table above.

- top-level: .agents/
- top-level: AGENTS.md
- top-level: CLAUDE.md
- top-level: LESSONS.md
- top-level: README.md
- top-level: docs/
- top-level: examples/
- agents: AGENTS.md
- agents: .agents/notes/AGENTS.md
- agents: .agents/notes/archived/AGENTS.md
- agents: .agents/notes/implemented/AGENTS.md

## Not in this repo

No product-behavior file, no public-API file, no deployment file, no `docs/subsystems/`. What this repo refuses to add is in [AGENTS.md](../AGENTS.md) under `This repository`.
