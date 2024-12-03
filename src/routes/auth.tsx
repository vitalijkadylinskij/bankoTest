import { createFileRoute } from '@tanstack/react-router'
import { AuthPage } from '@/pages/Auth/AuthPage'

export const Route = createFileRoute('/auth')({
  component: Login,
})

export default function Login() {
  return <AuthPage />
}
