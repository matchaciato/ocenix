import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import { LandingLayout } from '@/layouts/LandingLayout'
import { DocsLayout } from '@/layouts/DocsLayout'
import { LandingPage } from '@/pages/LandingPage'
import { DocPage } from '@/pages/DocPage'
import { ShowcasePage } from '@/pages/ShowcasePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ScrollToTop } from '@/components/shared/ScrollToTop'
import { ErrorBoundary } from '@/components/docs/ErrorBoundary'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ErrorBoundary fallbackTitle="Terjadi kendala saat memuat halaman">
        <Routes>
        <Route element={<LandingLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/showcase" element={<ShowcasePage />} />
        </Route>

        <Route path="/docs" element={<DocsLayout />}>
          <Route index element={<Navigate to="/docs/introduction" replace />} />
          <Route path=":slug" element={<DocPage />} />
          <Route path=":category/:slug" element={<DocPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  )
}
