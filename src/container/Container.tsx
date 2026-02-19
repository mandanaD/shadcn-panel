import {SidebarInset, SidebarProvider} from "@/components/ui/sidebar.tsx";
import Header from "@/components/layout/Header.tsx";
import {Outlet} from "@tanstack/react-router";
import {AppSidebar} from "@/components/layout/sidebar/AppSidebar.tsx";
import {Separator} from "@/components/ui/separator.tsx";

const Container = () => {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className={"max-h-[calc(100vh-1rem)] overflow-y-auto"}>
                <Header/>
                <Separator/>
                <div className="flex flex-1 flex-col gap-4 overflow-hidden">
                    <Outlet/>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
export default Container;