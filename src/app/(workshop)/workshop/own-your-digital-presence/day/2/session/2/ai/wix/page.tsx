'use client'

import { Sparkles, Code, MessageSquare, BookOpen, Settings } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function WixAIPage() {
  return (
    <ContentPage
      title="Wix AI Assistant"
      description="Learn how to use Wix's AI Assistant for code generation and development"
      icon={Sparkles}
      sections={[
        {
          title: "Getting Started",
          content: (
            <div className="space-y-6">
              <div className="p-4 rounded-lg border border-yellow-200 bg-yellow-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Settings className="h-5 w-5 text-yellow-600" />
                  </div>
                  <h4 className="font-medium text-gray-900">Accessing the AI Assistant</h4>
                </div>
                <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                  <li>Open the Wix IDE</li>
                  <li>Click the AI Assistant icon in the sidebar</li>
                  <li>Or right-click in the editor and select "Open AI Assistant"</li>
                  <li>The AI Assistant panel will open</li>
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
                <div className="p-4 rounded-lg border border-yellow-200 bg-yellow-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Code className="h-5 w-5 text-yellow-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Code Generation</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Generate code snippets</li>
                    <li>Create event handlers</li>
                    <li>Implement features</li>
                    <li>Fix errors</li>
                    <li>Get API examples</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-yellow-200 bg-yellow-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <MessageSquare className="h-5 w-5 text-yellow-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Interactive Chat</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Ask follow-up questions</li>
                    <li>Get clarifications</li>
                    <li>Request modifications</li>
                    <li>Learn about features</li>
                    <li>Get best practices</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-yellow-200 bg-yellow-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <BookOpen className="h-5 w-5 text-yellow-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Documentation</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Access API reference</li>
                    <li>Get code examples</li>
                    <li>Learn about features</li>
                    <li>Find best practices</li>
                    <li>Get troubleshooting help</li>
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
              <div className="p-4 rounded-lg border border-yellow-200 bg-yellow-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-yellow-100 rounded-lg">
                    <Sparkles className="h-5 w-5 text-yellow-600" />
                  </div>
                  <h4 className="font-medium text-gray-900">Using the AI Assistant</h4>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Be specific in your requests</li>
                  <li>Test generated code before using</li>
                  <li>Use follow-up questions for clarification</li>
                  <li>Review and understand the code</li>
                  <li>Combine with manual coding</li>
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
                    <Sparkles className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Back to AI Tools</h4>
                    <p className="text-sm text-gray-600">Return to AI tools overview</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/2/ai/squarespace"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <BookOpen className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Squarespace AI Guide</h4>
                    <p className="text-sm text-gray-600">Learn about Squarespace AI</p>
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