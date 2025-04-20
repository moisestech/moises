'use client'

import { BarChart2, Users, Activity, Globe, Code } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function AnalyticsPage() {
  return (
    <ContentPage
      title="Analytics Basics"
      description="Understanding website analytics across different platforms"
      icon={BarChart2}
      sections={[
        {
          title: "Platform Analytics",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border border-yellow-200 bg-yellow-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Globe className="h-5 w-5 text-yellow-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Wix Analytics</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Built-in Analytics Dashboard</li>
                    <li>Visitor Statistics</li>
                    <li>Traffic Sources</li>
                    <li>Popular Pages</li>
                    <li>Conversion Tracking</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Globe className="h-5 w-5 text-gray-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Squarespace Analytics</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Analytics Dashboard</li>
                    <li>Visitor Insights</li>
                    <li>Traffic Sources</li>
                    <li>Popular Content</li>
                    <li>Sales Analytics</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-blue-200 bg-blue-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Code className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">GitHub Analytics</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>GitHub Pages Analytics</li>
                    <li>Traffic Insights</li>
                    <li>Repository Statistics</li>
                    <li>Visitor Tracking</li>
                    <li>Custom Analytics Integration</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Key Metrics",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Users className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Visitor Metrics</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Unique Visitors</li>
                    <li>Page Views</li>
                    <li>Time on Site</li>
                    <li>Bounce Rate</li>
                    <li>Returning Visitors</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Activity className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Engagement Metrics</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Click-through Rate</li>
                    <li>Conversion Rate</li>
                    <li>Popular Content</li>
                    <li>User Flow</li>
                    <li>Event Tracking</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <BarChart2 className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Performance Metrics</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Page Load Time</li>
                    <li>Server Response</li>
                    <li>Error Rate</li>
                    <li>Mobile Performance</li>
                    <li>SEO Metrics</li>
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
                  href="/workshop/own-your-digital-presence/day/3/session/2/analytics/google"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <BarChart2 className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Google Analytics Setup</h4>
                    <p className="text-sm text-gray-600">Setting up Google Analytics</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/3/session/2/analytics/tracking"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Visitor Tracking</h4>
                    <p className="text-sm text-gray-600">Tracking visitor behavior</p>
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