# AGENTS.md

Standing orders for coding agents. Read [docs/architecture-index.md](docs/architecture-index.md) before editing. This file links to homes; it does not restate them.

## This repository

This repo publishes one skill, [retrofit-agent-collab](.agents/skills/retrofit-agent-collab/SKILL.md). That file is the fill algorithm. `templates/` is the payload. `scripts/` is the note-gate payload.

This repo is already filled with that payload. [docs/architecture-index.md](docs/architecture-index.md) lists which installed files must stay byte-identical to which payload files. Change both in the same commit.

Do not add another skill. Do not add hooks, CI, CODEOWNERS, review bots, `--match-head-commit`, or a one-session-one-worktree rule.

## One fact, one home

Each fact has one home. Other files link to that home.

| Fact | Home |
| --- | --- |
| Standing orders | this file |
| What exists, and which file is authoritative | [docs/architecture-index.md](docs/architecture-index.md) |
| Why a decision was made, and what was given up | [.agents/notes/](.agents/notes/README.md) |
| A failure noticed after the fact | [LESSONS.md](LESSONS.md) |
| A stable rule promoted from a lesson | [docs/code-standards.md](docs/code-standards.md) |
| Human overview | [README.md](README.md) |

## Commit body

When you commit, record what you ran and what you did not run:

```
What ran:
- <command>: <result>

Not tried:
- <check>: <why>
```

## Notes and lessons

A lasting why goes in `.agents/notes/` in the same change. A post-hoc failure goes in [LESSONS.md](LESSONS.md). Promote only by the rule in that file. Stable rules live in [docs/code-standards.md](docs/code-standards.md).

## Nested AGENTS.md

A parent directory may have its own `AGENTS.md` for facts that are local to that directory. Do not invent a directory so you can add one. A local file links to the architecture index and does not copy the standing orders above.
