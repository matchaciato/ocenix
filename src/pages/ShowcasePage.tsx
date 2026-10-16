import { Link } from 'react-router'
import { ArrowRight, LayoutDashboard, Sparkles, ShieldCheck } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import { useSEO } from '@/hooks/use-seo'

export function ShowcasePage() {
  useSEO({
    title: 'Showcase & Examples',
    description: 'Koleksi template dan blok antarmuka siap pakai yang dibangun menggunakan primitif Ocenix UI.',
  })
  const templates = [
    {
      title: 'Analytics Dashboard',
      description: 'Template dashboard responsif lengkap dengan visual cards, table, dan dark mode instan.',
      badge: 'Popular',
      icon: <LayoutDashboard className="h-5 w-5 text-primary" />,
      href: '/docs/components/card',
    },
    {
      title: 'Authentication Suite',
      description: 'Form login dan registrasi dengan validasi input, focus states, dan accessible alerts.',
      badge: 'New',
      icon: <ShieldCheck className="h-5 w-5 text-emerald-500" />,
      href: '/docs/components/input',
    },
    {
      title: 'Marketing Landing Page',
      description: 'Hero modern dengan animasi Bento Grid, marquee efek visual, dan CTA berkinerja tinggi.',
      badge: 'Featured',
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      href: '/',
    },
  ]

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-8 py-16 space-y-12">
      <div className="max-w-3xl space-y-3">
        <Badge variant="secondary" className="px-3 py-1 text-xs">
          Pre-built Blocks &amp; Templates
        </Badge>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Showcase &amp; Examples
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed">
          Koleksi template dan blok antarmuka siap pakai yang dibangun menggunakan primitif Ocenix UI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card key={template.title} className="flex flex-col justify-between group hover:border-foreground/30 transition-all">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="p-2.5 rounded-lg border border-border bg-muted/40">
                  {template.icon}
                </div>
                <Badge variant="outline" className="text-xs">
                  {template.badge}
                </Badge>
              </div>
              <CardTitle className="text-lg">{template.title}</CardTitle>
              <CardDescription className="text-xs leading-relaxed">
                {template.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Link to={template.href}>
                <Button variant="ghost" size="sm" className="w-full justify-between text-xs group-hover:bg-accent">
                  View Implementation
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
