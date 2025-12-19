import ArticleLayout from '@/components/ArticleLayout'

export default function Page() {
  return (
    <ArticleLayout
      title="Parameter utm_campaign"
      categoryHref="/whitelist/utm-configuration"
      categoryName="UTM Configuration"
      prevHref="/whitelist/utm-configuration/utm-medium"
      prevTitle="Parameter utm_medium"
      nextHref="/whitelist/utm-configuration/utm-id"
      nextTitle="Parameter utm_id"
    >
      <p>Konten akan ditambahkan di sini.</p>
    </ArticleLayout>
  )
}
