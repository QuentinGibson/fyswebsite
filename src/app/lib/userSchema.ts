import { z } from "zod";

export const userSchema = z.object({
  firstName: z
    .string()
    .min(1, "Please enter a first name!")
    .max(254, "First Name must be shorter than 100 characters!"),
  lastName: z
    .string()
    .min(1, "Please enter a last name!")
    .max(254, "Last Name must be within 100 characters!"),
  services: z.string().max(254, "Please enter a valid service"),
  emailAddress: z
    .string()
    .max(254, "Email address is too long!")
    .email("Please enter a valid email address!"),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters!")
    .max(500, "Message is too long! Please keep it under 500 characters"),
});
