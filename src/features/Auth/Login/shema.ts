import * as z from "zod";

export const loginShema = z.object({
    email: z.email("Enter valid email address").min(1, "Please enter your email"),
    password: z.string("Please enter your password").min(7, "Password must be at least 7 characters long"),
})

export type LoginType=z.infer<typeof loginShema>