# AGENTS.md

Standing orders for coding agents. Read [docs/architecture-index.md](docs/architecture-index.md) before editing. This file links to homes; it does not restate them.

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
