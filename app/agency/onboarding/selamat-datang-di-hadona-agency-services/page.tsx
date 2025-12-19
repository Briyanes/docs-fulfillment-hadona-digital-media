import Link from 'next/link'
import { ArrowLeft, CheckCircle, Users, Shield, TrendingUp } from 'lucide-react'

export default function SelamatDatangPage() {
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
            <Link href="/agency/onboarding" className="hover:text-hadona-blue">Onboarding</Link>
            <span>/</span>
            <span className="text-gray-900">Selamat Datang</span>
          </div>
        </nav>

        {/* Back Button */}
        <Link
          href="/agency/onboarding"
          className="inline-flex items-center text-hadona-blue hover:text-hadona-blue-dark mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Onboarding
        </Link>

        {/* Article Content */}
        <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Selamat Datang di Hadona Agency Services
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Selamat datang di Hadona Digital Media! Kami adalah partner terpercaya 
              untuk membantu bisnis Anda dalam menjalankan kampanye iklan digital yang efektif.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tentang Hadona Agency Services</h2>
              <p className="text-gray-700 mb-4">
                Hadona Agency Services adalah layanan lengkap untuk membantu client agency 
                dalam mengelola dan mengoptimalkan kampanye iklan digital di berbagai platform, 
                terutama Facebook, Instagram, dan WhatsApp.
              </p>
              <p className="text-gray-700">
                Dengan tim berpengalaman dan tools yang canggih, kami membantu Anda mencapai 
                target bisnis melalui strategi iklan yang terukur dan efektif.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Apa yang Kami Tawarkan?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Users className="w-8 h-8 text-hadona-blue mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Setup & Konfigurasi</h3>
                  <p className="text-gray-600 text-sm">
                    Bantuan lengkap dalam setup Facebook Business Manager, 
                    menautkan akun Instagram & WhatsApp, dan konfigurasi platform iklan.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <Shield className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Manajemen Akun</h3>
                  <p className="text-gray-600 text-sm">
                    Pengaturan akses tim, manajemen user, dan keamanan akun 
                    untuk memastikan semua berjalan dengan lancar.
                  </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-yellow-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Optimasi Performa</h3>
                  <p className="text-gray-600 text-sm">
                    Monitoring dan optimasi kampanye iklan untuk mencapai 
                    performa terbaik dan ROI maksimal.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Langkah Selanjutnya</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>Pelajari proses onboarding di artikel berikutnya</li>
                  <li>Persiapkan dokumen dan akses yang diperlukan</li>
                  <li>Ikuti panduan setup yang telah kami sediakan</li>
                  <li>Hubungi tim support jika ada pertanyaan</li>
                </ol>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Pertanyaan?</h2>
              <p className="text-gray-700 mb-4">
                Jika Anda memiliki pertanyaan atau butuh bantuan, jangan ragu untuk menghubungi tim support kami.
              </p>
              <a
                href="https://hadona.id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-hadona-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-hadona-blue-dark transition-colors"
              >
                Hubungi Support
              </a>
            </section>
          </div>
        </article>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <div></div>
          <Link
            href="/agency/onboarding/mengapa-butuh-bantuan-hadona"
            className="inline-flex items-center bg-hadona-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-hadona-blue-dark transition-colors"
          >
            Artikel Selanjutnya: Mengapa Butuh Bantuan Hadona?
            <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}

