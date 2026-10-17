import { useLocation } from 'react-router'
import { ExternalLink, Terminal } from 'lucide-react'
import { getAllDocLinks } from '@/config/docs-nav.config'
import { siteConfig } from '@/config/site.config'
import { Badge } from '@/components/ui/Badge'
import { ComponentPreview } from '@/components/docs/ComponentPreview'
import { CodeBlock } from '@/components/docs/CodeBlock'
import { PropsTable } from '@/components/docs/PropsTable'
import { Callout } from '@/components/docs/Callout'
import { Steps, StepItem } from '@/components/docs/Steps'
import { MarkdownRenderer } from '@/components/docs/MarkdownRenderer'
import { componentRegistry } from '@/components/docs/component-registry'
import { docsContentMap } from '@/content/docs-content'
import { useSEO } from '@/hooks/use-seo'

export function DocPage() {
  const location = useLocation()
  const allDocs = getAllDocLinks()
  const currentNav = allDocs.find((d) => d.href === location.pathname)

  const pathParts = location.pathname.replace(/^\/docs\/?/, '').split('/')
  const componentKey = pathParts[pathParts.length - 1]
  const docKey = pathParts.join('/')

  const componentDemo = componentRegistry[componentKey]
  const articleDoc = docsContentMap[docKey] || docsContentMap[componentKey]

  const title = componentDemo?.title || articleDoc?.title || currentNav?.title || 'Documentation'
  const description =
    componentDemo?.description ||
    articleDoc?.description ||
    'Dokumentasi teknis Ocenix UI.'
  const badge = currentNav?.badge || articleDoc?.badge

  useSEO({
    title,
    description,
  })

  return (
    <div className="space-y-8">
      <div className="space-y-2 pb-6 border-b border-border">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {title}
          </h1>
          {badge ? (
            <Badge variant="success" className="text-xs">
              {badge}
            </Badge>
          ) : null}
        </div>
        <p className="text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
        <div className="flex items-center gap-3 pt-2 text-xs text-muted-foreground">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground inline-flex items-center gap-1 transition-colors"
          >
            Edit this page on GitHub <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>

      {componentDemo ? (
        <div className="space-y-10">
          <section>
            <h2 id="overview" className="text-xl sm:text-2xl font-bold tracking-tight text-foreground mb-4">
              Overview
            </h2>
            <ComponentPreview
              name={componentDemo.title}
              html={componentDemo.html}
              css={componentDemo.css}
              js={componentDemo.js}
              description={`Pratinjau interaktif dan kode native (HTML, CSS, JS) komponen ${componentDemo.title}.`}
            >
              {componentDemo.preview}
            </ComponentPreview>
          </section>

          <section className="space-y-3">
            <h2 id="installation" className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pb-2 border-b border-border">
              Installation &amp; Integration
            </h2>
            <p className="text-sm text-muted-foreground">
              Integrasikan stylesheet dan script native Ocenix UI ke dalam berkas HTML Anda melalui CDN:
            </p>
            <CodeBlock
              code={`<!-- Ocenix UI CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ocenix/ui/dist/ocenix.min.css" />

<!-- Ocenix UI JavaScript (Opsional untuk interaktivitas) -->
<script src="https://cdn.jsdelivr.net/npm/@ocenix/ui/dist/ocenix.min.js" defer></script>`}
              language="html"
              fileName="index.html"
            />
          </section>

          <section className="space-y-3">
            <h2 id="usage" className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pb-2 border-b border-border">
              Native HTML Structure
            </h2>
            <p className="text-sm text-muted-foreground">
              Salin struktur markup HTML native berikut langsung ke template atau dokumen web Anda:
            </p>
            <CodeBlock
              code={componentDemo.html}
              language="html"
              fileName={`${componentDemo.title.toLowerCase()}.html`}
            />
          </section>

          <section className="space-y-3">
            <h2 id="props" className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pb-2 border-b border-border">
              Options &amp; Class Reference
            </h2>
            <p className="text-sm text-muted-foreground">
              Daftar kelas CSS, atribut ARIA, dan opsi native yang tersedia:
            </p>
            <PropsTable data={componentDemo.props} />
          </section>

          <section className="space-y-3">
            <h2 id="accessibility" className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pb-2 border-b border-border">
              Accessibility (a11y)
            </h2>
            <Callout type="tip" title="WAI-ARIA Standards">
              Komponen {componentDemo.title} sepenuhnya mendukung navigasi keyboard (fokus visual, navigasi panah/tab, tombol escape) serta label screen reader otomatis.
            </Callout>
          </section>
        </div>
      ) : articleDoc ? (
        <div className="space-y-6">
          {componentKey === 'installation' ? (
            <div className="mb-8">
              <h2 id="quick-start" className="text-xl sm:text-2xl font-bold tracking-tight text-foreground pb-2 border-b border-border mb-4">
                Quick Setup Steps (Full Native)
              </h2>
              <Steps>
                <StepItem title="Sertakan CDN Stylesheet">
                  Sisipkan link stylesheet Ocenix UI di dalam tag &lt;head&gt; dokumen HTML Anda:
                  <CodeBlock
                    code={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ocenix/ui/dist/ocenix.min.css" />`}
                    language="html"
                    fileName="index.html"
                  />
                </StepItem>
                <StepItem title="Sertakan JavaScript Interaktif">
                  Sisipkan script vanilla JS untuk komponen yang memerlukan interaksi (modal, tabs, switch, accordion):
                  <CodeBlock
                    code={`<script src="https://cdn.jsdelivr.net/npm/@ocenix/ui/dist/ocenix.min.js" defer></script>`}
                    language="html"
                    fileName="index.html"
                  />
                </StepItem>
                <StepItem title="Gunakan Elemen Native">
                  Gunakan class semantik Ocenix pada elemen HTML native Anda tanpa perlu runtime tambahan:
                  <CodeBlock
                    code={`<button type="button" class="ox-btn ox-btn-primary">\n  Get Started\n</button>`}
                    language="html"
                    fileName="index.html"
                  />
                </StepItem>
              </Steps>
            </div>
          ) : null}


          {componentKey === 'dark-mode' ? (
            <Callout type="warning" title="Mitigasi Masalah Produksi: Zero-FOUC">
              Pastikan Anda meletakkan script blocking sinkronus di dalam tag &lt;head&gt; pada file index.html agar browser langsung menerapkan class "dark" sebelum rendering React dimulai.
            </Callout>
          ) : null}

          <MarkdownRenderer content={articleDoc.content} />
        </div>
      ) : (
        <div className="space-y-6">
          <Callout type="note" title="Dalam Pengembangan">
            Halaman dokumentasi untuk {title} sedang dalam tahap penulisan lanjutan.
          </Callout>
          <div className="p-8 rounded-xl border border-dashed border-border bg-card/40 flex flex-col items-center justify-center text-center space-y-2">
            <Terminal className="h-8 w-8 text-muted-foreground" />
            <p className="text-sm font-medium">Coming Soon</p>
            <p className="text-xs text-muted-foreground">
              Dokumentasi spesifik untuk rute ini akan tersedia pada pembaruan berikutnya.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
