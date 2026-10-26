# Architecture index

Map of this repository: what exists, and which file is the authority. Rule text stays in the file named here.

Standing orders: [AGENTS.md](../AGENTS.md).

## Authorities

| Topic | Authority |
| --- | --- |
| Human overview | [README.md](../README.md) |
| Standing orders | [AGENTS.md](../AGENTS.md) |
| On-the-spot corrections, and how a repeat is promoted | [.agents/prefs/README.md](../.agents/prefs/README.md) |
| Lesson drafts, Seen, promote, and demote | [LESSONS.md](../LESSONS.md) |
| Stable coding rules | [code-standards.md](code-standards.md) |
| Accident write-ups | [postmortems/](postmortems/) |
| Decision rationale, note format, lifecycle, classes | [.agents/notes/README.md](../.agents/notes/README.md) |
| Note path and header gates | [.agents/notes/scripts/](../.agents/notes/scripts/) |
| Commit acceptance | [.agents/skills/commit-acceptance/SKILL.md](../.agents/skills/commit-acceptance/SKILL.md) |

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

## What is in the tree

<!-- probe-fill -->
- (the retrofit skill replaces this block with paths from the probe)
<!-- /probe-fill -->

## Human must confirm

<!-- human-fill -->
- Product behavior: <which file is authoritative, or none>
- Public API: <which file is authoritative, or none>
- Deployment: <which file is authoritative, or none>
<!-- /human-fill -->
