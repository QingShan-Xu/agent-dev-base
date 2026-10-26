# AGENTS.md

Standing orders for coding agents. Read [docs/architecture-index.md](docs/architecture-index.md) before editing. This file is a route table. How-to lives in the linked home. Do not copy a home's text into this file.

## This repository

This repo publishes one skill, [retrofit-agent-collab](.agents/skills/retrofit-agent-collab/SKILL.md). That file is the fill algorithm. `templates/` is the payload. `scripts/` is the note-gate payload.

This repo is already filled with that payload. [docs/architecture-index.md](docs/architecture-index.md) lists which installed files must stay byte-identical to which payload files. Change both in the same commit.

Do not publish another skill. Do not add hooks, CI, CODEOWNERS, review bots, `--match-head-commit`, or a one-session-one-worktree rule.

## Route

| When | Home |
| --- | --- |
| You need which file is authoritative, or which home a repeated preference promotes into | [docs/architecture-index.md](docs/architecture-index.md) |
| A decision will still matter after the diff | [.agents/notes/](.agents/notes/README.md) |
| A human corrects you on the spot | [.agents/prefs/](.agents/prefs/README.md) |
| A defect shows up in self-test or testing | [LESSONS.md](LESSONS.md) |
| You are about to commit, or the commit body must say what ran | [.agents/skills/commit-acceptance/SKILL.md](.agents/skills/commit-acceptance/SKILL.md) |

Three pipelines: notes, LESSONS ↔ [docs/code-standards.md](docs/code-standards.md), commit-acceptance. Prefs sits beside them for on-the-spot corrections. Accident write-ups live in [docs/postmortems/](docs/postmortems/), on the lessons pipeline, separate from lesson drafts.

One fact, one home. Link to it. Do not copy it. The human overview is [README.md](README.md).

## Nested AGENTS.md

A parent directory may have its own `AGENTS.md` for facts that belong only to that directory. Do not create a directory just to hold one. The local file links to the architecture index and does not copy the standing orders above.
