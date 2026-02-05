import {Input} from "@/components/ui/input.tsx";
import {useFormContext} from "react-hook-form";
import type {SignupType} from "@/features/Auth/shema/signup.shema.ts";

const BaseStepSignup = () => {
    const {register, formState: {errors}} = useFormContext<SignupType>()

    return (
        <>
            <Input
                label="First Name"
                type="text"
                placeholder="John"
                required
                error={errors.first_name?.message}
                {...register("first_name")}
            />
            <Input
                label="Last Name"
                type="text"
                placeholder="Doe"
                required
                error={errors.last_name?.message}
                {...register("last_name")}
            />
            <Input
                placeholder="m@example.com"
                label={"Email"}
                required
                {...register("email")}
                error={errors.email?.message}
                description={" We'll use this to contact you. We will not share your email\n" +
                    "with anyone else."}
            />
        </>
    )
}
export default BaseStepSignup;