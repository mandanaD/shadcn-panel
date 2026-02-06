import {z} from "zod";

export const signupSchema = z.discriminatedUnion("step", [
    z.object({
        step: z.literal("base"),
        first_name: z.string().nonempty("Please enter your first name"),
        last_name: z.string().nonempty("Please enter your last name"),
        email: z.email("Enter valid email address").min(1, "Please enter your email"),
        password: z.string("Please enter your password").optional(),
        re_password: z.string("Please enter your password").optional(),
    }),
    z.object({
        step: z.literal("pass"),
        first_name: z.string().nonempty("Please enter your first name"),
        last_name: z.string().nonempty("Please enter your last name"),
        email: z.email("Enter valid email address").min(1, "Please enter your email"),
        password: z.string("Please enter your password").min(8, "Password must be at least 8 characters long"),
        re_password: z.string("Please enter your password").min(8, "Password must be at least 8 characters long"),
    }).refine((data) => data.password === data.re_password, {
        message: 'Passwords must match',
        path: ['re_password'],
    }),
]);
export type SignupType = z.infer<typeof signupSchema>