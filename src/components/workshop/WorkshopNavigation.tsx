'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Menu, X } from 'lucide-react'
import { workshopContentNavigation, workshopInfoNavigation } from '@/config/workshop-navigation'
import { cn } from '@/lib/utils'

type NavigationItem = {
  title: string
  href: string
  icon: any
  description: string
  items?: NavigationItem[]
}

interface NavigationSectionProps extends NavigationItem {
  isCollapsed?: boolean
  level?: number
  openSections: Set<string>
  onToggleSection: (href: string) => void
}

function NavigationSection({ 
  title, 
  href, 
  icon: Icon, 
  description, 
  items, 
  isCollapsed, 
  level = 0,
  openSections,
  onToggleSection
}: NavigationSectionProps) {
  const pathname = usePathname()
  const isActive = pathname === href || pathname?.startsWith(href + '/')
  const hasChildren = items && items.length > 0
  const isOpen = openSections.has(href)

  const handleClick = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault()
      onToggleSection(href)
    }
  }

  return (
    <div className="space-y-1">
      <Link
        href={href}
        className={cn(
          "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
          isActive
            ? "bg-indigo-50 text-indigo-600"
            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
          level > 0 && "ml-4"
        )}
        onClick={handleClick}
      >
        <Icon className="h-4 w-4 flex-shrink-0" />
        <span className="flex-1">{title}</span>
        {hasChildren && (
          <ChevronRight
            className={cn(
              "h-4 w-4 transition-transform",
              isOpen ? "rotate-90" : ""
            )}
          />
        )}
      </Link>
      {hasChildren && isOpen && !isCollapsed && (
        <div className="space-y-1">
          {items.map((item) => (
            <NavigationSection 
              key={item.href} 
              {...item} 
              isCollapsed={isCollapsed}
              level={level + 1}
              openSections={openSections}
              onToggleSection={onToggleSection}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function WorkshopNavigation() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [openSections, setOpenSections] = useState<Set<string>>(new Set())
  const pathname = usePathname()

  // Initialize open sections based on current path
  useEffect(() => {
    if (pathname) {
      const sections = new Set<string>()
      let currentPath = ''
      
      // Split the path and build up the sections
      pathname.split('/').forEach(part => {
        if (part) {
          currentPath += (currentPath ? '/' : '') + part
          const fullPath = '/' + currentPath
          sections.add(fullPath)
        }
      })
      
      // Add parent sections for workshop content
      if (pathname.includes('/workshop/own-your-digital-presence')) {
        sections.add('/workshop')
        sections.add('/workshop/own-your-digital-presence')
        
        if (pathname.includes('/day/')) {
          sections.add('/workshop/own-your-digital-presence/day')
          
          // Add day section
          const dayMatch = pathname.match(/\/day\/(\d+)/)
          if (dayMatch) {
            const dayPath = `/workshop/own-your-digital-presence/day/${dayMatch[1]}`
            sections.add(dayPath)
          }
        }
      }
      
      setOpenSections(sections)
    }
  }, [pathname])

  const handleToggleSection = (href: string) => {
    setOpenSections(prev => {
      const next = new Set(prev)
      
      // If the section is already open, close it and its children
      if (next.has(href)) {
        Array.from(next).filter(section => 
          section.startsWith(href + '/') || section === href
        ).forEach(child => {
          next.delete(child)
        })
      } else {
        // If the section is closed, open it and ensure parent sections are open
        let currentPath = ''
        href.split('/').forEach(part => {
          if (part) {
            currentPath += (currentPath ? '/' : '') + part
            const fullPath = '/' + currentPath
            next.add(fullPath)
          }
        })

        // If this is a day section, close other day sections
        if (href.includes('/day/')) {
          const currentDay = href.match(/\/day\/(\d+)/)?.[1]
          Array.from(next).filter(section => {
            const sectionDay = section.match(/\/day\/(\d+)/)?.[1]
            return sectionDay && sectionDay !== currentDay
          }).forEach(section => {
            next.delete(section)
          })
        }
      }
      
      return next
    })
  }

  const renderNavigationItem = (item: NavigationItem) => (
    <NavigationSection 
      key={item.href} 
      {...item} 
      isCollapsed={isCollapsed}
      openSections={openSections}
      onToggleSection={handleToggleSection}
    />
  )

  return (
    <div className="flex flex-col gap-6">
      {/* Info Navigation */}
      <div>
        <h2 className="text-lg font-semibold mb-4">{workshopInfoNavigation.title}</h2>
        <nav className="space-y-1">
          {workshopInfoNavigation.items.map(renderNavigationItem)}
        </nav>
      </div>

      {/* Content Navigation */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">{workshopContentNavigation.title}</h2>
          <button
            onClick={() => {
              setIsCollapsed(!isCollapsed)
              if (!isCollapsed) {
                setOpenSections(new Set()) // Close all sections when collapsing
              }
            }}
            className="p-2 hover:bg-gray-100 rounded-md"
          >
            {isCollapsed ? (
              <Menu className="h-5 w-5" />
            ) : (
              <X className="h-5 w-5" />
            )}
          </button>
        </div>
        <nav className="space-y-1">
          {workshopContentNavigation.items.map(renderNavigationItem)}
        </nav>
      </div>
    </div>
  )
} 