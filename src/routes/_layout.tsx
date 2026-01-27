import {createFileRoute} from '@tanstack/react-router'
import Container from "@/container/Container.tsx";

export const Route = createFileRoute('/_layout')({
    component: () => <Container/>
})
