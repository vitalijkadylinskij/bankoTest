import { createFileRoute } from '@tanstack/react-router'
import { CreditListPage } from '@/pages/CreditList/CreditList'

export const Route = createFileRoute('/_basic-layout/credit-list')({
  component: CreditList,
})

export default function CreditList() {
  return <CreditListPage />
}
