import { createFileRoute } from '@tanstack/react-router'
import { ProfilePage } from '@/pages/Profile/Profile'

export const Route = createFileRoute('/_basic-layout/profile')({
  component: Profile,
})

export default function Profile() {
  return <ProfilePage />
}
