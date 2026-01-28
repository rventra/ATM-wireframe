"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, Wallet, TrendingUp, DollarSign } from "lucide-react";

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

          {/* Hero Visual - ATM Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main ATM Unit */}
              <div className="relative bg-gradient-to-b from-gray-700 to-gray-900 rounded-3xl p-6 shadow-2xl border border-gray-600 max-w-sm mx-auto">
                {/* ATM Header with Status */}
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs text-green-400 font-medium">ONLINE</span>
                  </div>
                  <div className="text-xs text-gray-400">CashReady ATM</div>
                </div>

                {/* ATM Screen - Shows Wholesale vs Retail */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-5 mb-4 border border-gray-700">
                  <div className="text-center mb-4">
                    <p className="text-gray-400 text-xs mb-1">Surcharge Amount</p>
                    <p className="text-4xl font-bold text-white">$3.00</p>
                  </div>

                  {/* Fee Comparison Visual */}
                  <div className="space-y-3">
                    {/* Retail Rate */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Retail Rate</span>
                      <span className="text-red-400 font-bold">$0.50</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 rounded-full w-full" />
                    </div>

                    {/* Wholesale Rate */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Wholesale</span>
                      <span className="text-green-400 font-bold">$0.20</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 rounded-full w-[40%]" />
                    </div>
                  </div>
                </div>

                {/* Keypad Area */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <div key={num} className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 font-semibold border border-gray-700">
                      {num}
                    </div>
                  ))}
                </div>

                {/* Card Slot */}
                <div className="h-3 bg-gray-800 rounded-full mb-4 border border-gray-600" />

                {/* Cash Dispenser */}
                <div className="bg-gray-800 rounded-lg p-3 border border-gray-700">
                  <div className="h-8 bg-gray-900 rounded flex items-center justify-center">
                    <div className="w-1/2 h-1 bg-gray-600 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating Card - You Keep More */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-8 bg-white rounded-xl shadow-2xl p-4 border-2 border-green-500"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Wallet className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">You Keep</p>
                    <p className="text-2xl font-bold text-green-600">+$0.30</p>
                    <p className="text-xs text-gray-400">per transaction</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card - Monthly Savings */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-8 bg-white rounded-xl shadow-2xl p-4 border border-gray-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Monthly Savings</p>
                    <p className="text-xl font-bold text-gray-900">+$1,200</p>
                  </div>
                </div>
              </motion.div>

              {/* Processing Rate Badge */}
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-12 bg-green-600 text-white rounded-lg px-3 py-2 shadow-lg"
              >
                <div className="flex items-center space-x-1">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-bold">0.20</span>
                </div>
                <span className="text-xs opacity-80">per tx</span>
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
