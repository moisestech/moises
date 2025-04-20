'use client'

import { Sparkles } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'

const WelcomePage = () => {
  return (
    <ContentPage
      title="Welcome to the Workshop"
      description="Get ready to build your digital presence and create a professional portfolio website."
      icon={Sparkles}
      sections={[
        {
          title: "Workshop Overview",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">What to Expect</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Hands-on website building experience</li>
                    <li>Learn about digital presence fundamentals</li>
                    <li>Create a professional portfolio website</li>
                    <li>Get personalized feedback and support</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Workshop Structure</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Day 1: Understanding Digital Presence</li>
                    <li>Day 2: Website Building Fundamentals</li>
                    <li>Day 3: Content Creation & Optimization</li>
                    <li>Day 4: Launch & Maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Getting Started",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">What You'll Need</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>A laptop or desktop computer</li>
                    <li>Reliable internet connection</li>
                    <li>Digital copies of your artwork</li>
                    <li>Basic text about your practice</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Pre-Workshop Checklist</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Review the workshop schedule</li>
                    <li>Gather your digital assets</li>
                    <li>Prepare your artist statement</li>
                    <li>Set up your development environment</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Learning Outcomes",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">By the End of This Workshop</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Understand digital presence fundamentals</li>
                    <li>Have a live portfolio website</li>
                    <li>Know how to maintain and update your site</li>
                    <li>Be able to showcase your work effectively</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Next Steps</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Review the digital presence overview</li>
                    <li>Explore the case studies</li>
                    <li>Start gathering your content</li>
                    <li>Prepare for hands-on sessions</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        }
      ]}
    />
  )
}

export default WelcomePage 