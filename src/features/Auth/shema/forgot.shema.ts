import {z} from "zod";

export const forgotShema = z.discriminatedUnion("step", [
    z.object({
        step: z.literal("email"),
        email: z.email("Enter valid email address").min(1, "Please enter your email"),
        code: z.string().optional(),
        password: z.string("Please enter your password").min(8, "Password must be at least 8 characters long"),
        re_password: z.string("Please enter your password").min(8, "Password must be at least 8 characters long"),
    }),
    z.object({
        step: z.literal("code"),
        email: z.email("Enter valid email address").min(1, "Please enter your email"),
        code: z
            .string()
            .length(6, "Verification code must be 6 digits"),
        password: z.string("Please enter your password").min(8, "Password must be at least 8 characters long"),
        re_password: z.string("Please enter your password").min(8, "Password must be at least 8 characters long"),
    }).refine((data) => data.password === data.re_password, {
        message: 'Passwords must match',
        path: ['re_password'],
    }),
]);

export type ForgotType = z.infer<typeof forgotShema>