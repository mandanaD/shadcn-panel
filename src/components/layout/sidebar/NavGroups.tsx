import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub
} from "@/components/ui/sidebar.tsx";
import type {NavItem} from "@/components/layout/sidebar/sidebar.types.ts";
import {AppSidebarItem} from "@/components/layout/sidebar/AppSidebarItem.tsx";
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible.tsx";
import {ChevronRight} from "lucide-react";

export function NavGroup({title, items}: {
    title: string;
    items: NavItem[];
}) {

    return (
        <SidebarGroup>
            <SidebarGroupLabel>{title}</SidebarGroupLabel>
            <SidebarMenu>
                {items.map((item) => {
                    const key = `${item.title}-${item.url}`

                    if (!item.items) {
                        return (
                            <AppSidebarItem
                                key={key}
                                item={item}
                            />
                        )
                    }
                    if (item.items) {
                        return (
                            <Collapsible
                                key={key}
                                asChild
                                // defaultOpen={item.isActive}
                                className="group/collapsible"
                            >
                                <SidebarMenuItem>
                                    <CollapsibleTrigger asChild>
                                        <SidebarMenuButton tooltip={item.title}>
                                            {item.icon && <item.icon/>}
                                            <span>{item.title}</span>
                                            <ChevronRight
                                                className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"/>
                                        </SidebarMenuButton>
                                    </CollapsibleTrigger>
                                    <CollapsibleContent>
                                        <SidebarMenuSub>
                                            {item.items?.map((subItem) => (
                                                <AppSidebarItem item={subItem}/>
                                            ))}
                                        </SidebarMenuSub>
                                    </CollapsibleContent>
                                </SidebarMenuItem>
                            </Collapsible>
                        )
                    }

                })}
            </SidebarMenu>
        </SidebarGroup>
    )
}