import { useState } from 'react'
import { useLocation } from 'react-router'
import {
  Check,
  Code2,
  Copy,
  ExternalLink,
  Laptop,
  Maximize2,
  Smartphone,
  Tablet,
} from 'lucide-react'
import { getAllDocLinks } from '@/config/docs-nav.config'
import { siteConfig } from '@/config/site.config'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Switch } from '@/components/ui/Switch'
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'
import { cn } from '@/lib/utils'

export function DocPage() {
  const location = useLocation()
  const allDocs = getAllDocLinks()
  const currentDoc = allDocs.find((d) => d.href === location.pathname) || {
    title: 'Button',
    href: '/docs/components/button',
    badge: undefined,
  }

  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview')
  const [viewport, setViewport] = useState<'full' | 'tablet' | 'mobile'>('full')
  const { isCopied, copyToClipboard } = useCopyToClipboard()

  const [demoSwitch, setDemoSwitch] = useState(false)
  const [demoInput, setDemoInput] = useState('')

  const componentSnippet = `import { Button } from '@/components/ui/Button'

export default function Demo() {
  return (
    <div className="flex gap-2">
      <Button variant="default">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  )
}`

  return (
    <div className="space-y-10">
      <div className="space-y-2 pb-6 border-b border-border">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {currentDoc.title}
          </h1>
          {currentDoc.badge ? (
            <Badge variant="success" className="text-xs">
              {currentDoc.badge}
            </Badge>
          ) : null}
        </div>
        <p className="text-base text-muted-foreground leading-relaxed">
          Dokumentasi komprehensif komponen {currentDoc.title} dengan aksesibilitas Radix, utility
          Tailwind CSS v4, dan dukungan dark mode instan.
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

      <section id="overview" className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            Overview
          </h2>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center rounded-md border border-border p-0.5 bg-muted/40">
              <Button
                variant={viewport === 'full' ? 'secondary' : 'ghost'}
                size="icon"
                className="h-7 w-7 rounded-sm"
                onClick={() => setViewport('full')}
                aria-label="Full viewport"
              >
                <Maximize2 className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant={viewport === 'tablet' ? 'secondary' : 'ghost'}
                size="icon"
                className="h-7 w-7 rounded-sm"
                onClick={() => setViewport('tablet')}
                aria-label="Tablet viewport"
              >
                <Tablet className="h-3.5 w-3.5" />
              </Button>
              <Button
                variant={viewport === 'mobile' ? 'secondary' : 'ghost'}
                size="icon"
                className="h-7 w-7 rounded-sm"
                onClick={() => setViewport('mobile')}
                aria-label="Mobile viewport"
              >
                <Smartphone className="h-3.5 w-3.5" />
              </Button>
            </div>

            <div className="flex items-center rounded-md border border-border p-0.5 bg-muted/40 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('preview')}
                className={cn(
                  'px-3 py-1 rounded-sm font-medium transition-colors',
                  activeTab === 'preview'
                    ? 'bg-background text-foreground shadow-xs'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                Preview
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('code')}
                className={cn(
                  'px-3 py-1 rounded-sm font-medium transition-colors flex items-center gap-1.5',
                  activeTab === 'code'
                    ? 'bg-background text-foreground shadow-xs'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                <Code2 className="h-3.5 w-3.5" />
                Code
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card overflow-hidden shadow-xs">
          {activeTab === 'preview' ? (
            <div
              className={cn(
                'min-h-[260px] p-8 flex items-center justify-center transition-all duration-300 mx-auto bg-background/50',
                viewport === 'tablet' && 'max-w-[768px] border-x border-dashed border-border',
                viewport === 'mobile' && 'max-w-[375px] border-x border-dashed border-border',
              )}
            >
              {currentDoc.title === 'Input' ? (
                <div className="w-full max-w-sm space-y-2">
                  <Input
                    placeholder="Enter email address..."
                    value={demoInput}
                    onChange={(e) => setDemoInput(e.target.value)}
                  />
                  <p className="text-xs text-muted-foreground">Value: {demoInput || 'empty'}</p>
                </div>
              ) : currentDoc.title === 'Switch' ? (
                <div className="flex items-center gap-3">
                  <Switch
                    checked={demoSwitch}
                    onCheckedChange={setDemoSwitch}
                    aria-label="Interactive toggle switch"
                  />
                  <span className="text-sm font-medium">
                    {demoSwitch ? 'Active State' : 'Inactive State'}
                  </span>
                </div>
              ) : currentDoc.title === 'Card' ? (
                <Card className="w-full max-w-sm">
                  <CardHeader>
                    <CardTitle>Example Card</CardTitle>
                    <CardDescription>Compound card component layout</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">
                      Modular layout using standard semantic slots.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Button variant="default">Default Button</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              )}
            </div>
          ) : (
            <div className="relative bg-zinc-950 text-zinc-100 p-4 font-mono text-xs overflow-x-auto">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-100"
                onClick={() => copyToClipboard(componentSnippet)}
                aria-label="Copy code"
              >
                {isCopied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </Button>
              <pre className="p-2 leading-relaxed">
                <code>{componentSnippet}</code>
              </pre>
            </div>
          )}
        </div>
      </section>

      <section id="installation" className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          Installation
        </h2>
        <p className="text-sm text-muted-foreground">
          Tambahkan komponen ke project Anda menggunakan CLI package manager pilihan Anda:
        </p>
        <div className="relative rounded-lg bg-zinc-950 text-zinc-100 p-4 font-mono text-xs border border-zinc-800">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2.5 right-2.5 text-zinc-400 hover:text-zinc-100"
            onClick={() => copyToClipboard(`pnpm add @ocenix/ui`)}
            aria-label="Copy install command"
          >
            {isCopied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
          </Button>
          <code>pnpm add @ocenix/ui</code>
        </div>
      </section>

      <section id="usage" className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          Usage Example
        </h2>
        <p className="text-sm text-muted-foreground">
          Import komponen ke dalam file React Anda dan gunakan bersamaan dengan varian styling:
        </p>
        <div className="rounded-lg bg-zinc-950 text-zinc-100 p-4 font-mono text-xs border border-zinc-800 overflow-x-auto">
          <pre>
            <code>{`import { ${currentDoc.title} } from '@/components/ui/${currentDoc.title}'`}</code>
          </pre>
        </div>
      </section>

      <section id="variants" className="space-y-4">
        <h3 className="text-lg font-bold tracking-tight text-foreground">
          Component Variants
        </h3>
        <p className="text-sm text-muted-foreground">
          Komponen ini mendukung varian prop untuk memudahkan penyesuaian visual antarmuka:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-lg border border-border bg-card space-y-2">
            <p className="text-xs font-semibold text-foreground">default</p>
            <p className="text-xs text-muted-foreground">Varian primer untuk aksi utama pada halaman.</p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card space-y-2">
            <p className="text-xs font-semibold text-foreground">secondary</p>
            <p className="text-xs text-muted-foreground">Varian sekunder untuk opsi alternatif yang seimbang.</p>
          </div>
          <div className="p-4 rounded-lg border border-border bg-card space-y-2">
            <p className="text-xs font-semibold text-foreground">outline / ghost</p>
            <p className="text-xs text-muted-foreground">Varian minimalis dengan visual background transparan.</p>
          </div>
        </div>
      </section>

      <section id="props" className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          API Reference
        </h2>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-left text-xs">
            <thead className="bg-muted/50 border-b border-border text-foreground font-semibold">
              <tr>
                <th className="py-2.5 px-4">Prop</th>
                <th className="py-2.5 px-4">Type</th>
                <th className="py-2.5 px-4">Default</th>
                <th className="py-2.5 px-4">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-2.5 px-4 font-mono font-medium text-primary">variant</td>
                <td className="py-2.5 px-4 font-mono text-muted-foreground">'default' | 'secondary' | 'outline' | 'ghost' | 'destructive'</td>
                <td className="py-2.5 px-4 font-mono text-muted-foreground">'default'</td>
                <td className="py-2.5 px-4 text-muted-foreground">Gaya visual utama komponen.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-mono font-medium text-primary">size</td>
                <td className="py-2.5 px-4 font-mono text-muted-foreground">'sm' | 'md' | 'lg' | 'icon'</td>
                <td className="py-2.5 px-4 font-mono text-muted-foreground">'md'</td>
                <td className="py-2.5 px-4 text-muted-foreground">Ukuran padding dan font komponen.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-mono font-medium text-primary">isLoading</td>
                <td className="py-2.5 px-4 font-mono text-muted-foreground">boolean</td>
                <td className="py-2.5 px-4 font-mono text-muted-foreground">false</td>
                <td className="py-2.5 px-4 text-muted-foreground">Menampilkan spinner animasi dan mendisabled interaksi.</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-mono font-medium text-primary">disabled</td>
                <td className="py-2.5 px-4 font-mono text-muted-foreground">boolean</td>
                <td className="py-2.5 px-4 font-mono text-muted-foreground">false</td>
                <td className="py-2.5 px-4 text-muted-foreground">Menonaktifkan interaksi klik dan keyboard.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="accessibility" className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-foreground">
          Accessibility (a11y)
        </h2>
        <p className="text-sm text-muted-foreground">
          Sesuai dengan pedoman WAI-ARIA dan standar WCAG AA:
        </p>
        <div className="rounded-lg border border-border p-4 bg-card space-y-2 text-xs">
          <div className="flex items-start gap-2">
            <Laptop className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground">Keyboard Interaction</p>
              <p className="text-muted-foreground">
                Dapat diakses penuh menggunakan tombol <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted font-mono">Tab</kbd>, diaktifkan menggunakan <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted font-mono">Enter</kbd> atau <kbd className="px-1.5 py-0.5 rounded border border-border bg-muted font-mono">Space</kbd>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
