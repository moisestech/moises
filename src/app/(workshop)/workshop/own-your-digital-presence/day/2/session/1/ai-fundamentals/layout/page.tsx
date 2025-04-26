'use client'

import { Layout } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'

export default function AILayoutPage() {
  return (
    <ContentPage
      title="AI Layout Tools"
      description="Discover how AI can help you create effective website layouts for your portfolio."
      icon={Layout}
      sections={[
        {
          title: "AI Layout Generation",
          content: (
            <div className="space-y-4">
              <p>
                AI tools can help you generate layout suggestions based on your content and preferences:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Input your artwork images and get layout recommendations</li>
                <li>Generate multiple layout options to choose from</li>
                <li>Get suggestions for optimal spacing and composition</li>
                <li>Receive recommendations for responsive design</li>
                <li>Experiment with different grid systems and arrangements</li>
              </ul>
            </div>
          )
        },
        {
          title: "Popular AI Layout Tools",
          content: (
            <div className="space-y-4">
              <p>
                Here are some AI tools that can help with website layout:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Figma AI - Generate layout suggestions and design systems</li>
                <li>Adobe Firefly - Create and modify layouts with AI assistance</li>
                <li>Canva AI - Get layout recommendations for your portfolio</li>
                <li>Midjourney - Generate layout inspiration and mockups</li>
                <li>DALL-E - Create unique layout concepts and visual arrangements</li>
              </ul>
            </div>
          )
        },
        {
          title: "Best Practices",
          content: (
            <div className="space-y-4">
              <p>
                Make the most of AI layout tools with these best practices:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use AI suggestions as a starting point, not final solutions</li>
                <li>Combine multiple AI tools for different aspects of layout</li>
                <li>Maintain consistency with your brand and artistic style</li>
                <li>Test AI-generated layouts across different devices</li>
                <li>Iterate and refine based on user feedback</li>
              </ul>
            </div>
          )
        }
      ]}
    />
  )
} 