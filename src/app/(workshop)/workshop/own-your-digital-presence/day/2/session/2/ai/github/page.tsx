'use client'

import { Code, MessageSquare, BookOpen, Settings, Terminal } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function GitHubCopilotPage() {
  return (
    <ContentPage
      title="GitHub Copilot"
      description="Learn how to use GitHub Copilot for code completion and development"
      icon={Code}
      sections={[
        {
          title: "Getting Started",
          content: (
            <div className="space-y-6">
              <div className="p-4 rounded-lg border border-blue-200 bg-blue-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Settings className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="font-medium text-gray-900">Setting Up Copilot</h4>
                </div>
                <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                  <li>Install GitHub Copilot extension</li>
                  <li>Sign in with GitHub account</li>
                  <li>Start typing in your editor</li>
                  <li>Accept suggestions with Tab</li>
                </ol>
              </div>
            </div>
          )
        },
        {
          title: "Features",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border border-blue-200 bg-blue-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Code className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Code Completion</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Real-time suggestions</li>
                    <li>Context-aware code</li>
                    <li>Multi-language support</li>
                    <li>Function generation</li>
                    <li>Error prevention</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-blue-200 bg-blue-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <MessageSquare className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Documentation</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Code explanations</li>
                    <li>API documentation</li>
                    <li>Best practices</li>
                    <li>Pattern suggestions</li>
                    <li>Learning resources</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-blue-200 bg-blue-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Terminal className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Development</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Debugging help</li>
                    <li>Code refactoring</li>
                    <li>Test generation</li>
                    <li>Security checks</li>
                    <li>Performance tips</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Best Practices",
          content: (
            <div className="space-y-6">
              <div className="p-4 rounded-lg border border-blue-200 bg-blue-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <h4 className="font-medium text-gray-900">Using Copilot</h4>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Review suggestions carefully</li>
                  <li>Understand the code</li>
                  <li>Test generated code</li>
                  <li>Maintain code quality</li>
                  <li>Learn from suggestions</li>
                </ul>
              </div>
            </div>
          )
        },
        {
          title: "Next Steps",
          content: (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/2/ai"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Code className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Back to AI Tools</h4>
                    <p className="text-sm text-gray-600">Return to AI tools overview</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/2/ai/wix"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <MessageSquare className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Wix AI Guide</h4>
                    <p className="text-sm text-gray-600">Learn about Wix AI Assistant</p>
                  </div>
                </Link>
              </div>
            </div>
          )
        }
      ]}
    />
  )
} 