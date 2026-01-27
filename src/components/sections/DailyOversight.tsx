"use client";

import { motion } from "framer-motion";
import { X, Check, Phone, User, Clock } from "lucide-react";

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

export default function DailyOversight() {
  return (
    <section className="section-padding bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-green-400 font-semibold text-sm uppercase tracking-wide"
          >
            The CashReady Difference
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-md text-white mt-3 mb-4"
          >
            Daily Oversight. Real Support.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400"
          >
            Corporate ISOs treat you like a number. We treat you like a partner.
            See the difference dedicated support makes.
          </motion.p>
        </div>

        {/* Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Corporate ISO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl p-8 border border-gray-700"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-red-900/50 rounded-xl flex items-center justify-center">
                <User className="w-8 h-8 text-red-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Corporate ISOs</h3>
                <p className="text-gray-400 text-sm">The typical experience</p>
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
                  className="flex items-center text-gray-400"
                >
                  <div className="w-8 h-8 bg-red-900/30 rounded-full flex items-center justify-center mr-4">
                    <X className="w-4 h-4 text-red-400" />
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
            className="bg-gradient-to-br from-green-900/30 to-gray-800 rounded-2xl p-8 border border-green-500/30"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center">
                <Phone className="w-8 h-8 text-green-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">CashReady ATM</h3>
                <p className="text-green-400 text-sm">The partner experience</p>
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
                  className="flex items-center text-white"
                >
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                    <Check className="w-4 h-4 text-green-400" />
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
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
            <Clock className="w-5 h-5 text-green-400" />
            <span className="text-white">Average response time: Under 15 minutes</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
