import Link from 'next/link'
import { ArrowLeft, Code } from 'lucide-react'

export default function PixelSetupPage() {
  const articles = [
    {
      slug: 'pengenalan-pixel-dan-tracking',
      title: 'Pengenalan Pixel & Tracking',
      description: 'Memahami konsep dasar pixel dan tracking untuk iklan digital'
    },
    {
      slug: 'apa-itu-meta-pixel',
      title: 'Apa itu Meta Pixel?',
      description: 'Penjelasan lengkap tentang Meta Pixel dan fungsinya'
    },
    {
      slug: 'mengapa-pixel-penting',
      title: 'Mengapa Pixel Penting?',
      description: 'Alasan mengapa Meta Pixel sangat penting untuk kampanye iklan'
    },
    {
      slug: 'membuat-pixel-baru-di-events-manager',
      title: 'Membuat Pixel Baru di Events Manager',
      description: 'Langkah-langkah membuat Meta Pixel baru di Facebook Events Manager'
    },
    {
      slug: 'instalasi-pixel-manual',
      title: 'Instalasi Pixel Manual',
      description: 'Cara menginstall Meta Pixel secara manual di website'
    },
    {
      slug: 'instalasi-pixel-via-partner-integration',
      title: 'Instalasi Pixel via Partner Integration',
      description: 'Menginstall Meta Pixel melalui integrasi partner seperti Google Tag Manager'
    },
    {
      slug: 'testing-pixel',
      title: 'Testing Pixel',
      description: 'Cara menguji dan memverifikasi bahwa Meta Pixel berfungsi dengan baik'
    }
  ]

  return (
    <div className="pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-hadona-blue">Home</Link>
            <span>/</span>
            <Link href="/whitelist" className="hover:text-hadona-blue">Whitelist</Link>
            <span>/</span>
            <span className="text-gray-900">Meta Pixel Setup</span>
          </div>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <Link
            href="/whitelist"
            className="inline-flex items-center text-hadona-blue hover:text-hadona-blue-dark mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Dokumentasi Whitelist
          </Link>
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-blue-600 p-3 rounded-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Meta Pixel Setup</h1>
              <p className="text-xl text-gray-600 mt-2">
                Instalasi dan konfigurasi Meta Pixel untuk tracking
              </p>
            </div>
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-4">
          {articles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/whitelist/pixel-setup/${article.slug}`}
              className="block bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-hadona-blue hover:shadow-lg transition-all group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-hadona-blue rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-hadona-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600">
                    {article.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

