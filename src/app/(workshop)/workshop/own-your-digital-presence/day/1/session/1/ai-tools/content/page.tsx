'use client'

import { FileText } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'

export default function AIContentPage() {
  return (
    <ContentPage
      title="AI Content Tools"
      description="Discover how AI can help you create and enhance written content for your portfolio website."
      icon={FileText}
      sections={[
        {
          title: "AI Content Generation",
          content: (
            <div className="space-y-4">
              <p>
                AI tools can assist with various aspects of content creation:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Generate artist statements and bios</li>
                <li>Create engaging project descriptions</li>
                <li>Write clear and concise copy</li>
                <li>Generate blog post ideas and outlines</li>
                <li>Create social media captions and updates</li>
                <li>Generate engaging content ideas</li>
                <li>Create consistent brand messaging</li>
              </ul>
            </div>
          )
        },
        {
          title: "Popular AI Content Tools",
          content: (
            <div className="space-y-4">
              <p>
                Here are some AI tools that can help with content creation:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>ChatGPT - Generate and refine written content</li>
                <li>Grammarly - Improve writing quality and style</li>
                <li>Jasper - Create marketing and promotional content</li>
                <li>Copy.ai - Generate various types of website content</li>
                <li>Wordtune - Refine and enhance existing content</li>
              </ul>
            </div>
          )
        },
        {
          title: "Best Practices",
          content: (
            <div className="space-y-4">
              <p>
                Follow these best practices when using AI for content creation:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use AI as a writing assistant, not a replacement</li>
                <li>Edit and personalize generated content</li>
                <li>Maintain your authentic voice and perspective</li>
                <li>Fact-check all AI-generated information</li>
                <li>Combine AI tools with human creativity</li>
              </ul>
            </div>
          )
        }
      ]}
    />
  )
} 