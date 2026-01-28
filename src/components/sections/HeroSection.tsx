"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-green-300 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              PAI Authorized ISO Partner
            </motion.div>

            {/* Headline - Direct blue-collar language */}
            <h1 className="heading-xl text-white mb-6 text-balance">
              Get Higher{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-300">
                ATM Fees
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
              Get Access to our wholesale rates and increase your surcharge retention with dedicated, direct support at no additional cost
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 mb-10 text-sm text-gray-400">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Keep $0.20-$0.30 more per transaction
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Daily oversight & support
              </div>
            </div>

            {/* CTAs - Three button layout */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/equipment"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-green-500 rounded-lg transition-all duration-200 hover:bg-green-400 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                View Equipment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-lg transition-all duration-200 hover:bg-white/10 hover:border-white/50"
              >
                How it Works
              </Link>
              <Link
                href="#our-advantage"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-lg transition-all duration-200 hover:bg-white/10 hover:border-white/50"
              >
                Our Advantage
              </Link>
            </div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* ATM Terminal Illustration */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700">
                <div className="aspect-[3/4] bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg overflow-hidden">
                  {/* Screen */}
                  <div className="h-1/2 bg-gradient-to-br from-green-600 to-green-700 p-6 flex flex-col justify-center items-center text-white">
                    <div className="text-4xl font-bold mb-2">$3.00</div>
                    <div className="text-sm opacity-80">Surcharge Amount</div>
                    <div className="mt-6 grid grid-cols-3 gap-2 w-full max-w-xs">
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <div key={num} className="aspect-square bg-white/20 rounded flex items-center justify-center text-lg font-semibold">
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Card Slot */}
                  <div className="h-1/6 flex items-center justify-center">
                    <div className="w-3/4 h-4 bg-gray-600 rounded-full shadow-inner" />
                  </div>
                  {/* Cash Dispenser */}
                  <div className="h-1/3 p-6">
                    <div className="w-full h-full bg-gray-600 rounded-lg flex items-center justify-center">
                      <div className="w-3/4 h-2 bg-gray-500 rounded-full" />
                    </div>
                  </div>
                </div>
                {/* Status Lights */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                </div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Avg. Monthly Uplift</p>
                    <p className="text-xl font-bold text-gray-900">+$1,200</p>
                  </div>
                </div>
              </motion.div>

              {/* Processing Badge */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 border border-gray-100"
              >
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Processing</p>
                    <p className="text-sm font-bold text-green-600">$0.20/tx</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/50"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
