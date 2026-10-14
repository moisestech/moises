#!/usr/bin/env node
/**
 * Upload Post-AI Readymades from a manifest TSV.
 *
 * Dry run (no network, no log):
 *   node scripts/upload-post-ai-readymades.mjs --dry-run
 *
 * Real upload requires CLOUDINARY_URL in .env.local (gitignored). Never prints the secret.
 * Existing public IDs are skipped. The manifest TSV is not modified.
 */
import { createHash } from 'node:crypto'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { homedir } from 'node:os'
import { basename, dirname, extname, join, resolve } from 'node:path'
import { v2 as cloudinary } from 'cloudinary'

const FOLDER = 'art/moisestech-website/research/post-ai-readymades'
const DEFAULT_MANIFEST = join(
  homedir(),
  'Documents/art/artworks/post-ai-readymades/_manifest.tsv',
)
const SERIES = '365 Post-AI Readymades'
const PROJECT = 'Born Into the Machine'

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const manifestFlag = args.find((arg) => arg.startsWith('--manifest='))
const manifestPath = resolve(manifestFlag ? manifestFlag.slice('--manifest='.length) : DEFAULT_MANIFEST)

function loadEnvLocal() {
  const path = resolve(process.cwd(), '.env.local')
  if (!existsSync(path)) return
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const eq = trimmed.indexOf('=')
    if (eq < 1) continue
    const key = trimmed.slice(0, eq).trim()
    let value = trimmed.slice(eq + 1).trim()
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1)
    }
    if (process.env[key] == null) process.env[key] = value
  }
}

function parseTsv(text) {
  const lines = text.replace(/^\uFEFF/, '').split(/\r?\n/).filter((line) => line.trim())
  const headers = lines[0].split('\t')
  return lines.slice(1).map((line) => {
    const cells = line.split('\t')
    return Object.fromEntries(headers.map((header, index) => [header, cells[index] ?? '']))
  })
}

function escapeContext(value) {
  return String(value).replace(/\\/g, '\\\\').replace(/[=|]/g, (char) => `\\${char}`)
}

function contextFor(row) {
  return [
    `study=${escapeContext(row.study)}`,
    `title=${escapeContext(row.title)}`,
    `series=${escapeContext(SERIES)}`,
    `project=${escapeContext(PROJECT)}`,
  ].join('|')
}

function tagsFor(row) {
  return ['post-ai-readymades', 'born-into-the-machine', `study-${row.study}`]
}

function csvCell(value) {
  const text = value == null ? '' : String(value)
  if (/[",\n]/.test(text)) return `"${text.replace(/"/g, '""')}"`
  return text
}

function writeLog(logPath, records) {
  const headers = [
    'file',
    'study',
    'title',
    'public_id',
    'secure_url',
    'width',
    'height',
    'bytes',
    'uploaded_at',
    'result',
  ]
  const lines = [
    headers.join(','),
    ...records.map((record) => headers.map((header) => csvCell(record[header])).join(',')),
  ]
  writeFileSync(logPath, `${lines.join('\n')}\n`)
}

loadEnvLocal()
if (!existsSync(manifestPath)) {
  console.error(`Manifest not found: ${manifestPath}`)
  process.exit(1)
}

const rows = parseTsv(readFileSync(manifestPath, 'utf8'))
const imageDir = dirname(manifestPath)
const planned = []

for (const row of rows) {
  const filePath = join(imageDir, row.file)
  const stem = basename(row.file, extname(row.file))
  const publicId = `${FOLDER}/${stem}`
  const entry = {
    row,
    filePath,
    publicId,
    exists: existsSync(filePath),
    md5: null,
    md5Ok: false,
    bytes: null,
  }
  if (entry.exists) {
    const bytes = readFileSync(filePath)
    entry.bytes = bytes.length
    entry.md5 = createHash('md5').update(bytes).digest('hex')
    entry.md5Ok = entry.md5 === row.md5
  }
  planned.push(entry)
}

console.log(dryRun ? 'DRY RUN' : 'UPLOAD')
console.log(`manifest: ${manifestPath}`)
console.log(`folder: ${FOLDER}`)
console.log(`rows: ${planned.length}`)

for (const entry of planned) {
  const { row } = entry
  const check = !entry.exists ? 'missing' : entry.md5Ok ? 'md5-ok' : 'md5-mismatch'
  console.log(
    [
      check,
      row.study,
      row.title,
      row.file,
      entry.publicId,
      entry.bytes ?? '',
      `${row.width}x${row.height}`,
    ].join('\t'),
  )
}

const blocked = planned.filter((entry) => !entry.exists || !entry.md5Ok)
if (blocked.length) {
  console.error(`\n${blocked.length} file(s) failed verification and will be skipped.`)
}

if (dryRun) {
  console.log('\nNo files uploaded. Re-run without --dry-run after CLOUDINARY_URL is in .env.local.')
  process.exit(blocked.length ? 1 : 0)
}

if (!process.env.CLOUDINARY_URL) {
  console.error('\nCLOUDINARY_URL is missing from .env.local. Add it there yourself. Nothing was uploaded.')
  process.exit(1)
}

cloudinary.config({ cloudinary_url: process.env.CLOUDINARY_URL, secure: true })

const records = []
const uploadedAt = new Date().toISOString()

for (const entry of planned) {
  const { row } = entry
  if (!entry.exists || !entry.md5Ok) {
    records.push({
      file: row.file,
      study: row.study,
      title: row.title,
      public_id: entry.publicId,
      secure_url: '',
      width: '',
      height: '',
      bytes: entry.bytes ?? '',
      uploaded_at: uploadedAt,
      result: 'error',
    })
    continue
  }

  try {
    const result = await cloudinary.uploader.upload(entry.filePath, {
      public_id: entry.publicId,
      asset_folder: FOLDER,
      use_filename: true,
      unique_filename: false,
      overwrite: false,
      context: contextFor(row),
      tags: tagsFor(row),
    })
    const skipped = result.existing === true
    records.push({
      file: row.file,
      study: row.study,
      title: row.title,
      public_id: result.public_id,
      secure_url: skipped ? '' : result.secure_url,
      width: result.width ?? row.width,
      height: result.height ?? row.height,
      bytes: result.bytes ?? entry.bytes,
      uploaded_at: uploadedAt,
      result: skipped ? 'skipped-exists' : 'uploaded',
    })
    console.log(`${skipped ? 'skipped-exists' : 'uploaded'}\t${result.public_id}`)
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error)
    console.error(`error\t${entry.publicId}\t${message}`)
    records.push({
      file: row.file,
      study: row.study,
      title: row.title,
      public_id: entry.publicId,
      secure_url: '',
      width: '',
      height: '',
      bytes: entry.bytes ?? '',
      uploaded_at: uploadedAt,
      result: 'error',
    })
  }
}

const logPath = join(imageDir, '_cloudinary-upload-log.csv')
writeLog(logPath, records)
console.log(`log: ${logPath}`)

if (records.some((record) => record.result === 'error')) process.exit(1)
