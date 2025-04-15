'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { workshopContentNavigation } from '@/config/workshop-navigation'
import { cn } from '@/lib/utils'

interface NavigationItem {
  title: string
  href: string
  icon?: any
  description?: string
  items?: NavigationItem[]
}

interface BreadcrumbItem {
  title: string
  href: string
}

function findPathInNavigation(path: string): BreadcrumbItem[] | null {
  const segments = path.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];

  // Add root workshop breadcrumb
  breadcrumbs.push({
    title: 'Workshop',
    href: '/workshop/own-your-digital-presence'
  });

  // Add schedule breadcrumb
  breadcrumbs.push({
    title: 'Schedule',
    href: '/workshop/own-your-digital-presence/schedule'
  });

  // Check for day segments
  const dayIndex = segments.indexOf('day');
  if (dayIndex !== -1 && segments[dayIndex + 1]) {
    const dayNumber = segments[dayIndex + 1];
    breadcrumbs.push({
      title: `Day ${dayNumber}`,
      href: `/workshop/own-your-digital-presence/day/${dayNumber}`
    });

    // Check for homework segment
    if (segments.includes('homework')) {
      breadcrumbs.push({
        title: 'Homework',
        href: `/workshop/own-your-digital-presence/day/${dayNumber}/homework`
      });
      return breadcrumbs;
    }

    // Check for session segments
    const sessionIndex = segments.indexOf('session');
    if (sessionIndex !== -1 && segments[sessionIndex + 1]) {
      const sessionNumber = segments[sessionIndex + 1];
      breadcrumbs.push({
        title: `Session ${sessionNumber}`,
        href: `/workshop/own-your-digital-presence/day/${dayNumber}/session/${sessionNumber}`
      });
    }
  }

  return breadcrumbs.length > 0 ? breadcrumbs : null;
}

export function WorkshopBreadcrumbs() {
  const pathname = usePathname()
  const breadcrumbs = findPathInNavigation(pathname)

  if (breadcrumbs === null) return null

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500">
      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.href} className="flex items-center">
          {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
          <Link
            href={crumb.href}
            className={cn(
              "hover:text-indigo-600 transition-colors",
              index === breadcrumbs.length - 1 && "text-indigo-600 font-medium"
            )}
          >
            {crumb.title}
          </Link>
        </div>
      ))}
    </nav>
  )
} 