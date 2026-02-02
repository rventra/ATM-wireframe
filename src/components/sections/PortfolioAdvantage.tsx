"use client";

import { motion } from "framer-motion";
import { TrendingUp, Shield, Clock, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Processing Volume", value: "Wholesale", icon: TrendingUp },
  { label: "Network Uptime", value: "Reliable", icon: Clock },
  { label: "Partner Network", value: "Growing", icon: Users },
  { label: "PAI Authorized", value: "ISO", icon: Shield },
];

export default function PortfolioAdvantage() {
  return (
    <section id="our-advantage" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
              Our Advantage
            </span>
            <h2 className="heading-md text-gray-900 mt-3 mb-6">
              Volume Arbitrage Through Scale
            </h2>
            <p className="text-body mb-6">
              As an Independent Sales Organization (ISO), we aggregate transaction volume from
              hundreds of ATM operators. This collective buying power unlocks wholesale PAI
              processing rates that individual operators cannot access on their own.
            </p>
            <p className="text-body mb-4">
              Our core arbitrage is simple: we secure institutional rates and pass the savings to
              you. While retail ISOs charge $0.50 per transaction, our partners keep significantly
              more of every surcharge.
            </p>

            {/* Onboarding Process Link */}
            <div className="mb-8">
              <Link
                href="/onboarding-process"
                className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors group"
              >
                Onboarding Process
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <stat.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
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
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-full bg-red-500 rounded-lg"
                  />
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
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "40%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="h-full bg-green-500 rounded-lg"
                  />
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
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
