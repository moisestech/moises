'use client'

import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary'

interface ErrorFallbackProps {
  error: Error
  resetErrorBoundary: () => void
}

function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-[#4D9DE0]/20 via-[#41E079]/10 to-transparent">
      <div className="relative p-8 rounded-lg bg-white/10 backdrop-blur-lg">
        <h2 className="text-xl font-bold mb-4">Something went wrong</h2>
        <pre className="text-sm mb-4">{error.message}</pre>
        <button
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  )
} 