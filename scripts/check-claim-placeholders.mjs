#!/usr/bin/env node
/**
 * Prod claim guard: fail if a [MOISES: placeholder would ship.
 * FDE scorecard schema is asserted when `fde-evidence.ts` is imported at build.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = process.cwd()
const MARKER = '[MOISES:'
const SKIP_DIR = new Set(['node_modules', '.next', '.git', 'tmp', 'dist', 'coverage'])

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIR.has(name)) continue
    const full = join(dir, name)
    const st = statSync(full)
    if (st.isDirectory()) walk(full, acc)
    else if (/\.(ts|tsx|js|jsx|mjs|md|json)$/.test(name)) acc.push(full)
  }
  return acc
}

const hits = []
for (const file of walk(join(ROOT, 'src'))) {
  const text = readFileSync(file, 'utf8')
  if (text.includes(MARKER)) hits.push(relative(ROOT, file))
}

if (hits.length) {
  console.error(`Claim placeholder ${MARKER} found in:\n${hits.map((h) => `  ${h}`).join('\n')}`)
  process.exit(1)
}

console.log('Claim placeholders: none.')
