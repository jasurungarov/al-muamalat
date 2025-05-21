import { ChildProps } from '@/types'
import Footer from './_components/footer'
import Navbar from './_components/navbar'
import { Toaster } from "sonner"

function Layout({ children }: ChildProps) {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      {/* Navigatsiya paneli */}
      <Navbar />

      {/* Kontent qismi */}
      <div className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </div>

      {/* Xabarnomalar */}
      <Toaster richColors position="top-center" />

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default Layout
