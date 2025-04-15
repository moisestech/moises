'use client'

import { BookOpen } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'

export default function CaseStudiesPage() {
  return (
    <ContentPage
      title="Case Studies"
      description="Explore real-world examples of successful artist portfolios built with different platforms."
      icon={BookOpen}
      sections={[
        {
          title: "Squarespace Success Story",
          content: (
            <div className="space-y-4">
              <p>
                <strong>Artist:</strong> Sarah Chen, Visual Artist
                <br />
                <strong>Platform:</strong> Squarespace
                <br />
                <strong>Key Features:</strong> Gallery-focused layout, integrated store, blog
              </p>
              <p>
                Sarah chose Squarespace for its professional templates and ease of use. Her portfolio showcases her work in a clean, gallery-style layout that puts her artwork front and center. The integrated store feature allows her to sell prints directly from her website.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Professional appearance with minimal effort</li>
                <li>Easy content management for regular updates</li>
                <li>Mobile-responsive design that works well on all devices</li>
              </ul>
            </div>
          )
        },
        {
          title: "Wix Creative Freedom",
          content: (
            <div className="space-y-4">
              <p>
                <strong>Artist:</strong> Michael Rodriguez, Digital Artist
                <br />
                <strong>Platform:</strong> Wix
                <br />
                <strong>Key Features:</strong> Custom animations, interactive elements, portfolio showcase
              </p>
              <p>
                Michael utilized Wix's drag-and-drop editor to create a unique, interactive experience. His website features custom animations and interactive elements that showcase his digital art in an engaging way.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Complete creative control over design</li>
                <li>Custom animations and interactions</li>
                <li>Flexible layout options for different types of work</li>
              </ul>
            </div>
          )
        },
        {
          title: "GitHub Custom Solution",
          content: (
            <div className="space-y-4">
              <p>
                <strong>Artist:</strong> Alex Thompson, Developer & Artist
                <br />
                <strong>Platform:</strong> GitHub Pages
                <br />
                <strong>Key Features:</strong> Custom-built portfolio, blog, project showcase
              </p>
              <p>
                Alex built a custom portfolio using GitHub Pages, allowing for complete control over every aspect of the design and functionality. The site includes a blog, project showcase, and custom animations.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Complete control over code and design</li>
                <li>Version control for content updates</li>
                <li>Custom features and integrations</li>
              </ul>
            </div>
          )
        }
      ]}
    />
  )
} 