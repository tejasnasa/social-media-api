import { z } from "zod";

export const loginSchema = z.object({
  usernameOrEmail: z.string().min(3, {
    message: "Username or email should be atleast 3 characters long",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export const registerSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" })
    .regex(/(?=.*[A-Z])/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/(?=.*[0-9])/, {
      message: "Password must contain at least one number",
    })
    .regex(/(?=.*[!@#$%^&*(),.?":{}|<>])/, {
      message: "Password must contain at least one special character",
    }),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  fullname: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters long" }),
  avatar: z.string().optional().nullable(),
  bio: z.string().optional().nullable(),
});

export const googleLoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export const googleRegisterSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  fullname: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters long" }),
});
