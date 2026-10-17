import { useState } from 'react'
import { Link } from 'react-router'
import {
  ArrowRight,
  Check,
  Code2,
  Copy,
  Layers,
  Palette,
  Search,
  Sparkles,
} from 'lucide-react'
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
import { BorderBeam } from '@/components/magic/BorderBeam'
import { ShimmerButton } from '@/components/magic/ShimmerButton'
import { Marquee } from '@/components/magic/Marquee'
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'
import { useSEO } from '@/hooks/use-seo'
import { siteConfig } from '@/config/site.config'

export function LandingPage() {
  useSEO({
    title: siteConfig.name,
    description: siteConfig.description,
  })
  const [inputValue, setInputValue] = useState('')
  const [switchChecked, setSwitchChecked] = useState(true)
  const [btnLoading, setBtnLoading] = useState(false)
  const { isCopied, copyToClipboard } = useCopyToClipboard()

  const cdnSnippet = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@ocenix/ui/dist/ocenix.min.css" />'
  const techLogos = [
    'HTML5 & CSS3',
    'Vanilla JavaScript',
    'Full Native Web',
    'Tailwind CSS v4',
    'Zero-FOUC Dark Mode',
    'WAI-ARIA Accessibility',
    'Magic UI Motion',
    'Zero Dependencies',
  ]

  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28 border-b border-border bg-radial from-accent/20 via-background to-background">
        <div className="container mx-auto max-w-5xl px-4 sm:px-8 text-center flex flex-col items-center">
          <Badge variant="secondary" className="mb-6 px-3 py-1 gap-1.5 text-xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-500" />
            Full Native UI Kit &amp; Pure Web Stack
          </Badge>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl">
            Modern UI Kit with{' '}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-muted-foreground bg-clip-text text-transparent">
              Full Native Web
            </span>{' '}
            &amp; Magic Motion
          </h1>

          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Arsitektur terstruktur berbasis standar web native (HTML, CSS, JS), aksesibilitas WAI-ARIA,
            dan animasi modern untuk dokumentasi dan aplikasi web mutakhir tanpa ketergantungan runtime.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link to="/docs/introduction">
              <ShimmerButton className="gap-2 px-5 py-3 text-sm">
                <span>Explore Documentation</span>
                <ArrowRight className="h-4 w-4" />
              </ShimmerButton>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="font-mono text-xs gap-2 max-w-xs sm:max-w-md truncate"
              onClick={() => copyToClipboard(cdnSnippet)}
              title={cdnSnippet}
            >
              {isCopied ? <Check className="h-4 w-4 text-emerald-500 shrink-0" /> : <Copy className="h-4 w-4 shrink-0" />}
              <span className="truncate">&lt;link rel="stylesheet" href=".../ocenix.min.css" /&gt;</span>
            </Button>
          </div>
        </div>
      </section>


      <div className="border-b border-border bg-card/50 py-3 overflow-hidden">
        <Marquee pauseOnHover className="[--duration:30s]">
          {techLogos.map((tech) => (
            <div
              key={tech}
              className="rounded-lg border border-border bg-background/80 px-4 py-1.5 font-mono text-xs font-medium text-muted-foreground flex items-center gap-2"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {tech}
            </div>
          ))}
        </Marquee>
      </div>

      <section className="py-16 container mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Design Token System &amp; Primitives
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

          <Card className="relative overflow-hidden">
            <BorderBeam size={120} duration={10} />
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-primary" />
                Border Beam Effect
              </CardTitle>
              <CardDescription>Pill indicators &amp; glow</CardDescription>
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
    </>
  )
}
