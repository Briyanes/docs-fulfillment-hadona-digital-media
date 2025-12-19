import Link from 'next/link'
import { ArrowLeft, Code, Eye, Target, TrendingUp } from 'lucide-react'

export default function ApaItuMetaPixelPage() {
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
            <Link href="/whitelist/pixel-setup" className="hover:text-hadona-blue">Pixel Setup</Link>
            <span>/</span>
            <span className="text-gray-900">Apa itu Meta Pixel?</span>
          </div>
        </nav>

        {/* Back Button */}
        <Link
          href="/whitelist/pixel-setup"
          className="inline-flex items-center text-hadona-blue hover:text-hadona-blue-dark mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Kembali ke Meta Pixel Setup
        </Link>

        {/* Article Content */}
        <article className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Apa itu Meta Pixel?
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Meta Pixel adalah kode JavaScript kecil yang Anda pasang di website Anda 
              untuk mengukur efektivitas iklan Anda dengan memahami tindakan yang dilakukan 
              orang di website Anda.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Definisi Meta Pixel</h2>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-gray-700">
                  <strong>Meta Pixel</strong> (sebelumnya dikenal sebagai Facebook Pixel) adalah 
                  alat analitik yang membantu Anda mengukur efektivitas iklan dengan melacak 
                  tindakan yang dilakukan orang di website Anda setelah melihat atau mengklik iklan Anda.
                </p>
              </div>
              <p className="text-gray-700">
                Pixel ini bekerja dengan menempatkan cookie di browser pengunjung website Anda, 
                yang memungkinkan Meta untuk melacak aktivitas mereka saat mereka menjelajahi 
                website Anda dan berinteraksi dengan iklan Anda di Facebook dan Instagram.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Fungsi Utama Meta Pixel</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <Eye className="w-8 h-8 text-hadona-blue mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Tracking Conversions</h3>
                  <p className="text-gray-600 text-sm">
                    Melacak konversi dari iklan Anda, seperti pembelian, pendaftaran, 
                    atau tindakan penting lainnya.
                  </p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <Target className="w-8 h-8 text-green-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Optimasi Iklan</h3>
                  <p className="text-gray-600 text-sm">
                    Membantu Meta mengoptimalkan pengiriman iklan kepada orang yang 
                    paling mungkin melakukan tindakan yang Anda inginkan.
                  </p>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <TrendingUp className="w-8 h-8 text-yellow-600 mb-4" />
                  <h3 className="font-bold text-gray-900 mb-2">Membangun Audience</h3>
                  <p className="text-gray-600 text-sm">
                    Membuat Custom Audiences dari pengunjung website Anda untuk 
                    retargeting dan lookalike audiences.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Event yang Dapat Dilacak</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">Meta Pixel dapat melacak berbagai event, termasuk:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>PageView</strong> - Saat seseorang mengunjungi halaman website Anda</li>
                  <li><strong>ViewContent</strong> - Saat seseorang melihat konten spesifik</li>
                  <li><strong>AddToCart</strong> - Saat seseorang menambahkan item ke keranjang</li>
                  <li><strong>InitiateCheckout</strong> - Saat seseorang memulai proses checkout</li>
                  <li><strong>Purchase</strong> - Saat seseorang menyelesaikan pembelian</li>
                  <li><strong>Lead</strong> - Saat seseorang mengisi formulir atau mendaftar</li>
                  <li><strong>CompleteRegistration</strong> - Saat seseorang menyelesaikan registrasi</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Mengapa Penting?</h2>
              <p className="text-gray-700 mb-4">
                Meta Pixel adalah fondasi untuk kampanye iklan yang efektif karena:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Memberikan data akurat tentang performa iklan Anda</li>
                <li>Memungkinkan optimasi otomatis untuk konversi</li>
                <li>Membantu membangun audience yang relevan</li>
                <li>Mengukur ROI kampanye iklan dengan lebih akurat</li>
                <li>Memungkinkan retargeting kepada pengunjung website</li>
              </ol>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Langkah Selanjutnya</h2>
              <p className="text-gray-700 mb-4">
                Sekarang setelah Anda memahami apa itu Meta Pixel, langkah selanjutnya adalah 
                mempelajari cara membuat dan menginstall pixel di website Anda.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/whitelist/pixel-setup/membuat-pixel-baru-di-events-manager"
                  className="inline-block bg-hadona-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-hadona-blue-dark transition-colors"
                >
                  Cara Membuat Pixel Baru →
                </Link>
                <Link
                  href="/whitelist/pixel-setup"
                  className="inline-block bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                >
                  Kembali ke Daftar Artikel
                </Link>
              </div>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}

