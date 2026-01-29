"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, Shield, Check } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0f172a]">
      {/* Subtle Plus Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.08]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 18v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2zm0-20V0h-2v2h-2v2h2v2h2V4h2V2h-2zM6 18v-2H4v2H0v2h4v2h2v-2h4v-2H6zM6 2V0H4v2H0v2h4v2h2V4h4V2H6z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0f172a] to-[#1e3a5f] opacity-80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Copy */}
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
              className="inline-flex items-center px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full text-emerald-400 text-sm font-medium mb-6 border border-slate-700"
            >
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse" />
              PAI Authorized ISO Partner
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 text-balance font-display">
              Get Higher{" "}
              <span className="text-emerald-400">ATM Fees</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
              Get access to our wholesale rates and increase your surcharge retention with dedicated, direct support at no additional cost.
            </p>

            {/* CTAs - Three button layout */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/equipment"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-emerald-500 rounded-lg transition-all duration-200 hover:bg-emerald-400 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
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

          {/* Right Column - ATM Monitor Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            {/* ATM Machine Container */}
            <div className="relative max-w-md mx-auto">
              {/* ATM Bezel/Frame - Metallic look */}
              <div className="relative rounded-3xl p-4 sm:p-6" style={{
                background: 'linear-gradient(145deg, #374151 0%, #1f2937 50%, #111827 100%)',
                boxShadow: `
                  inset 0 2px 4px rgba(255,255,255,0.1),
                  inset 0 -2px 4px rgba(0,0,0,0.5),
                  0 25px 50px -12px rgba(0,0,0,0.8),
                  0 0 0 1px rgba(255,255,255,0.1)
                `,
              }}>
                {/* ATM Header */}
                <div className="flex justify-between items-center mb-4 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-xs text-emerald-400 font-medium tracking-wider uppercase">Online</span>
                  </div>
                  <div className="text-xs text-slate-400 font-medium tracking-wider">CashReady ATM</div>
                </div>

                {/* ATM Screen Container */}
                <div className="relative rounded-xl overflow-hidden" style={{
                  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                  boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.1)',
                }}>
                  {/* Screen Inner Border */}
                  <div className="p-5 sm:p-6">
                    {/* Processing Status */}
                    <div className="flex items-center justify-center gap-2 mb-6">
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-amber-400 rounded-full"
                      />
                      <span className="text-xs text-amber-400 font-medium tracking-wider uppercase">Processing Transaction...</span>
                    </div>

                    {/* Surcharge Split Visualization */}
                    <div className="flex items-center justify-center gap-6">
                      {/* Vertical Stacked Bar */}
                      <div className="relative w-24 sm:w-28 h-56 sm:h-64 bg-slate-800/80 rounded-2xl overflow-hidden" style={{
                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)',
                      }}>
                        {/* Grid lines for visual interest */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="h-full w-full" style={{
                            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19%, rgba(255,255,255,0.1) 20%)',
                          }} />
                        </div>

                        {/* Stacked Segments */}
                        <div className="absolute inset-0 flex flex-col">
                          {/* Your Retention - 95% (Green) - Animated from bottom */}
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: "95%" }}
                            transition={{
                              delay: 0.8,
                              duration: 1.2,
                              ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            className="relative w-full bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-t-lg"
                            style={{
                              boxShadow: '0 -2px 10px rgba(16, 185, 129, 0.4)',
                            }}
                          >
                            {/* Shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                            {/* Label inside bar */}
                            <div className="absolute top-4 left-0 right-0 text-center px-2">
                              <p className="text-[10px] text-emerald-100 font-medium uppercase tracking-wider mb-1">Your Retention</p>
                              <p className="text-sm sm:text-base font-bold text-white">Maximum</p>
                            </div>
                          </motion.div>

                          {/* Wholesale Cost - 5% (Dark/Red) */}
                          <motion.div
                            initial={{ height: "100%" }}
                            animate={{ height: "5%" }}
                            transition={{
                              delay: 0.8,
                              duration: 1.2,
                              ease: [0.25, 0.46, 0.45, 0.94]
                            }}
                            className="w-full bg-gradient-to-b from-slate-600 to-slate-700"
                          >
                            {/* Label inside small bar */}
                            <div className="absolute bottom-1 left-0 right-0 text-center px-1">
                              <p className="text-[8px] text-slate-400 uppercase tracking-wider">Cost</p>
                            </div>
                          </motion.div>
                        </div>

                        {/* Percentage indicators */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.8, duration: 0.5 }}
                          className="absolute right-2 top-2 text-[10px] font-bold text-emerald-300"
                        >
                          95%
                        </motion.div>
                      </div>

                      {/* Legend */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        className="flex flex-col gap-3"
                      >
                        {/* Your Retention Legend */}
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded bg-gradient-to-br from-emerald-400 to-emerald-600" />
                          <div>
                            <p className="text-xs font-medium text-white">Your Retention</p>
                            <p className="text-[10px] text-emerald-400">Majority Share</p>
                          </div>
                        </div>

                        {/* Wholesale Cost Legend */}
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded bg-slate-600" />
                          <div>
                            <p className="text-xs font-medium text-slate-300">Wholesale Cost</p>
                            <p className="text-[10px] text-slate-500">Minimal</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Transaction Status Bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
                      className="mt-6 h-1 bg-slate-700 rounded-full overflow-hidden"
                    >
                      <motion.div
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
                        className="h-full w-1/2 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Keypad Area - Decorative */}
                <div className="mt-4 grid grid-cols-3 gap-2 px-2">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <div
                      key={num}
                      className="aspect-[2/1] rounded-md flex items-center justify-center text-xs font-semibold text-slate-500"
                      style={{
                        background: 'linear-gradient(145deg, #374151 0%, #1f2937 100%)',
                        boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05)',
                      }}
                    >
                      {num}
                    </div>
                  ))}
                </div>

                {/* Card Slot */}
                <div className="mt-4 px-2">
                  <div className="h-3 rounded-full bg-slate-800" style={{
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.05)',
                  }}>
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800" />
                  </div>
                </div>
              </div>

              {/* Floating Badge - Glassmorphism */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 2.2, duration: 0.5 }}
                className="absolute -top-4 -right-4 sm:-right-8"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl backdrop-blur-md border border-white/20"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-xs font-semibold text-white">Wholesale Pricing</span>
                    </div>
                    <span className="text-[10px] text-emerald-300/80">Locked In</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Corner Accent */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
                className="absolute -bottom-2 -left-2 w-16 h-16"
              >
                <div className="w-full h-full rounded-full bg-emerald-500/10 blur-xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/30"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
