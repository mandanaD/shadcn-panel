import {Bell, Monitor, Palette, UserCog, Wrench} from "lucide-react";

export const settingSidebar = [
    {
        title: 'Profile',
        href: '/settings',
        icon: <UserCog size={18}/>,
    },
    {
        title: 'Account',
        href: '/settings/account',
        icon: <Wrench size={18}/>,
    },
    {
        title: 'Appearance',
        href: '/settings/appearance',
        icon: <Palette size={18}/>,
    },
    {
        title: 'Notifications',
        href: '/settings/notifications',
        icon: <Bell size={18}/>,
    },
    {
        title: 'Display',
        href: '/settings/display',
        icon: <Monitor size={18}/>,
    },
]