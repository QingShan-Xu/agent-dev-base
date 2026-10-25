# Agent Note: Chinese notes README can wait

Status: proposed

## Problem

v1 Agent Notes are English-only. A maintainer who wants the format rules in Chinese has nowhere to put that text. A translated README with no pairing check will drift from the headings the gate requires, and those headings stay English.

## Proposal

Keep `.agents/notes/README.md` and the note skeleton in English for v1. Add a Chinese README only after a maintainer has a real note they cannot review in English. Do not add a `.zh.md` pairing gate in that change unless English and Chinese are checked together.

## Alternatives considered

**Translate the README now.** There is no pairing check. The two files would diverge on the first edit. v1 dropped that gate because it needed the rest of the dsh i18n tooling.

**Require every note to be bilingual.** This repo has no translation workflow. Adding one is a second project.

## Acceptance criteria

- `.agents/notes/README.md` states that v1 is English-only and that `.zh.md` files are not required.
- No pairing script is added.
- A later note can reverse this decision. This file stays the proposal until that happens.

## Risks

Readers who wanted the Chinese dsh notes README will not find it here. The English README is the only format authority until a later note says otherwise.
