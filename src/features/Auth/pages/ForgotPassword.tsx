import AuthContainer from "@/features/Auth/components/AuthContainer.tsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Field, FieldDescription, FieldGroup} from "@/components/ui/field.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Link, useNavigate} from "@tanstack/react-router";
import {FormProvider, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {forgotShema, type ForgotType} from "@/features/Auth/shema/forgot.shema.ts";
import PasswordStep from "@/features/Auth/components/PasswordStep.tsx";
import FieldOtpStep from "@/features/Auth/components/FieldOtpStep.tsx";
import {toast} from "sonner";

const ForgotPassword = () => {

    const methods = useForm({
        resolver: zodResolver(forgotShema),
        defaultValues: {
            step: "email",
            email: "",
            code: "",
            password: "",
            re_password: "",
        }
    })

    const {
        handleSubmit,
        register,
        formState: {errors},
        watch,
        setValue
    } = methods

    const navigate = useNavigate();

    const submit = (data: ForgotType) => {
        if (data.step === "email") {
            setValue("step","code")
        } else {
            toast.success("Password changed successfully.");
            void navigate({to: "/"})
        }
    }

    const stepBackHandler = () => {
        setValue("step","email")
        setValue("code", "")
    }


    const generateBtn = () => {
        if (watch("step") === "code") {
            return <>
                <Button type="submit">Change Password</Button>
                <Button
                    onClick={stepBackHandler}
                    variant="outline" type="button">
                    Previews Step
                </Button>
            </>
        } else return (<>
            <Button type="submit">Continue</Button>
            <FieldDescription className="text-center">
                Don&apos;t have an account? <Link to={"/sign-up"}>Sign up</Link>
            </FieldDescription>
        </>)
    }

    const generateForm = () => {
        if (watch("step") === "code") {
            return (
                <>
                    <FieldOtpStep/>
                </>
            )
        } else return (
            <>
                <Input
                    placeholder="m@example.com"
                    label={"Email"}
                    required
                    {...register("email")}
                    error={errors.email?.message}
                />
                <PasswordStep/>
            </>
        )
    }

    return (
        <AuthContainer>
            <div className={"flex flex-col gap-6 w-full"}>
                <Card>
                    <CardHeader>
                        <CardTitle>Forgot Password</CardTitle>
                        <CardDescription>
                            Enter your registered email and we will send you a link to reset your password.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <FormProvider {...methods}>
                            <form onSubmit={handleSubmit(submit)}>
                                <FieldGroup>
                                    {generateForm()}
                                    <Field>
                                        {generateBtn()}
                                    </Field>
                                </FieldGroup>
                            </form>
                        </FormProvider>
                    </CardContent>
                </Card>
            </div>
        </AuthContainer>
    )
}
export default ForgotPassword;