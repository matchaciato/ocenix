import { useState, type ReactNode } from 'react'
import { ArrowRight, Bell, HelpCircle, Mail, Search, Sparkles, User } from 'lucide-react'
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
import { Textarea } from '@/components/ui/Textarea'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import { Tooltip } from '@/components/ui/Tooltip'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog'
import { BentoCard, BentoGrid } from '@/components/magic/BentoGrid'
import { BorderBeam } from '@/components/magic/BorderBeam'
import { ShimmerButton } from '@/components/magic/ShimmerButton'
import { Marquee } from '@/components/magic/Marquee'
import { Meteors } from '@/components/magic/Meteors'
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

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Open Modal Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Ubah detail profil akun Anda di sini. Klik simpan setelah selesai.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-2">
          <Input placeholder="Username" defaultValue="matchaciato" />
          <Input placeholder="Email" defaultValue="alex@example.com" />
        </div>
        <DialogFooter>
          <Button variant="outline" size="sm">Batal</Button>
          <Button size="sm">Simpan Perubahan</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function TooltipDemo() {
  return (
    <div className="flex items-center gap-4">
      <Tooltip content="Informasi bantuan tambahan">
        <Button variant="outline" size="icon">
          <HelpCircle className="h-4 w-4" />
        </Button>
      </Tooltip>
      <Tooltip content="Lihat profil pengguna" side="bottom">
        <Button variant="secondary" size="sm">
          Arahkan Kursor ke Sini
        </Button>
      </Tooltip>
    </div>
  )
}

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-sm">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account Details</CardTitle>
            <CardDescription>Kelola informasi akun Anda di sini.</CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Change Password</CardTitle>
            <CardDescription>Perbarui kata sandi untuk keamanan.</CardDescription>
          </CardHeader>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export function AccordionDemo() {
  return (
    <Accordion type="single" defaultValue="item-1" className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Apakah Ocenix UI gratis?</AccordionTrigger>
        <AccordionContent>
          Ya, Ocenix UI dirilis dengan lisensi open source MIT dan dapat digunakan gratis untuk proyek komersial maupun pribadi.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Bagaimana dukungan aksesibilitasnya?</AccordionTrigger>
        <AccordionContent>
          Setiap komponen dirancang mematuhi pedoman WAI-ARIA dan mendukung penuh interaksi keyboard serta screen reader.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export function AvatarDemo() {
  return (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="User avatar" />
        <AvatarFallback>OX</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>
          <User className="h-4 w-4" />
        </AvatarFallback>
      </Avatar>
    </div>
  )
}

export function TextareaDemo() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Textarea placeholder="Tuliskan pesan atau catatan Anda di sini..." />
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

export function BorderBeamDemo() {
  return (
    <div className="relative flex h-[180px] w-full max-w-xs flex-col items-center justify-center overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-center text-xl font-bold leading-none text-transparent">
        Border Beam
      </span>
      <BorderBeam size={160} duration={8} />
    </div>
  )
}

export function ShimmerButtonDemo() {
  return (
    <div className="flex items-center justify-center p-4">
      <ShimmerButton className="shadow-2xl">
        <Sparkles className="h-4 w-4 text-amber-300" />
        <span>Get Started with Ocenix</span>
      </ShimmerButton>
    </div>
  )
}

export function MarqueeDemo() {
  const logos = ['React 19', 'Tailwind v4', 'Radix Primitives', 'TypeScript', 'Vite', 'Magic UI']

  return (
    <div className="relative flex w-full max-w-lg flex-col items-center justify-center overflow-hidden rounded-xl border border-border bg-card py-4">
      <Marquee pauseOnHover className="[--duration:20s]">
        {logos.map((logo) => (
          <div
            key={logo}
            className="rounded-lg border border-border bg-background/50 px-4 py-2 font-mono text-xs font-semibold"
          >
            {logo}
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export function MeteorsDemo() {
  return (
    <div className="relative flex h-[200px] w-full max-w-sm flex-col items-center justify-center overflow-hidden rounded-xl border border-border bg-card p-6 shadow-md">
      <Meteors number={15} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground to-muted-foreground bg-clip-text text-center text-xl font-semibold leading-none text-transparent">
        Meteors Shower
      </span>
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
  dialog: {
    title: 'Dialog (Modal)',
    description: 'Jendela dialog modal dengan animasi masuk mulus, penangkap tombol Escape, dan pengunci scroll latar.',
    code: `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/Dialog'
import { Button } from '@/components/ui/Button'

export function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`,
    preview: <DialogDemo />,
    props: [
      {
        prop: 'open',
        type: 'boolean',
        default: 'undefined',
        description: 'Status dialog terbuka terkontrol.',
      },
      {
        prop: 'onOpenChange',
        type: '(open: boolean) => void',
        default: 'undefined',
        description: 'Callback saat status modal berubah.',
      },
    ],
  },
  tooltip: {
    title: 'Tooltip',
    description: 'Overlay kontekstual singkat saat pengguna mengarahkan kursor atau fokus pada elemen.',
    code: `import { Tooltip } from '@/components/ui/Tooltip'
import { Button } from '@/components/ui/Button'

export function TooltipExample() {
  return (
    <Tooltip content="Prompt action description">
      <Button variant="outline">Hover Me</Button>
    </Tooltip>
  )
}`,
    preview: <TooltipDemo />,
    props: [
      {
        prop: 'content',
        type: 'ReactNode',
        default: 'undefined',
        description: 'Konten teks atau elemen di dalam tooltip.',
        required: true,
      },
      {
        prop: 'side',
        type: "'top' | 'bottom' | 'left' | 'right'",
        default: "'top'",
        description: 'Posisi tampilan tooltip relatif terhadap pemicu.',
      },
    ],
  },
  tabs: {
    title: 'Tabs',
    description: 'Antarmuka tab berlapis dengan dukungan aksesibilitas WAI-ARIA tablist dan tabpanel.',
    code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs'

export function TabsExample() {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">Overview content...</TabsContent>
      <TabsContent value="analytics">Analytics content...</TabsContent>
    </Tabs>
  )
}`,
    preview: <TabsDemo />,
    props: [
      {
        prop: 'defaultValue',
        type: 'string',
        default: 'undefined',
        description: 'Tab aktif pertama saat inisialisasi.',
      },
      {
        prop: 'onValueChange',
        type: '(value: string) => void',
        default: 'undefined',
        description: 'Event callback saat tab aktif berganti.',
      },
    ],
  },
  accordion: {
    title: 'Accordion',
    description: 'Daftar item vertikal yang dapat dibuka dan ditutup dengan animasi tinggi halus.',
    code: `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/Accordion'

export function AccordionExample() {
  return (
    <Accordion type="single" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>Content for section 1...</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}`,
    preview: <AccordionDemo />,
    props: [
      {
        prop: 'type',
        type: "'single' | 'multiple'",
        default: "'single'",
        description: 'Mengizinkan satu item atau banyak item terbuka bersamaan.',
      },
    ],
  },
  avatar: {
    title: 'Avatar',
    description: 'Elemen gambar profil pengguna dengan fallback inisial teks otomatis saat gambar gagal termuat.',
    code: `import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/Avatar'

export function AvatarExample() {
  return (
    <Avatar>
      <AvatarImage src="/avatar.jpg" alt="@user" />
      <AvatarFallback>OX</AvatarFallback>
    </Avatar>
  )
}`,
    preview: <AvatarDemo />,
    props: [
      {
        prop: 'className',
        type: 'string',
        default: 'undefined',
        description: 'Kelas ukuran atau penyesuaian border avatar.',
      },
    ],
  },
  textarea: {
    title: 'Textarea',
    description: 'Bidang input teks multi-baris yang responsif dengan konsistensi ring fokus.',
    code: `import { Textarea } from '@/components/ui/Textarea'

export function TextareaExample() {
  return <Textarea placeholder="Type your message here." />
}`,
    preview: <TextareaDemo />,
    props: [
      {
        prop: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Menonaktifkan interaksi pada textarea.',
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
  'border-beam': {
    title: 'Border Beam',
    description: 'Efek berkas cahaya gradien dinamis yang mengitari border kartu dengan animasi CSS murni.',
    code: `import { BorderBeam } from '@/components/magic/BorderBeam'

export function BorderBeamExample() {
  return (
    <div className="relative rounded-xl border border-border p-8">
      <span>Card content here</span>
      <BorderBeam size={160} duration={8} />
    </div>
  )
}`,
    preview: <BorderBeamDemo />,
    props: [
      {
        prop: 'size',
        type: 'number',
        default: '200',
        description: 'Ukuran panjang berkas cahaya dalam piksel.',
      },
      {
        prop: 'duration',
        type: 'number',
        default: '15',
        description: 'Durasi putaran berkas dalam detik.',
      },
    ],
  },
  'shimmer-button': {
    title: 'Shimmer Button',
    description: 'Tombol interaktif dengan efek pantulan cahaya ambient conic gradient yang berputar.',
    code: `import { ShimmerButton } from '@/components/magic/ShimmerButton'

export function ShimmerButtonExample() {
  return (
    <ShimmerButton>
      <span>Explore Ocenix</span>
    </ShimmerButton>
  )
}`,
    preview: <ShimmerButtonDemo />,
    props: [
      {
        prop: 'shimmerColor',
        type: 'string',
        default: "'#ffffff'",
        description: 'Warna pantulan kilau cahaya.',
      },
      {
        prop: 'shimmerDuration',
        type: 'string',
        default: "'3s'",
        description: 'Kecepatan putaran kilau.',
      },
    ],
  },
  marquee: {
    title: 'Animated Marquee',
    description: 'Ticker horizontal berjalan tanpa jeda dengan akselerasi GPU dan jeda saat kursor diarahkan.',
    code: `import { Marquee } from '@/components/magic/Marquee'

export function MarqueeExample() {
  return (
    <Marquee pauseOnHover>
      <span>Item 1</span>
      <span>Item 2</span>
      <span>Item 3</span>
    </Marquee>
  )
}`,
    preview: <MarqueeDemo />,
    props: [
      {
        prop: 'pauseOnHover',
        type: 'boolean',
        default: 'true',
        description: 'Menghentikan laju ticker saat kursor berada di atasnya.',
      },
      {
        prop: 'reverse',
        type: 'boolean',
        default: 'false',
        description: 'Membalik arah laju gerakan ticker.',
      },
    ],
  },
  meteors: {
    title: 'Meteors Effect',
    description: 'Efek hujan bintang jatuh dengan garis ekor cahaya untuk background hero modern.',
    code: `import { Meteors } from '@/components/magic/Meteors'

export function MeteorsExample() {
  return (
    <div className="relative overflow-hidden p-12">
      <Meteors number={20} />
      <h1>Hero Heading</h1>
    </div>
  )
}`,
    preview: <MeteorsDemo />,
    props: [
      {
        prop: 'number',
        type: 'number',
        default: '20',
        description: 'Jumlah partikel meteor yang dirender.',
      },
    ],
  },
}
