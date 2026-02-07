import {
    Bell,
    Bug,
    Command,
    Construction,
    FileX,
    HelpCircle,
    LayoutDashboard,
    ListTodo,
    Lock,
    MessagesSquare,
    Monitor,
    Package,
    Palette,
    ServerOff,
    Settings,
    ShieldCheck,
    UserCog,
    Users,
    UserX,
    Wrench
} from 'lucide-react'
import type {SidebarData} from "@/components/layout/sidebar/sidebar.types.ts";

export const sidebarData: SidebarData = {
    user: {
        name: 'Mandana',
        email: 'dmandana59@gmail.com',
        avatar: '/avatars/shadcn.jpg',
    },
    title: {
        name: 'Shadcn Panel',
        logo: Command,
        plan: 'Vite + ShadcnUI',
    },
    navGroups: [
        {
            title: 'General',
            items: [
                {
                    title: 'Dashboard',
                    url: '/',
                    icon: LayoutDashboard,
                },
                {
                    title: 'Tasks',
                    url: '/tasks',
                    icon: ListTodo,
                },
                {
                    title: 'Apps',
                    url: '/apps',
                    icon: Package,
                },
                {
                    title: 'Chats',
                    url: '/chats',
                    badge: '3',
                    icon: MessagesSquare,
                },
                {
                    title: 'Users',
                    url: '/users',
                    icon: Users,
                },
            ],
        },
        {
            title: 'Pages',
            items: [
                {
                    title: 'Auth',
                    icon: ShieldCheck,
                    items: [
                        {
                            title: 'Login',
                            url: '/login',
                        },
                        {
                            title: 'Sign Up',
                            url: '/sign-up',
                        },
                        {
                            title: 'Forgot Password',
                            url: '/forgot-password',
                        },
                    ],
                },
                {
                    title: 'Errors',
                    icon: Bug,
                    items: [
                        {
                            title: 'Unauthorized',
                            url: '/errors/unauthorized',
                            icon: Lock,
                        },
                        {
                            title: 'Forbidden',
                            url: '/errors/forbidden',
                            icon: UserX,
                        },
                        {
                            title: 'Not Found',
                            url: '/errors/not-found',
                            icon: FileX,
                        },
                        {
                            title: 'Internal Server Error',
                            url: '/errors/internal-server-error',
                            icon: ServerOff,
                        },
                        {
                            title: 'Maintenance Error',
                            url: '/errors/maintenance-error',
                            icon: Construction,
                        },
                    ],
                },
            ],
        },
        {
            title: 'Other',
            items: [
                {
                    title: 'Settings',
                    icon: Settings,
                    items: [
                        {
                            title: 'Profile',
                            url: '/settings',
                            icon: UserCog,
                        },
                        {
                            title: 'Account',
                            url: '/settings/account',
                            icon: Wrench,
                        },
                        {
                            title: 'Appearance',
                            url: '/settings/appearance',
                            icon: Palette,
                        },
                        {
                            title: 'Notifications',
                            url: '/settings/notifications',
                            icon: Bell,
                        },
                        {
                            title: 'Display',
                            url: '/settings/display',
                            icon: Monitor,
                        },
                    ],
                },
                {
                    title: 'Help Center',
                    url: '/help-center',
                    icon: HelpCircle,
                },
            ],
        },
    ],
}
