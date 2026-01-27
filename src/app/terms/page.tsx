import { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | CashReady ATM",
  description: "CashReady ATM terms of service and conditions.",
};

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-lg text-gray-900 mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              Last updated: January 2025
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Agreement to Terms
            </h2>
            <p className="text-gray-600">
              By accessing or using the CashReady ATM website and services, you agree to be
              bound by these Terms of Service. If you do not agree to these terms, please
              do not use our services.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Description of Services
            </h2>
            <p className="text-gray-600">
              CashReady ATM provides ATM processing services, equipment sales, and
              management services to ATM operators. Specific terms for each service
              are outlined in separate service agreements.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Intellectual Property
            </h2>
            <p className="text-gray-600">
              All content on this website, including text, graphics, logos, and images,
              is the property of CashReady ATM and is protected by copyright and other
              intellectual property laws.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600">
              For questions about these Terms of Service, please contact us at
              legal@cashreadyatm.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
