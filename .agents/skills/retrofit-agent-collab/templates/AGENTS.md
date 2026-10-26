# AGENTS.md

Standing orders for coding agents. Read [docs/architecture-index.md](docs/architecture-index.md) before editing. Link to each home from here. Do not copy a home's text into this file.

## One fact, one home

Each fact has one home. Link to it. Do not copy it.

| Fact | Home |
| --- | --- |
| Standing orders | this file |
| What exists, and which file is authoritative | [docs/architecture-index.md](docs/architecture-index.md) |
| Why a decision was made, and what was given up | [.agents/notes/](.agents/notes/README.md) |
| A failure noticed after the fact | [LESSONS.md](LESSONS.md) |
| A stable rule promoted from a lesson | [docs/code-standards.md](docs/code-standards.md) |
| Human overview | [README.md](README.md) |

Commit acceptance: [.agents/skills/commit-acceptance/SKILL.md](.agents/skills/commit-acceptance/SKILL.md).

## Nested AGENTS.md

A parent directory may have its own `AGENTS.md` for facts that belong only to that directory. Do not create a directory just to hold one. The local file links to the architecture index and does not copy the standing orders above.
