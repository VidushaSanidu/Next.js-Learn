import { z } from "zod";

export const registerSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(10, "password must be at least 10 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password == data.confirmPassword, {
    message: "password mismached",
    path: ["cofirmPassword"],
  });

export type TRegisterSchema = z.infer<typeof registerSchema>;
