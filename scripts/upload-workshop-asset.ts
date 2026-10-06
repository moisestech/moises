#!/usr/bin/env tsx

/**
 * Upload a canonical AI Daily Operator image to Cloudinary.
 *
 * Required env:
 *   CLOUDINARY_CLOUD_NAME
 *   CLOUDINARY_API_KEY
 *   CLOUDINARY_API_SECRET
 *
 * Example:
 * pnpm asset:upload ./exports/founder-profile.png \
 *   --module m03 \
 *   --concept founder-profile \
 *   --role artifact \
 *   --status working
 */

import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import { basename, extname } from 'node:path'

const ROOT = 'dccmiami/workshops/ai-daily-operator'

const MODULE_FOLDERS: Record<string, string> = {
  core: '00-core',
  hero: '00-core/hero',
  signals: '00-core/signal-library',
  lenses: '00-core/judgment-lenses',
  'shared-ui': '00-core/shared-ui',
  marketing: '00-core/marketing',
  m01: '01-daily-operator/m01-attention-before-automation',
  m02: '01-daily-operator/m02-ai-fluency',
  m03: '01-daily-operator/m03-business-context',
  m04: '01-daily-operator/m04-daily-operator',
  m05: '02-connected-operator/m05-calendar-as-capacity',
  m06: '02-connected-operator/m06-signals-and-sources',
  m07: '03-business-pulse/m07-money-and-pipeline',
  m08: '04-friction-intelligence/m08-friction-intelligence',
  m09: '05-workflow-builder/m09-automation-selection',
  m10: '05-workflow-builder/m10-build-one-workflow',
  m11: '05-workflow-builder/m11-trust-and-approval',
  m12: '05-workflow-builder/m12-weekly-operator-review',
  capstone: '06-capstone/seven-day-experiment',
  'overlay-creative': '07-industry-overlays/creative-artist',
  'overlay-consultant': '07-industry-overlays/consultant-agency',
  'overlay-service': '07-industry-overlays/local-service',
  'overlay-retail': '07-industry-overlays/retail-hospitality',
  'overlay-nonprofit': '07-industry-overlays/nonprofit-cultural',
  'overlay-professional': '07-industry-overlays/professional-services',
  dcc: '08-dcc-case-study',
  drafts: '90-drafts-archive',
  rejected: '90-drafts-archive/rejected-drift',
  vendor: '90-drafts-archive/vendor-specific',
}

function parseArgs(argv: string[]) {
  const [file, ...rest] = argv

  if (!file) {
    throw new Error(
      'Missing file. Example: pnpm asset:upload ./exports/founder-profile.png --module m03 --concept founder-profile --role artifact',
    )
  }

  const flags: Record<string, string | boolean> = {}

  for (let i = 0; i < rest.length; i += 1) {
    const arg = rest[i]
    if (!arg.startsWith('--')) continue

    const key = arg.slice(2)
    const next = rest[i + 1]

    if (!next || next.startsWith('--')) {
      flags[key] = true
      continue
    }

    flags[key] = next
    i += 1
  }

  return { file, flags }
}

function requiredFlag(
  flags: Record<string, string | boolean>,
  name: string,
): string {
  const value = flags[name]
  if (!value || typeof value !== 'string') {
    throw new Error(`Missing --${name}`)
  }
  return value
}

function slug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function sign(params: Record<string, string>, secret: string) {
  const payload = Object.entries(params)
    .filter(([, value]) => value !== '')
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `${key}=${value}`)
    .join('&')

  return createHash('sha1')
    .update(`${payload}${secret}`)
    .digest('hex')
}

async function main() {
  const { file, flags } = parseArgs(process.argv.slice(2))

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME
  const apiKey = process.env.CLOUDINARY_API_KEY
  const apiSecret = process.env.CLOUDINARY_API_SECRET

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error(
      'Set CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, and CLOUDINARY_API_SECRET before uploading.',
    )
  }

  const moduleId = requiredFlag(flags, 'module')
  const concept = slug(requiredFlag(flags, 'concept'))
  const role = slug(String(flags.role || 'artifact'))
  const status = slug(String(flags.status || 'working'))

  const moduleFolder = MODULE_FOLDERS[moduleId]
  if (!moduleFolder) {
    throw new Error(
      `Unknown --module "${moduleId}". Valid values: ${Object.keys(MODULE_FOLDERS).join(', ')}`,
    )
  }

  const prefix =
    moduleId === 'core' ||
    moduleId === 'hero' ||
    moduleId === 'signals' ||
    moduleId === 'lenses' ||
    moduleId === 'shared-ui' ||
    moduleId === 'marketing'
      ? 'ado-core'
      : moduleId === 'capstone'
        ? 'ado-capstone'
        : moduleId.startsWith('overlay-')
          ? 'ado-overlay'
          : moduleId === 'dcc'
            ? 'ado-dcc'
            : moduleId.startsWith('m')
              ? `ado-${moduleId}`
              : 'ado-draft'

  const publicName = slug(
    typeof flags.id === 'string'
      ? flags.id
      : `${prefix}-${concept}`,
  )

  const assetFolder = `${ROOT}/${moduleFolder}`
  const publicId = `${assetFolder}/${publicName}`

  const timestamp = Math.floor(Date.now() / 1000).toString()
  const tags = [
    'ai-daily-operator',
    moduleId,
    concept,
    role,
    `status-${status}`,
    ...(typeof flags.tags === 'string'
      ? flags.tags
          .split(',')
          .map(slug)
          .filter(Boolean)
      : []),
  ].join(',')

  const context = [
    'course=ai-daily-operator',
    'method=founder-attention-os',
    `module=${moduleId}`,
    `concept=${concept}`,
    `role=${role}`,
    `status=${status}`,
  ].join('|')

  const signedParams: Record<string, string> = {
    asset_folder: assetFolder,
    backup: 'true',
    context,
    overwrite: 'true',
    public_id: publicId,
    tags,
    timestamp,
    unique_filename: 'false',
    use_filename: 'false',
  }

  const signature = sign(signedParams, apiSecret)
  const bytes = await readFile(file)

  const form = new FormData()
  form.set(
    'file',
    new Blob([bytes]),
    basename(file, extname(file)),
  )

  for (const [key, value] of Object.entries(signedParams)) {
    form.set(key, value)
  }

  form.set('api_key', apiKey)
  form.set('signature', signature)

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: 'POST',
      body: form,
    },
  )

  const result = (await response.json()) as {
    error?: { message?: string }
    public_id?: string
    secure_url?: string
    width?: number
    height?: number
    format?: string
  }

  if (!response.ok || result.error) {
    throw new Error(
      result.error?.message || `Cloudinary upload failed: ${response.status}`,
    )
  }

  console.log(
    JSON.stringify(
      {
        publicId: result.public_id,
        secureUrl: result.secure_url,
        width: result.width,
        height: result.height,
        format: result.format,
        module: moduleId,
        concept,
        role,
        status,
      },
      null,
      2,
    ),
  )
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exit(1)
})
