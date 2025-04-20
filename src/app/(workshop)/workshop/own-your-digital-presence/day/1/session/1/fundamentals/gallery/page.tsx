import { Image, Grid, Layout, Code, Settings } from 'lucide-react'
import { FaWix, FaSquarespace, FaGithub } from 'react-icons/fa'
import { PlatformBadge } from '@/components/workshop/PlatformBadge'

export default function GalleryFundamentalsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Gallery Fundamentals</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to create and manage galleries across different platforms.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Wix Gallery */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <FaWix className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Wix Gallery</h2>
          </div>
          <p className="text-muted-foreground">
            Create and customize galleries in Wix with various layouts and features.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Image className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Features</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Multiple gallery layouts (Grid, Masonry, Slider)</li>
                    <li>Lightbox image viewer</li>
                    <li>Social sharing options</li>
                    <li>Mobile-responsive design</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <Settings className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Setup</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Add Gallery element to page</li>
                    <li>Upload and organize images</li>
                    <li>Customize layout and design</li>
                    <li>Configure gallery settings</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <PlatformBadge platform="wix">
            <FaWix className="mr-2" />
            Wix Platform
          </PlatformBadge>
        </div>

        {/* Squarespace Gallery */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <FaSquarespace className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Squarespace Gallery</h2>
          </div>
          <p className="text-muted-foreground">
            Build beautiful galleries in Squarespace with flexible layouts.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Image className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Features</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Grid, Masonry, and Carousel layouts</li>
                    <li>Full-screen lightbox</li>
                    <li>Image zoom and pan</li>
                    <li>Automatic image optimization</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <Settings className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Setup</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Add Gallery block to page</li>
                    <li>Upload and organize images</li>
                    <li>Choose gallery style</li>
                    <li>Configure display options</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <PlatformBadge platform="squarespace">
            <FaSquarespace className="mr-2" />
            Squarespace Platform
          </PlatformBadge>
        </div>

        {/* GitHub Gallery */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <FaGithub className="h-6 w-6" />
            <h2 className="text-xl font-semibold">GitHub Gallery</h2>
          </div>
          <p className="text-muted-foreground">
            Create image galleries using GitHub Pages and Markdown.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Image className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Features</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Markdown-based image galleries</li>
                    <li>Responsive image grids</li>
                    <li>Lightbox integration</li>
                    <li>Version control for images</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <Code className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Setup</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Upload images to repository</li>
                    <li>Create gallery using Markdown</li>
                    <li>Add image paths and descriptions</li>
                    <li>Configure GitHub Pages</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
          <PlatformBadge platform="github">
            <FaGithub className="mr-2" />
            GitHub Platform
          </PlatformBadge>
        </div>

        {/* Best Practices */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Layout className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Gallery Best Practices</h2>
          </div>
          <p className="text-muted-foreground">
            Essential tips for creating effective galleries across all platforms.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Image className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Image Preparation</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Optimize images for web</li>
                    <li>Maintain consistent dimensions</li>
                    <li>Use descriptive filenames</li>
                    <li>Add alt text for accessibility</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-start gap-2">
                <Grid className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Layout Tips</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Choose appropriate grid size</li>
                    <li>Maintain consistent spacing</li>
                    <li>Consider mobile responsiveness</li>
                    <li>Test different layouts</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
} 