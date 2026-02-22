import {type JSX} from "react";
import {Link, useLocation} from "@tanstack/react-router";
import {buttonVariants} from "@/components/ui/button.tsx";
import {cn} from "@/lib/utils.ts";

export const SidebarItem = ({
                         items
                     }: {
    items: {
        title: string
        href: string
        icon: JSX.Element
    }[]
}) => {
    const {pathname} = useLocation()

    return (
        <div
            className='hidden w-full min-w-60 bg-background px-1 py-2 lg:block'>
            <nav className={'flex py-1 flex-col space-y-1'}>
                {items.map((item) => (
                    <Link
                        key={item.href}
                        to={item.href}
                        className={cn(
                            buttonVariants({ variant: 'ghost' }),
                            pathname === item.href
                                ? 'bg-muted hover:bg-accent'
                                : 'hover:bg-accent hover:underline',
                            'justify-start'
                        )}
                    >
                        <span className='me-2'>{item.icon}</span>
                        {item.title}
                    </Link>
                ))}
            </nav>
        </div>
    )
}