import {type LinkProps} from '@tanstack/react-router'
import type {ElementType} from "react";

type UserProfile = {
    name: string
    email: string
    avatar: string
}

type Title = {
    name: string
    logo: ElementType
    plan: string
}

type BaseNavItem = {
    title: string
    badge?: string
    icon?: ElementType
}

type NavLink = BaseNavItem & {
    url: LinkProps['to'] | (string & {})
    items?: never
}

type NavCollapsible = BaseNavItem & {
    items: (BaseNavItem & { url: LinkProps['to'] | (string & {}) })[]
    url?: never
}

type NavItem = NavCollapsible | NavLink

type NavGroup = {
    title: string
    items: NavItem[]
}

type SidebarData = {
    user: UserProfile
    title: Title
    navGroups: NavGroup[]
}

export type {SidebarData, NavGroup, NavItem, NavCollapsible, NavLink, UserProfile}
