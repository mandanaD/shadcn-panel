import { createFileRoute } from '@tanstack/react-router'
import Container from "@/container/Container.tsx";

export const Route = createFileRoute('/_authenticated')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Container/>
}