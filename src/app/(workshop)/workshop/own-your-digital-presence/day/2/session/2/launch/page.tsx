'use client'

import { ArrowRight, Rocket, Settings, CheckCircle, Globe, Zap } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function LaunchPage() {
  return (
    <ContentPage
      title="Launch Preparation"
      description="Prepare your website for launch with essential optimizations and checks"
      icon={Rocket}
      sections={[
        {
          title: "Platform Launch",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border border-yellow-200 bg-yellow-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Globe className="h-5 w-5 text-yellow-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Wix Launch</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Domain Connection</li>
                    <li>SEO Settings</li>
                    <li>Mobile Optimization</li>
                    <li>Analytics Setup</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Globe className="h-5 w-5 text-gray-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Squarespace Launch</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Domain Setup</li>
                    <li>SEO Configuration</li>
                    <li>Mobile Styles</li>
                    <li>Analytics Integration</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-blue-200 bg-blue-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Rocket className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">GitHub Launch</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Custom Domain</li>
                    <li>Build Process</li>
                    <li>Deployment</li>
                    <li>Monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Launch Checklist",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Settings className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Technical Setup</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Domain configuration</li>
                    <li>SSL certificate</li>
                    <li>Backup system</li>
                    <li>Security measures</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Zap className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Performance</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Speed optimization</li>
                    <li>Mobile testing</li>
                    <li>Browser testing</li>
                    <li>Load testing</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Post-Launch",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Monitoring</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Analytics tracking</li>
                    <li>Error monitoring</li>
                    <li>Performance metrics</li>
                    <li>User feedback</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Globe className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Maintenance</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Regular updates</li>
                    <li>Content refresh</li>
                    <li>Security patches</li>
                    <li>Backup schedule</li>
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
                  href="/workshop/own-your-digital-presence/day/2/session/2/resources/checklist"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Launch Checklist</h4>
                    <p className="text-sm text-gray-600">Detailed pre-launch checklist</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/2/resources/optimization"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Optimization Tips</h4>
                    <p className="text-sm text-gray-600">Performance optimization guide</p>
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