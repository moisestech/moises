import { Layout, Grid, Smartphone, Save, Eye, Upload, Pin } from 'lucide-react'
import { FaSquarespace } from 'react-icons/fa'
import { PlatformBadge } from '@/components/workshop/PlatformBadge'

export default function SquarespaceEditorPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Squarespace Fluid Engine</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to create and customize your website using Squarespace's Fluid Engine editor.
        </p>
        <PlatformBadge platform="squarespace">
          <FaSquarespace className="mr-2" />
          Squarespace Platform
        </PlatformBadge>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Fluid Engine Overview */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Layout className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Fluid Engine Overview</h2>
          </div>
          <p className="text-muted-foreground">
            A fully customizable, drag-and-drop editing system for Squarespace 7.1 sites.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Layout className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Key Features</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Flexible grid system</li>
                    <li>Block overlapping</li>
                    <li>Independent mobile layouts</li>
                    <li>Pin blocks for fixed positioning</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Adding Blocks */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Grid className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Adding Blocks</h2>
          </div>
          <p className="text-muted-foreground">
            Add and customize content blocks to create your perfect layout.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Grid className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Block Management</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Add blocks with Add Block button</li>
                    <li>Drag and drop positioning</li>
                    <li>Resize blocks freely</li>
                    <li>Duplicate and copy blocks</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Mobile Layout */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Smartphone className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Mobile Layout</h2>
          </div>
          <p className="text-muted-foreground">
            Create and manage separate layouts for mobile devices.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Smartphone className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Mobile Features</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Independent mobile layouts</li>
                    <li>Quick rearrange tools</li>
                    <li>Mobile-specific adjustments</li>
                    <li>Preview on different devices</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* Advanced Features */}
        <div className="rounded-lg border p-6 space-y-4">
          <div className="flex items-center gap-2">
            <Pin className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Advanced Features</h2>
          </div>
          <p className="text-muted-foreground">
            Take advantage of Fluid Engine's powerful customization options.
          </p>
          <ul className="space-y-4">
            <li>
              <div className="flex items-start gap-2">
                <Pin className="h-5 w-5 mt-1" />
                <div>
                  <h3 className="font-medium">Advanced Tools</h3>
                  <ul className="list-disc list-inside text-sm text-muted-foreground mt-1">
                    <li>Pin blocks for fixed positioning</li>
                    <li>Block background colors</li>
                    <li>Fit or fill options</li>
                    <li>Section styling options</li>
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