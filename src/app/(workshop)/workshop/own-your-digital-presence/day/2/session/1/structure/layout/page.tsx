'use client'

import { Layout, ArrowRight, Grid, LayoutDashboard, Columns, Boxes } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function LayoutPage() {
  return (
    <ContentPage
      title="Layout Basics"
      description="Understanding essential website layout components and their platform-specific implementations"
      icon={Layout}
      sections={[
        {
          title: "Layout Components",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                A well-structured website layout is built on essential components that work together to create a cohesive user experience. This section covers the fundamental building blocks of web layout.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <LayoutDashboard className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Header & Footer</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Navigation menus and branding</li>
                    <li>Contact information and social links</li>
                    <li>Copyright and legal information</li>
                    <li>Consistent styling and positioning</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Columns className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Sections & Content</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Hero sections and banners</li>
                    <li>Content sections and columns</li>
                    <li>Call-to-action areas</li>
                    <li>Content hierarchy and flow</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Grid className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Grid Systems</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Responsive grid layouts</li>
                    <li>Column-based content</li>
                    <li>Spacing and alignment</li>
                    <li>Breakpoint management</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Boxes className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Layout Patterns</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Single column layouts</li>
                    <li>Multi-column layouts</li>
                    <li>Card-based layouts</li>
                    <li>Asymmetric layouts</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Platform-Specific Implementation",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Each platform has its own way of implementing layouts. Choose your platform to see specific implementation details:
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
                    <h4 className="font-medium text-gray-900 group-hover:text-yellow-600">Wix Layout</h4>
                    <p className="text-sm text-gray-600">Wix-specific layout implementation</p>
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
                    <h4 className="font-medium text-gray-900 group-hover:text-gray-600">Squarespace Layout</h4>
                    <p className="text-sm text-gray-600">Squarespace-specific layout implementation</p>
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
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600">GitHub Layout</h4>
                    <p className="text-sm text-gray-600">GitHub Pages layout implementation</p>
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
                Follow these best practices when implementing layouts:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Maintain consistent spacing and alignment</li>
                <li>Use a clear visual hierarchy</li>
                <li>Implement responsive design principles</li>
                <li>Ensure proper content flow and readability</li>
                <li>Test layouts across different devices</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Create a layout system with reusable components to maintain consistency across your site.</p>
              </div>
            </div>
          )
        }
      ]}
    />
  )
} 