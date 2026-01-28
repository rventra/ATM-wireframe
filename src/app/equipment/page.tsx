import { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import { Check, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ATM Equipment | Genmega & Hyosung Terminals | CashReady ATM",
  description: "Wholesale pricing on Genmega GT3000, Hyosung Halo II, and Hyosung Force ATMs. Bundle with our processing for maximum savings.",
};

const equipment = [
  {
    name: "Genmega GT3000",
    description: "Buy at wholesale pricing. Workhorse terminal for high-traffic locations.",
    image: "/api/placeholder/400/320",
    specs: [
      "15-inch touchscreen",
      "High-capacity cash dispenser",
      "PCI 6.0 compliant",
    ],
    price: "Wholesale pricing available",
  },
  {
    name: "Hyosung Halo II",
    description: "Sleek design, reliable processing. Bundle with our backend for best rates.",
    image: "/api/placeholder/400/320",
    specs: [
      "Compact footprint",
      "LED lighting",
      "Weather-resistant options",
    ],
    price: "Contact for wholesale pricing",
  },
  {
    name: "Hyosung Force",
    description: "Outdoor rated, weatherproof. Direct support included.",
    image: "/api/placeholder/400/320",
    specs: [
      "Weather-resistant casing",
      "Anti-glare display",
      "High-security locks",
    ],
    price: "Contact for wholesale pricing",
  },
];

export default function EquipmentPage() {
  return (
    <>
      <Navigation />
      <main className="bg-gray-50 min-h-screen">
        {/* Simple Header */}
        <section className="bg-white border-b border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ATM Equipment
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Buy at wholesale rates. No forms, no hassle—just call or email for pricing.
            </p>
          </div>
        </section>

        {/* Product Grid */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {equipment.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Image Placeholder */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">{item.name}</span>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h2>
                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                    {/* Specs */}
                    <ul className="space-y-2 mb-6">
                      {item.specs.map((spec) => (
                        <li key={spec} className="flex items-center text-sm text-gray-600">
                          <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-sm font-medium text-gray-900">{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Contact Section */}
        <section className="section-padding bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Questions about equipment?
              </h2>
              <p className="text-gray-600 mb-8">
                We don&apos;t do forms. Call or email us directly.
              </p>
              <Link
                href="mailto:info@cashreadyatm.com"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-green-600 rounded-lg transition-all duration-200 hover:bg-green-700 hover:shadow-lg"
              >
                <Mail className="mr-2 w-5 h-5" />
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
