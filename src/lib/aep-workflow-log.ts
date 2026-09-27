export type AepWorkflowEntry = {
  ticket: string
  title: string
  date: string
  implementer: string
  reviewer: string
  firstPass: 'PASS' | 'FAIL'
  whatWentWrong: string
  howCaught: string
  whatChanged: string
  time: string
}

export type AepWorkflowParseResult = {
  entries: AepWorkflowEntry[]
  skipped: number
  source: 'remote' | 'snapshot'
}

const FIELD =
  /^- (Date|Implementer|Reviewer|First-pass result|What went wrong|How it was caught|What I changed|Time): (.+)$/

export function parseAepWorkflowLog(markdown: string): { entries: AepWorkflowEntry[]; skipped: number } {
  const chunks = markdown.split(/^### /m).slice(1)
  const entries: AepWorkflowEntry[] = []
  let skipped = 0

  for (const chunk of chunks) {
    const lines = chunk.trim().split('\n')
    const heading = lines[0]?.trim() ?? ''
    const match = heading.match(/^(TICKET-\S+)\s+—\s+(.+)$/)
    if (!match) {
      skipped += 1
      continue
    }

    const fields: Record<string, string> = {}
    for (const line of lines.slice(1)) {
      const field = line.match(FIELD)
      if (field) fields[field[1]] = field[2].trim()
    }

    const firstPass = fields['First-pass result']
    if (firstPass !== 'PASS' && firstPass !== 'FAIL') {
      skipped += 1
      continue
    }
    if (!fields.Date || !fields.Implementer || !fields.Reviewer) {
      skipped += 1
      continue
    }

    entries.push({
      ticket: match[1],
      title: match[2],
      date: fields.Date,
      implementer: fields.Implementer,
      reviewer: fields.Reviewer,
      firstPass,
      whatWentWrong: fields['What went wrong'] ?? 'nothing',
      howCaught: fields['How it was caught'] ?? '',
      whatChanged: fields['What I changed'] ?? '',
      time: fields.Time ?? '',
    })
  }

  return { entries, skipped }
}

export function workflowLogNumbers(entries: AepWorkflowEntry[]) {
  if (entries.length < 5) {
    return { ticketsLogged: entries.length, firstPassRate: null as number | null }
  }
  const passed = entries.filter((entry) => entry.firstPass === 'PASS').length
  return { ticketsLogged: entries.length, firstPassRate: passed / entries.length }
}
