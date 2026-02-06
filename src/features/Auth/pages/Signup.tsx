import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card"
import {Field, FieldDescription, FieldGroup,} from "@/components/ui/field"
import AuthContainer from "@/features/Auth/components/AuthContainer.tsx";
import {FormProvider, useForm} from "react-hook-form";
import {signupSchema, type SignupType} from "@/features/Auth/shema/signup.shema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useQueryState} from "nuqs";
import PasswordStep from "@/features/Auth/components/PasswordStep.tsx";
import BaseStepSignup from "@/features/Auth/components/BaseStepSignup.tsx";
import {Link, useNavigate} from "@tanstack/react-router";
import {toast} from "sonner";

const defaultValues: SignupType = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
    step: "base"
}

export function Signup() {

    const [step, setStep] = useQueryState("step", {defaultValue: "base"});

    const getDataInSession = (): SignupType => {
        try {
            const raw = sessionStorage.getItem("data")
            if (!raw) {
                if (step === "password") {
                    void setStep("base");
                }
                return defaultValues
            }

            return JSON.parse(raw) as SignupType
        } catch {
            sessionStorage.removeItem("data")
            if (step === "password") {
                void setStep("base");
            }
            return defaultValues
        }
    }


    const methods = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: getDataInSession(),
        values: getDataInSession()
    })

    const {
        handleSubmit,
        setValue,
    } = methods


    const navigate = useNavigate()

    const onSubmit = (data: SignupType) => {
        if (step === "password") {
            toast.success("Account created successfully!");
            void navigate({to: "/"})
        } else {
            setValue("step", "pass")
            sessionStorage.setItem("data", JSON.stringify({
                ...data,
                step: "pass",
            }))
            void setStep("password");
        }
    }

    const stepBackHandler = () => {
        setValue("password", "")
        setValue("re_password", "")
        setValue("step", "base")
        void setStep("base");
    }

    const generateBtn = () => {
        if (step === "password") {
            return <>
                <Button type="submit">Create Account</Button>
                <Button
                    onClick={stepBackHandler}
                    variant="outline" type="button">
                    Previews Step
                </Button>
            </>
        } else return (<>
            <Button type="submit">Continue</Button>
        </>)
    }

    const generateForm = () => {
        if (step === "password") {
            return <PasswordStep/>
        } else return <BaseStepSignup/>
    }

    return (
        <AuthContainer>
            <Card>
                <CardHeader>
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>
                        Enter your information below to create your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FormProvider {...methods}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FieldGroup>
                                {generateForm()}
                                <FieldGroup>
                                    <Field>
                                        {generateBtn()}
                                        <FieldDescription className="px-6 text-center">
                                            Already have an account? <Link to={"/login"}>Login</Link>
                                        </FieldDescription>
                                    </Field>
                                </FieldGroup>
                            </FieldGroup>
                        </form>
                    </FormProvider>
                </CardContent>
            </Card>
        </AuthContainer>
    )
}
