'use client'

import { ArrowRight, FileText, Image, Video, Globe, PenTool, Search, Smartphone } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function ContentStrategyPage() {
  return (
    <ContentPage
      title="Content Strategy & Management"
      description="Learn how to create, organize, and manage effective website content"
      icon={FileText}
      sections={[
        {
          title: "Content Strategy",
          content: (
            <div className="space-y-6">
              <p className="text-gray-600">
                A well-planned content strategy is essential for creating an effective website. This section covers the fundamentals of content planning and organization.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <PenTool className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Content Planning</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Define target audience</li>
                    <li>Set content goals</li>
                    <li>Create content calendar</li>
                    <li>Plan content types</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <Search className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">SEO & Optimization</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Keyword research</li>
                    <li>Content optimization</li>
                    <li>Meta descriptions</li>
                    <li>Alt text for images</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Content Types",
          content: (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <FileText className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Text Content</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Writing for web</li>
                    <li>Content hierarchy</li>
                    <li>Call-to-actions</li>
                    <li>Accessibility</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <Image className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Visual Content</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Image optimization</li>
                    <li>Visual hierarchy</li>
                    <li>Brand consistency</li>
                    <li>Responsive images</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <Video className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Multimedia</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Video content</li>
                    <li>Audio elements</li>
                    <li>Interactive media</li>
                    <li>Performance optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Content Management",
          content: (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <Globe className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Platform-Specific</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Wix content management</li>
                    <li>Squarespace content tools</li>
                    <li>GitHub content workflow</li>
                    <li>Platform best practices</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-50 rounded-lg">
                      <Smartphone className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Responsive Content</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Mobile-first content</li>
                    <li>Content adaptation</li>
                    <li>Performance considerations</li>
                    <li>User experience</li>
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
                Explore these additional resources to enhance your content strategy:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/content/strategy"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Content Strategy</h4>
                    <p className="text-sm text-gray-600">Learn about content planning and organization</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/content/creation"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Content Creation</h4>
                    <p className="text-sm text-gray-600">Explore content creation best practices</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/content/management"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Content Management</h4>
                    <p className="text-sm text-gray-600">Content management and optimization</p>
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