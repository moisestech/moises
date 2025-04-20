'use client'

import { Layers, ArrowRight, Image, Menu, Maximize2, Grid } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function ComponentsPage() {
  return (
    <ContentPage
      title="Web Components"
      description="Understanding and implementing essential web components across different platforms"
      icon={Layers}
      sections={[
        {
          title: "Overview",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Web components are the building blocks of your website's functionality and user experience. This section covers the most common components and how they're implemented across different platforms.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Image className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Carousels & Galleries</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Image carousels and slideshows</li>
                    <li>Photo galleries and grids</li>
                    <li>Video galleries</li>
                    <li>Portfolio showcases</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Menu className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Navigation & Menus</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Main navigation menus</li>
                    <li>Mobile hamburger menus</li>
                    <li>Dropdown menus</li>
                    <li>Footer navigation</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Maximize2 className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Modals & Popups</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Lightbox modals</li>
                    <li>Contact forms</li>
                    <li>Newsletter signups</li>
                    <li>Alert messages</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Grid className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Content Blocks</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Text blocks and columns</li>
                    <li>Image blocks</li>
                    <li>Button groups</li>
                    <li>Social media feeds</li>
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
                Each platform has its own way of implementing these components. Choose your platform to see specific implementation details:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/platforms/wix/components"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-yellow-200 hover:bg-yellow-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-yellow-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-yellow-600">Wix Components</h4>
                    <p className="text-sm text-gray-600">Wix-specific component implementation</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace/components"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-gray-200 hover:bg-gray-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-gray-600">Squarespace Components</h4>
                    <p className="text-sm text-gray-600">Squarespace-specific component implementation</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/platforms/github/components"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-blue-200 hover:bg-blue-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600">GitHub Components</h4>
                    <p className="text-sm text-gray-600">GitHub Pages component implementation</p>
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
                Follow these best practices when implementing components:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Maintain consistent styling across components</li>
                <li>Ensure components are responsive and mobile-friendly</li>
                <li>Optimize component performance</li>
                <li>Test components across different devices and browsers</li>
                <li>Consider accessibility in component design</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Create reusable component templates to maintain consistency and speed up development.</p>
              </div>
            </div>
          )
        }
      ]}
    />
  )
} 