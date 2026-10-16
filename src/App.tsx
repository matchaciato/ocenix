import { useState } from 'react'
import {
  ArrowRight,
  Check,
  Code2,
  Copy,
  ExternalLink,
  Layers,
  Palette,
  Search,
  Sparkles,
} from 'lucide-react'
import { siteConfig } from '@/config/site.config'
import { docsConfig } from '@/config/docs-nav.config'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Switch } from '@/components/ui/Switch'
import { BentoCard, BentoGrid } from '@/components/magic/BentoGrid'
import { ThemeToggle } from '@/components/shared/ThemeToggle'
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const [switchChecked, setSwitchChecked] = useState(true)
  const [btnLoading, setBtnLoading] = useState(false)
  const { isCopied, copyToClipboard } = useCopyToClipboard()

  const installCommand = 'pnpm add ocenix-ui'

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-8">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-2.5 font-bold tracking-tight text-lg">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-mono text-sm shadow-xs">
                OX
              </span>
              <span>{siteConfig.name}</span>
            </a>
            <Badge variant="outline" className="hidden sm:inline-flex text-[11px] font-mono">
              v{siteConfig.version}
            </Badge>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            {docsConfig.mainNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground flex items-center gap-1.5"
              >
                {item.title}
                {item.badge ? (
                  <Badge variant="success" className="px-1.5 py-0 text-[10px]">
                    {item.badge}
                  </Badge>
                ) : null}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground p-2 rounded-md transition-colors"
              aria-label="GitHub Repository"
            >
              <svg
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden py-20 md:py-28 border-b border-border bg-radial from-accent/20 via-background to-background">
          <div className="container mx-auto max-w-5xl px-4 sm:px-8 text-center flex flex-col items-center">
            <Badge variant="secondary" className="mb-6 px-3 py-1 gap-1.5 text-xs">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              Fase 1: Foundations & Design Tokens Ready
            </Badge>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl">
              Modern UI Kit with{' '}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-muted-foreground bg-clip-text text-transparent">
                Radix Primitives
              </span>{' '}
              &amp; Magic Motion
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Arsitektur terstruktur menggabungkan utility Tailwind CSS v4, aksesibilitas WAI-ARIA
              Radix UI, dan animasi modern ala Magic UI untuk dokumentasi dan aplikasi web mutakhir.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button size="lg" className="gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-mono text-xs gap-2"
                onClick={() => copyToClipboard(installCommand)}
              >
                {isCopied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                {installCommand}
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 container mx-auto max-w-7xl px-4 sm:px-8">
          <div className="mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Design Token System Verification
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Semantic tokens yang terintegrasi penuh dengan Tailwind v4 dan Dark Mode Engine tanpa FOUC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Palette className="h-4 w-4 text-primary" />
                  Color Tokens
                </CardTitle>
                <CardDescription>Palet semantik light &amp; dark</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span>Background / Card</span>
                  <div className="flex gap-1.5">
                    <div className="h-5 w-5 rounded border border-border bg-background" />
                    <div className="h-5 w-5 rounded border border-border bg-card" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>Primary / Secondary</span>
                  <div className="flex gap-1.5">
                    <div className="h-5 w-5 rounded border border-border bg-primary" />
                    <div className="h-5 w-5 rounded border border-border bg-secondary" />
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span>Muted / Destructive</span>
                  <div className="flex gap-1.5">
                    <div className="h-5 w-5 rounded border border-border bg-muted" />
                    <div className="h-5 w-5 rounded border border-border bg-destructive" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-primary" />
                  Button Primitives
                </CardTitle>
                <CardDescription>Variants, sizes &amp; states</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2.5">
                <div className="flex flex-wrap gap-2">
                  <Button size="sm">Primary</Button>
                  <Button size="sm" variant="secondary">
                    Secondary
                  </Button>
                  <Button size="sm" variant="outline">
                    Outline
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button size="sm" variant="destructive">
                    Destructive
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    isLoading={btnLoading}
                    onClick={() => {
                      setBtnLoading(true)
                      setTimeout(() => setBtnLoading(false), 1500)
                    }}
                  >
                    Click Spinner
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Layers className="h-4 w-4 text-primary" />
                  Form &amp; Input Controls
                </CardTitle>
                <CardDescription>A11y states with focus rings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input
                  placeholder="Quick search component..."
                  startIcon={<Search className="h-4 w-4" />}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-muted-foreground">Interactive Switch</span>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={switchChecked}
                      onCheckedChange={setSwitchChecked}
                      aria-label="Demo switch"
                    />
                    <span className="font-mono text-[11px]">
                      {switchChecked ? 'ON' : 'OFF'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  Badges &amp; Status
                </CardTitle>
                <CardDescription>Pill indicators for state</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="destructive">Error</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="mb-10 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Magic Motion Architecture
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Bento Grid dinamis dengan visual elevation dan transisi responsif.
            </p>
          </div>

          <BentoGrid>
            <BentoCard
              name="Zero-FOUC Dark Mode"
              description="Inline synchronous script yang mencegah kedipan warna putih saat initial load pada perangkat pengguna."
              icon={<Sparkles className="h-5 w-5" />}
              href="/docs/dark-mode"
              cta="Pelajari Arsitektur"
              className="md:col-span-2"
              background={
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/20" />
              }
            />
            <BentoCard
              name="Radix Accessibility"
              description="Navigasi keyboard lengkap (Tab, Enter, Escape, Arrow keys) dan kontras warna WCAG AA standar industri."
              icon={<Layers className="h-5 w-5" />}
              href="/docs/accessibility"
              cta="Lihat Standar"
              className="md:col-span-1"
              background={
                <div className="absolute inset-0 bg-radial from-primary/10 via-transparent to-transparent" />
              }
            />
            <BentoCard
              name="Tailwind CSS v4 Engine"
              description="Performa kompilasi super cepat berbasis CSS variables dan zero build configuration overhead."
              icon={<Code2 className="h-5 w-5" />}
              href="/docs/theming"
              cta="Cek Konfigurasi"
              className="md:col-span-1"
            />
            <BentoCard
              name="Single Source of Truth Nav"
              description="Struktur navigasi dokumentasi, sitemap, breadcrumb, dan paginasi digerakkan secara DRY oleh konfigurasi terpusat."
              icon={<Copy className="h-5 w-5" />}
              href="/docs/introduction"
              cta="Buka Nav Tree"
              className="md:col-span-2"
              background={
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/15 via-transparent to-primary/5" />
              }
            />
          </BentoGrid>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground bg-card">
        <div className="container mx-auto max-w-7xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            Built for {siteConfig.name} – Foundations Phase 1 Complete. Clean, Modular, and Robust.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="hover:underline flex items-center gap-1"
            >
              GitHub <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
