import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Toaster } from 'sonner'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <div className="flex min-h-screen w-full">
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
      <Toaster expand={true} position="bottom-right" richColors />
    </div>
  )
}
