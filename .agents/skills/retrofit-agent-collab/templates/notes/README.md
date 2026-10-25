# Agent Notes

An Agent Note records a decision or proposal that affects this codebase: the why, and what was given up. Code and the other docs do not carry that. This file is the format authority: where notes live, when to write one, and the in-file skeleton.

The path and header gates live in [`scripts/`](scripts/). They check this file's rules. They do not install packages.

## v1 simplifications

The layout, `Status` line, lifecycle moves, classes, and section skeleton follow dsh Agent Notes. v1 drops two gates that need the rest of that monorepo:

- English only. A `.zh.md` sibling is not required and is not checked. If one is present, the walker ignores it.
- `archived/` is a shelf, not a sealed manifest. There is no content hash and no required `Archived:` line. A note moved there is still checked as an implemented note. Prefer not to edit it after the move. Nothing mechanically forbids a later edit.

Empty class directories are part of the installed tree. The classification gate requires every lifecycle folder, including `archived/`, to contain every class folder.

## How to check

From the repository root, with Node 22 or newer. No install.

```bash
node --experimental-strip-types .agents/notes/scripts/verify-agent-note-format.mts
node --experimental-strip-types .agents/notes/scripts/verify-agent-note-classification.mts
```

If the flag is rejected because type stripping is already on, run the same two paths without the flag. Both commands must exit 0.

The scripts assume they live in `.agents/notes/scripts/`. Running the copies inside a skill payload directory points them at the wrong tree.

## Layout and naming

Every note encodes two axes in its path: `{lifecycle}/{class}/yyyy-mm-dd-topic.md`.

- **Lifecycle** is the folder the note moves between when its status changes.
  - `proposed/` — not built yet, or only partly built.
  - `implemented/` — the decision shipped. Keep stated paths, names, and defaults current when the code changes. The rule is [implemented/AGENTS.md](implemented/AGENTS.md).
  - `rejected/` — considered and declined. Keep it while the rationale prevents a real mistake; otherwise delete the file.
- **Class** is the kind of decision. See [Classification](#classification).

`archived/{class}/yyyy-mm-dd-topic.md` is the shelf for an implemented note that no longer guides future work. `implemented` is not a segment of that path. The shelf rule is [archived/AGENTS.md](archived/AGENTS.md).

The date in the filename is the day the topic was first proposed. Cross-references use relative markdown links, not bare titles, so a move between folders can be checked by eye.

Do not add `INDEX.md`. The folders are the inventory. The gate rejects `INDEX.md` at the notes root. `docs/rfc/` and `docs/rfcs/` are rejected too; notes live here.

`scripts/` under this directory is the gate code, not a lifecycle.

## Classification

One class, from the closed set below. The same list is `AGENT_NOTE_CLASSES` in [`scripts/agent-note-tree.mts`](scripts/agent-note-tree.mts). Change both in the same commit. The gate rejects any other class folder.

| Class | What it covers |
| --- | --- |
| `feature` | A new user-facing or model-facing capability. |
| `bug-fix` | Corrects a defect, or closes a gap a failure showed. |
| `simplification` | Removes code, behavior, or surface without adding a capability. |
| `architecture` | A structural decision about the source that ships: how parts relate, what the runtime vocabulary is. |
| `process` | Tooling, policy, or workflow around the code. Not runtime behavior. |
| `testing` | Test infrastructure and strategy. |

`architecture` is the source that ships. `process` is the workflow around it. There is no `refactor` class: if observable behavior does not change, use `simplification`.

## When to write one

Add or update a note in the same change only when the why will still matter after the diff is merged, and code, tests, and existing docs do not already say it. A proposal for work not yet done starts in `proposed/`. A decision that already shipped starts in `implemented/`.

If a note already owns the decision, update that note. Do not open a second one that restates it. A mechanical edit does not need a note.

Do not edit a note into a different decision. Write a new note and cross-link both. An implemented note that is fully superseded may be merged into the note that now owns the decision, then deleted. Before deleting, copy every unique rationale, alternative, and consequence into the owner, and fix inbound links. Git history is not a substitute for that copy.

## The file format

Active notes and archived notes use the skeleton below. The format gate skips fenced code blocks, so an example inside fences is not a heading.

### Header

The first four lines are exactly:

```markdown
# Agent Note: <title>

Status: <status>

```

`Status` agrees with the folder:

- `Status: proposed`
- `Status: implemented`
- `Status: rejected — <why, in one line>`

The rejection reason uses an em dash (`—`, U+2014), then a space, then the reason. No date and no parenthesis on any status line. The filename holds the first-proposed date. Archived notes stay `Status: implemented`.

One `Status:` line in the file. It is line 3.

### Body

The first section is `## Problem`, written so it stands without the solution. Later required sections use these names. Other `##` sections are allowed between them when they are real technical detail (topology, schemas, wire contracts).

#### `proposed/`

```markdown
## Problem
## Proposal
## Alternatives considered
## Acceptance criteria
## Risks
```

`## Proposal` may use the future tense. `## Acceptance criteria` says what observable state means done. `## Risks` covers what can go wrong and what the change knowingly gives up.

#### `implemented/` and `archived/`

```markdown
## Problem
## Decision
## Alternatives considered
## Consequences
```

`## Decision` is present tense and matches what shipped. `## Consequences` records what the trade-off cost and what it bought. These proposal headings are rejected in an implemented or archived note: `## Proposal`, `## Plan`, `## Migration plan`, `## Acceptance criteria`. A present-tense `## Testing` or `## Related` section is fine.

#### `rejected/`

The note stays a proposal. Required: the header, `## Problem`, `## Proposal`, and `## Alternatives considered`. The verdict is the `Status` line.

### Alternatives considered

Every note has `## Alternatives considered`: each real alternative and why it lost. One bold-led paragraph per alternative, or a `### Why not <X>?` subsection. Do not invent an alternative that was not considered.

A note dated before 2026-07-05 whose alternatives cannot be reconstructed may use this comment instead of the section. The gate accepts it only then:

```markdown
<!-- agent-note-format: alternatives-not-recorded (pre-format Agent Note) -->
```

### Moving between folders

Update `Status` and the skeleton in the same change as the move.

- `proposed/` → `implemented/`: rewrite `## Proposal` into a present-tense `## Decision`. Fold `## Acceptance criteria` and `## Risks` into `## Consequences` (or a present-tense `## Testing` section for what now pins the behavior). Drop plan text.
- `proposed/` → `rejected/`: set `Status: rejected — <why>` and leave the proposal sections.
- `implemented/` → `archived/`: move the file under `archived/{class}/`. Leave `Status: implemented`. Do not archive a proposed note; reject it.
