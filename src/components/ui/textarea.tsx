import * as React from "react"

import {cn} from "@/lib/utils"
import {Field, FieldDescription, FieldLabel} from "@/components/ui/field.tsx";
import {Label} from "@/components/ui/label.tsx";
import {ErrorMessage} from "@/components/ui/error-message.tsx";

export type TextareaProps = React.ComponentProps<"textarea"> & {
    label?: string
    error?: string
    description?: string,
}

function Textarea({label, error, description, required, className, ...props}: TextareaProps) {
    return (
        <Field className='relative w-full flex-1' data-slot='textarea'>
            <FieldLabel className="flex items-center flex-wrap">
                {label && (
                    <Label required={required}>
                        {label}
                    </Label>
                )}
            </FieldLabel>
            <textarea
                aria-invalid={!!error}
                data-slot="textarea"
                className={cn(
                    "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    className
                )}
                {...props}
            />
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

export {Textarea}
