import { createFileRoute } from '@tanstack/react-router'
import { BIAnalyticsPage } from '@/pages/BIAnalytics/BIAnalytics'

export const Route = createFileRoute('/_basic-layout/bi-analytics')({
  component: BiAnalytics,
})

export default function BiAnalytics() {
  return <BIAnalyticsPage />
}
