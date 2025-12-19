import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Hadona Digital Media</h3>
            <p className="text-sm text-gray-400">
              Dokumentasi lengkap untuk membantu client Hadona Agency dan Whitelist 
              dalam setup dan konfigurasi platform iklan digital.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/agency" className="hover:text-hadona-blue transition-colors">
                  Client Agency
                </Link>
              </li>
              <li>
                <Link href="/whitelist" className="hover:text-hadona-blue transition-colors">
                  Client Whitelist
                </Link>
              </li>
              <li>
                <a
                  href="https://hadona.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-hadona-blue transition-colors"
                >
                  Website Hadona
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:support@hadona.id"
                  className="hover:text-hadona-blue transition-colors"
                >
                  support@hadona.id
                </a>
              </li>
              <li>
                <a
                  href="https://hadona.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-hadona-blue transition-colors"
                >
                  Hubungi Tim Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Hadona Digital Media. All rights reserved.
          </p>
          <p className="mt-2">
            Crafted with ❤️ by PT. Selaras Kreatif Inovasi
          </p>
        </div>
      </div>
    </footer>
  )
}

