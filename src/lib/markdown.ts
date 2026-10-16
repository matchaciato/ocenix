import { Marked } from 'marked'
import type { TableOfContentsItem } from '@/types/nav.types'

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]*>/g, '')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

export function parseFrontmatter(raw: string): {
  data: Record<string, string>
  content: string
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)

  if (!match) {
    return { data: {}, content: raw }
  }

  const rawYaml = match[1]
  const content = match[2]
  const data: Record<string, string> = {}

  rawYaml.split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':')
    if (colonIndex !== -1) {
      const key = line.slice(0, colonIndex).trim()
      const value = line.slice(colonIndex + 1).trim().replace(/^['"]|['"]$/g, '')
      if (key) {
        data[key] = value
      }
    }
  })

  return { data, content }
}

export function extractHeadings(markdown: string): TableOfContentsItem[] {
  const headings: TableOfContentsItem[] = []
  const lines = markdown.split('\n')

  lines.forEach((line) => {
    const match = line.match(/^(#{2,3})\s+(.*)$/)
    if (match) {
      const level = match[1].length
      const rawTitle = match[2].trim()
      const title = rawTitle.replace(/`([^`]+)`/g, '$1')
      const id = slugify(title)
      headings.push({ id, title, level })
    }
  })

  return headings
}

export function renderMarkdown(markdown: string): string {
  const markedInstance = new Marked({
    gfm: true,
    breaks: false,
  })

  markedInstance.use({
    renderer: {
      heading({ text, depth }) {
        const cleanText = text.replace(/<[^>]*>/g, '')
        const id = slugify(cleanText)

        if (depth === 1) {
          return `<h1 id="${id}" class="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground mt-8 mb-4">${text}</h1>`
        }
        if (depth === 2) {
          return `<h2 id="${id}" class="text-xl sm:text-2xl font-bold tracking-tight text-foreground mt-10 mb-4 pb-2 border-b border-border">${text}</h2>`
        }
        if (depth === 3) {
          return `<h3 id="${id}" class="text-lg font-semibold tracking-tight text-foreground mt-8 mb-3">${text}</h3>`
        }
        return `<h${depth} id="${id}" class="font-semibold text-foreground mt-6 mb-2">${text}</h${depth}>`
      },
      paragraph({ text }) {
        return `<p class="text-sm leading-relaxed text-muted-foreground my-4">${text}</p>`
      },
      code({ text, lang }) {
        return `<div class="relative my-4 rounded-xl border border-zinc-800 bg-zinc-950 p-4 font-mono text-xs text-zinc-100 overflow-x-auto"><span class="absolute top-2 right-3 text-[10px] uppercase font-mono text-zinc-500">${lang || 'code'}</span><code>${text}</code></div>`
      },
      codespan({ text }) {
        return `<code class="rounded bg-muted/80 px-1.5 py-0.5 font-mono text-xs text-foreground font-medium">${text}</code>`
      },
      list({ items, ordered }) {
        const tag = ordered ? 'ol' : 'ul'
        const listClass = ordered ? 'list-decimal pl-5 space-y-1.5 my-4 text-xs text-muted-foreground' : 'list-disc pl-5 space-y-1.5 my-4 text-xs text-muted-foreground'
        const inner = items.map((i) => `<li>${i.text}</li>`).join('')
        return `<${tag} class="${listClass}">${inner}</${tag}>`
      },
      table({ header, rows }) {
        const headerHtml = header
          .map((cell) => `<th class="py-2.5 px-4 font-semibold text-foreground">${cell.text}</th>`)
          .join('')
        const rowsHtml = rows
          .map(
            (row) =>
              `<tr class="hover:bg-accent/20 transition-colors">${row
                .map((cell) => `<td class="py-2.5 px-4 text-muted-foreground">${cell.text}</td>`)
                .join('')}</tr>`,
          )
          .join('')
        return `<div class="my-6 overflow-x-auto rounded-xl border border-border shadow-xs"><table class="w-full text-left text-xs"><thead class="bg-muted/40 border-b border-border"><tr>${headerHtml}</tr></thead><tbody class="divide-y divide-border">${rowsHtml}</tbody></table></div>`
      },
      blockquote({ text }) {
        return `<blockquote class="my-4 border-l-2 border-primary pl-4 italic text-xs text-muted-foreground">${text}</blockquote>`
      },
    },
  })

  return markedInstance.parse(markdown) as string
}
