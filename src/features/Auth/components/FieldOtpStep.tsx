import {Field, FieldLabel} from "@/components/ui/field.tsx";
import {InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot} from "@/components/ui/input-otp.tsx";
import {Controller, useFormContext} from "react-hook-form";
import {ErrorMessage} from "@/components/ui/error-message.tsx";

const FieldOtpStep = () => {
    const { control } = useFormContext()

    return (
        <Controller
            name="code"
            control={control}
            render={({ field, fieldState }) => {
                const hasError = !!fieldState.error

                return (
                    <Field className='relative w-full flex-1'>
                        <FieldLabel htmlFor="otp" className="sr-only">
                            Verification code
                        </FieldLabel>

                        <InputOTP
                            id="otp"
                            maxLength={6}
                            value={field.value ?? ""}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            aria-invalid={hasError}
                        >
                            <InputOTPGroup className="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                                <InputOTPSlot index={0} />
                                <InputOTPSlot index={1} />
                            </InputOTPGroup>

                            <InputOTPSeparator />

                            <InputOTPGroup className="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                                <InputOTPSlot index={2} />
                                <InputOTPSlot index={3} />
                            </InputOTPGroup>

                            <InputOTPSeparator />

                            <InputOTPGroup className="gap-2 *:data-[slot=input-otp-slot]:rounded-md *:data-[slot=input-otp-slot]:border">
                                <InputOTPSlot index={4} />
                                <InputOTPSlot index={5} />
                            </InputOTPGroup>
                        </InputOTP>

                        {hasError && <ErrorMessage>{fieldState.error?.message}</ErrorMessage>}
                    </Field>
                )
            }}
        />
    )
}

export default FieldOtpStep