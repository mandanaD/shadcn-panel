import * as React from "react"

import {cn} from "@/lib/utils"
import {Label} from "@/components/ui/label.tsx";
import {ErrorMessage} from "@/components/ui/error-message.tsx";
import {Field, FieldDescription, FieldLabel} from "@/components/ui/field.tsx";

export type InputProps = React.ComponentProps<"input"> & {
    label?: string
    error?: string
    helperText?: React.ReactNode
    description?: string,
    icon?: React.ReactNode,
}

function Input({label, error, required, className, type, helperText, description,icon, ...props}: InputProps) {
    return (
        <Field className='relative w-full flex-1' data-slot='input'>
            <FieldLabel className="flex items-center flex-wrap">
                {label && (
                    <Label required={required}>
                        {label}
                    </Label>
                )}
                {
                    helperText && helperText
                }
            </FieldLabel>
            <div className={"relative"}>
                <input
                    type={type}
                    data-slot="input"
                    aria-invalid={!!error}
                    className={cn(
                        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                        className
                    )}
                    {...props}
                />
                {icon&&icon}
            </div>
            {
                description && (
                    <FieldDescription>
                        {description}
                    </FieldDescription>
                )
            }

            {error && <ErrorMessage>{error}</ErrorMessage>}
        </Field>
    )
}

export {Input}