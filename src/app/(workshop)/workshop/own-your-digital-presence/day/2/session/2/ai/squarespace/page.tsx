'use client'

import { Wand2, MessageSquare, Image, Mail, Search } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function SquarespaceAIPage() {
  return (
    <ContentPage
      title="Squarespace AI"
      description="Learn how to use Squarespace's AI features for content creation and optimization"
      icon={Wand2}
      sections={[
        {
          title: "Getting Started",
          content: (
            <div className="space-y-6">
              <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Wand2 className="h-5 w-5 text-gray-600" />
                  </div>
                  <h4 className="font-medium text-gray-900">Accessing AI Features</h4>
                </div>
                <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                  <li>Open your Squarespace site editor</li>
                  <li>Look for the AI icon in supported text areas</li>
                  <li>Click the three circles icon in the text toolbar</li>
                  <li>Choose your AI feature</li>
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
                <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <MessageSquare className="h-5 w-5 text-gray-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Content Generation</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Text blocks</li>
                    <li>Blog posts</li>
                    <li>Product descriptions</li>
                    <li>Email campaigns</li>
                    <li>Course content</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Image className="h-5 w-5 text-gray-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Visual Content</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Background images</li>
                    <li>Patterns</li>
                    <li>Gradients</li>
                    <li>Image captions</li>
                    <li>Visual themes</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Search className="h-5 w-5 text-gray-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">SEO & Optimization</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>SEO descriptions</li>
                    <li>Alt text generation</li>
                    <li>Keyword optimization</li>
                    <li>Content suggestions</li>
                    <li>Meta descriptions</li>
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
              <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Wand2 className="h-5 w-5 text-gray-600" />
                  </div>
                  <h4 className="font-medium text-gray-900">Using AI Features</h4>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Provide detailed prompts</li>
                  <li>Review generated content</li>
                  <li>Add personal touch</li>
                  <li>Maintain brand voice</li>
                  <li>Edit for accuracy</li>
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
                    <Wand2 className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Back to AI Tools</h4>
                    <p className="text-sm text-gray-600">Return to AI tools overview</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/2/ai/github"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <MessageSquare className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">GitHub Copilot Guide</h4>
                    <p className="text-sm text-gray-600">Learn about GitHub Copilot</p>
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