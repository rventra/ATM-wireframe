import { z } from "zod";

export const leadFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  businessName: z.string().min(2, "Business name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  monthlyVolume: z.union([
    z.literal("<500"),
    z.literal("500-2k"),
    z.literal("2k-10k"),
    z.literal("10k+"),
  ]),
  currentProvider: z.union([
    z.literal("PAI"),
    z.literal("Cardtronics"),
    z.literal("Other"),
    z.literal("None"),
  ]),
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
  urgency: z.union([
    z.literal("low"),
    z.literal("medium"),
    z.literal("high"),
    z.literal("critical"),
  ]),
  honeypot: z.string().optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type MaintenanceFormData = z.infer<typeof maintenanceFormSchema>;
