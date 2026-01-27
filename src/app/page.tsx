import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioAdvantage from "@/components/sections/PortfolioAdvantage";
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
        <PortfolioAdvantage />

        {/* Economics Section with Calculator */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
                  The Surcharge Gap
                </span>
                <h2 className="heading-md text-gray-900 mt-3 mb-6">
                  Economics That Work For You
                </h2>
                <p className="text-body mb-6">
                  Every transaction generates revenue. The question is: how much do you keep?
                  Our wholesale structure ensures you retain significantly more of every surcharge.
                </p>

                {/* Comparison Table */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <span className="font-medium text-gray-600">Retail Tier (Typical)</span>
                      <div className="text-right">
                        <span className="block text-lg font-bold text-red-600">$0.50</span>
                        <span className="text-xs text-gray-500">per transaction</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                      <span className="font-medium text-gray-600">Wholesale Tier (CashReady)</span>
                      <div className="text-right">
                        <span className="block text-lg font-bold text-green-600">$0.20</span>
                        <span className="text-xs text-gray-500">per transaction</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-bold text-gray-900">Your Additional Revenue</span>
                      <span className="text-2xl font-bold text-green-600">+$0.30</span>
                    </div>
                  </div>
                </div>
              </div>
              <ROICalculator />
            </div>
          </div>
        </section>

        <ServiceTiers />
        <DailyOversight />
        <LeadCapture />
      </main>
      <Footer />
    </>
  );
}
