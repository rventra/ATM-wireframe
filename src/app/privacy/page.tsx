import { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | CashReady ATM",
  description: "CashReady ATM privacy policy and data handling practices.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="heading-lg text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600">
              Last updated: January 2025
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Introduction
            </h2>
            <p className="text-gray-600">
              CashReady ATM ("we," "our," or "us") respects your privacy and is committed
              to protecting your personal information. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you visit our
              website or use our services.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600">
              We collect information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Fill out contact or lead forms</li>
              <li>Request a rate analysis</li>
              <li>Schedule a consultation</li>
              <li>Subscribe to our communications</li>
            </ul>
            <p className="text-gray-600 mt-4">
              This information may include your name, email address, phone number,
              business name, and information about your ATM operations.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Provide and maintain our services</li>
              <li>Process your requests and transactions</li>
              <li>Communicate with you about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600">
              If you have questions about this Privacy Policy, please contact us at
              privacy@cashreadyatm.com.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
