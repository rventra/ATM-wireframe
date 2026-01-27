import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]): string {
  return inputs.filter(Boolean).join(" ");
}

export function formatPhoneNumber(value: string): string {
  const phone = value.replace(/\D/g, "");
  const match = phone.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
  if (match) {
    return [!match[1] ? "" : "(" + match[1] + (!match[2] ? "" : ") " + match[2]) + (!match[3] ? "" : "-" + match[3])].join("");
  }
  return value;
}

export function validateBusinessEmail(email: string): { valid: boolean; isPersonal: boolean } {
  const personalDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com", "icloud.com", "protonmail.com", "mail.com", "live.com"];
  const domain = email.split("@")[1]?.toLowerCase();
  const isPersonal = personalDomains.includes(domain);
  return {
    valid: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    isPersonal,
  };
}

export function calculateROI(monthlyTransactions: number, currentSurcharge: number): {
  currentRevenue: number;
  potentialRevenue: number;
  monthlyUplift: number;
  annualUplift: number;
} {
  const cashReadyFee = 0.2;
  const typicalRetailFee = 0.5;
  const actualCurrentFee = Math.max(currentSurcharge * 0.15, typicalRetailFee);

  const currentRevenue = monthlyTransactions * (currentSurcharge - actualCurrentFee);
  const potentialRevenue = monthlyTransactions * (currentSurcharge - cashReadyFee);
  const monthlyUplift = potentialRevenue - currentRevenue;
  const annualUplift = monthlyUplift * 12;

  return {
    currentRevenue,
    potentialRevenue,
    monthlyUplift,
    annualUplift,
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "CashReady ATM",
    description: "ATM Independent Sales Organization providing wholesale processing rates to ATM operators",
    url: "https://cashreadyatm.com",
    telephone: "+1-XXX-XXX-XXXX",
    email: "info@cashreadyatm.com",
    areaServed: ["Georgia", "Florida"],
    serviceType: ["ATM Processing", "ATM Equipment Sales", "ATM Management Services"],
    knowsAbout: ["ATM ISO services", "PAI processing", "wholesale ATM rates"],
    priceRange: "$$",
    paymentAccepted: "Check, Bank Transfer",
    currenciesAccepted: "USD",
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
