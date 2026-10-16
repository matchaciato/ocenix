import { useMemo } from 'react'
import { docsConfig } from '@/config/docs-nav.config'
import type { NavBadge } from '@/types/nav.types'

export interface SearchItem {
  id: string
  title: string
  href: string
  category: string
  badge?: NavBadge
  description?: string
  keywords?: string[]
}

export function useSearchIndex() {
  const index = useMemo<SearchItem[]>(() => {
    const items: SearchItem[] = []

    items.push({
      id: 'home',
      title: 'Home',
      href: '/',
      category: 'General',
      description: 'Landing page dan tinjauan umum Ocenix UI.',
    })

    items.push({
      id: 'showcase',
      title: 'Showcase & Examples',
      href: '/showcase',
      category: 'General',
      description: 'Galeri template dan blok antarmuka siap pakai.',
    })

    docsConfig.sidebarNav.forEach((section) => {
      section.items.forEach((item) => {
        items.push({
          id: `${section.title}-${item.title}`.toLowerCase().replace(/\s+/g, '-'),
          title: item.title,
          href: item.href,
          category: section.title,
          badge: item.badge,
          description: item.description || `Dokumentasi untuk ${item.title}.`,
          keywords: [section.title.toLowerCase(), item.title.toLowerCase()],
        })
      })
    })

    return items
  }, [])

  const search = (query: string): SearchItem[] => {
    const cleanQuery = query.trim().toLowerCase()
    if (!cleanQuery) return index

    return index.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(cleanQuery)
      const matchCategory = item.category.toLowerCase().includes(cleanQuery)
      const matchDesc = item.description?.toLowerCase().includes(cleanQuery)
      const matchKeywords = item.keywords?.some((k) => k.includes(cleanQuery))

      return matchTitle || matchCategory || matchDesc || matchKeywords
    })
  }

  return { items: index, search }
}
