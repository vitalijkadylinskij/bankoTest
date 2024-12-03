import { createFileRoute } from '@tanstack/react-router'
import { StressTestingPage } from '@/pages/StressTesting/StressTesting'

export const Route = createFileRoute('/_basic-layout/stress-testing')({
  component: StressTesting,
})

export default function StressTesting() {
  return <StressTestingPage />
}
