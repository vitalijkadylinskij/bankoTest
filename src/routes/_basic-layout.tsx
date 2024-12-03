import { createFileRoute } from '@tanstack/react-router'

import { AppLayout } from '@/layouts/app-layout'

export const Route = createFileRoute('/_basic-layout')({
  component: BasicLayout,
})

export default function BasicLayout() {
  return <AppLayout />
}
