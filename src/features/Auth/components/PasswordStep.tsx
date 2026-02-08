import {PasswordInput} from "@/components/ui/passwordInput.tsx";
import {useFormContext} from "react-hook-form";
import type {SignupType} from "@/features/Auth/shema/signup.shema.ts";

const PasswordStep = () => {
    const {register, formState: {errors}} = useFormContext<SignupType>()

    return (
        <>
            <PasswordInput
                placeholder="********"
                label={"Password"}
                required
                {...register("password")}
                error={errors.password?.message}
                description={"Must be at least 8 characters long."}
            />
            <PasswordInput
                placeholder="********"
                label={"Confirm Password"}
                required
                {...register("re_password")}
                error={errors.re_password?.message}
                description={"Please confirm your password."}
            />
        </>
    )
}
export default PasswordStep;