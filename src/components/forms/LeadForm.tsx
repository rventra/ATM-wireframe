"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { leadFormSchema, type LeadFormData } from "@/lib/schemas";
import { formatPhoneNumber, validateBusinessEmail } from "@/lib/utils";
import Button from "@/components/ui/Button";
import { CheckCircle, AlertCircle } from "lucide-react";

interface LeadFormProps {
  equipmentInterest?: boolean;
}

export default function LeadForm({ equipmentInterest = false }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailWarning, setEmailWarning] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      equipmentInterest,
    },
  });

  const phoneValue = watch("phone");

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue("phone", formatted);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    const validation = validateBusinessEmail(email);
    if (validation.isPersonal && validation.valid) {
      setEmailWarning("Consider using your business email for faster verification");
    } else {
      setEmailWarning(null);
    }
  };

  const onSubmit = async (data: LeadFormData) => {
    if (data.honeypot) return;

    setIsSubmitting(true);

    try {
      // TODO: Integrate with HubSpot/Zapier
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">
          We&apos;ve received your request and will analyze your current rates. Expect a call within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Honeypot field */}
      <input type="text" {...register("honeypot")} className="hidden" tabIndex={-1} />

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            placeholder="John Smith"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Business Name */}
        <div>
          <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
            Business Name *
          </label>
          <input
            type="text"
            id="businessName"
            {...register("businessName")}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            placeholder="Smith ATM Services LLC"
          />
          {errors.businessName && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.businessName.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            onChange={handleEmailChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            placeholder="john@yourbusiness.com"
          />
          {emailWarning && (
            <p className="mt-1 text-sm text-amber-600">{emailWarning}</p>
          )}
          {errors.email && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            {...register("phone")}
            onChange={handlePhoneChange}
            value={phoneValue || ""}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
            placeholder="(555) 123-4567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Monthly Volume */}
        <div>
          <label htmlFor="monthlyVolume" className="block text-sm font-medium text-gray-700 mb-2">
            Monthly Transaction Volume *
          </label>
          <select
            id="monthlyVolume"
            {...register("monthlyVolume")}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
          >
            <option value="">Select volume range</option>
            <option value="<500">Less than 500</option>
            <option value="500-2k">500 - 2,000</option>
            <option value="2k-10k">2,000 - 10,000</option>
            <option value="10k+">10,000+</option>
          </select>
          {errors.monthlyVolume && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.monthlyVolume.message}
            </p>
          )}
        </div>

        {/* Current Provider */}
        <div>
          <label htmlFor="currentProvider" className="block text-sm font-medium text-gray-700 mb-2">
            Current Provider *
          </label>
          <select
            id="currentProvider"
            {...register("currentProvider")}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all bg-white"
          >
            <option value="">Select provider</option>
            <option value="PAI">PAI (Payment Alliance)</option>
            <option value="Cardtronics">Cardtronics</option>
            <option value="Other">Other ISO</option>
            <option value="None">Not currently processing</option>
          </select>
          {errors.currentProvider && (
            <p className="mt-1 text-sm text-red-600 flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.currentProvider.message}
            </p>
          )}
        </div>
      </div>

      {equipmentInterest && (
        <input type="hidden" {...register("equipmentInterest")} value="true" />
      )}

      <Button type="submit" isLoading={isSubmitting} className="w-full sm:w-auto" size="lg">
        Get My Rate Analysis
      </Button>

      <p className="text-sm text-gray-500">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="text-green-600 hover:underline">Privacy Policy</a>
        . We&apos;ll never share your information.
      </p>
    </form>
  );
}
