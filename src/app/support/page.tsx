import { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { Phone, Mail, FileText, Wrench, HelpCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Support | CashReady ATM",
  description: "Get technical support, submit maintenance requests, or browse our knowledge base. CashReady ATM is here to help.",
};

const supportOptions = [
  {
    icon: Phone,
    title: "Technical Support",
    description: "Having issues with your terminal or processing? Our technical team is available to help diagnose and resolve problems.",
    action: "Call Support",
    href: "tel:+1-XXX-XXX-XXXX",
    details: "Available 24/7 for emergencies",
  },
  {
    icon: Wrench,
    title: "Maintenance Request",
    description: "Need on-site service for your ATM? Submit a maintenance request and we'll dispatch a technician.",
    action: "Submit Request",
    href: "#maintenance-form",
    details: "GA/FL service areas only",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "Access terminal manuals, programming guides, and troubleshooting documentation.",
    action: "View Docs",
    href: "#",
    details: "Login required",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Find answers to commonly asked questions about processing, equipment, and services.",
    action: "Browse FAQ",
    href: "/faq",
    details: "Self-service help",
  },
];

const quickLinks = [
  { label: "Terminal Programming Guide", href: "#" },
  { label: "Settlement Schedule", href: "#" },
  { label: "Equipment Specifications", href: "/equipment" },
  { label: "Service Area Map", href: "/onboarding-process" },
  { label: "Contact Sales", href: "/contact" },
];

export default function SupportPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="gradient-navy py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wide">
                Help Center
              </span>
              <h1 className="heading-lg text-white mt-4 mb-6">
                How Can We Help?
              </h1>
              <p className="text-lg text-gray-300">
                From technical troubleshooting to maintenance requests, our team is
                ready to assist you. Choose the option that best fits your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Support Options */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {supportOptions.map((option) => (
                <div
                  key={option.title}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <option.icon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{option.details}</span>
                    <Link
                      href={option.href}
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                    >
                      {option.action}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Links</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="flex items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-green-500 hover:shadow-sm transition-all"
                  >
                    <FileText className="w-5 h-5 text-gray-400 mr-3" />
                    <span className="text-gray-700">{link.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Maintenance Form Placeholder */}
        <section id="maintenance-form" className="section-padding bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center space-x-3 mb-6">
                <Wrench className="w-6 h-6 text-green-600" />
                <h2 className="heading-md text-gray-900">Maintenance Request</h2>
              </div>
              <p className="text-gray-600 mb-8">
                For full-service clients in Georgia and Florida. Complete the form
                below and we'll dispatch a technician to your location.
              </p>

              {/* Placeholder for maintenance form */}
              <div className="bg-gray-50 rounded-xl p-8 text-center border-2 border-dashed border-gray-200">
                <Wrench className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Maintenance Request Form
                </h3>
                <p className="text-gray-500 mb-4">
                  Connect your maintenance ticketing system or form handler here
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="heading-md text-gray-900 mb-4">Emergency Support</h2>
            <p className="text-gray-600 mb-8">
              Experiencing a critical issue? Our emergency support line is available
              24/7 for partners.
            </p>
            <a
              href="tel:+1-XXX-XXX-XXXX"
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Emergency: (XXX) XXX-XXXX
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
