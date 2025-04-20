'use client'

import { ArrowRight, Layout, Code, Smartphone, Settings, Palette, Database, CheckCircle, GitBranch } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { PlatformIcon } from '@/components/workshop/PlatformIcons'

export default function GitHubImplementationPage() {
  return (
    <ContentPage
      title="GitHub Pages Implementation Guide"
      description="Step-by-step guide to building and deploying your website with GitHub Pages"
      icon={Settings}
      sections={[
        {
          title: "Getting Started",
          content: (
            <div className="space-y-6">
              <p className="text-gray-600">
                Follow these steps to create and deploy your website using GitHub Pages. This guide covers everything from repository setup to final deployment.
              </p>
              <div className="space-y-4">
                <div className="p-4 rounded-lg border border-blue-200 bg-blue-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Step 1: Repository Setup</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Create a new GitHub repository</li>
                    <li>Initialize with README</li>
                    <li>Set up GitHub Pages</li>
                    <li>Configure branch settings</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-blue-200 bg-blue-50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Step 2: Development Environment</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Clone the repository</li>
                    <li>Set up local development</li>
                    <li>Install dependencies</li>
                    <li>Configure build tools</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Implementation Steps",
          content: (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Layout className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Project Structure</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Create directory structure</li>
                    <li>Set up HTML templates</li>
                    <li>Configure routing</li>
                    <li>Organize assets</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Code className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Development</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Write HTML/CSS/JavaScript</li>
                    <li>Implement features</li>
                    <li>Add interactivity</li>
                    <li>Test locally</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <Smartphone className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Responsive Design</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Media queries</li>
                    <li>Flexible layouts</li>
                    <li>Mobile-first approach</li>
                    <li>Cross-browser testing</li>
                  </ul>
                </div>
                <div className="p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-blue-50 rounded-lg">
                      <GitBranch className="h-5 w-5 text-blue-600" />
                    </div>
                    <h4 className="font-medium text-gray-900">Deployment</h4>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Commit changes</li>
                    <li>Push to GitHub</li>
                    <li>Monitor deployment</li>
                    <li>Verify live site</li>
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
                Explore these additional resources to enhance your GitHub Pages implementation:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/platforms/github/structure"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-blue-200",
                    "hover:border-blue-200 hover:bg-blue-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600">GitHub Structure</h4>
                    <p className="text-sm text-gray-600">Learn about GitHub Pages project structure</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/platforms/github/components"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-blue-200",
                    "hover:border-blue-200 hover:bg-blue-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600">GitHub Components</h4>
                    <p className="text-sm text-gray-600">Explore web components for GitHub Pages</p>
                  </div>
                </Link>
                <Link 
                  href="/workshop/own-your-digital-presence/day/2/session/1/platforms/github/mobile"
                  className={cn(
                    "group flex items-center gap-3 p-4 rounded-lg border border-blue-200",
                    "hover:border-blue-200 hover:bg-blue-50/50 transition-colors"
                  )}
                >
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <ArrowRight className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 group-hover:text-blue-600">GitHub Mobile</h4>
                    <p className="text-sm text-gray-600">Mobile-first development for GitHub Pages</p>
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