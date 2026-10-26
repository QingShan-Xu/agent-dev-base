# Architecture index

What is in this repository, and which file is the authority. Rule text stays in the file named here.

Standing orders: [AGENTS.md](../AGENTS.md).

## Authorities

| Topic | Authority |
| --- | --- |
| Human overview | [README.md](../README.md) |
| Standing orders, including what this repo refuses to add | [AGENTS.md](../AGENTS.md) |
| Fill algorithm | [.agents/skills/retrofit-agent-collab/SKILL.md](../.agents/skills/retrofit-agent-collab/SKILL.md) |
| Lesson drafts, and when a draft is promoted | [LESSONS.md](../LESSONS.md) |
| Stable coding rules | [code-standards.md](code-standards.md) |
| Decision rationale, note format, lifecycle, classes | [.agents/notes/README.md](../.agents/notes/README.md) |
| Commit acceptance | [.agents/skills/commit-acceptance/SKILL.md](../.agents/skills/commit-acceptance/SKILL.md) |
| Shape of a repo after the skill runs | [examples/after-retrofit.md](../examples/after-retrofit.md) |

## Payload and installed copies

These pairs must stay byte-identical. The left path is what the skill copies into another repo. The right path is this repo, already filled.

| Payload | Installed in this repo |
| --- | --- |
| `.agents/skills/retrofit-agent-collab/templates/LESSONS.md` | `LESSONS.md` |
| `.agents/skills/retrofit-agent-collab/templates/docs/code-standards.md` | `docs/code-standards.md` |
| `.agents/skills/retrofit-agent-collab/templates/notes/` | `.agents/notes/` except `proposed/process/2026-10-25-zh-notes-readme-later.md` and except `scripts/` |
| `.agents/skills/retrofit-agent-collab/scripts/` | `.agents/notes/scripts/` |
| `.agents/skills/retrofit-agent-collab/templates/skills/commit-acceptance/SKILL.md` | `.agents/skills/commit-acceptance/SKILL.md` |

`templates/AGENTS.md` is the generic standing orders. Root `AGENTS.md` is that text plus the section `This repository`.

`templates/docs/architecture-index.md` is the blank map the skill fills in a target. This file is the filled map for the skill repo.

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
- agents: .agents/notes/AGENTS.md
- agents: .agents/notes/archived/AGENTS.md
- agents: .agents/notes/implemented/AGENTS.md
- agents: AGENTS.md

## Not in this repo

No product-behavior file, no public-API file, no deployment file, no `docs/subsystems/`. What this repo refuses to add is in [AGENTS.md](../AGENTS.md) under `This repository`.
