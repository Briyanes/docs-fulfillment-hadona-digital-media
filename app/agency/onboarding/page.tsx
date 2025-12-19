import Link from 'next/link'
import { ArrowLeft, CheckCircle } from 'lucide-react'

export default function OnboardingPage() {
  const articles = [
    {
      slug: 'selamat-datang-di-hadona-agency-services',
      title: 'Selamat Datang di Hadona Agency Services',
      description: 'Pengenalan layanan Hadona Agency dan manfaat yang akan Anda dapatkan'
    },
    {
      slug: 'mengapa-butuh-bantuan-hadona',
      title: 'Mengapa Butuh Bantuan Hadona?',
      description: 'Keuntungan menggunakan layanan Hadona Agency untuk bisnis Anda'
    },
    {
      slug: 'proses-onboarding-langkah-demi-langkah',
      title: 'Proses Onboarding: Langkah demi Langkah',
      description: 'Panduan lengkap proses onboarding dari awal hingga siap beriklan'
    },
    {
      slug: 'persiapan-sebelum-memulai',
      title: 'Persiapan Sebelum Memulai',
      description: 'Hal-hal yang perlu dipersiapkan sebelum memulai proses onboarding'
    },
    {
      slug: 'pertemuan-kickoff-dan-setup-awal',
      title: 'Pertemuan Kickoff dan Setup Awal',
      description: 'Apa yang akan terjadi dalam pertemuan kickoff dan setup awal'
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
            <Link href="/agency" className="hover:text-hadona-blue">Agency</Link>
            <span>/</span>
            <span className="text-gray-900">Onboarding</span>
          </div>
        </nav>

        {/* Header */}
        <div className="mb-12">
          <Link
            href="/agency"
            className="inline-flex items-center text-hadona-blue hover:text-hadona-blue-dark mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Dokumentasi Agency
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Onboarding</h1>
          <p className="text-xl text-gray-600">
            Proses onboarding dan persiapan awal untuk client agency
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-4">
          {articles.map((article, index) => (
            <Link
              key={article.slug}
              href={`/agency/onboarding/${article.slug}`}
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
                <CheckCircle className="w-6 h-6 text-gray-400 group-hover:text-hadona-blue transition-colors flex-shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

