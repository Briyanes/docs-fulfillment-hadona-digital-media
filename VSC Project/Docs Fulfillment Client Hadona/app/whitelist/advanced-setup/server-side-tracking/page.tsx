import ArticleLayout from '@/components/ArticleLayout'

export default function Page() {
  return (
    <ArticleLayout
      title="Server-Side Tracking"
      categoryHref="/whitelist/advanced-setup"
      categoryName="Advanced Setup"
      prevHref="/whitelist/advanced-setup/custom-events"
      prevTitle="Custom Events"
      nextHref="/whitelist/advanced-setup/webhooks"
      nextTitle="Webhooks Setup"
    >
      <p>Konten akan ditambahkan di sini.</p>
    </ArticleLayout>
  )
}
