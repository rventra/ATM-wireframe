"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown, Clock, CreditCard, DollarSign, MapPin } from "lucide-react";

const features = [
  { icon: Clock, label: "24/7 Support" },
  { icon: CreditCard, label: "Lower Payment Processing Fees" },
  { icon: DollarSign, label: "Wholesale Prices on ATMs" },
  { icon: MapPin, label: "ATM Servicing in Select Locations" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] py-8 sm:py-12 lg:py-16">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M30 26v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zm0-30V0h-4v4h-4v4h4v4h4V8h4V4h-4zM10 26v-4H6v4H0v4h6v4h4v-4h6v-4h-6zM10 4V0H6v4H0v4h6v4h4V8h6V4h-6z'/%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      {/* ATM Machine Container */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6">

        {/* Main ATM Body */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative rounded-3xl sm:rounded-[2rem] overflow-hidden"
          style={{
            background: 'linear-gradient(145deg, #2d2d2d 0%, #1a1a1a 30%, #0f0f0f 70%, #080808 100%)',
            boxShadow: `
              0 60px 120px -20px rgba(0,0,0,0.9),
              0 0 0 1px rgba(255,255,255,0.08),
              inset 0 1px 0 rgba(255,255,255,0.1)
            `,
          }}
        >
          {/* Top Header Bar */}
          <div className="flex items-center justify-between px-6 sm:px-8 py-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
              />
              <span className="text-xs font-medium tracking-wider uppercase text-emerald-400">
                System Online
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-xs text-slate-500 tracking-wider">CashReady ATM</span>
              <div className="hidden sm:flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
              </div>
            </div>
          </div>

          {/* THE SCREEN - Contains all hero content */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              {/* Screen glow effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

              {/* Screen Content Container */}
              <div className="relative px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">

                {/* Header Line */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="text-center mb-8"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-xs font-medium text-emerald-400 tracking-wider uppercase">
                      PAI Authorized ISO Partner
                    </span>
                  </div>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-center text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6"
                >
                  Get Higher{" "}
                  <span className="text-emerald-400">ATM Fees</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-center text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10"
                >
                  Get access to our wholesale rates and increase your surcharge retention with dedicated, direct support at no additional cost.
                </motion.p>

                {/* Feature Grid - 2x2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10"
                >
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.08, duration: 0.4 }}
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 border border-white/10 text-center"
                    >
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                        <feature.icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-300 leading-tight">{feature.label}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Link
                    href="/equipment"
                    className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-emerald-500 rounded-lg transition-all duration-200 hover:bg-emerald-400 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    View Equipment
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <div className="flex gap-3">
                    <Link
                      href="#how-it-works"
                      className="inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-white border-2 border-white/30 rounded-lg transition-all duration-200 hover:bg-white/10 hover:border-white/50"
                    >
                      How it Works
                    </Link>
                    <Link
                      href="#our-advantage"
                      className="inline-flex items-center justify-center px-6 py-4 text-sm font-semibold text-white border-2 border-white/30 rounded-lg transition-all duration-200 hover:bg-white/10 hover:border-white/50"
                    >
                      Our Advantage
                    </Link>
                  </div>
                </motion.div>

                {/* Screen Footer - like ATM soft keys area */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="mt-10 pt-6 border-t border-white/10 flex justify-between items-center text-xs text-slate-500"
                >
                  <span className="tracking-wider">TERMINAL ID: CR-2025-PAI</span>
                  <div className="flex items-center gap-2">
                    <span>SECURE CONNECTION</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  </div>
                </motion.div>
              </div>

              {/* Screen corner accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-emerald-500/30 rounded-tl-lg" />
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-emerald-500/30 rounded-tr-lg" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-emerald-500/30 rounded-bl-lg" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-emerald-500/30 rounded-br-lg" />
            </div>
          </div>

          {/* Keypad Area */}
          <div className="px-6 sm:px-8 pb-6 sm:pb-8">
            <div className="max-w-sm mx-auto">
              {/* Decorative keypad row */}
              <div className="grid grid-cols-3 gap-2 mb-3">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <motion.div
                    key={num}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="aspect-square rounded-lg flex items-center justify-center text-sm font-semibold text-slate-400 cursor-pointer transition-colors hover:text-white"
                    style={{
                      background: 'linear-gradient(145deg, #2a2a2a 0%, #1f1f1f 100%)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 4px rgba(0,0,0,0.3)',
                    }}
                  >
                    {num}
                  </motion.div>
                ))}
              </div>

              {/* Bottom row with 0 and function keys */}
              <div className="grid grid-cols-4 gap-2">
                <div
                  className="aspect-square rounded-lg flex items-center justify-center text-sm font-semibold text-slate-400"
                  style={{
                    background: 'linear-gradient(145deg, #2a2a2a 0%, #1f1f1f 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  .
                </div>
                <div
                  className="aspect-square rounded-lg flex items-center justify-center text-sm font-semibold text-slate-400"
                  style={{
                    background: 'linear-gradient(145deg, #2a2a2a 0%, #1f1f1f 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  0
                </div>
                <div
                  className="aspect-square rounded-lg flex items-center justify-center text-[10px] font-medium text-amber-400 uppercase tracking-wider"
                  style={{
                    background: 'linear-gradient(145deg, #2a2a2a 0%, #1f1f1f 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  Clear
                </div>
                <div
                  className="aspect-square rounded-lg flex items-center justify-center text-[10px] font-medium text-emerald-400 uppercase tracking-wider"
                  style={{
                    background: 'linear-gradient(145deg, #2a2a2a 0%, #1f1f1f 100%)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05), 0 2px 4px rgba(0,0,0,0.3)',
                  }}
                >
                  Enter
                </div>
              </div>

              {/* Card Slot */}
              <div className="mt-4 h-10 rounded-lg relative overflow-hidden" style={{
                background: 'linear-gradient(180deg, #0a0a0a 0%, #151515 50%, #0a0a0a 100%)',
                boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.8)',
              }}>
                <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 h-1.5 rounded-full bg-slate-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] text-slate-600 uppercase tracking-widest">Insert Card</span>
                </div>
              </div>

              {/* Receipt Slot */}
              <div className="mt-3 h-6 rounded-lg relative overflow-hidden" style={{
                background: 'linear-gradient(180deg, #0a0a0a 0%, #111 100%)',
                boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.8)',
              }}>
                <div className="absolute inset-x-12 top-1/2 -translate-y-1/2 h-0.5 rounded-full bg-slate-800" />
              </div>

              {/* Cash Dispenser */}
              <div className="mt-3 h-14 rounded-lg relative overflow-hidden" style={{
                background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
                boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.8)',
              }}>
                {/* Green glow line */}
                <motion.div
                  className="absolute inset-x-12 top-1/2 -translate-y-1/2 h-2 rounded-full"
                  animate={{
                    boxShadow: [
                      '0 0 8px rgba(16, 185, 129, 0.2), inset 0 1px 2px rgba(16, 185, 129, 0.1)',
                      '0 0 16px rgba(16, 185, 129, 0.5), inset 0 1px 2px rgba(16, 185, 129, 0.3)',
                      '0 0 8px rgba(16, 185, 129, 0.2), inset 0 1px 2px rgba(16, 185, 129, 0.1)',
                    ]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, #10b981 50%, transparent 100%)',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] text-slate-600 uppercase tracking-widest">Cash Dispenser</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom ATM branding strip */}
          <div className="px-6 sm:px-8 py-4 border-t border-white/5 flex justify-between items-center">
            <span className="text-[10px] text-slate-600 tracking-wider">CASHREADY ATM SYSTEMS</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-600 tracking-wider">SSL ENCRYPTED</span>
              <div className="w-3 h-3 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
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
