import ArticleLayout from '@/components/ArticleLayout'

export default function Page() {
  return (
    <ArticleLayout
      title="Custom Events"
      categoryHref="/whitelist/advanced-setup"
      categoryName="Advanced Setup"
      prevHref="/whitelist/advanced-setup/conversions-api"
      prevTitle="Conversions API"
      nextHref="/whitelist/advanced-setup/server-side-tracking"
      nextTitle="Server-Side Tracking"
    >
      <p>Konten akan ditambahkan di sini.</p>
    </ArticleLayout>
  )
}
