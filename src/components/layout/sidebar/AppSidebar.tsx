import {Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail} from "@/components/ui/sidebar.tsx";
import {AppTitle} from "@/components/layout/sidebar/AppSidebarTitle.tsx";
import {sidebarData} from "@/components/layout/sidebar/sidebarData.ts";
import {NavGroup} from "@/components/layout/sidebar/NavGroups.tsx";
import {AppSidebarUser} from "@/components/layout/sidebar/AppSidebarUser.tsx";

const AppSidebar = () => {
    return (
        <Sidebar variant={"inset"}>
            <SidebarHeader>
                <AppTitle/>
            </SidebarHeader>
            <SidebarContent>
                {sidebarData.navGroups.map((props) => (
                    <NavGroup key={props.title} {...props} />
                ))}
            </SidebarContent>
            <SidebarFooter>
                <AppSidebarUser user={sidebarData.user}/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}
export {AppSidebar}