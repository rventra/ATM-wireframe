import { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ISO Agreement Overview | CashReady ATM",
  description: "Overview of CashReady ATM ISO processing agreement terms.",
};

export default function AgreementPage() {
  return (
    <>
      <Navigation />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-lg text-gray-900 mb-8">
            ISO Agreement Overview
          </h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              This page provides a simplified overview of our ISO Processing Agreement.
              For the complete terms and conditions, please refer to the actual agreement
              document provided during onboarding.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Agreement Term
            </h2>
            <p className="text-gray-600">
              Our standard processing agreement includes an initial 6-month term,
              followed by month-to-month service. Either party may terminate with
              30 days written notice after the initial term.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Processing Rates
            </h2>
            <p className="text-gray-600">
              Processing rates are outlined in your specific rate schedule. Rates
              are subject to change with 30 days notice, though we strive to maintain
              consistent pricing for our partners.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Responsibilities
            </h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Operator maintains ATM equipment and compliance</li>
              <li>CashReady provides processing services and support</li>
              <li>Both parties maintain PCI DSS compliance</li>
              <li>Operator responsible for vault cash (unless full-service)</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Complete Agreement
            </h2>
            <p className="text-gray-600">
              To receive a complete copy of our ISO Processing Agreement, please{" "}
              <Link href="/contact" className="text-green-600 hover:underline">
                contact our sales team
              </Link>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
