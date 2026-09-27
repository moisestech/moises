import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { parseAepWorkflowLog, type AepWorkflowParseResult } from './aep-workflow-log'

export const AEP_WORKFLOW_LOG_URL =
  'https://raw.githubusercontent.com/moisestech/agentic-evidence-pipeline/main/docs/agentic-workflow.md'

function snapshotMarkdown() {
  return readFileSync(join(process.cwd(), 'src/content/aep-workflow-log.snapshot.md'), 'utf8')
}

export async function loadAepWorkflowLog(): Promise<AepWorkflowParseResult> {
  try {
    const response = await fetch(AEP_WORKFLOW_LOG_URL, { next: { revalidate: 3600 } })
    if (!response.ok) {
      console.warn(`AEP workflow log fetch failed: ${response.status}. Using snapshot.`)
      const parsed = parseAepWorkflowLog(snapshotMarkdown())
      return { ...parsed, source: 'snapshot' }
    }
    const parsed = parseAepWorkflowLog(await response.text())
    if (parsed.skipped) {
      console.warn(`AEP workflow log: skipped ${parsed.skipped} malformed entries.`)
    }
    return { ...parsed, source: 'remote' }
  } catch (error) {
    console.warn('AEP workflow log fetch error. Using snapshot.', error)
    const parsed = parseAepWorkflowLog(snapshotMarkdown())
    return { ...parsed, source: 'snapshot' }
  }
}
