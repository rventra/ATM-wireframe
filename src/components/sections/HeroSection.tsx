"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, Shield, Check, Clock, CreditCard, DollarSign, MapPin } from "lucide-react";

const features = [
  { icon: Clock, label: "24/7 Support" },
  { icon: CreditCard, label: "Lower Payment Processing Fees" },
  { icon: DollarSign, label: "Wholesale Prices on ATMs" },
  { icon: MapPin, label: "ATM Servicing in Select Locations" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0f172a]">
      {/* Plus Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M24 20v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zm0-24V0h-4v4h-4v4h4v4h4V8h4V4h-4zM8 20v-4H4v4H0v4h4v4h4v-4h4v-4H8zM8 4V0H4v4H0v4h4v4h4V8h4V4H8z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* Emerald radial glow behind right column */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 text-balance font-display">
              Get Higher{" "}
              <span className="text-emerald-400">ATM Fees</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
              Get access to our wholesale rates and increase your surcharge retention with dedicated, direct support at no additional cost.
            </p>

            {/* Feature Grid - 2x2 */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-sm text-slate-300 leading-tight">{feature.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
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

          {/* Right Column - Full ATM Fascia */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative hidden lg:block"
          >
            {/* ATM Fascia Container */}
            <div className="relative max-w-md mx-auto">
              {/* Main ATM Body - Metallic Bezel */}
              <div
                className="relative rounded-3xl p-6"
                style={{
                  background: 'linear-gradient(145deg, #3d3d3d 0%, #2a2a2a 30%, #1a1a1a 70%, #0f0f0f 100%)',
                  boxShadow: `
                    inset 0 1px 1px rgba(255,255,255,0.15),
                    inset 0 -1px 1px rgba(0,0,0,0.5),
                    0 40px 80px -20px rgba(0,0,0,0.8),
                    0 0 0 1px rgba(255,255,255,0.08)
                  `,
                }}
              >
                {/* Top Brand Bar */}
                <div className="flex justify-between items-center mb-4 px-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                    <span className="text-xs text-emerald-400 font-medium tracking-wider uppercase">System Online</span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium tracking-wider">CashReady ATM</span>
                </div>

                {/* ATM Screen - Dark Bezel Inner */}
                <div
                  className="rounded-2xl p-1 mb-5"
                  style={{
                    background: 'linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 100%)',
                    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.05)',
                  }}
                >
                  {/* Screen Display */}
                  <div
                    className="rounded-xl p-6 relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                    }}
                  >
                    {/* Screen Header */}
                    <div className="text-center mb-6">
                      <p className="text-xs text-slate-400 uppercase tracking-widest mb-1">Surcharge Retention</p>
                      <div className="flex items-center justify-center gap-2">
                        <motion.div
                          animate={{ opacity: [0.4, 1, 0.4] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
                        />
                        <span className="text-xs text-emerald-400 font-medium">Live Comparison</span>
                      </div>
                    </div>

                    {/* Before/After Bars */}
                    <div className="flex items-end justify-center gap-8 h-48">
                      {/* Industry Average Bar */}
                      <div className="flex flex-col items-center gap-2">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "25%" }}
                          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                          className="w-16 bg-gradient-to-t from-slate-600 to-slate-500 rounded-t-lg relative"
                          style={{ height: '60px' }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
                        </motion.div>
                        <div className="text-center">
                          <p className="text-[10px] text-slate-400 uppercase tracking-wider">Industry Average</p>
                          <p className="text-xs text-slate-500">Limited</p>
                        </div>
                      </div>

                      {/* Cash Ready Bar */}
                      <div className="flex flex-col items-center gap-2">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "100%" }}
                          transition={{ delay: 0.8, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="w-20 bg-gradient-to-t from-emerald-600 via-emerald-500 to-emerald-400 rounded-t-lg relative overflow-hidden"
                          style={{
                            height: '180px',
                            boxShadow: '0 -4px 20px rgba(16, 185, 129, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
                          }}
                        >
                          {/* Animated shine */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
                          />

                          {/* Label inside bar */}
                          <div className="absolute top-4 left-0 right-0 text-center px-2">
                            <p className="text-[9px] text-emerald-100 uppercase tracking-wider mb-0.5">Your Retention</p>
                            <p className="text-sm font-bold text-white">Maximized</p>
                          </div>
                        </motion.div>
                        <div className="text-center">
                          <p className="text-[10px] text-emerald-400 uppercase tracking-wider">Cash Ready Wholesale</p>
                          <p className="text-xs text-emerald-300/70">3x More</p>
                        </div>
                      </div>
                    </div>

                    {/* Screen Footer */}
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <div className="flex justify-between items-center text-[10px] text-slate-500">
                        <span>Processing Rate: Wholesale</span>
                        <span className="text-emerald-400">Active</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3x4 Numeric Keypad */}
                <div className="grid grid-cols-3 gap-2 mb-5 px-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, '', 0, ''].map((num, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-lg flex items-center justify-center text-sm font-bold text-slate-400 select-none"
                      style={{
                        background: num !== '' ? 'linear-gradient(145deg, #2a2a2a 0%, #1f1f1f 100%)' : 'transparent',
                        boxShadow: num !== '' ? 'inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 4px rgba(0,0,0,0.3)' : 'none',
                      }}
                    >
                      {num}
                    </div>
                  ))}
                </div>

                {/* Function Keys Row */}
                <div className="grid grid-cols-4 gap-2 mb-5 px-2">
                  {['Cancel', 'Clear', 'Enter', ''].map((label, i) => (
                    <div
                      key={i}
                      className={`h-10 rounded-lg flex items-center justify-center text-[10px] font-medium uppercase tracking-wider ${
                        label === 'Enter' ? 'text-emerald-400' : label ? 'text-amber-400' : ''
                      }`}
                      style={{
                        background: label ? 'linear-gradient(145deg, #2a2a2a 0%, #1f1f1f 100%)' : 'transparent',
                        boxShadow: label ? 'inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 4px rgba(0,0,0,0.3)' : 'none',
                      }}
                    >
                      {label}
                    </div>
                  ))}
                </div>

                {/* Glowing Cash Exit Slot */}
                <div className="px-2">
                  <div
                    className="h-12 rounded-lg relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
                      boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.8), 0 1px 0 rgba(255,255,255,0.05)',
                    }}
                  >
                    {/* Green glow effect */}
                    <motion.div
                      className="absolute inset-x-4 top-1/2 -translate-y-1/2 h-2 rounded-full"
                      animate={{
                        boxShadow: [
                          '0 0 10px rgba(16, 185, 129, 0.3), inset 0 1px 2px rgba(16, 185, 129, 0.2)',
                          '0 0 20px rgba(16, 185, 129, 0.6), inset 0 1px 2px rgba(16, 185, 129, 0.4)',
                          '0 0 10px rgba(16, 185, 129, 0.3), inset 0 1px 2px rgba(16, 185, 129, 0.2)',
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, #10b981 50%, transparent 100%)',
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[10px] text-slate-500 uppercase tracking-widest">Cash Dispenser</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Wholesale Pricing Locked */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute -top-2 -right-4 z-10"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.1) 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
                  }}
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
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

              {/* Decorative Corner Accents */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.5 }}
                className="absolute -top-4 right-1/4 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl"
              />
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
            className="text-white/20"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
