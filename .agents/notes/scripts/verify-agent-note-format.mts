/**
 * Enforce Agent Note headers, lifecycle sections, and alternatives.
 * Path layout belongs to verify-agent-note-classification.mts; both call the walker,
 * so a broken tree fails this command too.
 *
 * Run from the repository root:
 *   node --experimental-strip-types .agents/notes/scripts/verify-agent-note-format.mts
 */

import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { agentNoteRoot, walkAgentNoteTree } from './agent-note-tree.mts'

/** Grandfather comment is valid only for notes dated before this day. */
const FORMAT_ADOPTED = '2026-07-05'

const GRANDFATHER = '<!-- agent-note-format: alternatives-not-recorded (pre-format Agent Note) -->'

const LEGACY_MARKERS = ['XXX: legacy ADR/RFC body format', 'XXX: legacy ADR/Agent Note body format']

/** Line-3 grammar. Archived notes keep `Status: implemented`. */
const STATUS: Record<string, RegExp> = {
  proposed: /^Status: proposed$/,
  implemented: /^Status: implemented$/,
  rejected: /^Status: rejected — .+$/,
  archived: /^Status: implemented$/,
}

const REQUIRED: Record<string, string[]> = {
  proposed: ['## Proposal', '## Acceptance criteria', '## Risks'],
  implemented: ['## Decision', '## Consequences'],
  rejected: ['## Proposal'],
  archived: ['## Decision', '## Consequences'],
}

const BANNED_IMPLEMENTED = /^## (?:Proposal\b|Plan\b|Migration plan\b|Acceptance criteria\b)/i

/**
 * Drop CommonMark fences and the lines inside them. A fence is 0–3 spaces, then
 * three or more backticks or tildes. The closing fence uses the same character
 * and at least as many. A backtick fence does not open when the info string
 * contains a backtick.
 */
function proseOutsideFences(lines: string[]): string[] {
  let fence: { char: string; len: number } | null = null
  const prose: string[] = []
  for (const line of lines) {
    const match = /^( {0,3})(`{3,}|~{3,})(.*)$/.exec(line)
    if (match) {
      const marker = match[2] ?? ''
      const rest = match[3] ?? ''
      const char = marker[0] ?? ''
      if (fence === null) {
        if (char === '`' && rest.includes('`')) {
          prose.push(line)
        } else {
          fence = { char, len: marker.length }
        }
        continue
      }
      if (char === fence.char && marker.length >= fence.len && rest.trim() === '') {
        fence = null
      }
      continue
    }
    if (fence === null) prose.push(line)
  }
  return prose
}

const { notes, errors } = walkAgentNoteTree()

for (const note of notes) {
  const fail = (msg: string): void => {
    errors.push(`format: ${note.rel} — ${msg}`)
  }
  const text = readFileSync(resolve(agentNoteRoot, note.rel), 'utf8').replace(/\r\n/g, '\n').replace(/\r/g, '\n')
  const lines = text.split('\n')
  const prose = proseOutsideFences(lines)

  if (!/^# Agent Note: \S/.test(lines[0] ?? '')) fail('line 1 must be `# Agent Note: <title>`')
  if ((lines[1] ?? undefined) !== '') fail('line 2 must be blank')
  const status = STATUS[note.lifecycle]
  if (status !== undefined && !status.test(lines[2] ?? '')) {
    fail(`line 3 must match the ${note.lifecycle} status grammar (${String(status)})`)
  }
  if ((lines[3] ?? undefined) !== '') fail('line 4 must be blank')

  const statusLines = prose.filter((line) => line.startsWith('Status:') && line !== lines[2])
  if (statusLines.length > 0 || prose.filter((line) => line === lines[2]).length > 1) {
    fail('the line-3 `Status:` line must be the only one in the file')
  }

  const h2s = prose.filter((line) => line.startsWith('## ')).map((line) => line.trimEnd())
  if (h2s[0] !== '## Problem') {
    fail(`the first section must be \`## Problem\` (got ${JSON.stringify(h2s[0] ?? '<none>')})`)
  }
  for (const required of REQUIRED[note.lifecycle] ?? []) {
    if (!h2s.includes(required)) fail(`missing the required \`${required}\` section`)
  }
  if (note.lifecycle === 'implemented' || note.lifecycle === 'archived') {
    for (const h2 of h2s.filter((heading) => BANNED_IMPLEMENTED.test(heading))) {
      fail(`\`${h2}\` is a proposal-era heading; an implemented Agent Note states what is (fold it into Decision/Consequences/Testing)`)
    }
  }

  const hasSection = h2s.includes('## Alternatives considered')
  const hasGrandfather = prose.includes(GRANDFATHER)
  if (hasSection && hasGrandfather) {
    fail('carries both `## Alternatives considered` and the grandfather comment — drop the comment')
  }
  if (!hasSection && !hasGrandfather) {
    fail('missing `## Alternatives considered` (a pre-format Agent Note whose alternatives are not reconstructible carries the grandfather comment instead — see .agents/notes/README.md)')
  }
  if (hasGrandfather && note.date >= FORMAT_ADOPTED) {
    fail(`the grandfather comment is only valid for Agent Notes dated before ${FORMAT_ADOPTED}`)
  }
  if (prose.some((line) => LEGACY_MARKERS.some((marker) => line.includes(marker)))) {
    fail('carries the retired legacy-format debt marker')
  }
}

if (errors.length === 0) {
  console.log(`verify-agent-note-format: ${notes.length} Agent Note(s) checked, all conform to .agents/notes/README.md.`)
  process.exit(0)
}

console.error('verify-agent-note-format: violations found:')
for (const error of errors) console.error(`  ${error}`)
process.exit(1)
