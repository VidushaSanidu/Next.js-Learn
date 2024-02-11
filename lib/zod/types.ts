import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => /[!@#$%^&*(),.?":{}|<>]/.test(data.password), {
    message: "Password must contain at least one symbol",
    path: ["password"],
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: "password mismached",
    path: ["cofirmPassword"],
  });

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export type TRegisterSchema = z.infer<typeof registerSchema>;
export type TLoginSchema = z.infer<typeof loginSchema>;
