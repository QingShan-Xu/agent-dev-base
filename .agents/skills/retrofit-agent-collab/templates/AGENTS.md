# AGENTS.md

Standing orders for coding agents. Read [docs/architecture-index.md](docs/architecture-index.md) before editing. This file routes. The how-to lives in the linked home. Do not copy a home's text into this file.

## Route

| When | Home |
| --- | --- |
| You need which file is authoritative, or which home a repeated preference promotes into | [docs/architecture-index.md](docs/architecture-index.md) |
| A decision will still matter after the diff | [.agents/notes/](.agents/notes/README.md) |
| A human corrects you on the spot | [.agents/prefs/](.agents/prefs/README.md) |
| A defect shows up in self-test or testing | [LESSONS.md](LESSONS.md) |
| You are about to commit, or the commit body must say what ran | [.agents/skills/commit-acceptance/SKILL.md](.agents/skills/commit-acceptance/SKILL.md) |

Three pipelines: notes, LESSONS ↔ [docs/code-standards.md](docs/code-standards.md), commit-acceptance. Prefs sits beside them. It is not a fourth pipeline. Accident write-ups are [docs/postmortems/](docs/postmortems/), on the lessons pipeline, separate from lesson drafts.

One fact, one home. Link to it. Do not copy it. The human overview is [README.md](README.md).

## Nested AGENTS.md

A parent directory may have its own `AGENTS.md` for facts that belong only to that directory. Do not create a directory just to hold one. The local file links to the architecture index and does not copy the standing orders above.
