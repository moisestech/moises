'use client'

import type { CSSProperties, ReactNode } from 'react'
import { moonlighterCssVars } from '@/content/workshops/moonlighter-ai-3d-printing/visual-tokens'

export function MoonlighterShell({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div
      className={`min-h-screen bg-[var(--ml-paper)] text-[var(--ml-ink)] antialiased [&_a:focus-visible]:outline [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-2 [&_a:focus-visible]:outline-[var(--ml-accent)] [&_button:focus-visible]:outline [&_button:focus-visible]:outline-2 [&_button:focus-visible]:outline-offset-2 [&_button:focus-visible]:outline-[var(--ml-accent)] [&_input:focus-visible]:outline [&_input:focus-visible]:outline-2 [&_input:focus-visible]:outline-offset-2 [&_input:focus-visible]:outline-[var(--ml-accent)] [&_textarea:focus-visible]:outline [&_textarea:focus-visible]:outline-2 [&_textarea:focus-visible]:outline-offset-2 [&_textarea:focus-visible]:outline-[var(--ml-accent)] [&_select:focus-visible]:outline [&_select:focus-visible]:outline-2 [&_select:focus-visible]:outline-offset-2 [&_select:focus-visible]:outline-[var(--ml-accent)] ${className}`}
      style={moonlighterCssVars as CSSProperties}
    >
      {children}
    </div>
  )
}
