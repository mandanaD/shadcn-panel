import {cn} from "@/lib/utils.ts"
import {Button} from "@/components/ui/button.tsx"
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/components/ui/card.tsx"
import {Field, FieldDescription, FieldGroup,} from "@/components/ui/field.tsx"
import {Input} from "@/components/ui/input.tsx"
import AuthContainer from "@/features/Auth/AuthContainer.tsx";
import {useForm} from "react-hook-form";
import {loginShema, type LoginType} from "@/features/Auth/Login/shema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {PasswordInput} from "@/components/ui/passwordInput.tsx";

export function Login({
                          className,
                          ...props
                      }: React.ComponentProps<"div">) {
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

    const submit = (val: LoginType) => {
        console.log(val)
    }

    return (
        <AuthContainer>
            <div className={cn("flex flex-col gap-6", className)} {...props}>
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
                                    placeholder="*******"
                                    label={"Password"}
                                    required
                                    {...register("password")}
                                    error={errors.password?.message}
                                    helperText={
                                        <a
                                            href="#"
                                            className="mb-1 ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                        >
                                            Forgot your password?
                                        </a>
                                    }
                                />
                                <Field>
                                    <Button type="submit">Login</Button>
                                    <Button variant="outline" type="button">
                                        Login with Google
                                    </Button>
                                    <FieldDescription className="text-center">
                                        Don&apos;t have an account? <a href="#">Sign up</a>
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
