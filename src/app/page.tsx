import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ROICalculator from "@/components/sections/ROICalculator";
import ServiceTiers from "@/components/sections/ServiceTiers";
import DailyOversight from "@/components/sections/DailyOversight";
import LeadCapture from "@/components/sections/LeadCapture";
import Script from "next/script";
import { generateLocalBusinessSchema } from "@/lib/utils";

export default function Home() {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Navigation />
      <main>
        <HeroSection />

        {/* Merged Section: Why CashReady - Combines Our Advantage + Surcharge Gap */}
        <section id="why-cashready" className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
                Why CashReady
              </span>
              <h2 className="heading-md text-gray-900 mt-3 mb-4">
                Keep More of Every Transaction
              </h2>
              <p className="text-body max-w-2xl mx-auto">
                Through volume arbitrage and wholesale PAI rates, we ensure you retain significantly more of every surcharge while maintaining premium service standards.
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              {/* Left: The Advantage */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Volume Arbitrage Through Scale
                </h3>
                <p className="text-body mb-4">
                  As an Independent Sales Organization (ISO), we aggregate transaction volume from hundreds of ATM operators. This collective buying power unlocks wholesale PAI processing rates that individual operators cannot access on their own.
                </p>
                <p className="text-body mb-6">
                  Our core arbitrage is simple: we secure institutional rates and pass the savings to you. While retail ISOs charge premium processing fees, our partners keep significantly more of every surcharge.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-2xl font-bold text-green-600">$50M+</p>
                    <p className="text-sm text-gray-500">Monthly Transactions</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-2xl font-bold text-green-600">99.9%</p>
                    <p className="text-sm text-gray-500">Network Uptime</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-2xl font-bold text-green-600">200+</p>
                    <p className="text-sm text-gray-500">Partner Operators</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-gray-100">
                    <p className="text-2xl font-bold text-green-600">PAI</p>
                    <p className="text-sm text-gray-500">Authorized ISO</p>
                  </div>
                </div>
              </div>

              {/* Right: The Surcharge Gap */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                  Fee Comparison Per Transaction
                </h3>

                {/* Retail Tier */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Retail ISO Rate</span>
                    <span className="text-lg font-bold text-red-600">$0.50</span>
                  </div>
                  <div className="h-8 bg-red-100 rounded-lg overflow-hidden">
                    <div className="h-full bg-red-500 rounded-lg w-full" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">You keep: $2.50 (of $3.00)</p>
                </div>

                {/* Wholesale Tier */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">CashReady Wholesale</span>
                    <span className="text-lg font-bold text-green-600">$0.20</span>
                  </div>
                  <div className="h-8 bg-green-100 rounded-lg overflow-hidden">
                    <div className="h-full bg-green-500 rounded-lg w-[40%]" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">You keep: $2.80 (of $3.00)</p>
                </div>

                {/* Difference Highlight */}
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-800">Your Additional Revenue</span>
                    <span className="text-2xl font-bold text-green-600">+$0.30</span>
                  </div>
                  <p className="text-xs text-green-700 mt-1">
                    Per transaction • Scales with volume
                  </p>
                </div>

                {/* Simple comparison breakdown */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="font-medium text-gray-600">Retail Tier (Typical)</span>
                      <div className="text-right">
                        <span className="block text-lg font-bold text-red-600">$0.50</span>
                        <span className="text-xs text-gray-500">per transaction</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="font-medium text-gray-600">Wholesale Tier (CashReady)</span>
                      <div className="text-right">
                        <span className="block text-lg font-bold text-green-600">$0.20</span>
                        <span className="text-xs text-gray-500">per transaction</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                      <span className="font-bold text-gray-900">Your Savings</span>
                      <span className="text-xl font-bold text-green-600">60% Lower Fees</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ROICalculator />
        <ServiceTiers />
        <DailyOversight />
        <LeadCapture />
      </main>
      <Footer />
    </>
  );
}
