'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Home } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-hadona-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div className="ml-3">
                <h1 className="text-xl font-bold text-gray-900">Hadona Docs</h1>
                <p className="text-xs text-gray-500">Documentation Center</p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/agency"
              className="text-gray-700 hover:text-hadona-blue transition-colors font-medium"
            >
              Client Agency
            </Link>
            <Link
              href="/whitelist"
              className="text-gray-700 hover:text-hadona-blue transition-colors font-medium"
            >
              Client Whitelist
            </Link>
            <Link
              href="https://hadona.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-hadona-blue hover:text-hadona-blue-dark transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Back to Hadona</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-4">
            <Link
              href="/agency"
              className="block text-gray-700 hover:text-hadona-blue transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Client Agency
            </Link>
            <Link
              href="/whitelist"
              className="block text-gray-700 hover:text-hadona-blue transition-colors font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Client Whitelist
            </Link>
            <Link
              href="https://hadona.id"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-hadona-blue hover:text-hadona-blue-dark transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Home className="w-4 h-4" />
              <span>Back to Hadona</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

