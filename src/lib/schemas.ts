import { z } from "zod";

export const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  businessName: z.string().min(2, "Business name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  monthlyVolume: z.enum(["<500", "500-2k", "2k-10k", "10k+"], {
    required_error: "Please select your monthly transaction volume",
  }),
  currentProvider: z.enum(["PAI", "Cardtronics", "Other", "None"], {
    required_error: "Please select your current provider",
  }),
  equipmentInterest: z.boolean().optional(),
  honeypot: z.string().optional(),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  subject: z.string().min(2, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().optional(),
});

export const maintenanceFormSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  contactName: z.string().min(2, "Contact name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  email: z.string().email("Please enter a valid email"),
  location: z.string().min(5, "Full address is required"),
  atmModel: z.string().min(2, "ATM model is required"),
  issueDescription: z.string().min(10, "Please describe the issue"),
  urgency: z.enum(["low", "medium", "high", "critical"]),
  honeypot: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type MaintenanceFormData = z.infer<typeof maintenanceFormSchema>;
