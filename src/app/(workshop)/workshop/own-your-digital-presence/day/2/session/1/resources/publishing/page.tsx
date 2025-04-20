'use client'

import { ArrowRight, Globe, Code, Settings, CheckCircle, Upload, Share2 } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function PublishingPage() {
  return (
    <ContentPage
      title="Website Publishing"
      description="Tools and resources for publishing your artist website"
      icon={Upload}
      sections={[
        {
          title: "Platform Publishing",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border border-yellow-200 bg-yellow-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <Globe className="h-5 w-5 text-yellow-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Wix Publishing</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Publish Button</li>
                    <li>Domain Connection</li>
                    <li>Mobile Optimization</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Globe className="h-5 w-5 text-gray-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Squarespace Publishing</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Site Settings</li>
                    <li>Domain Management</li>
                    <li>Mobile Styles</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-blue-200 bg-blue-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Code className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">GitHub Publishing</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>GitHub Pages</li>
                    <li>Custom Domain Setup</li>
                    <li>Deployment Workflows</li>
                    <li>Branch Management</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Publishing Tools",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Settings className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Domain Management</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Domain Registration</li>
                    <li>DNS Configuration</li>
                    <li>SSL Certificates</li>
                    <li>Domain Transfer</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Share2 className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Deployment Tools</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Netlify</li>
                    <li>Vercel</li>
                    <li>Cloudflare Pages</li>
                    <li>GitHub Actions</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Best Practices",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Pre-Publishing Checklist</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Content review</li>
                    <li>SEO optimization</li>
                    <li>Mobile responsiveness</li>
                    <li>Performance testing</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-purple-200 bg-purple-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <Upload className="h-5 w-5 text-purple-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Post-Publishing Tasks</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Analytics setup</li>
                    <li>Search engine submission</li>
                    <li>Social media sharing</li>
                    <li>Backup configuration</li>
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
                  href="/workshop/own-your-digital-presence/day/2/session/1/resources/testing"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-purple-200",
                    "hover:border-purple-200 hover:bg-purple-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-purple-600">Website Testing</h4>
                    <p className="text-sm text-gray-600">Learn about testing your website</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/content"
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
                    <p className="text-sm text-gray-600">Plan and organize your website content</p>
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