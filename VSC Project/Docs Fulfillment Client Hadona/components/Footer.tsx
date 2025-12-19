export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} <span className="font-semibold text-gray-900 dark:text-gray-100">Hadona Digital Media</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
