import {Main} from "@/components/layout/Main.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {Outlet} from "@tanstack/react-router";
import {SidebarItem} from "@/features/Settings/components/SidebarItem.tsx";
import {settingSidebar} from "@/features/Settings/utils/setting.utils.tsx";

const Settings = () => {
    return (
        <Main fixed>
            <div className='space-y-0.5'>
                <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
                    Settings
                </h1>
                <p className='text-muted-foreground text-base'>
                    Manage your account settings and set e-mail preferences.
                </p>
            </div>
            <Separator className='my-4 lg:my-6' />
            <div className='flex flex-1 flex-col space-y-2 overflow-hidden md:space-y-2 lg:flex-row lg:space-y-0 lg:space-x-12'>
                <aside className='top-0 lg:sticky'>
                    <SidebarItem items={settingSidebar} />
                </aside>
                <div className='flex w-full overflow-y-auto'>
                    <Outlet />
                </div>
            </div>
        </Main>
    )
}
export default Settings;