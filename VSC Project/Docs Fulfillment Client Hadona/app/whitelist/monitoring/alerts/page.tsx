import ArticleLayout from '@/components/ArticleLayout'

export default function Page() {
  return (
    <ArticleLayout
      title="Alerts & Notifications"
      categoryHref="/whitelist/monitoring"
      categoryName="Monitoring"
      prevHref="/whitelist/monitoring/custom-reports"
      prevTitle="Custom Reports"
      nextHref="/whitelist/monitoring/data-export"
      nextTitle="Data Export"
    >
      <p>Konten akan ditambahkan di sini.</p>
    </ArticleLayout>
  )
}
