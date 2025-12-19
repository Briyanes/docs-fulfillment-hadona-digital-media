import ArticleLayout from '@/components/ArticleLayout'

export default function Page() {
  return (
    <ArticleLayout
      title="Parameter utm_medium"
      categoryHref="/whitelist/utm-configuration"
      categoryName="UTM Configuration"
      prevHref="/whitelist/utm-configuration/utm-source"
      prevTitle="Parameter utm_source"
      nextHref="/whitelist/utm-configuration/utm-campaign"
      nextTitle="Parameter utm_campaign"
    >
      <p>Konten akan ditambahkan di sini.</p>
    </ArticleLayout>
  )
}
