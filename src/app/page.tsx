"use client";

import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServiceTiers from "@/components/sections/ServiceTiers";
import LeadCapture from "@/components/sections/LeadCapture";
import Script from "next/script";
import { generateLocalBusinessSchema } from "@/lib/utils";
import { motion } from "framer-motion";
import { X, Check, Phone, User, Clock, TrendingUp, Shield, Users, Award } from "lucide-react";

const corporateFeatures = [
  { label: "Call center support", available: false },
  { label: "Ticket-based issues", available: false },
  { label: "48-72 hour response", available: false },
  { label: "Rotating account reps", available: false },
  { label: "Automated phone trees", available: false },
];

const cashReadyFeatures = [
  { label: "Direct phone line", available: true },
  { label: "Real-time troubleshooting", available: true },
  { label: "Same-day resolution", available: true },
  { label: "Dedicated account manager", available: true },
  { label: "Daily oversight reports", available: true },
];

const highlights = [
  { icon: TrendingUp, label: "Wholesale Processing Rates", description: "Access institutional rates through our PAI partnership" },
  { icon: Shield, label: "Reliable Network Uptime", description: "Built on PAI's established infrastructure" },
  { icon: Users, label: "Growing Partner Network", description: "Join hundreds of ATM operators nationwide" },
  { icon: Award, label: "PAI Authorized ISO", description: "Fully authorized Independent Sales Organization" },
];

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

        {/* Combined Section: Why CashReady + The CashReady Difference */}
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

            {/* Two Column Layout: Advantage + Comparison */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
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

                {/* Highlights (no specific numbers) */}
                <div className="grid grid-cols-2 gap-4">
                  {highlights.map((item) => (
                    <div key={item.label} className="bg-white rounded-xl p-4 border border-gray-100">
                      <item.icon className="w-6 h-6 text-green-600 mb-2" />
                      <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: The Surcharge Gap (without specific dollar amounts) */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
                  Fee Comparison Per Transaction
                </h3>

                {/* Retail Tier */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">Retail ISO Rate</span>
                    <span className="text-lg font-bold text-red-600">Higher</span>
                  </div>
                  <div className="h-8 bg-red-100 rounded-lg overflow-hidden">
                    <div className="h-full bg-red-500 rounded-lg w-full" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Typical retail processing fees</p>
                </div>

                {/* Wholesale Tier */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">CashReady Wholesale</span>
                    <span className="text-lg font-bold text-green-600">Lower</span>
                  </div>
                  <div className="h-8 bg-green-100 rounded-lg overflow-hidden">
                    <div className="h-full bg-green-500 rounded-lg w-[40%]" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Our wholesale institutional rates</p>
                </div>

                {/* Difference Highlight */}
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-green-800">Your Additional Revenue</span>
                    <span className="text-xl font-bold text-green-600">Significant Savings</span>
                  </div>
                  <p className="text-xs text-green-700 mt-1">
                    Per transaction • Scales with your volume
                  </p>
                </div>

                {/* Simple comparison breakdown */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="font-medium text-gray-600">Retail Tier (Typical)</span>
                      <span className="text-lg font-bold text-red-600">Premium Rates</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-100">
                      <span className="font-medium text-gray-600">Wholesale Tier (CashReady)</span>
                      <span className="text-lg font-bold text-green-600">Institutional Rates</span>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                      <span className="font-bold text-gray-900">Your Advantage</span>
                      <span className="text-xl font-bold text-green-600">Lower Fees</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* The CashReady Difference - Support Comparison */}
            <div className="border-t border-gray-200 pt-20">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
                  The CashReady Difference
                </span>
                <h2 className="heading-md text-gray-900 mt-3 mb-4">
                  Daily Oversight. Real Support.
                </h2>
                <p className="text-body">
                  Corporate ISOs treat you like a number. We treat you like a partner.
                  See the difference dedicated support makes.
                </p>
              </div>

              {/* Comparison */}
              <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Corporate ISO */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-100 rounded-2xl p-8 border border-gray-200"
                >
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center">
                      <User className="w-8 h-8 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Corporate ISOs</h3>
                      <p className="text-gray-500 text-sm">The typical experience</p>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {corporateFeatures.map((feature, index) => (
                      <motion.li
                        key={feature.label}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-gray-600"
                      >
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4">
                          <X className="w-4 h-4 text-red-500" />
                        </div>
                        {feature.label}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* CashReady */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border border-green-200"
                >
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
                      <Phone className="w-8 h-8 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">CashReady ATM</h3>
                      <p className="text-green-600 text-sm">The partner experience</p>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {cashReadyFeatures.map((feature, index) => (
                      <motion.li
                        key={feature.label}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-gray-900"
                      >
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                          <Check className="w-4 h-4 text-green-600" />
                        </div>
                        {feature.label}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mt-12"
              >
                <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 border border-gray-200 shadow-sm">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Average response time: Under 15 minutes</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <ServiceTiers />

        {/* Testimonials Section */}
        <section id="testimonials" className="section-padding bg-slate-900 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(52, 211, 153, 0.3) 0%, transparent 40%),
                             radial-gradient(circle at 80% 50%, rgba(16, 185, 129, 0.2) 0%, transparent 40%)`,
          }} />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wide">
                Partner Stories
              </span>
              <h2 className="heading-md text-white mt-3 mb-4">
                Trusted by ATM Operators
              </h2>
              <p className="text-slate-400">
                Join hundreds of operators who have switched to wholesale processing.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-emerald-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  "Switching to CashReady was the best decision for my ATM business. The direct support alone is worth it—I can actually reach someone who knows my account."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                    MK
                  </div>
                  <div>
                    <p className="text-white font-semibold">Michael K.</p>
                    <p className="text-slate-500 text-sm">ATM Operator, Georgia</p>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-emerald-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  "The migration was seamless. My terminals were reprogrammed same-day and I started seeing better rates immediately. No downtime, no headaches."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold">
                    SR
                  </div>
                  <div>
                    <p className="text-white font-semibold">Sarah R.</p>
                    <p className="text-slate-500 text-sm">Multi-location Operator, Florida</p>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-emerald-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  "After 3 years with a corporate ISO, I didn't know support could be this good. They actually answer the phone and solve problems in minutes, not days."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    JT
                  </div>
                  <div>
                    <p className="text-white font-semibold">James T.</p>
                    <p className="text-slate-500 text-sm">Independent Operator, Texas</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <LeadCapture />
      </main>
      <Footer />
    </>
  );
}
