import {Input, type InputProps} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import {Eye, EyeOff} from "lucide-react";

const PasswordInput = (props: InputProps) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <>
            <Input
                icon={<Button
                    type='button'
                    size='icon'
                    variant='ghost'
                    className='absolute end-1 bottom-1.5 h-6 w-6  rounded-md text-muted-foreground'
                    onClick={() => setShowPassword((prev) => !prev)}
                >
                    {showPassword ? <Eye size={18}/> : <EyeOff size={18}/>}
                </Button>}
                type={showPassword ? 'text' : 'password'}
                className=' flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50'
                {...props}
            />
        </>
    )
}
export {PasswordInput}