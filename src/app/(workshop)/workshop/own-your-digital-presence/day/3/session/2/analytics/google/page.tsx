'use client'

import { BarChart2, Settings, Code, Globe, CheckCircle2 } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function GoogleAnalyticsPage() {
  return (
    <ContentPage
      title="Google Analytics Setup"
      description="Setting up Google Analytics across different platforms"
      icon={BarChart2}
      sections={[
        {
          title: "Platform Setup",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border border-yellow-200 bg-yellow-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Settings className="h-5 w-5 text-yellow-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Wix Setup</h4>
                  </div>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                    <li>Create Google Analytics account</li>
                    <li>Get your tracking ID</li>
                    <li>Go to Wix Dashboard</li>
                    <li>Navigate to Marketing & SEO</li>
                    <li>Add Google Analytics ID</li>
                    <li>Verify tracking</li>
                  </ol>
                </div>
                <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Settings className="h-5 w-5 text-gray-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Squarespace Setup</h4>
                  </div>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                    <li>Create Google Analytics account</li>
                    <li>Get your tracking ID</li>
                    <li>Go to Settings</li>
                    <li>Select Advanced</li>
                    <li>Enter Google Analytics ID</li>
                    <li>Save changes</li>
                  </ol>
                </div>
                <div className="p-4 rounded-lg border border-blue-200 bg-blue-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Code className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">GitHub Setup</h4>
                  </div>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                    <li>Create Google Analytics account</li>
                    <li>Get your tracking ID</li>
                    <li>Add tracking code to HTML</li>
                    <li>Place in head section</li>
                    <li>Commit and push changes</li>
                    <li>Verify tracking</li>
                  </ol>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Verification Steps",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <CheckCircle2 className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Initial Setup</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Create Google Analytics account</li>
                    <li>Set up property</li>
                    <li>Get tracking ID</li>
                    <li>Configure basic settings</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Globe className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Platform Integration</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Add tracking code</li>
                    <li>Verify installation</li>
                    <li>Test tracking</li>
                    <li>Check real-time data</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <BarChart2 className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Data Verification</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Check real-time reports</li>
                    <li>Verify page views</li>
                    <li>Test events</li>
                    <li>Monitor data flow</li>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href="/workshop/own-your-digital-presence/day/3/session/2/analytics/tracking"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Globe className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Visitor Tracking</h4>
                    <p className="text-sm text-gray-600">Setting up visitor tracking</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/3/session/2/analytics"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <BarChart2 className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Analytics Basics</h4>
                    <p className="text-sm text-gray-600">Back to analytics overview</p>
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