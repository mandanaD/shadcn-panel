import {createFileRoute} from '@tanstack/react-router'
import Profile from "@/features/Settings/pages/Profile.tsx";

export const Route = createFileRoute('/_authenticated/settings/')({
    component: RouteComponent,
})

function RouteComponent() {
    return <Profile/>
}
