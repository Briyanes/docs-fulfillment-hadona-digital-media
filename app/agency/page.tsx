import Link from 'next/link'
import { 
  Users, 
  Building2, 
  TrendingUp, 
  Shield, 
  FileText,
  ArrowRight
} from 'lucide-react'

export default function AgencyPage() {
  const categories = [
    {
      id: 'onboarding',
      title: 'Onboarding',
      description: 'Proses onboarding dan persiapan awal untuk client agency',
      icon: Users,
      articles: [
        'Selamat Datang di Hadona Agency Services',
        'Mengapa Butuh Bantuan Hadona?',
        'Proses Onboarding: Langkah demi Langkah',
        'Persiapan Sebelum Memulai',
        'Pertemuan Kickoff dan Setup Awal'
      ]
    },
    {
      id: 'business-manager',
      title: 'Business Manager',
      description: 'Setup dan konfigurasi Facebook Business Manager',
      icon: Building2,
      articles: [
        'Membuat Business Manager Baru',
        'Persyaratan Verifikasi Business Manager',
        'Menautkan Facebook Page',
        'Menautkan Akun Instagram',
        'Menautkan Ad Account',
        'Manajemen Permission & Role',
        'Setting Akses yang Tepat',
        'Keamanan: 2FA Enforcement'
      ]
    },
    {
      id: 'ads-setup',
      title: 'Setup Iklan',
      description: 'Konfigurasi platform iklan Facebook, Instagram, dan WhatsApp',
      icon: TrendingUp,
      articles: [
        'Setup Facebook Ads Manager',
        'Pembuatan Campaign Baru',
        'Pembagian Budget',
        'Setting Target Audience',
        'Setup Instagram Ads',
        'Integrasi dengan Facebook',
        'Format Iklan Instagram',
        'Menautkan Akun WhatsApp',
        'Menautkan Akun Instagram ke Fanspage',
        'Langkah-langkah Koneksi',
        'Verifikasi Akun',
        'Testing Koneksi'
      ]
    },
    {
      id: 'user-management',
      title: 'Manajemen User',
      description: 'Pengaturan akses tim dan manajemen user',
      icon: Shield,
      articles: [
        'Menambahkan Team Klien',
        'Memberikan Akses yang Tepat',
        'Membatasi Akses Sensitif',
        'Audit & Monitoring Akses',
        'Review Bulanan',
        'Pemberitahuan Perubahan'
      ]
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      description: 'Tips, trik, dan praktik terbaik',
      icon: FileText,
      articles: [
        'Tips Keamanan Akun',
        'Optimasi Performa Iklan',
        'Troubleshooting Umum',
        'Cara Menambahkan People di Fanspage',
        'Best Practice Setup Business Manager',
        'Tips Menghindari Akun Terblokir',
        'Optimasi Budget Iklan',
        'Monitoring Performa Campaign',
        'FAQ: Pertanyaan Umum',
        'Kontak Support'
      ]
    }
  ]

  return (
    <div className="pt-20 pb-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-hadona-blue to-hadona-blue-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dokumentasi Client Agency
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Panduan lengkap untuk membantu client agency dalam setup Facebook Business Manager, 
            menautkan akun Instagram & WhatsApp, dan konfigurasi platform iklan.
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
                          href={`/agency/${category.id}/${article.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
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
                        href={`/agency/${category.id}`}
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

