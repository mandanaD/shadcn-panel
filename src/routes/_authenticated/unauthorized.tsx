import { createFileRoute } from '@tanstack/react-router'
import {UnauthorisedError} from "@/features/Errors/UnauthorisedError.tsx";

export const Route = createFileRoute('/_authenticated/unauthorized')({
  component: RouteComponent,
})

function RouteComponent() {
  return <UnauthorisedError/>
}
