import { Image, Video, Music, FileText, Folder, Trash2, Search, Upload } from 'lucide-react'
import { FaWix } from 'react-icons/fa'
import { PlatformBadge } from '@/components/workshop/PlatformBadge'

export default function MediaManagerPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Wix Media Manager</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to manage all your media files in one centralized location with Wix's Media Manager.
        </p>
        <PlatformBadge platform="wix">
          <FaWix className="mr-2" />
          Wix Platform
        </PlatformBadge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Media Manager Overview */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Image className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Media Manager Overview</h2>
          </div>
          <p className="text-muted-foreground">
            The Media Manager is your central hub for all media files on your site, including images, videos, audio, documents, and vector art.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Image className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Supported Media Types</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Images</li>
                    <li>Videos</li>
                    <li>Audio files</li>
                    <li>Documents</li>
                    <li>Vector art</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Accessing Media Manager */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Search className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Accessing Media Manager</h2>
          </div>
          <p className="text-muted-foreground">
            Access your media files from multiple entry points in the Wix platform.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Search className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Access Points</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Wix Editor: Click Media on the left side</li>
                    <li>Studio Editor: Access through the media panel</li>
                    <li>Wix Mobile App: Available on your device</li>
                    <li>Dashboard Search: Type "Media Manager"</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Media Categories */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Folder className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Media Categories</h2>
          </div>
          <p className="text-muted-foreground">
            Organize and manage different types of media in dedicated sections.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Folder className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Media Sections</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Site Files: Your uploaded media</li>
                    <li>Visitor Uploads: Files from site visitors</li>
                    <li>My Boards: Private media folders</li>
                    <li>Media from Wix: Free Wix library</li>
                    <li>Shutterstock: Premium media</li>
                    <li>Unsplash: Free stock images</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Media Management */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Upload className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Media Management</h2>
          </div>
          <p className="text-muted-foreground">
            Upload, organize, and manage your media files efficiently.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Upload className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Management Features</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Bulk upload capabilities</li>
                    <li>Folder organization</li>
                    <li>File search and filtering</li>
                    <li>Trash recovery (30 days)</li>
                    <li>Collaborator access control</li>
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