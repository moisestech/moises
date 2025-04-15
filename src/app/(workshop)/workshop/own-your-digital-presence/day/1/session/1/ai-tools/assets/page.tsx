'use client'

import { ImagePlus } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'

export default function AIAssetsPage() {
  return (
    <ContentPage
      title="AI Asset Tools"
      description="Learn how AI can help you create and enhance visual assets for your portfolio website."
      icon={ImagePlus}
      sections={[
        {
          title: "AI Image Generation",
          content: (
            <div className="space-y-4">
              <p>
                AI tools can help you create unique visual assets for your website:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Generate background patterns and textures</li>
                <li>Create custom icons and illustrations</li>
                <li>Produce placeholder images for work in progress</li>
                <li>Generate social media graphics and banners</li>
                <li>Create unique visual elements that match your style</li>
              </ul>
            </div>
          )
        },
        {
          title: "Popular AI Asset Tools",
          content: (
            <div className="space-y-4">
              <p>
                Here are some AI tools that can help with asset creation:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Midjourney - Create high-quality artwork and visual elements</li>
                <li>DALL-E - Generate custom images and graphics</li>
                <li>Stable Diffusion - Create and modify visual assets</li>
                <li>Adobe Firefly - Generate and edit images with AI</li>
                <li>Canva AI - Create and enhance visual content</li>
              </ul>
            </div>
          )
        },
        {
          title: "Best Practices",
          content: (
            <div className="space-y-4">
              <p>
                Follow these best practices when using AI for asset creation:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use AI-generated assets as complements to your original work</li>
                <li>Ensure generated assets align with your artistic style</li>
                <li>Modify and customize AI-generated content to make it unique</li>
                <li>Consider copyright and licensing implications</li>
                <li>Maintain consistency across all website assets</li>
              </ul>
            </div>
          )
        }
      ]}
    />
  )
} 