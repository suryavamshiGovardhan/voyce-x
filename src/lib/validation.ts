import { z } from 'zod';

// Signup form validation schema
export const signupSchema = z.object({
  fullName: z.string()
    .trim()
    .min(2, { message: "Full name must be at least 2 characters" })
    .max(100, { message: "Full name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s]+$/, { message: "Full name can only contain letters and spaces" }),
  
  mobile: z.string()
    .trim()
    .regex(/^\+91[6-9]\d{9}$/, { message: "Please enter a valid Indian mobile number (+91XXXXXXXXXX)" }),
  
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  
  password: z.string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(128, { message: "Password must be less than 128 characters" })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, { 
      message: "Password must contain at least one lowercase letter, one uppercase letter, and one number" 
    }),
  
  confirmPassword: z.string(),
  
  ageGroup: z.string()
    .min(1, { message: "Please select an age group" }),
  
  state: z.string()
    .min(1, { message: "Please select your state" }),
  
  district: z.string()
    .trim()
    .min(2, { message: "District name must be at least 2 characters" })
    .max(100, { message: "District name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s]+$/, { message: "District name can only contain letters and spaces" }),
  
  language: z.string().default("en"),
  
  agreeToTerms: z.boolean()
    .refine(val => val === true, { message: "You must agree to the terms and conditions" }),
  
  subscribeNewsletter: z.boolean().default(false)
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

// Login form validation schema
export const loginSchema = z.object({
  loginId: z.string()
    .trim()
    .min(1, { message: "Please enter your mobile number or email" }),
  
  password: z.string()
    .min(1, { message: "Please enter your password" })
});

export type SignupFormData = z.infer<typeof signupSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;