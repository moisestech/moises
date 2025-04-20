'use client'

import { ArrowRight, Layout, Code, Smartphone, Settings, Palette, Database, CheckCircle } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { PlatformIcon } from '@/components/workshop/PlatformIcons'

export default function WixImplementationPage() {
  return (
    <ContentPage
      title="Wix Implementation Guide"
      description="Step-by-step guide to building and launching your website with Wix"
      icon={Settings}
      sections={[
        {
          title: "Getting Started",
          content: (
            <div className="space-y-6">
              <p className="text-gray-600">
                Follow these steps to create and launch your website using Wix. This guide covers everything from initial setup to final deployment.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-yellow-200 bg-yellow-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-yellow-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Step 1: Account Setup</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Create a Wix account</li>
                    <li>Choose your plan</li>
                    <li>Set up your domain</li>
                    <li>Configure basic settings</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-yellow-200 bg-yellow-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-yellow-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Step 2: Template Selection</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Browse template categories</li>
                    <li>Choose a suitable template</li>
                    <li>Customize template settings</li>
                    <li>Set up initial pages</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Implementation Steps",
          content: (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Layout className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Design & Layout</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Customize page layouts</li>
                    <li>Add and arrange sections</li>
                    <li>Configure responsive design</li>
                    <li>Set up navigation</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Code className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Content & Features</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Add and format content</li>
                    <li>Install necessary apps</li>
                    <li>Configure forms and contact</li>
                    <li>Set up SEO settings</li>
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
                    <li>Mobile editor setup</li>
                    <li>Responsive adjustments</li>
                    <li>Mobile-specific content</li>
                    <li>Testing and preview</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-indigo-50 rounded-lg">
                      <Database className="h-5 w-5 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Final Steps</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Content review</li>
                    <li>Performance optimization</li>
                    <li>Security settings</li>
                    <li>Launch checklist</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Additional Resources",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Explore these additional resources to enhance your Wix implementation:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <p className="text-sm text-gray-600">Learn about Wix's layout system</p>
                  </div>
                </Link>
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
                    <p className="text-sm text-gray-600">Explore Wix's component system</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/platforms/wix/mobile"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-yellow-200 hover:bg-yellow-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-yellow-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-yellow-600">Wix Mobile</h4>
                    <p className="text-sm text-gray-600">Mobile design and optimization</p>
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