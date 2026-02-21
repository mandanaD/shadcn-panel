import {Separator} from "@/components/ui/separator.tsx";

export const SettingContent = ({title,description,children}:{
                            title: string,
                            description: string,
                            children: React.ReactNode,
                        }) => {
    return (
        <div className={"flex flex-1 flex-col"}>
            <div className='space-y-0.5'>
                <h3 className='text-base font-semibold tracking-tight md:text-lg'>
                    {title}
                </h3>
                <p className='text-muted-foreground text-sm'>
                    {description}
                </p>
                <Separator className='my-4'/>
                <div className='flex-1 overflow-y-auto scroll-smooth'>
                    <div className='lg:max-w-xl'>{children}</div>
                </div>
            </div>
        </div>
    )
}