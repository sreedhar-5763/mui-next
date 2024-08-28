import { z } from "zod";

export const NameSchema = z
  .string({
    required_error: "Name is a requird field",
  })
  .min(3, { message: "Name must be at least 3 characters in length" })
  .max(64, { message: "Name must not exceed 64 characters in length" })
  .trim();

export const EmailSchema = z
  .string({
    required_error: "Email is a required field",
  })
  .email({ message: "Invalid email address" })
  .trim();

export const PasswordSchema = z
  .string({
    required_error: "Password is a required field",
  })
  .min(8, {
    message: "Password must contain at least 8 characters in length",
  })
  .max(48, { message: "Password must not exceed 48 characters in length" })
  .trim();

export const ConfirmPasswordSchema = z
  .string({
    required_error: "Confirm password is a required field",
  })
  .trim();

export const RegisterUserClientSchema = z
  .object({
    name: NameSchema,
    email: EmailSchema,
    password: PasswordSchema,
    confirmPassword: ConfirmPasswordSchema,
  })
  .refine(
    (values) => {
      return values.password === values.confirmPassword;
    },
    {
      message: "Passwords must match",
      path: ["confirmPassword"],
    }
  );

export const RegisterUserServerSchema = z.object({
  name: NameSchema,
  email: EmailSchema,
  password: PasswordSchema,
});

export const LoginUserClientSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
});
