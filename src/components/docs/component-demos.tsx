import { useState } from 'react'
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
