import { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import LeadForm from "@/components/forms/LeadForm";
import { motion } from "framer-motion";
import { Check, Download, ExternalLink, Cpu, Monitor, Wifi, Shield } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ATM Equipment | Genmega & Hyosung Terminals | CashReady ATM",
  description: "Wholesale pricing on Genmega GT3000, Hyosung Halo II, and Hyosung Force ATMs. Bundle with our processing for maximum savings.",
};

const equipment = [
  {
    name: "Genmega GT3000",
    category: "Indoor Retail",
    description: "Compact, reliable countertop ATM perfect for retail locations with moderate traffic.",
    image: "/api/placeholder/400/500",
    specs: {
      screen: "8\" color LCD",
      cash: "1,000 notes (expandable)",
      connectivity: "Ethernet, Dial-up",
      security: "PCI 5.0, EMV, ADA",
    },
    features: [
      "Compact footprint (15\" x 18\")",
 "Low power consumption",
      "Quick cash dispensing",
      "Remote management capable",
    ],
    ideal: "Convenience stores, small retail, bars",
  },
  {
    name: "Hyosung Halo II",
    category: "High-Traffic Indoor",
    description: "Industry-leading ATM with large touchscreen and modern design. Perfect for high-traffic locations.",
    image: "/api/placeholder/400/500",
    specs: {
      screen: "10.1\" color touchscreen",
      cash: "2,000-6,000 notes",
      connectivity: "Ethernet, WiFi, 4G",
      security: "PCI 6.0, EMV, ADA",
    },
    features: [
      "Sleek modern design",
      "Large advertising screen",
      "High-capacity cassettes",
      "Touchscreen interface",
    ],
    ideal: "Hotels, casinos, large retail, malls",
    popular: true,
  },
  {
    name: "Hyosung Force",
    category: "Through-the-Wall",
    description: "Heavy-duty through-the-wall ATM built for outdoor installations and 24/7 operation.",
    image: "/api/placeholder/400/500",
    specs: {
      screen: "10.1\" color touchscreen",
      cash: "4,000-8,000 notes",
      connectivity: "Ethernet, 4G, WiFi",
      security: "UL 291 Level 1, PCI 6.0",
    },
    features: [
      "Weather-resistant build",
      "High security vault",
      "24/7 operation rated",
      "Vandal-resistant design",
    ],
    ideal: "Drive-thrus, gas stations, outdoor venues",
  },
];

const specIcons = {
  screen: Monitor,
  cash: Cpu,
  connectivity: Wifi,
  security: Shield,
};

export default function EquipmentPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="gradient-navy py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wide">
                Equipment Solutions
              </span>
              <h1 className="heading-lg text-white mt-4 mb-6">
                Professional ATM Terminals at Wholesale Pricing
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Bundle your equipment purchase with our wholesale processing for maximum savings.
                We offer Genmega and Hyosung terminals at competitive ISO pricing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#equipment-form"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  Get Bundle Pricing
                </Link>
                <a
                  href="#specs"
                  className="inline-flex items-center px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  View Specifications
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Equipment Grid */}
        <section id="specs" className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-md text-gray-900 mb-4">
                Featured Terminals
              </h2>
              <p className="text-body">
                We source equipment directly from manufacturers, passing savings to our partners.
                All terminals come with warranty and are pre-configured for our processing platform.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {equipment.map((item, index) => (
                <div
                  key={item.name}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  {item.popular && (
                    <div className="bg-green-600 text-white text-center text-sm font-semibold py-2">
                      Most Popular Choice
                    </div>
                  )}

                  <div className="p-6">
                    <span className="text-green-600 text-sm font-medium">{item.category}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1 mb-3">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-6">{item.description}</p>

                    {/* Specs */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {Object.entries(item.specs).map(([key, value]) => {
                        const Icon = specIcons[key as keyof typeof specIcons] || Monitor;
                        return (
                          <div key={key} className="flex items-start space-x-2">
                            <Icon className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <p className="text-xs text-gray-500 capitalize">{key}</p>
                              <p className="text-sm font-medium text-gray-900">{value}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Features */}
                    <div className="border-t border-gray-100 pt-6 mb-6">
                      <p className="text-sm font-semibold text-gray-900 mb-3">Key Features</p>
                      <ul className="space-y-2">
                        {item.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm text-gray-600">
                            <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <p className="text-xs text-gray-500 mb-1">Ideal For</p>
                      <p className="text-sm text-gray-700">{item.ideal}</p>
                    </div>

                    {/* Actions */}
                    <div className="space-y-3">
                      <Link
                        href="#equipment-form"
                        className="block w-full text-center px-4 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Request Pricing
                      </Link>
                      <button className="flex items-center justify-center w-full px-4 py-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Spec Sheet
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Financing Section */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
                  Equipment Financing
                </span>
                <h2 className="heading-md text-gray-900 mt-3 mb-6">
                  Flexible Acquisition Options
                </h2>
                <p className="text-body mb-6">
                  We understand that equipment acquisition is a significant investment. That&apos;s why
                  we offer flexible financing options to help you expand your ATM portfolio without
                  straining cash flow.
                </p>
                <ul className="space-y-4">
                  {[
                    "Competitive lease-to-own programs",
                    "Bundle financing with processing agreement",
                    "Quick approval process",
                    "No hidden fees or prepayment penalties",
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Equipment Inquiry</h3>
                <p className="text-gray-600 mb-6">
                  Interested in equipment pricing? Fill out the form below and we&apos;ll send you
                  our current wholesale price sheet and financing options.
                </p>
                <Link
                  href="#equipment-form"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  Get Pricing
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>          </div>
        </section>

        {/* Lead Form Section */}
        <section id="equipment-form" className="section-padding bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="heading-md text-gray-900 mb-4">Request Equipment Pricing</h2>
                <p className="text-gray-600">
                  Complete the form below to receive our wholesale equipment pricing and bundle options.
                </p>
              </div>
              <LeadForm equipmentInterest={true} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
