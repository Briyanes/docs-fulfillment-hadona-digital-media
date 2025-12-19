import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dokumentasi Hadona - Panduan Lengkap untuk Client Agency & Whitelist',
  description: 'Dokumentasi lengkap untuk membantu client Hadona Agency dan Whitelist dalam setup Facebook Business Manager, Meta Pixel, Google Analytics, dan integrasi platform iklan lainnya.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

