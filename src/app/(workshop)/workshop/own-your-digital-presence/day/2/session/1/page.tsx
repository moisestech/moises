'use client'

import { Code, Layout, Smartphone, PenTool, Image, Link as LinkIcon, FileText, Monitor } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Day2Session1Page() {
  return (
    <ContentPage
      title="Architecting Your Website"
      description="Learn essential web components and functionality to build your website"
      icon={Code}
      sections={[
        {
          title: "Morning Session: Essential Web Components",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                This session focuses on understanding and implementing the core components that make up a modern website. We'll cover everything from basic structure to advanced features.
              </p>
              <div className="grid gap-4">
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
                    <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">Web Structure</h4>
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
                    <Layout className="h-5 w-5 text-indigo-600" />
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
                    <p className="text-sm text-gray-600">Mobile-first principles and optimization</p>
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
          title: "Afternoon Session: Content Integration",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Learn how to effectively integrate and organize your content, ensuring a seamless user experience across all devices.
              </p>
              <div className="grid gap-4">
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/content/media"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Image className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">Media Types</h4>
                    <p className="text-sm text-gray-600">File formats and optimization</p>
                  </div>
                </Link>

                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/content/navigation"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <LinkIcon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">Navigation</h4>
                    <p className="text-sm text-gray-600">Structuring and linking sections</p>
                  </div>
                </Link>

                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/content/placeholders"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <FileText className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">Placeholders</h4>
                    <p className="text-sm text-gray-600">Creating site framework</p>
                  </div>
                </Link>
              </div>
            </div>
          )
        },
        {
          title: "Platform Implementation",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Choose your platform and follow the step-by-step guide to implement your website.
              </p>
              <div className="grid gap-4">
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/2/platforms/wix"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Monitor className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">Wix Implementation</h4>
                    <p className="text-sm text-gray-600">Build your website using Wix</p>
                  </div>
                </Link>

                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/2/platforms/squarespace"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Monitor className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">Squarespace Implementation</h4>
                    <p className="text-sm text-gray-600">Build your website using Squarespace</p>
                  </div>
                </Link>

                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/2/platforms/github"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Monitor className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">GitHub Implementation</h4>
                    <p className="text-sm text-gray-600">Build your website using code</p>
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