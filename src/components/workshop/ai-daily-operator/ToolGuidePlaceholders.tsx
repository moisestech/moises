import { DAILY_OPERATOR_TOOL_GUIDES } from '@/content/workshops/ai-daily-operator/tool-guides'

type PlaceholderMode = 'compact' | 'detailed'

export function ToolGuidePlaceholders({
  level = 'I',
  mode = 'detailed',
}: {
  level?: 'I' | 'II' | 'III' | 'V'
  mode?: PlaceholderMode
}) {
  const captures = DAILY_OPERATOR_TOOL_GUIDES.filter(
    (capture) => capture.level === level,
  )

  const groups = Array.from(
    captures.reduce((map, capture) => {
      const current = map.get(capture.tool) ?? []
      current.push(capture)
      map.set(capture.tool, current)
      return map
    }, new Map<string, typeof captures>()),
  )

  if (mode === 'compact') {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map(([tool, items]) => {
          const screenshots = items.filter((item) => item.kind === 'screenshot').length
          const videos = items.filter((item) => item.kind === 'video').length
          return (
            <div
              key={tool}
              className="border border-dashed border-[#b9aea0] bg-[#fbf7f1] p-5"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#0f5f5c]">
                Real walkthrough pending
              </p>
              <p className="mt-2 text-xl capitalize tracking-tight">
                {tool.replace('-', ' ')}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#5c564e]">
                {screenshots} screenshots
                {videos ? ` + ${videos} short demo${videos > 1 ? 's' : ''}` : ''}
                . These placeholders will be replaced with current real product
                captures rather than generated UI.
              </p>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {groups.map(([tool, items]) => (
        <section
          key={tool}
          className="border border-[#d9d0c3] bg-[#fbf7f1] p-5"
          aria-label={`${tool} walkthrough capture plan`}
        >
          <div className="flex items-baseline justify-between gap-4 border-b border-[#d9d0c3] pb-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#0f5f5c]">
                Real product documentation
              </p>
              <h3 className="mt-2 text-2xl capitalize tracking-tight">
                {tool.replace('-', ' ')}
              </h3>
            </div>
            <p className="font-mono text-[10px] text-[#5c564e]">
              {items.length} assets
            </p>
          </div>

          <ol className="mt-5 space-y-4">
            {items.map((item, index) => (
              <li
                key={item.id}
                className="grid gap-3 border-t border-[#e6ddd2] pt-4 first:border-t-0 first:pt-0 sm:grid-cols-[2.5rem_minmax(0,1fr)]"
              >
                <div className="flex h-10 w-10 items-center justify-center border border-dashed border-[#b9aea0] font-mono text-[10px] text-[#5c564e]">
                  {item.kind === 'video' ? '▶' : String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <p className="text-sm font-medium">{item.title}</p>
                    <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#7a3412]">
                      {item.status}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-[#5c564e]">
                    {item.purpose}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  )
}
