import { Menu, Layout, Settings, ArrowRight, ArrowDown, AlignCenter, AlignRight, AlignLeft } from 'lucide-react'
import { FaWix } from 'react-icons/fa'
import { PlatformBadge } from '@/components/workshop/PlatformBadge'

export default function WixNavigationPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Wix Navigation Menu</h1>
        <p className="text-lg text-muted-foreground">
          Learn how to add and customize navigation menus in your Wix website, from basic setup to advanced styling options.
        </p>
      </div>

      <div className="space-y-6">
        {/* Adding a Menu */}
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">Adding a Navigation Menu</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Step 1: Access the Menu Element</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Menu className="h-4 w-4 shrink-0" />
                  <span>Click the plus icon (+) in the editor</span>
                </li>
                <li className="flex items-start gap-2">
                  <Menu className="h-4 w-4 shrink-0" />
                  <span>Navigate to "Menu and Anchor" section</span>
                </li>
                <li className="flex items-start gap-2">
                  <Menu className="h-4 w-4 shrink-0" />
                  <span>Choose between horizontal or vertical menus</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Step 2: Position the Menu</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Layout className="h-4 w-4 shrink-0" />
                  <span>Click and drag to position the menu</span>
                </li>
                <li className="flex items-start gap-2">
                  <Layout className="h-4 w-4 shrink-0" />
                  <span>Use the drag icon to adjust vertical position</span>
                </li>
                <li className="flex items-start gap-2">
                  <Layout className="h-4 w-4 shrink-0" />
                  <span>Center the menu using the pink guide lines</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Managing Menu Items */}
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">Managing Menu Items</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Page Management</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Settings className="h-4 w-4 shrink-0" />
                  <span>Click "Manage Menu" to view all pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="h-4 w-4 shrink-0" />
                  <span>Hide/show pages using the three dots menu</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="h-4 w-4 shrink-0" />
                  <span>Drag pages to create submenus</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Reordering Items</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 shrink-0" />
                  <span>Click and drag items to reorder</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowDown className="h-4 w-4 shrink-0" />
                  <span>Create submenus by dragging items under others</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Layout Options */}
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">Layout Customization</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Menu Layout</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <AlignCenter className="h-4 w-4 shrink-0" />
                  <span>Choose between wrapping or scrolling menu</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlignRight className="h-4 w-4 shrink-0" />
                  <span>Adjust spacing between menu items</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlignLeft className="h-4 w-4 shrink-0" />
                  <span>Set menu alignment (left, center, right)</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Submenu Options</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Settings className="h-4 w-4 shrink-0" />
                  <span>Choose submenu display style (columns or flyout)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="h-4 w-4 shrink-0" />
                  <span>Set submenu alignment and padding</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Design Options */}
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">Design Customization</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Menu States</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Settings className="h-4 w-4 shrink-0" />
                  <span>Regular state: Default appearance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="h-4 w-4 shrink-0" />
                  <span>Hover state: Appearance when mouse is over</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="h-4 w-4 shrink-0" />
                  <span>Active state: Current page indicator</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Design Elements</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Settings className="h-4 w-4 shrink-0" />
                  <span>Customize background, borders, and corners</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="h-4 w-4 shrink-0" />
                  <span>Add shadows and adjust padding</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="h-4 w-4 shrink-0" />
                  <span>Apply animations if desired</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">Best Practices</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Menu Organization</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Settings className="h-4 w-4 shrink-0" />
                  <span>Keep menu items organized and logical</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="h-4 w-4 shrink-0" />
                  <span>Use submenus for related content</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="h-4 w-4 shrink-0" />
                  <span>Hide unnecessary pages from navigation</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium">Design Tips</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <Settings className="h-4 w-4 shrink-0" />
                  <span>Ensure clear contrast between states</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="h-4 w-4 shrink-0" />
                  <span>Keep hover and active states distinct</span>
                </li>
                <li className="flex items-start gap-2">
                  <Settings className="h-4 w-4 shrink-0" />
                  <span>Use consistent spacing and alignment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 