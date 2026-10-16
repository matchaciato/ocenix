import type { ReactNode } from 'react'
import type { PropItem } from '@/components/docs/PropsTable'
import {
  AccordionDemo,
  AvatarDemo,
  BadgeDemo,
  BentoGridDemo,
  BorderBeamDemo,
  ButtonDemo,
  CardDemo,
  DialogDemo,
  InputDemo,
  MarqueeDemo,
  MeteorsDemo,
  ShimmerButtonDemo,
  SwitchDemo,
  TabsDemo,
  TextareaDemo,
  TooltipDemo,
} from '@/components/docs/component-demos'

export interface ComponentDemo {
  title: string
  description: string
  code: string
  preview: ReactNode
  props: PropItem[]
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
