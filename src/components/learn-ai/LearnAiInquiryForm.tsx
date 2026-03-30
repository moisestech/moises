'use client'

import { useCallback, useState } from 'react'
import { LEARN_AI_EMAIL } from '@/constants/learn-ai-content'
import { mailtoLearnAi } from '@/lib/learn-ai-mailto'

const fieldClass =
  'w-full rounded-sm border border-zinc-700 bg-zinc-900/60 px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950'

export function LearnAiInquiryForm() {
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    audience: '',
    format: '',
    date: '',
    notes: '',
  })

  const submitInquiry = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      const lines = [
        form.name && `Name: ${form.name}`,
        form.organization && `Organization: ${form.organization}`,
        form.email && `Email: ${form.email}`,
        form.audience && `Audience: ${form.audience}`,
        form.format && `Preferred format: ${form.format}`,
        form.date && `Proposed date: ${form.date}`,
        form.notes && `Notes / goals:\n${form.notes}`,
      ].filter(Boolean)
      window.location.href = mailtoLearnAi('Learn AI Without Losing Yourself — inquiry', lines.join('\n\n'))
    },
    [form]
  )

  return (
    <form onSubmit={submitInquiry} className="space-y-5">
      {(
        [
          ['name', 'Name', 'text'],
          ['organization', 'Organization', 'text'],
          ['email', 'Email', 'email'],
          ['audience', 'Audience type', 'text'],
          ['format', 'Preferred format', 'text'],
          ['date', 'Proposed date', 'text'],
        ] as const
      ).map(([key, label, type]) => (
        <div key={key}>
          <label htmlFor={`learn-ai-${key}`} className="block text-xs uppercase tracking-wider text-zinc-500 mb-1.5">
            {label}
          </label>
          <input
            id={`learn-ai-${key}`}
            name={key}
            type={type}
            autoComplete={key === 'email' ? 'email' : 'off'}
            value={form[key]}
            onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
            className={fieldClass}
          />
        </div>
      ))}
      <div>
        <label htmlFor="learn-ai-notes" className="block text-xs uppercase tracking-wider text-zinc-500 mb-1.5">
          Notes / goals for the session
        </label>
        <textarea
          id="learn-ai-notes"
          name="notes"
          rows={4}
          value={form.notes}
          onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
          className={`${fieldClass} resize-y min-h-[100px]`}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <button
          type="submit"
          className="inline-flex justify-center items-center rounded-sm bg-zinc-100 text-zinc-950 px-6 py-3 text-sm font-medium hover:bg-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          Send inquiry
        </button>
        <a
          href={mailtoLearnAi('Request details: Learn AI Without Losing Yourself')}
          className="inline-flex justify-center items-center rounded-sm border border-zinc-600 text-zinc-200 px-6 py-3 text-sm font-medium hover:bg-zinc-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
        >
          Open email only
        </a>
      </div>
    </form>
  )
}

export { LEARN_AI_EMAIL }
