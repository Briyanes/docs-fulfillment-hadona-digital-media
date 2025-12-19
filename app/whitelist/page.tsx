import Link from 'next/link'
import { 
  Code, 
  BarChart3, 
  Link2, 
  Database, 
  Zap, 
  Eye,
  ArrowRight
} from 'lucide-react'

export default function WhitelistPage() {
  const categories = [
    {
      id: 'pixel-setup',
      title: 'Meta Pixel Setup',
      description: 'Instalasi dan konfigurasi Meta Pixel untuk tracking',
      icon: Code,
      articles: [
        'Pengenalan Pixel & Tracking',
        'Apa itu Meta Pixel?',
        'Mengapa Pixel Penting?',
        'Membuat Pixel Baru di Events Manager',
        'Instalasi Pixel Manual',
        'Instalasi Pixel via Partner Integration',
        'Testing Pixel'
      ]
    },
    {
      id: 'google-integration',
      title: 'Google Integration',
      description: 'Integrasi Google Analytics dan Google Ads',
      icon: BarChart3,
      articles: [
        'Menghubungkan Google Analytics',
        'Setup Partner Integration',
        'Authentication Google Analytics',
        'Mapping Datasets',
        'Import Data Meta Ads ke GA4',
        'Setup Google Ads Integration',
        'Linking Google Ads dengan Meta',
        'Verifikasi Integrasi',
        'Troubleshooting Integrasi'
      ]
    },
    {
      id: 'utm-configuration',
      title: 'UTM Configuration',
      description: 'Setup parameter UTM untuk tracking kampanye',
      icon: Link2,
      articles: [
        'Mengapa UTM Penting?',
        'Setup UTM untuk Meta Ads',
        'Parameter utm_source',
        'Parameter utm_medium',
        'Parameter utm_campaign',
        'Parameter utm_id'
      ]
    },
    {
      id: 'data-sync',
      title: 'Data Sync',
      description: 'Sinkronisasi data antar platform',
      icon: Database,
      articles: [
        'Import Data Meta Ads ke GA4',
        'Langkah-langkah Import',
        'Mapping Parameters',
        'Verifikasi Data',
        'Auto-sync Setup',
        'Troubleshooting Data Sync'
      ]
    },
    {
      id: 'advanced-setup',
      title: 'Advanced Setup',
      description: 'Konfigurasi lanjutan dan Conversions API',
      icon: Zap,
      articles: [
        'Setup Conversions API',
        'Event Setup Lanjutan',
        'Custom Events',
        'Audience Building',
        'Advanced Pixel Configuration',
        'Server-Side Tracking',
        'Webhook Configuration',
        'API Integration'
      ]
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Reporting',
      description: 'Cara melihat dan menganalisis data performa',
      icon: Eye,
      articles: [
        'Cara Melihat Data di Meta Events Manager',
        'Cara Melihat Data di Google Analytics',
        'Interpretasi Metrics',
        'Key Performance Indicators',
        'Optimasi Berdasarkan Data',
        'Setting Up Reports',
        'Automated Reporting'
      ]
    }
  ]

  return (
    <div className="pt-20 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-hadona-blue to-hadona-blue-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dokumentasi Client Whitelist
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Panduan lengkap untuk advertiser dalam setup Meta Pixel, integrasi Google Analytics, 
            konfigurasi UTM, dan monitoring performa iklan.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <div
                  key={category.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-hadona-blue to-hadona-blue-dark p-6">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">
                          {category.title}
                        </h2>
                        <p className="text-blue-100 mt-1">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.articles.map((article, index) => (
                        <Link
                          key={index}
                          href={`/whitelist/${category.id}/${article.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
                          className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-hadona-blue hover:bg-blue-50 transition-all group"
                        >
                          <span className="text-gray-700 group-hover:text-hadona-blue font-medium">
                            {article}
                          </span>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-hadona-blue group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Link
                        href={`/whitelist/${category.id}`}
                        className="inline-flex items-center text-hadona-blue font-semibold hover:text-hadona-blue-dark transition-colors"
                      >
                        Lihat Semua Artikel di {category.title} →
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

