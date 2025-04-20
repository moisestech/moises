'use client'

import { Search, BarChart2, Activity, Zap, User, X, Users } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Session2Page() {
  return (
    <ContentPage
      title="Analytics & Performance"
      description="Learn how to track and optimize your website's performance"
      icon={Search}
      sections={[
        {
          title: "Session Overview",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                In this session, we'll explore how to track and analyze your website's performance and user behavior. 
                You'll learn about analytics tools, performance metrics, and how to use this data to improve your website.
              </p>
            </div>
          )
        },
        {
          title: "Analytics Basics",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Google Analytics</h4>
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
                <Link 
                  href="/workshop/own-your-digital-presence/day/3/session/2/analytics/analysis"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Activity className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Data Analysis</h4>
                    <p className="text-sm text-gray-600">Analyzing website data</p>
                  </div>
                </Link>
              </div>
            </div>
          )
        },
        {
          title: "Performance Tracking",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link 
                  href="/workshop/own-your-digital-presence/day/3/session/2/tracking/speed"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Zap className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Speed Metrics</h4>
                    <p className="text-sm text-gray-600">Monitoring loading speed</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/3/session/2/tracking/ux"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <User className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">User Experience</h4>
                    <p className="text-sm text-gray-600">Tracking user experience</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/3/session/2/tracking/errors"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <X className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Error Monitoring</h4>
                    <p className="text-sm text-gray-600">Monitoring website errors</p>
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