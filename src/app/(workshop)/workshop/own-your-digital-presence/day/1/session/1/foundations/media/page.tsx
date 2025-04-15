'use client'

import { Image } from 'lucide-react'
import ContentPage from '@/components/workshop/ContentPage'

export default function MediaFoundationsPage() {
  return (
    <ContentPage
      title="Media Foundations"
      description="Learn how to prepare and optimize your artwork images and media for the web."
      icon={Image}
      sections={[
        {
          title: "Image Preparation",
          content: (
            <div className="space-y-4">
              <p>
                Proper image preparation is crucial for showcasing your artwork effectively online. Follow these guidelines to ensure your images look their best:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use high-resolution images (minimum 1500px on the longest side)</li>
                <li>Save in JPEG format for photographs, PNG for graphics with transparency</li>
                <li>Optimize file size without compromising quality (aim for under 500KB per image)</li>
                <li>Maintain consistent aspect ratios for gallery displays</li>
                <li>Include proper metadata (title, description, copyright information)</li>
              </ul>
            </div>
          )
        },
        {
          title: "File Organization",
          content: (
            <div className="space-y-4">
              <p>
                A well-organized media library makes website management much easier:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Create a clear folder structure (e.g., /portfolio, /about, /process)</li>
                <li>Use descriptive filenames (e.g., "abstract-painting-2023-01.jpg")</li>
                <li>Keep original high-resolution files separate from web-optimized versions</li>
                <li>Maintain a backup of all your media files</li>
                <li>Consider using cloud storage for additional backup and easy access</li>
              </ul>
            </div>
          )
        },
        {
          title: "Media Best Practices",
          content: (
            <div className="space-y-4">
              <p>
                Follow these best practices to ensure your media enhances your website:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use consistent image dimensions for similar content types</li>
                <li>Include alt text for accessibility</li>
                <li>Consider using a content delivery network (CDN) for faster loading</li>
                <li>Implement lazy loading for better performance</li>
                <li>Test your images across different devices and screen sizes</li>
              </ul>
            </div>
          )
        }
      ]}
    />
  )
} 