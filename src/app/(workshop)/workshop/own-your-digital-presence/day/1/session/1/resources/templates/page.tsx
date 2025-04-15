'use client'

import { FileText } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'

export default function TemplatesPage() {
  return (
    <ContentPage
      title="Website Templates"
      description="Download and use these templates to help structure your portfolio website content."
      icon={FileText}
      sections={[
        {
          title: "Website Templates",
          content: (
            <div className="space-y-4">
              <p>
                Use these templates to help structure your website content:
              </p>
              <div className="grid gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Artist Statement Template</h3>
                  <p className="mb-4">A template to help you write a compelling artist statement that reflects your work and practice.</p>
                  <a
                    href="/workshop/own-your-digital-presence/day/1/session/1/resources/templates/artist-statement.pdf"
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    download
                  >
                    Download Template
                  </a>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Project Description Template</h3>
                  <p className="mb-4">A template to help you write engaging descriptions for your artwork and projects.</p>
                  <a
                    href="/workshop/own-your-digital-presence/day/1/session/1/resources/templates/project-description.pdf"
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    download
                  >
                    Download Template
                  </a>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">About Page Template</h3>
                  <p className="mb-4">A template to help you create an engaging about page that tells your story.</p>
                  <a
                    href="/workshop/own-your-digital-presence/day/1/session/1/resources/templates/about-page.pdf"
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    download
                  >
                    Download Template
                  </a>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Contact Page Template</h3>
                  <p className="mb-4">A template to help you create an effective contact page with all necessary information.</p>
                  <a
                    href="/workshop/own-your-digital-presence/day/1/session/1/resources/templates/contact-page.pdf"
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                    download
                  >
                    Download Template
                  </a>
                </div>
              </div>
            </div>
          )
        }
      ]}
    />
  )
} 