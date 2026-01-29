import {SidebarMenuButton, SidebarMenuItem} from "@/components/ui/sidebar.tsx";
import {Link, useLocation} from "@tanstack/react-router";
import type {NavItem, NavLink} from "@/components/layout/sidebar/sidebar.types.ts";

const AppSidebarItem = ({item}: {
    item: NavLink;
}) => {
    const href = useLocation({select: (location) => location.href})

    function checkIsActive(href: string, item: NavItem, mainNav = false) {
        return (
            href === item.url || // /endpint?search=param
            href.split('?')[0] === item.url || // endpoint
            !!item?.items?.filter((i) => i.url === href).length || // if child nav is active
            (mainNav &&
                href.split('/')[1] !== '' &&
                href.split('/')[1] === item?.url?.split('/')[1])
        )
    }

    return (
        <SidebarMenuItem>
            <SidebarMenuButton
                asChild
                isActive={checkIsActive(href, item)}
                tooltip={item.title}
            >
                <Link to={item.url}>
                    {item.icon && <item.icon/>}
                    <span>{item.title}</span>
                    {/*{item.badge && <NavBadge>{item.badge}</NavBadge>}*/}
                </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
    )
}
export {AppSidebarItem}