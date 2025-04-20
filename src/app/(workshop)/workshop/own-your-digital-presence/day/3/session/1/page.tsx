'use client'

import { Code2, Layout, Zap, Star, Activity, Image, FileText, Menu } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Session1Page() {
  return (
    <ContentPage
      title="Advanced Website Features"
      description="Learn advanced techniques for enhancing your website"
      icon={Code2}
      sections={[
        {
          title: "Session Overview",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                In this session, we'll explore advanced website features that can take your artist website to the next level. 
                You'll learn about sophisticated layout techniques, interactive elements, and performance optimization.
              </p>
            </div>
          )
        },
        {
          title: "Advanced Layouts",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link 
                  href="/workshop/own-your-digital-presence/day/3/session/1/layouts/grid"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Layout className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Grid Systems</h4>
                    <p className="text-sm text-gray-600">Advanced grid layouts and systems</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/3/session/1/layouts/responsive"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Activity className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Responsive Design</h4>
                    <p className="text-sm text-gray-600">Advanced responsive techniques</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/3/session/1/layouts/animation"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Star className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Animation</h4>
                    <p className="text-sm text-gray-600">Adding motion and transitions</p>
                  </div>
                </Link>
              </div>
            </div>
          )
        },
        {
          title: "Interactive Elements",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link 
                  href="/workshop/own-your-digital-presence/day/3/session/1/interactive/forms"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <FileText className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Forms</h4>
                    <p className="text-sm text-gray-600">Creating interactive forms</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/3/session/1/interactive/galleries"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Image className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Galleries</h4>
                    <p className="text-sm text-gray-600">Interactive image galleries</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/3/session/1/interactive/navigation"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Menu className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Navigation</h4>
                    <p className="text-sm text-gray-600">Advanced navigation patterns</p>
                  </div>
                </Link>
              </div>
            </div>
          )
        },
        {
          title: "Performance Optimization",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link 
                  href="/workshop/own-your-digital-presence/day/3/session/1/performance/speed"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Zap className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Loading Speed</h4>
                    <p className="text-sm text-gray-600">Improving loading times</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/3/session/1/performance/assets"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Image className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Asset Optimization</h4>
                    <p className="text-sm text-gray-600">Optimizing media assets</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/3/session/1/performance/code"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Code2 className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Code Optimization</h4>
                    <p className="text-sm text-gray-600">Optimizing website code</p>
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