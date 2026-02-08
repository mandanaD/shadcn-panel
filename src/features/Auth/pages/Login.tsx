import {Button} from "@/components/ui/button.tsx"
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card.tsx"
import {Field, FieldDescription, FieldGroup,} from "@/components/ui/field.tsx"
import {Input} from "@/components/ui/input.tsx"
import AuthContainer from "@/features/Auth/components/AuthContainer.tsx";
import {useForm} from "react-hook-form";
import {loginShema, type LoginType} from "@/features/Auth/shema/login.shema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {PasswordInput} from "@/components/ui/passwordInput.tsx";
import {Link, useNavigate} from "@tanstack/react-router";
import {toast} from "sonner";

export function Login() {
    const {
        formState: {errors},
        handleSubmit,
        register
    } = useForm({
        resolver: zodResolver(loginShema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const navigate = useNavigate();

    const submit = (val: LoginType) => {
        console.log(val)
        toast.success("Login successfully!");
        void navigate({to: "/"})
    }

    return (
        <AuthContainer>
            <div className={"flex flex-col gap-6 w-full"}>
                <Card>
                    <CardHeader>
                        <CardTitle>Login to your account</CardTitle>
                        <CardDescription>
                            Enter your email below to login to your account
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(submit)}>
                            <FieldGroup>
                                <Input
                                    placeholder="m@example.com"
                                    label={"Email"}
                                    required
                                    {...register("email")}
                                    error={errors.email?.message}
                                />
                                <PasswordInput
                                    placeholder="********"
                                    label={"Password"}
                                    required
                                    {...register("password")}
                                    error={errors.password?.message}
                                    helperText={
                                        <Link
                                            to={"/forgot-password"}
                                            className="mb-1 ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                        >
                                            Forgot your password?
                                        </Link>
                                    }
                                />
                                <Field>
                                    <Button type="submit">Login</Button>
                                    <FieldDescription className="text-center">
                                        Don&apos;t have an account? <Link to={"/sign-up"}>Sign up</Link>
                                    </FieldDescription>
                                </Field>
                            </FieldGroup>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AuthContainer>
    )
}
