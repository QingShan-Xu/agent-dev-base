# Agent Note: Chinese notes README can wait

Status: proposed

## Problem

v1 Agent Notes are English-only. A maintainer who wants the format rules in Chinese has no file for that text. A translated README with no pairing check will drift from the English headings the gate requires.

## Proposal

Keep `.agents/notes/README.md` and the note skeleton in English for v1. Add a Chinese README only after a maintainer has a real note they cannot review in English. Do not add a `.zh.md` pairing gate in that same change unless English and Chinese are checked together.

## Alternatives considered

### Why not translate the README now?

There is no pairing check. The two files would diverge on the first edit. v1 dropped that gate because it needed the rest of the dsh i18n tooling.

### Why not require every note to be bilingual?

This repo has no translation workflow. Adding one is another project.

## Acceptance criteria

- `.agents/notes/README.md` states that v1 is English-only and that `.zh.md` files are not required.
- No pairing script is added.
- A later note can reverse this decision. This file stays a proposal until then.

## Risks

Readers who wanted the Chinese dsh notes README will not find it here. Until a later note says otherwise, the English README is the only format authority.
