'use client'

import { Layers } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function FundamentalsPage() {
  return (
    <ContentPage
      title="Web Fundamentals"
      description="Core concepts of digital presence and website building"
      icon={Layers}
      sections={[
        {
          title: "Overview",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Understanding the fundamental building blocks of a website is crucial for creating an effective digital presence. This section covers the essential components that make up a modern website.
              </p>
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Key Concepts</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Website structure and organization</li>
                    <li>Content management and presentation</li>
                    <li>Media handling and optimization</li>
                    <li>User experience and navigation</li>
                    <li>Responsive design principles</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Topics",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <Link 
                  href="/workshop/own-your-digital-presence/day/1/session/1/fundamentals/layout"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Layers className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">Layout</h4>
                    <p className="text-sm text-gray-600">Understanding website layout principles</p>
                  </div>
                </Link>

                <Link 
                  href="/workshop/own-your-digital-presence/day/1/session/1/fundamentals/assets"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Layers className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">Assets</h4>
                    <p className="text-sm text-gray-600">Managing and organizing digital assets</p>
                  </div>
                </Link>

                <Link 
                  href="/workshop/own-your-digital-presence/day/1/session/1/fundamentals/media"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Layers className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">Media</h4>
                    <p className="text-sm text-gray-600">Working with different media types</p>
                  </div>
                </Link>

                <Link 
                  href="/workshop/own-your-digital-presence/day/1/session/1/fundamentals/content"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Layers className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">Content</h4>
                    <p className="text-sm text-gray-600">Content creation and organization</p>
                  </div>
                </Link>

                <Link 
                  href="/workshop/own-your-digital-presence/day/1/session/1/fundamentals/examples"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                    "hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-indigo-50 rounded-lg">
                    <Layers className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">Examples</h4>
                    <p className="text-sm text-gray-600">View successful artist websites</p>
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
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Website Structure</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Clear and intuitive navigation</li>
                    <li>Consistent layout patterns</li>
                    <li>Logical content hierarchy</li>
                    <li>Mobile-responsive design</li>
                    <li>Fast loading times</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Content Organization</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Clear and concise writing</li>
                    <li>Proper use of headings</li>
                    <li>Consistent formatting</li>
                    <li>Regular content updates</li>
                    <li>SEO-friendly structure</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Media Management</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Optimized image sizes</li>
                    <li>Proper file formats</li>
                    <li>Consistent image styling</li>
                    <li>Alt text for accessibility</li>
                    <li>Organized media library</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        }
      ]}
    />
  )
} 