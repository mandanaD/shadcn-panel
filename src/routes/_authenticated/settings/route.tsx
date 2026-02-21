import {createFileRoute} from '@tanstack/react-router'
import Settings from "@/features/Settings/pages/Settings.tsx";

export const Route = createFileRoute('/_authenticated/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Settings/>
}