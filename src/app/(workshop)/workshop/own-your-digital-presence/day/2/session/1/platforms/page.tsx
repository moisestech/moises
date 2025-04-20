'use client'

import { ArrowRight, Globe, Layout, Code, Smartphone, Palette, Database, Brush, Settings, GitBranch } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { PlatformIcon } from '@/components/workshop/PlatformIcons'

export default function PlatformsPage() {
  return (
    <ContentPage
      title="Website Building Platforms"
      description="Choose the right platform to showcase your artistic work online"
      icon={Globe}
      sections={[
        {
          title: "Platform Overview",
          content: (
            <div className="space-y-6">
              <p className="text-gray-600">
                Each platform offers unique features to help artists create and manage their online presence. Choose the one that best fits your needs and technical comfort level.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border border-yellow-200 bg-yellow-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-yellow-100 rounded-lg">
                      <PlatformIcon platform="wix" size={24} />
                    </div>
                    <h4 className="font-medium text-gray-900">Wix</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Perfect for artists who want an easy-to-use platform with beautiful templates and powerful customization options.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Core Features</h5>
                      <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                        <li>Drag-and-drop editor</li>
                        <li>Wix ADI (AI design assistant)</li>
                        <li>Art portfolio templates</li>
                        <li>E-commerce for art sales</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Implementation</h5>
                      <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                        <li>Responsive layouts</li>
                        <li>Mobile editor</li>
                        <li>Content management</li>
                        <li>SEO optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <PlatformIcon platform="squarespace" size={24} />
                    </div>
                    <h4 className="font-medium text-gray-900">Squarespace</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Ideal for artists who value professional design and want a sophisticated online presence.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Core Features</h5>
                      <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                        <li>Professional templates</li>
                        <li>Fluid engine editor</li>
                        <li>Gallery-focused layouts</li>
                        <li>Built-in analytics</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Implementation</h5>
                      <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                        <li>Grid system</li>
                        <li>Mobile styles panel</li>
                        <li>Content scheduling</li>
                        <li>Image optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg border border-blue-200 bg-blue-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <PlatformIcon platform="github" size={24} />
                    </div>
                    <h4 className="font-medium text-gray-900">GitHub Pages</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Best for tech-savvy artists who want complete control over their website's design and functionality.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Core Features</h5>
                      <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                        <li>Static site hosting</li>
                        <li>Version control</li>
                        <li>Custom domains</li>
                        <li>Free SSL support</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Implementation</h5>
                      <ul className="list-disc pl-6 space-y-1 text-gray-600 text-sm">
                        <li>Local development</li>
                        <li>Continuous deployment</li>
                        <li>Performance optimization</li>
                        <li>Content workflow</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Platform Guides",
          content: (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Wix Guides */}
                <div className="space-y-4">
                  <Link 
                    href="/workshop/own-your-digital-presence/day/2/session/1/platforms/wix"
                    className={cn(
                      "group flex items-center gap-3 p-4 rounded-lg border border-yellow-200",
                      "hover:border-yellow-200 hover:bg-yellow-50/50 transition-colors"
                    )}
                  >
                    <div className="p-2 bg-yellow-50 rounded-lg">
                      <ArrowRight className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-yellow-600">Wix Guide</h4>
                      <p className="text-sm text-gray-600">Main platform guide</p>
                    </div>
                  </Link>
                  <div className="space-y-2 pl-4">
                    <Link 
                      href="/workshop/own-your-digital-presence/day/2/session/1/platforms/wix/structure"
                      className="text-sm text-gray-600 hover:text-yellow-600 transition-colors"
                    >
                      • Structure & Layout
                    </Link>
                    <Link 
                      href="/workshop/own-your-digital-presence/day/2/session/1/platforms/wix/components"
                      className="text-sm text-gray-600 hover:text-yellow-600 transition-colors"
                    >
                      • Components & Features
                    </Link>
                    <Link 
                      href="/workshop/own-your-digital-presence/day/2/session/1/platforms/wix/mobile"
                      className="text-sm text-gray-600 hover:text-yellow-600 transition-colors"
                    >
                      • Mobile Design
                    </Link>
                    <Link 
                      href="/workshop/own-your-digital-presence/day/2/session/1/platforms/wix/implementation"
                      className="text-sm text-gray-600 hover:text-yellow-600 transition-colors"
                    >
                      • Implementation Guide
                    </Link>
                  </div>
                </div>

                {/* Squarespace Guides */}
                <div className="space-y-4">
                  <Link 
                    href="/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace"
                    className={cn(
                      "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                      "hover:border-gray-200 hover:bg-gray-50/50 transition-colors"
                    )}
                  >
                    <div className="p-2 bg-gray-50 rounded-lg">
                      <ArrowRight className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-gray-600">Squarespace Guide</h4>
                      <p className="text-sm text-gray-600">Main platform guide</p>
                    </div>
                  </Link>
                  <div className="space-y-2 pl-4">
                    <Link 
                      href="/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace/structure"
                      className="text-sm text-gray-600 hover:text-gray-600 transition-colors"
                    >
                      • Structure & Layout
                    </Link>
                    <Link 
                      href="/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace/components"
                      className="text-sm text-gray-600 hover:text-gray-600 transition-colors"
                    >
                      • Components & Features
                    </Link>
                    <Link 
                      href="/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace/mobile"
                      className="text-sm text-gray-600 hover:text-gray-600 transition-colors"
                    >
                      • Mobile Design
                    </Link>
                    <Link 
                      href="/workshop/own-your-digital-presence/day/2/session/1/platforms/squarespace/implementation"
                      className="text-sm text-gray-600 hover:text-gray-600 transition-colors"
                    >
                      • Implementation Guide
                    </Link>
                  </div>
                </div>

                {/* GitHub Guides */}
                <div className="space-y-4">
                  <Link 
                    href="/workshop/own-your-digital-presence/day/2/session/1/platforms/github"
                    className={cn(
                      "group flex items-center gap-3 p-4 rounded-lg border border-blue-200",
                      "hover:border-blue-200 hover:bg-blue-50/50 transition-colors"
                    )}
                  >
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <ArrowRight className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600">GitHub Guide</h4>
                      <p className="text-sm text-gray-600">Main platform guide</p>
                    </div>
                  </Link>
                  <div className="space-y-2 pl-4">
                    <Link 
                      href="/workshop/own-your-digital-presence/day/2/session/1/platforms/github/structure"
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      • Structure & Setup
                    </Link>
                    <Link 
                      href="/workshop/own-your-digital-presence/day/2/session/1/platforms/github/components"
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      • Component Development
                    </Link>
                    <Link 
                      href="/workshop/own-your-digital-presence/day/2/session/1/platforms/github/mobile"
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      • Mobile-First Development
                    </Link>
                    <Link 
                      href="/workshop/own-your-digital-presence/day/2/session/1/platforms/github/implementation"
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      • Deployment Guide
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ]}
    />
  )
} 