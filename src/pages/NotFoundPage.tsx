import { Link } from 'react-router'
import { BookOpen, Home } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { useSEO } from '@/hooks/use-seo'

export function NotFoundPage() {
  useSEO({
    title: '404 – Halaman Tidak Ditemukan',
    description: 'Halaman yang Anda tuju tidak ditemukan atau telah dipindahkan.',
  })
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center p-4 text-center">
      <div className="space-y-4 max-w-md">
        <span className="font-mono text-6xl font-bold text-muted-foreground/40">404</span>
        <h1 className="text-3xl font-extrabold tracking-tight">Halaman Tidak Ditemukan</h1>
        <p className="text-sm text-muted-foreground">
          Tautan yang Anda tuju mungkin telah dipindahkan atau belum tersedia dalam dokumentasi.
        </p>
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link to="/">
            <Button variant="default" className="gap-2">
              <Home className="h-4 w-4" />
              Kembali ke Beranda
            </Button>
          </Link>
          <Link to="/docs/introduction">
            <Button variant="outline" className="gap-2">
              <BookOpen className="h-4 w-4" />
              Buka Dokumentasi
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
