---
name: retrofit-agent-collab
description: >-
  Fill an existing repository so coding agents can work in it. Use when given
  a path to a repo that should gain AGENTS.md, an architecture index,
  LESSONS.md, code-standards, or dsh-style Agent Notes. Follow the steps in
  order. Do not use this to clone a skeleton, start a new product, or add
  hooks, CI, review bots, or extra skills.
---

# Retrofit a repo for coding-agent collaboration

Fill the skeleton below in an existing repo. The steps are the whole job. Templates are the bytes you copy. The scripts are the note gates you copy. Do not add files this document does not name.

## Contract

**Input:** `TARGET`, the path to an existing repository directory (absolute or relative). The repo may already contain code and a README. It does not need to be a git checkout of this skill repo.

**SKILL_ROOT:** the directory that contains this `SKILL.md`. Read templates from `SKILL_ROOT/templates/` and scripts from `SKILL_ROOT/scripts/`.

**Output:** missing files created inside `TARGET`, then a retrofit report. You are editing `TARGET` only.

**Stop immediately** if `TARGET` is missing or is not a directory. Do not create `TARGET`. Do not run `git init`. Do not clone this skill repo into `TARGET`.

## Non-goals

Do not do any of the following, even if the target looks bare:

- Do not copy `.agents/skills/` or this skill into `TARGET`.
- Do not create `docs/subsystems/`.
- Do not add GitHub Actions, other CI, git hooks, Husky, lint-staged, CODEOWNERS, or review bots.
- Do not add `--match-head-commit`, a required head pin, or a one-session-one-worktree rule.
- Do not invent module directories, packages, or per-module `AGENTS.md` files. Documenting the optional pattern is already in the root `AGENTS.md` template.
- Do not install npm, pnpm, or other dependencies. The note gates use Node built-ins only.
- Do not translate notes or add a `.zh.md` pairing gate.
- Do not add a sample Agent Note. The publish repo's example note is not a template.
- Do not overwrite an existing file. The exceptions are Step 5 and Step 6, and they are narrow.
- Do not delete files.
- Do not commit unless the user asked. If you commit, use the commit-body shape already in the `AGENTS.md` template.

## Fill rules

- Copy template bytes unchanged. Do not translate, reformat, or improve a file while copying.
- One fact, one home. The templates already place each fact. Do not paste a second copy into `README.md`, `AGENTS.md`, or the index.
- The probe section is paths only. Do not describe what a directory is for.
- If a retrofit failure is worth remembering, say so in the report. Do not invent a `LESSONS.md` entry unless the user asked.

## File mapping

Lifecycles: `proposed`, `implemented`, `rejected`, `archived`.

Classes: `feature`, `bug-fix`, `simplification`, `architecture`, `process`, `testing`.

| Source under SKILL_ROOT | Destination under TARGET |
| --- | --- |
| `templates/README.md` | `README.md` |
| `templates/AGENTS.md` | `AGENTS.md` |
| `templates/LESSONS.md` | `LESSONS.md` |
| `templates/docs/architecture-index.md` | `docs/architecture-index.md` |
| `templates/docs/code-standards.md` | `docs/code-standards.md` |
| `templates/notes/README.md` | `.agents/notes/README.md` |
| `templates/notes/AGENTS.md` | `.agents/notes/AGENTS.md` |
| `templates/notes/implemented/AGENTS.md` | `.agents/notes/implemented/AGENTS.md` |
| `templates/notes/archived/AGENTS.md` | `.agents/notes/archived/AGENTS.md` |
| `templates/notes/<lifecycle>/<class>/.gitkeep` | `.agents/notes/<lifecycle>/<class>/.gitkeep` |
| `scripts/agent-note-tree.mts` | `.agents/notes/scripts/agent-note-tree.mts` |
| `scripts/verify-agent-note-format.mts` | `.agents/notes/scripts/verify-agent-note-format.mts` |
| `scripts/verify-agent-note-classification.mts` | `.agents/notes/scripts/verify-agent-note-classification.mts` |

`templates/CLAUDE.md.SYMLINK` is not copied. Its single line is the symlink target used in Step 4 (`AGENTS.md`).

## Algorithm

### Step 1 — Probe

Record this inventory in your notes for the report. Do not write it into `TARGET` as a new file.

For every destination in the file mapping, record `present` or `missing`. A symlink counts as present.

Also record:

- whether `TARGET/.git` exists
- every top-level name except `.git`
- every `AGENTS.md` under `TARGET`, excluding paths that contain `/.git/` or `/node_modules/`
- `CLAUDE.md`: `absent`, `symlink` whose target is exactly `AGENTS.md`, or `other`
- whether `docs/subsystems/` exists (leave it either way)

### Step 2 — Create missing directories

For each lifecycle and each class, create `.agents/notes/<lifecycle>/<class>/` if that directory is missing.

Create `.agents/notes/scripts/` if it is missing.

Create `docs/` if it is missing.

Do not create any other directory.

### Step 3 — Copy missing files

For each row in the file mapping, if the destination is `missing`, copy the source bytes to the destination and record `Created`. If the destination is `present`, record `Kept` and do not open it.

Remember whether this step created `docs/architecture-index.md`. Step 6 runs only then.

### Step 4 — CLAUDE.md symlink

Work from `TARGET`.

- If `CLAUDE.md` is absent: run `ln -s AGENTS.md CLAUDE.md`. Record `Created CLAUDE.md -> AGENTS.md`. If `ln` fails, stop. Do not write a regular file in its place.
- If `CLAUDE.md` is a symlink and `readlink CLAUDE.md` prints `AGENTS.md`: record `Kept`.
- Otherwise: record that a human must decide. Do not replace the file.

### Step 5 — Wire AGENTS.md files to the index

After Step 3, visit every `AGENTS.md` found in Step 1, plus `AGENTS.md` if Step 3 created it. Skip paths containing `/.git/` or `/node_modules/`.

If the file's contents already contain the substring `architecture-index.md`, record `Kept` and do not edit it.

Otherwise insert one paragraph. Compute `REL` from `TARGET`:

```bash
python3 -c 'import os,sys; print(os.path.relpath("docs/architecture-index.md", sys.argv[1]))' "$FROM_DIR"
```

`FROM_DIR` is the directory that contains that `AGENTS.md`, relative to `TARGET` (`.` for the repo root). Use the printed path as `REL`, forward slashes only.

Paragraph, one line:

```markdown
Read [docs/architecture-index.md](REL) before changing code in this directory. It is the map of authorities. One fact, one home: do not copy rules from the index into this file.
```

Insert it directly after the first line when that line starts with `# `, with one blank line before the paragraph and one blank line after it. Leave the rest of the file unchanged. If the first line does not start with `# `, insert the paragraph and a blank line at the top.

Record `Wired` and the path. Do not insert the paragraph twice.

The templates already contain an index link, so a file this run copied is a no-op here.

### Step 6 — Fill the probe section

Skip this step if Step 3 did not create `docs/architecture-index.md`.

In the file this run created, replace the block from the line `<!-- probe-fill -->` through the line `<!-- /probe-fill -->`, inclusive, with bullets from the tree **as it is now**:

```markdown
- top-level: <name>
- agents: <path>
- manifest: <path>
```

Rules:

- One `top-level:` bullet per top-level entry except `.git`. Use the name as it appears on disk. Directories get a trailing slash.
- One `agents:` bullet per `AGENTS.md` path relative to `TARGET`, forward slashes, same exclusions as Step 5.
- One `manifest:` bullet per existing path, and only these names, at any depth except `/.git/` and `/node_modules/`: `package.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`, `pom.xml`, `build.gradle`, `build.gradle.kts`, `Gemfile`, `composer.json`, `requirements.txt`.
- Omit a category that has zero rows. Do not write `none`.
- Paths only. No descriptions.
- Do not edit the authorities table.
- Do not edit the `<!-- human-fill -->` block.
- The file must not contain the string `probe-fill` when you finish.

### Step 7 — Run the note gates

From `TARGET`:

```bash
node --experimental-strip-types .agents/notes/scripts/verify-agent-note-format.mts
node --experimental-strip-types .agents/notes/scripts/verify-agent-note-classification.mts
```

If Node rejects `--experimental-strip-types` as unrecognized, run those two paths once without the flag.

- Both exit 0: record the stdout lines under Gate.
- Either exits non-zero: copy stderr into the report. Do not edit a note that was already in `TARGET` before this run. Do not hand-edit a file you copied from a template to silence the gate. Stop after the report.

### Step 8 — Report

Use these headings. List paths. If a section has no rows, write `none`.

```markdown
## Retrofit report

Target: <TARGET>
Git: <yes or no>

### Created
### Kept
### Wired
### Human must fill
### Gate
### Not tried
```

`Human must fill` includes:

- any file that still contains `human-fill`, with the marker named
- `docs/code-standards.md` when `## Promoted rules` is still `None yet.` — say that nothing was promoted today
- `README.md` when this run created it from the stub
- `CLAUDE.md` when Step 4 left it for a human
- gate failures on notes that were already present

`Not tried` is the non-goals list: skill pack, `docs/subsystems/`, hooks, CI, CODEOWNERS, review bots, `--match-head-commit`, one worktree per session, invented modules.

## Optional parent-directory AGENTS.md

Do this only when the user asked for a local `AGENTS.md` and the parent directory already exists. Create `<that-directory>/AGENTS.md` containing only facts local to that directory, then apply Step 5 to it. Do not create the directory. Do not copy root standing orders into it.
