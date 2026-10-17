import { useEffect } from 'react'
import { useLocation } from 'react-router'
import { siteConfig } from '@/config/site.config'

export interface SEOProps {
  title?: string
  description?: string
  ogImage?: string
}

export function useSEO({ title, description, ogImage }: SEOProps = {}) {
  const location = useLocation()

  useEffect(() => {
    const fullTitle = title
      ? `${title} – ${siteConfig.name}`
      : `${siteConfig.title}`

    const metaDescription = description || siteConfig.description
    const currentUrl = `${siteConfig.url}${location.pathname}`

    document.title = fullTitle

    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name'
      let el = document.querySelector(`meta[${attr}="${name}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, name)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    setMetaTag('description', metaDescription)

    setMetaTag('og:title', fullTitle, true)
    setMetaTag('og:description', metaDescription, true)
    setMetaTag('og:url', currentUrl, true)
    setMetaTag('og:site_name', siteConfig.name, true)
    setMetaTag('og:type', 'website', true)

    setMetaTag('twitter:card', 'summary_large_image')
    setMetaTag('twitter:title', fullTitle)
    setMetaTag('twitter:description', metaDescription)

    if (ogImage) {
      setMetaTag('og:image', ogImage, true)
      setMetaTag('twitter:image', ogImage)
    }

    let canonicalEl = document.querySelector('link[rel="canonical"]')
    if (!canonicalEl) {
      canonicalEl = document.createElement('link')
      canonicalEl.setAttribute('rel', 'canonical')
      document.head.appendChild(canonicalEl)
    }
    canonicalEl.setAttribute('href', currentUrl)
  }, [title, description, ogImage, location.pathname])
}
