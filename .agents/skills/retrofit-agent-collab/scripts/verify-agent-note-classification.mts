/**
 * Enforce Agent Note lifecycle/class paths and dated filenames.
 *
 * Run from the repository root:
 *   node --experimental-strip-types .agents/notes/scripts/verify-agent-note-classification.mts
 */

import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { repoRoot, walkAgentNoteTree } from './agent-note-tree.mts'

const { notes, errors } = walkAgentNoteTree()

for (const legacyRoot of ['docs/rfc', 'docs/rfcs']) {
  if (existsSync(resolve(repoRoot, legacyRoot))) {
    errors.push(`legacy-path: ${legacyRoot}/ is forbidden — put Agent Notes under .agents/notes/`)
  }
}

if (errors.length === 0) {
  console.log(`verify-agent-note-classification: ${notes.length} Agent Note(s) checked, structure consistent.`)
  process.exit(0)
}

console.error('verify-agent-note-classification: violations found:')
for (const error of errors) console.error(`  ${error}`)
process.exit(1)
