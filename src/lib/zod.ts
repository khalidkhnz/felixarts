import { z } from "zod";

export class Z {
  public static passwordSchema = z
    .string()
    .min(8, "8 Characters")
    .regex(/[\W_]/, "1 Special")
    .regex(/[A-Z]/, "1 Uppercase")
    .regex(/[0-9]/, "1 Numeric");

  public static fullNameSchema = z.string().max(50).min(1);

  public static emailSchema = z.string().email();

  public static addressSchema = z.string().max(255);

  public static pincodeSchema = z.string().length(6);

  public static cityNameSchema = z.string().max(100);

  public static signInSchema = z.object({
    type: z.string({}),
    email: z
      .string({ required_error: "Email is required" })
      .min(1, "Email is required")
      .email("Invalid email"),
    password: z
      .string({ required_error: "Password is required" })
      .min(1, "Password is required")
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
  });
}
