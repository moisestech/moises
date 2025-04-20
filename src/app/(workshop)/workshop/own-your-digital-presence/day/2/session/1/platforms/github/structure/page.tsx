'use client'

import { Layout, Grid, ArrowRight, Code } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function GitHubStructurePage() {
  return (
    <ContentPage
      title="GitHub Web Structure"
      description="Learn how to implement headers, footers, sections, and grids using HTML and CSS"
      icon={Code}
      sections={[
        {
          title: "Headers in HTML/CSS",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Create semantic and accessible headers using HTML5 and CSS:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the <code className="bg-gray-100 px-1 rounded">header</code> element for semantic structure</li>
                <li>Implement responsive navigation with CSS Flexbox or Grid</li>
                <li>Create sticky headers using <code className="bg-gray-100 px-1 rounded">position: sticky</code></li>
                <li>Add hamburger menus for mobile navigation</li>
                <li>Include skip links for accessibility</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use CSS Grid or Flexbox for responsive header layouts and ensure proper ARIA labels for accessibility.</p>
              </div>
            </div>
          )
        },
        {
          title: "Footers in HTML/CSS",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Create structured footers with semantic HTML:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the <code className="bg-gray-100 px-1 rounded">footer</code> element for semantic structure</li>
                <li>Implement multi-column layouts with CSS Grid</li>
                <li>Add social media icons with Font Awesome or SVG</li>
                <li>Create responsive footer designs</li>
                <li>Include proper semantic markup for contact information</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use CSS Grid for footer layouts and ensure proper spacing with CSS variables for consistency.</p>
              </div>
            </div>
          )
        },
        {
          title: "Sections in HTML/CSS",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Create modular sections using semantic HTML:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use the <code className="bg-gray-100 px-1 rounded">section</code> element for content grouping</li>
                <li>Implement full-width sections with CSS</li>
                <li>Add parallax effects using CSS transforms</li>
                <li>Create responsive section layouts</li>
                <li>Use CSS Grid for complex section layouts</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use CSS Grid and Flexbox for section layouts and implement CSS custom properties for consistent spacing.</p>
              </div>
            </div>
          )
        },
        {
          title: "Grids in HTML/CSS",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Implement responsive grids using modern CSS:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Use CSS Grid for two-dimensional layouts</li>
                <li>Implement responsive breakpoints with media queries</li>
                <li>Create masonry layouts with CSS Grid</li>
                <li>Use CSS Flexbox for one-dimensional layouts</li>
                <li>Implement CSS Grid areas for complex layouts</li>
              </ul>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-800">Pro Tip:</h4>
                <p className="text-blue-700">Use CSS Grid for complex layouts and Flexbox for simpler, one-dimensional layouts. Combine them for optimal results.</p>
              </div>
            </div>
          )
        },
        {
          title: "Next Steps",
          content: (
            <div className="space-y-4">
              <p className="text-gray-600">
                Now that you understand the basic structure, let's move on to implementing components:
              </p>
              <Link 
                href="/workshop/own-your-digital-presence/day/2/session/1/platforms/github/components"
                className={cn(
                  "group flex items-center gap-3 p-4 rounded-lg border border-gray-200",
                  "hover:border-indigo-200 hover:bg-indigo-50/50 transition-colors"
                )}
              >
                <div className="p-2 bg-indigo-50 rounded-lg">
                  <ArrowRight className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 group-hover:text-indigo-600">GitHub Components</h4>
                  <p className="text-sm text-gray-600">Learn about implementing interactive components with JavaScript</p>
                </div>
              </Link>
            </div>
          )
        }
      ]}
    />
  )
} 