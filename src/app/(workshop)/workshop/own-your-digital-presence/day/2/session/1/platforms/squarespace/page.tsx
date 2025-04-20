'use client'

import { ArrowRight, Layout, Code, Smartphone, Settings, Palette, Database } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { PlatformIcon } from '@/components/workshop/PlatformIcons'

export default function SquarespacePage() {
  return (
    <ContentPage
      title="Squarespace Platform Guide"
      description="Learn how to build and customize your website using Squarespace's professional features"
      icon={Layout}
      sections={[
        {
          title: "Getting Started with Squarespace",
          content: (
            <div className="space-y-6">
              <p className="text-gray-600">
                Squarespace is a design-focused website builder known for its beautiful templates and professional features. This guide will help you understand Squarespace's core features and how to implement them effectively.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Palette className="h-5 w-5 text-gray-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Design & Layout</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Professional templates</li>
                    <li>Style editor</li>
                    <li>Fluid engine</li>
                    <li>Design system</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Settings className="h-5 w-5 text-gray-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Core Features</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Content management</li>
                    <li>E-commerce tools</li>
                    <li>Analytics & SEO</li>
                    <li>Extensions marketplace</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Implementation Guide",
          content: (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Layout className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Structure & Layout</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Fluid engine editor</li>
                    <li>Section layouts</li>
                    <li>Grid system</li>
                    <li>Spacing controls</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Code className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Customization</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Custom CSS</li>
                    <li>Code injection</li>
                    <li>Developer mode</li>
                    <li>API integration</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Smartphone className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Mobile Optimization</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Mobile styles panel</li>
                    <li>Responsive breakpoints</li>
                    <li>Mobile preview</li>
                    <li>Touch optimization</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Database className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Content Management</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Pages & navigation</li>
                    <li>Blog management</li>
                    <li>Image optimization</li>
                    <li>Content scheduling</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Next Steps",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Continue learning about specific Squarespace features and implementation details:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <p className="text-sm text-gray-600">Learn about Squarespace's layout and structure</p>
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
                    <p className="text-sm text-gray-600">Explore Squarespace's component system</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace/mobile"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-gray-200 hover:bg-gray-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-gray-600">Squarespace Mobile</h4>
                    <p className="text-sm text-gray-600">Mobile design and optimization</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace/implementation"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-gray-200 hover:bg-gray-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-gray-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-gray-600">Squarespace Implementation</h4>
                    <p className="text-sm text-gray-600">Step-by-step implementation guide</p>
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