/**
 * Structural source of truth for the Agent Note tree.
 * Lifecycle and class sets match `.agents/notes/README.md`.
 * This file is installed at `<repo>/.agents/notes/scripts/agent-note-tree.mts`.
 * It locates the notes root as its parent directory. Do not run it from the skill payload path.
 */

import { existsSync, readdirSync, statSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const scriptDir = dirname(fileURLToPath(import.meta.url))

/** `<repo>/.agents/notes` when this file lives in `.agents/notes/scripts/`. */
export const agentNoteRoot = resolve(scriptDir, '..')

/** Repository root: parent of `.agents/`. */
export const repoRoot = resolve(agentNoteRoot, '../..')

/** Active lifecycle folders. `archived/` is a shelf, not a fourth active status. */
export const AGENT_NOTE_LIFECYCLES = ['proposed', 'implemented', 'rejected'] as const

/** Historical implemented notes. Not hash-frozen in v1. */
export const AGENT_NOTE_ARCHIVE = 'archived'

/**
 * Closed class set. Adding a class means editing this list and the Classification
 * table in `.agents/notes/README.md` together.
 */
export const AGENT_NOTE_CLASSES = ['feature', 'bug-fix', 'simplification', 'architecture', 'process', 'testing'] as const

/** Directories under `.agents/notes/` that are not lifecycles. */
const IGNORED_TOP_DIRS = new Set(['scripts'])

/** Markdown allowed to sit directly on a lifecycle folder (not a note). */
const ROOT_ALLOWLIST = new Set(['AGENTS.md', 'CLAUDE.md'])

export interface AgentNote {
  /** `proposed`, `implemented`, `rejected`, or `archived`. */
  lifecycle: string
  /** Path relative to `.agents/notes`, POSIX separators. */
  rel: string
  /** `yyyy-mm-dd` from the filename. */
  date: string
}

export function walkAgentNoteTree(): { notes: AgentNote[]; errors: string[] } {
  const notes: AgentNote[] = []
  const errors: string[] = []
  const lifecycles = AGENT_NOTE_LIFECYCLES as readonly string[]
  const classes = AGENT_NOTE_CLASSES as readonly string[]

  if (!existsSync(agentNoteRoot)) {
    errors.push('structure: .agents/notes/ is missing')
    return { notes, errors }
  }

  for (const entry of readdirSync(agentNoteRoot, { withFileTypes: true })) {
    if (entry.name === 'INDEX.md') {
      errors.push('structure: INDEX.md — centralized Agent Note indexes are forbidden; browse the lifecycle/class tree or search the repository')
      continue
    }
    if (!entry.isDirectory()) continue
    if (IGNORED_TOP_DIRS.has(entry.name) || entry.name === AGENT_NOTE_ARCHIVE) continue
    if (!lifecycles.includes(entry.name)) {
      errors.push(`structure: ${entry.name}/ — unknown lifecycle folder (allowed: ${lifecycles.join(', ')}, plus ${AGENT_NOTE_ARCHIVE}/ and scripts/)`)
    }
  }

  for (const lifecycle of [...lifecycles, AGENT_NOTE_ARCHIVE]) {
    const lifePath = join(agentNoteRoot, lifecycle)
    if (!existsSync(lifePath) || !statSync(lifePath).isDirectory()) {
      errors.push(`structure: missing lifecycle folder ${lifecycle}/`)
      continue
    }

    const present = new Set<string>()
    for (const entry of readdirSync(lifePath, { withFileTypes: true })) {
      if (entry.isDirectory()) {
        present.add(entry.name)
        if (!classes.includes(entry.name)) {
          errors.push(`structure: ${lifecycle}/${entry.name}/ — unknown class folder "${entry.name}" (allowed: ${classes.join(', ')})`)
        }
        continue
      }
      if (ROOT_ALLOWLIST.has(entry.name) || entry.name === '.gitkeep') continue
      if (entry.name.endsWith('.md')) {
        errors.push(`structure: ${lifecycle}/${entry.name} — expected {lifecycle}/{class}/yyyy-mm-dd-topic.md`)
      }
    }

    for (const cls of classes) {
      if (!present.has(cls)) errors.push(`structure: missing ${lifecycle}/${cls}/`)
    }

    for (const cls of classes) {
      const classPath = join(lifePath, cls)
      if (!existsSync(classPath) || !statSync(classPath).isDirectory()) continue
      for (const entry of readdirSync(classPath, { withFileTypes: true })) {
        if (entry.isDirectory()) {
          errors.push(`structure: ${lifecycle}/${cls}/${entry.name}/ — notes are files, not nested directories`)
          continue
        }
        if (entry.name === '.gitkeep' || entry.name.endsWith('.zh.md')) continue
        if (!entry.name.endsWith('.md')) continue
        const rel = `${lifecycle}/${cls}/${entry.name}`
        if (!/^\d{4}-\d{2}-\d{2}-.+\.md$/.test(entry.name)) {
          errors.push(`structure: ${rel} — filename must be yyyy-mm-dd-topic.md`)
          continue
        }
        notes.push({ lifecycle, rel, date: entry.name.slice(0, 10) })
      }
    }
  }

  notes.sort((a, b) => a.rel.localeCompare(b.rel))
  return { notes, errors }
}
