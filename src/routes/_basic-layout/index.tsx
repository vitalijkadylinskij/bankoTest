import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_basic-layout/')({
  component: HomeComponent,
})

export default function HomeComponent() {
  return (
    <div>
      <div>Hello world!</div>
    </div>
  )
}
