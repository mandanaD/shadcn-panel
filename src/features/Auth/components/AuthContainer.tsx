import {BiohazardIcon} from "lucide-react";
import {useEffect} from "react";
import {useLocation} from "@tanstack/react-router";

const AuthContainer = ({children}: {
    children: React.ReactNode,
}) => {
    const href = useLocation({select: (location) => location.href})
    useEffect(() => {
        if (!(href.includes("sign-up"))) {
            sessionStorage.removeItem("data")
        }
    }, []);

    return (
        <div className='container flex min-h-svh max-w-none items-center justify-center'>
            <div className='mx-auto flex w-full flex-col justify-center space-y-2 py-8 sm:w-[480px] sm:p-8'>
                <div className='pb-4 flex items-center justify-center gap-2'>
                    <BiohazardIcon/>
                    <h1 className='text-xl font-medium'>Shadcn Panel</h1>
                </div>
                {children}
            </div>
        </div>
    )
}
export default AuthContainer;