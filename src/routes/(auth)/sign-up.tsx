import {createFileRoute} from '@tanstack/react-router'
import {Signup} from "@/features/Auth/pages/Signup.tsx";

export const Route = createFileRoute('/(auth)/sign-up')({
    component: RouteComponent,
})

function RouteComponent() {
    return <Signup/>
}
