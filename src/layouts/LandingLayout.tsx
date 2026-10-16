import { useState } from 'react'
import { Outlet } from 'react-router'
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import { MobileNav } from '@/components/shared/MobileNav'

export function LandingLayout() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <div className="relative min-h-dvh bg-background text-foreground flex flex-col">
      <Header
        variant="landing"
        onOpenMobileNav={() => setIsMobileNavOpen(true)}
      />
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
