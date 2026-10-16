import { useState, type ReactNode } from 'react'
import { ArrowRight, Bell, Mail, Search, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Switch } from '@/components/ui/Switch'
import { BentoCard, BentoGrid } from '@/components/magic/BentoGrid'
import type { PropItem } from '@/components/docs/PropsTable'

export interface ComponentDemo {
  title: string
  description: string
  code: string
  preview: ReactNode
  props: PropItem[]
}

export function ButtonDemo() {
  const [loading, setLoading] = useState(false)

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button
        variant="default"
        isLoading={loading}
        onClick={() => {
          setLoading(true)
          setTimeout(() => setLoading(false), 1500)
        }}
      >
        Click Spinner
      </Button>
    </div>
  )
}

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Notifications</CardTitle>
          <Bell className="h-4 w-4 text-muted-foreground" />
        </div>
        <CardDescription>Pilih preferensi notifikasi akun Anda.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 text-xs text-muted-foreground">
        <p>Anda akan menerima pembaruan rilis setiap versi baru diterbitkan.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          Abaikan
        </Button>
        <Button size="sm">Simpan</Button>
      </CardFooter>
    </Card>
  )
}

export function InputDemo() {
  const [val, setVal] = useState('')

  return (
    <div className="w-full max-w-sm space-y-4">
      <Input
        placeholder="Search components or icons..."
        startIcon={<Search className="h-4 w-4" />}
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <Input
        type="email"
        placeholder="name@example.com"
        startIcon={<Mail className="h-4 w-4" />}
      />
    </div>
  )
}

export function SwitchDemo() {
  const [airplane, setAirplane] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className="w-full max-w-xs space-y-4 rounded-xl border border-border p-4 bg-card">
      <div className="flex items-center justify-between">
        <label htmlFor="airplane-mode" className="text-xs font-medium cursor-pointer">
          Airplane Mode
        </label>
        <Switch id="airplane-mode" checked={airplane} onCheckedChange={setAirplane} />
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="dark-toggle" className="text-xs font-medium cursor-pointer">
          Dark Interface
        </label>
        <Switch id="dark-toggle" checked={darkMode} onCheckedChange={setDarkMode} />
      </div>
    </div>
  )
}

export function BadgeDemo() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  )
}

export function BentoGridDemo() {
  return (
    <div className="w-full max-w-xl">
      <BentoGrid className="auto-rows-[14rem] grid-cols-1 md:grid-cols-2">
        <BentoCard
          name="Zero-FOUC Architecture"
          description="Instant dark mode detection without page flicker."
          icon={<Sparkles className="h-4 w-4" />}
          href="/docs/dark-mode"
          cta="Learn More"
        />
        <BentoCard
          name="Radix Accessibility"
          description="Full keyboard and screen reader support."
          icon={<ArrowRight className="h-4 w-4" />}
          href="/docs/accessibility"
          cta="View Docs"
        />
      </BentoGrid>
    </div>
  )
}

export const componentRegistry: Record<string, ComponentDemo> = {
  button: {
    title: 'Button',
    description: 'Komponen tombol interaktif dengan ragam varian, ukuran, dan status loading spinner.',
    code: `import { Button } from '@/components/ui/Button'

export function ButtonExample() {
  return (
    <div className="flex gap-2">
      <Button variant="default">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  )
}`,
    preview: <ButtonDemo />,
    props: [
      {
        prop: 'variant',
        type: "'default' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link'",
        default: "'default'",
        description: 'Varian visual untuk hierarki aksi tombol.',
      },
      {
        prop: 'size',
        type: "'sm' | 'md' | 'lg' | 'icon'",
        default: "'md'",
        description: 'Ukuran dimensi dan padding tombol.',
      },
      {
        prop: 'isLoading',
        type: 'boolean',
        default: 'false',
        description: 'Menampilkan animasi spinner dan mengunci aksi klik.',
      },
      {
        prop: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Menonaktifkan interaksi pada tombol.',
      },
    ],
  },
  card: {
    title: 'Card',
    description: 'Komponen kontainer berbasis compound pattern untuk mengelompokkan informasi terstruktur.',
    code: `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export function CardExample() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Project configuration details...</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}`,
    preview: <CardDemo />,
    props: [
      {
        prop: 'className',
        type: 'string',
        default: 'undefined',
        description: 'Kelas utilitas styling tambahan untuk kontainer.',
      },
    ],
  },
  input: {
    title: 'Input',
    description: 'Input teks berkinerja tinggi dengan dukungan prefix/suffix icon dan focus ring yang jelas.',
    code: `import { Input } from '@/components/ui/Input'
import { Search } from 'lucide-react'

export function InputExample() {
  return (
    <Input
      placeholder="Search documentation..."
      startIcon={<Search className="h-4 w-4" />}
    />
  )
}`,
    preview: <InputDemo />,
    props: [
      {
        prop: 'startIcon',
        type: 'ReactNode',
        default: 'undefined',
        description: 'Elemen ikon di awal field input.',
      },
      {
        prop: 'endIcon',
        type: 'ReactNode',
        default: 'undefined',
        description: 'Elemen ikon di akhir field input.',
      },
      {
        prop: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Menonaktifkan field input.',
      },
    ],
  },
  switch: {
    title: 'Switch',
    description: 'Kontrol toggle dua status yang aksesibel sesuai standar WAI-ARIA switch pattern.',
    code: `import { useState } from 'react'
import { Switch } from '@/components/ui/Switch'

export function SwitchExample() {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onCheckedChange={setEnabled}
      aria-label="Toggle notifications"
    />
  )
}`,
    preview: <SwitchDemo />,
    props: [
      {
        prop: 'checked',
        type: 'boolean',
        default: 'undefined',
        description: 'Nilai status terkontrol (controlled state).',
      },
      {
        prop: 'onCheckedChange',
        type: '(checked: boolean) => void',
        default: 'undefined',
        description: 'Callback saat status switch berubah.',
      },
      {
        prop: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Menonaktifkan tombol toggle switch.',
      },
    ],
  },
  badge: {
    title: 'Badge',
    description: 'Indikator status kecil berbentuk pill untuk kategori atau tag numerik.',
    code: `import { Badge } from '@/components/ui/Badge'

export function BadgeExample() {
  return (
    <div className="flex gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  )
}`,
    preview: <BadgeDemo />,
    props: [
      {
        prop: 'variant',
        type: "'default' | 'secondary' | 'outline' | 'destructive' | 'success'",
        default: "'default'",
        description: 'Varian gaya visual badge.',
      },
    ],
  },
  'bento-grid': {
    title: 'Bento Grid',
    description: 'Sistem grid kartu interaktif terinspirasi dari Magic UI dengan visual elevation modern.',
    code: `import { BentoGrid, BentoCard } from '@/components/magic/BentoGrid'
import { Sparkles } from 'lucide-react'

export function BentoExample() {
  return (
    <BentoGrid>
      <BentoCard
        name="Dynamic Animations"
        description="GPU-accelerated smooth motion."
        icon={<Sparkles className="h-4 w-4" />}
        href="/docs/introduction"
        cta="Discover"
      />
    </BentoGrid>
  )
}`,
    preview: <BentoGridDemo />,
    props: [
      {
        prop: 'name',
        type: 'string',
        default: 'undefined',
        description: 'Judul kartu bento.',
        required: true,
      },
      {
        prop: 'description',
        type: 'string',
        default: 'undefined',
        description: 'Deskripsi isi kartu bento.',
        required: true,
      },
      {
        prop: 'href',
        type: 'string',
        default: 'undefined',
        description: 'Tautan navigasi aksi kartu.',
      },
    ],
  },
}
