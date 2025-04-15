'use client'

import { Home } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'

const HomepagePage = () => {
  return (
    <ContentPage
      title="Homepage Foundations"
      description="Learn the essential elements and best practices for creating an effective artist portfolio homepage."
      icon={Home}
      sections={[
        {
          title: "Essential Homepage Elements",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Hero Section</h4>
                  <p className="text-gray-600 mb-2">Your homepage's first impression should include:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>A striking visual (your best artwork or a professional photo)</li>
                    <li>Your name and artistic identity</li>
                    <li>A brief, compelling tagline or artist statement</li>
                    <li>Clear navigation to key sections</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Portfolio Preview</h4>
                  <p className="text-gray-600 mb-2">Showcase your best work with:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>High-quality images of your artwork</li>
                    <li>Consistent image sizes and spacing</li>
                    <li>Clear categories or series groupings</li>
                    <li>Easy navigation to full portfolio</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">About Section</h4>
                  <p className="text-gray-600 mb-2">Include a brief introduction with:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Your artistic background and practice</li>
                    <li>Key themes or concepts in your work</li>
                    <li>Professional achievements or exhibitions</li>
                    <li>Link to full about page</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Contact Information</h4>
                  <p className="text-gray-600 mb-2">Make it easy for visitors to reach you:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Email address or contact form</li>
                    <li>Social media links</li>
                    <li>Studio location (if applicable)</li>
                    <li>Newsletter signup (optional)</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Best Practices",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Visual Hierarchy</h4>
                  <p className="text-gray-600 mb-2">Guide visitors through your content:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Use clear headings and subheadings</li>
                    <li>Maintain consistent spacing and alignment</li>
                    <li>Highlight important elements with size and color</li>
                    <li>Keep the layout clean and uncluttered</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Mobile Responsiveness</h4>
                  <p className="text-gray-600 mb-2">Ensure your site works well on all devices:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Test on different screen sizes</li>
                    <li>Optimize image loading for mobile</li>
                    <li>Use touch-friendly navigation</li>
                    <li>Maintain readability on small screens</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Loading Speed</h4>
                  <p className="text-gray-600 mb-2">Keep your site fast and efficient:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Optimize image sizes and formats</li>
                    <li>Minimize use of heavy animations</li>
                    <li>Use efficient code and caching</li>
                    <li>Test loading times regularly</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Brand Consistency</h4>
                  <p className="text-gray-600 mb-2">Maintain a cohesive look and feel:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Use consistent colors and fonts</li>
                    <li>Maintain your artistic style throughout</li>
                    <li>Keep navigation consistent</li>
                    <li>Align with your social media presence</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Common Mistakes to Avoid",
          content: (
            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Content Issues</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Too much text on the homepage</li>
                    <li>Unclear or missing contact information</li>
                    <li>Poor quality or inconsistent images</li>
                    <li>Outdated content or exhibitions</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Technical Problems</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Slow loading times</li>
                    <li>Broken links or images</li>
                    <li>Non-responsive design</li>
                    <li>Poor mobile experience</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-600 mb-2">Design Pitfalls</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Overly complex navigation</li>
                    <li>Inconsistent branding</li>
                    <li>Poor color contrast</li>
                    <li>Cluttered layout</li>
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

export default HomepagePage 