import { z } from "zod";

// Define the shape of the "Referral-Form"
export const ReferralFormSchema = z.object({
  rname: z
    .string()
    .min(3, { message: "Referral name cannot be less than 3 characters!" })
    .max(50, { message: "Referral name cannot more than 50 characters!" }),
  remail: z
    .string()
    .email({ message: "Refferal email address cannot be empty!" }),
  rphone: z
    .string()
    .min(10, {
      message: "Referral Phone number should be at-least of 10 numbers!",
    })
    .max(10, {
      message: "Referral Phone number cannot be more than 10 numbers!",
    }),
  name: z
    .string()
    .min(3, { message: "Name cannot be less than 3 characters!" })
    .max(50, { message: "Name cannot more than 50 characters!" }),
  email: z.string().email({ message: "Email address cannot be empty!" }),
  phone: z
    .string()
    .min(10, { message: "Phone number should be at-least of 10 numbers!" })
    .max(10, { message: "Phone number cannot be more than 10 numbers!" }),
  message: z
    .string()
    .min(10, { message: "Reason for the referral is too short!" })
    .max(500, {
      message: "Reason for the referral should not exceed 500 characters!",
    }),
});
