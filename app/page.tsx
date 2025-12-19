import Link from 'next/link'
import { 
  Users, 
  Building2, 
  Facebook, 
  Instagram, 
  MessageCircle, 
  Settings, 
  Shield, 
  TrendingUp,
  Code,
  BarChart3,
  Link2,
  Database,
  Zap,
  Eye,
  FileText
} from 'lucide-react'

export default function HomePage() {
  const agencyCategories = [
    {
      id: 'onboarding',
      title: 'Onboarding',
      description: 'Proses onboarding dan persiapan awal',
      icon: Users,
      count: 5,
      color: 'bg-blue-500'
    },
    {
      id: 'business-manager',
      title: 'Business Manager',
      description: 'Setup Facebook Business Manager',
      icon: Building2,
      count: 8,
      color: 'bg-purple-500'
    },
    {
      id: 'ads-setup',
      title: 'Setup Iklan',
      description: 'Konfigurasi platform iklan',
      icon: TrendingUp,
      count: 12,
      color: 'bg-green-500'
    },
    {
      id: 'user-management',
      title: 'Manajemen User',
      description: 'Pengaturan akses dan tim',
      icon: Shield,
      count: 6,
      color: 'bg-red-500'
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      description: 'Tips dan praktik terbaik',
      icon: FileText,
      count: 10,
      color: 'bg-yellow-500'
    }
  ]

  const whitelistCategories = [
    {
      id: 'pixel-setup',
      title: 'Meta Pixel Setup',
      description: 'Instalasi dan konfigurasi Meta Pixel',
      icon: Code,
      count: 7,
      color: 'bg-blue-600'
    },
    {
      id: 'google-integration',
      title: 'Google Integration',
      description: 'Integrasi Google Analytics & Ads',
      icon: BarChart3,
      count: 9,
      color: 'bg-orange-500'
    },
    {
      id: 'utm-configuration',
      title: 'UTM Configuration',
      description: 'Setup parameter UTM untuk tracking',
      icon: Link2,
      count: 5,
      color: 'bg-indigo-500'
    },
    {
      id: 'data-sync',
      title: 'Data Sync',
      description: 'Sinkronisasi data antar platform',
      icon: Database,
      count: 6,
      color: 'bg-teal-500'
    },
    {
      id: 'advanced-setup',
      title: 'Advanced Setup',
      description: 'Konfigurasi lanjutan dan Conversions API',
      icon: Zap,
      count: 8,
      color: 'bg-pink-500'
    },
    {
      id: 'monitoring',
      title: 'Monitoring & Reporting',
      description: 'Cara melihat dan menganalisis data',
      icon: Eye,
      count: 7,
      color: 'bg-cyan-500'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-hadona-blue to-hadona-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Dokumentasi Hadona
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Panduan lengkap untuk Client Agency dan Client Whitelist dalam setup 
              dan konfigurasi platform iklan digital
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/agency"
                className="bg-white text-hadona-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Client Agency →
              </Link>
              <Link
                href="/whitelist"
                className="bg-hadona-yellow text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-hadona-yellow-dark transition-colors"
              >
                Client Whitelist →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dokumentasi Client Agency
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Panduan lengkap untuk client agency dalam setup Facebook Business Manager, 
              menautkan akun Instagram & WhatsApp, dan konfigurasi platform iklan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agencyCategories.map((category) => {
              const Icon = category.icon
              return (
                <Link
                  key={category.id}
                  href={`/agency/${category.id}`}
                  className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-hadona-blue hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${category.color} p-3 rounded-lg text-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {category.count} artikel
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-hadona-blue transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/agency"
              className="inline-flex items-center text-hadona-blue font-semibold hover:text-hadona-blue-dark transition-colors"
            >
              Lihat Semua Dokumentasi Agency →
            </Link>
          </div>
        </div>
      </section>

      {/* Whitelist Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Dokumentasi Client Whitelist
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Panduan lengkap untuk advertiser dalam setup Meta Pixel, integrasi Google Analytics, 
              konfigurasi UTM, dan monitoring performa iklan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whitelistCategories.map((category) => {
              const Icon = category.icon
              return (
                <Link
                  key={category.id}
                  href={`/whitelist/${category.id}`}
                  className="group bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-hadona-blue hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${category.color} p-3 rounded-lg text-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {category.count} artikel
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-hadona-blue transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </Link>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/whitelist"
              className="inline-flex items-center text-hadona-blue font-semibold hover:text-hadona-blue-dark transition-colors"
            >
              Lihat Semua Dokumentasi Whitelist →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-16 bg-hadona-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Butuh Bantuan?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Jika Anda tidak menemukan jawaban yang Anda cari, tim support Hadona siap membantu Anda.
          </p>
          <a
            href="https://hadona.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-hadona-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Hubungi Support
          </a>
        </div>
      </section>
    </div>
  )
}

