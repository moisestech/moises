'use client'

import { Layout, Smartphone, Layers, PenTool, ArrowRight } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function StructurePage() {
  return (
    <ContentPage
      title="Web Structure"
      description="Understanding essential web components and their platform-specific implementations"
      icon={Layout}
      sections={[
        {
          title: "Overview",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                A well-structured website is built on essential components that work together to create a cohesive user experience. This section covers the fundamental building blocks of web design and how they're implemented across different platforms.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/structure/layout"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Layout className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">Layout Basics</h4>
                    <p className="text-sm text-gray-600">Headers, footers, sections, and grids</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/structure/components"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Layers className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">Components</h4>
                    <p className="text-sm text-gray-600">Carousels, modals, menus, and galleries</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/structure/mobile"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Smartphone className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">Mobile Design</h4>
                    <p className="text-sm text-gray-600">Mobile-first design principles</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/structure/wireframing"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <PenTool className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">Wireframing</h4>
                    <p className="text-sm text-gray-600">Planning with sketches and AI tools</p>
                  </div>
                </Link>
              </div>
            </div>
          )
        },
        {
          title: "Platform-Specific Implementation",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Each platform has its own way of implementing these components. Choose your platform to see specific implementation details:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/platforms/wix/structure"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-yellow-200 hover:bg-yellow-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-yellow-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-yellow-600">Wix Structure</h4>
                    <p className="text-sm text-gray-600">Wix-specific implementation guide</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace/structure"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-gray-200 hover:bg-gray-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-gray-600">Squarespace Structure</h4>
                    <p className="text-sm text-gray-600">Squarespace-specific implementation guide</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/platforms/github/structure"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-blue-200 hover:bg-blue-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600">GitHub Structure</h4>
                    <p className="text-sm text-gray-600">GitHub Pages implementation guide</p>
                  </div>
                </Link>
              </div>
            </div>
          )
        },
        {
          title: "Best Practices",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Follow these best practices when structuring your website:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Start with a clear information architecture</li>
                <li>Use consistent navigation patterns</li>
                <li>Implement responsive design from the start</li>
                <li>Optimize for performance and accessibility</li>
                <li>Test across different devices and browsers</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Create a style guide early in the process to maintain consistency across your site.</p>
              </div>
            </div>
          )
        }
      ]}
    />
  )
} 