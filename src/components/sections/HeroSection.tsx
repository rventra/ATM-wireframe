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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 sm:py-12 lg:py-16"
      style={{
        background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 50%, #1e1b4b 100%)',
      }}
    >
      {/* Brick Wall Pattern Background */}
      <div className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(335deg, rgba(0,0,0,0.3) 23px, transparent 23px),
            linear-gradient(155deg, rgba(0,0,0,0.3) 23px, transparent 23px),
            linear-gradient(335deg, rgba(0,0,0,0.3) 23px, transparent 23px),
            linear-gradient(155deg, rgba(0,0,0,0.3) 23px, transparent 23px)
          `,
          backgroundSize: '58px 58px',
          backgroundColor: '#1e293b',
        }}
      />

      {/* Subtle wall lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 via-transparent to-slate-900/80" />

      {/* Ambient glow behind ATM */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[80px]" />

      {/* ATM Machine Container */}
      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6">

        {/* Main ATM Body - Chunky 3D Toy Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
        >
          {/* Outer Bezel - Chunky Metallic */}
          <div
            className="relative rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-6 lg:p-8"
            style={{
              background: 'linear-gradient(145deg, #d4d4d4 0%, #b0b0b0 25%, #909090 50%, #808080 75%, #707070 100%)',
              boxShadow: `
                0 30px 60px -15px rgba(0,0,0,0.6),
                0 0 0 6px #606060,
                inset 0 2px 4px rgba(255,255,255,0.4),
                inset 0 -2px 4px rgba(0,0,0,0.2)
              `,
            }}
          >
            {/* Inner Bezel Shadow */}
            <div
              className="absolute inset-3 sm:inset-4 rounded-[1.5rem] sm:rounded-[2rem] pointer-events-none"
              style={{
                boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.4), inset 0 -2px 4px rgba(255,255,255,0.2)',
              }}
            />

            {/* ATM Layout: Side Buttons + Screen + Side Buttons */}
            <div className="relative flex gap-3 sm:gap-4">

              {/* Left Side Buttons */}
              <div className="hidden sm:flex flex-col justify-center gap-2 sm:gap-3 py-6">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={`left-${i}`}
                    className="w-8 h-10 sm:w-10 sm:h-12 rounded-lg bg-gradient-to-b from-gray-300 to-gray-400"
                    style={{
                      boxShadow: '0 3px 5px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.4)',
                    }}
                  />
                ))}
              </div>

              {/* Main Screen Area */}
              <div className="flex-1 min-w-0">
                {/* Screen Bezel - Dark recessed */}
                <div
                  className="rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-6"
                  style={{
                    background: 'linear-gradient(145deg, #252525 0%, #1a1a1a 50%, #0f0f0f 100%)',
                    boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.8), 0 2px 4px rgba(255,255,255,0.1)',
                  }}
                >
                  {/* The Screen */}
                  <div
                    className="relative rounded-xl sm:rounded-2xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                      boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.05)',
                    }}
                  >
                    {/* Subtle Scanline - Less conspicuous */}
                    <motion.div
                      className="absolute inset-x-0 h-[1px] z-20 pointer-events-none"
                      style={{
                        background: 'linear-gradient(180deg, transparent 0%, rgba(167, 243, 208, 0.15) 50%, transparent 100%)',
                      }}
                      animate={{ top: ['-1%', '101%'] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Very subtle horizontal lines for CRT effect */}
                    <div
                      className="absolute inset-0 pointer-events-none z-10 opacity-[0.03]"
                      style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 3px)',
                      }}
                    />

                    {/* Screen Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />

                    {/* Screen Content */}
                    <div className="relative px-4 py-6 sm:px-8 sm:py-10 lg:px-12 lg:py-14">

                      {/* Header Bar */}
                      <div className="flex items-center justify-between mb-4 sm:mb-6">
                        <div className="flex items-center gap-2">
                          <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]"
                          />
                          <span className="text-[10px] sm:text-xs font-bold tracking-wider uppercase text-emerald-400">
                            System Online
                          </span>
                        </div>
                        <span className="text-[10px] sm:text-xs text-slate-500 font-bold tracking-wider">CashReady ATM</span>
                      </div>

                      {/* Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center mb-4 sm:mb-6"
                      >
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span className="text-[10px] sm:text-xs font-bold text-emerald-400 tracking-wider uppercase">
                            PAI Authorized ISO Partner
                          </span>
                        </div>
                      </motion.div>

                      {/* Headline */}
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-center text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-3 sm:mb-4 drop-shadow-lg"
                      >
                        Get Higher{" "}
                        <span className="text-emerald-400">ATM Fees</span>
                      </motion.h1>

                      {/* Subtext */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-center text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto mb-4 sm:mb-6"
                      >
                        Get access to our wholesale rates and increase your surcharge retention with dedicated, direct support at no additional cost.
                      </motion.p>

                      {/* Feature Grid */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-2 max-w-3xl mx-auto mb-4 sm:mb-6"
                      >
                        {features.map((feature, index) => (
                          <motion.div
                            key={feature.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + index * 0.08 }}
                            className="flex flex-col items-center gap-1.5 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 text-center"
                          >
                            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                              <feature.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                            </div>
                            <span className="text-[9px] sm:text-[10px] text-slate-300 leading-tight">{feature.label}</span>
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* CTAs */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-2 flex-wrap"
                      >
                        <Link
                          href="/contact"
                          className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-slate-900 bg-emerald-400 rounded-md sm:rounded-lg transition-all duration-200 hover:bg-emerald-300 hover:shadow-lg hover:-translate-y-0.5"
                          style={{ boxShadow: '0 4px 12px rgba(52, 211, 153, 0.35)' }}
                        >
                          Contact Us
                          <ArrowRight className="ml-1.5 sm:ml-2 w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </Link>
                        <Link
                          href="/partnership"
                          className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white border-2 border-white/30 rounded-md sm:rounded-lg transition-all duration-200 hover:bg-white/10"
                        >
                          Partnership Levels
                        </Link>
                        <Link
                          href="/equipment"
                          className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white border-2 border-white/30 rounded-md sm:rounded-lg transition-all duration-200 hover:bg-white/10"
                        >
                          View Equipment
                        </Link>
                        <Link
                          href="#why-cashready"
                          className="inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-emerald-400 border-2 border-emerald-500/40 rounded-md sm:rounded-lg transition-all duration-200 hover:bg-emerald-500/10"
                        >
                          Why CashReady
                        </Link>
                      </motion.div>

                      {/* Footer */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 flex justify-between items-center text-[9px] sm:text-[10px] text-slate-500"
                      >
                        <span className="tracking-wider font-mono">TERMINAL ID: KEEP-MORE-88888</span>
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <span>SECURE</span>
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.6)]" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Simplified - Receipt | Num Pad | Card Slot as Buttons */}
                <div className="mt-3 sm:mt-4 flex justify-center gap-2 sm:gap-3">
                  {/* Receipt Button */}
                  <Link
                    href="#receipt"
                    className="flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-gradient-to-b from-gray-600 to-gray-700 text-white text-[10px] sm:text-xs font-bold tracking-wider border-t border-gray-500 transition-all duration-200 hover:from-gray-500 hover:to-gray-600"
                    style={{ boxShadow: '0 3px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)' }}
                  >
                    <span className="w-4 h-1 bg-gray-800 rounded-full" />
                    Receipt
                  </Link>

                  {/* Number Pad - Compact */}
                  <div
                    className="hidden sm:grid grid-cols-3 gap-1 p-2 rounded-lg"
                    style={{
                      background: 'linear-gradient(145deg, #3a3a3a 0%, #2a2a2a 100%)',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.4)',
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <div
                        key={num}
                        className="w-6 h-6 rounded flex items-center justify-center text-[9px] font-bold text-slate-400"
                        style={{
                          background: 'linear-gradient(145deg, #4a4a4a 0%, #3a3a3a 100%)',
                          boxShadow: '0 1px 2px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                        }}
                      >
                        {num}
                      </div>
                    ))}
                  </div>

                  {/* Card Slot Button with LED */}
                  <Link
                    href="#card"
                    className="relative flex items-center justify-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg bg-gradient-to-b from-gray-600 to-gray-700 text-white text-[10px] sm:text-xs font-bold tracking-wider border-t border-gray-500 transition-all duration-200 hover:from-gray-500 hover:to-gray-600"
                    style={{ boxShadow: '0 3px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)' }}
                  >
                    {/* LED Indicator */}
                    <motion.div
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                      style={{ boxShadow: '0 0 6px 2px rgba(52, 211, 153, 0.5)' }}
                    />
                    <span className="w-4 h-1 bg-emerald-500/50 rounded-full" />
                    Insert Card
                  </Link>
                </div>

                {/* Bottom Branding Strip */}
                <div className="mt-2 sm:mt-3 flex justify-between items-center px-2">
                  <span className="text-[8px] sm:text-[9px] text-slate-600 font-bold tracking-wider">CASHREADY</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[8px] sm:text-[9px] text-slate-600 tracking-wider">SSL</span>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_4px_rgba(52,211,153,0.6)]" />
                  </div>
                </div>
              </div>

              {/* Right Side Buttons */}
              <div className="hidden sm:flex flex-col justify-center gap-2 sm:gap-3 py-6">
                {[5, 6, 7, 8].map((i) => (
                  <div
                    key={`right-${i}`}
                    className="w-8 h-10 sm:w-10 sm:h-12 rounded-lg bg-gradient-to-b from-gray-300 to-gray-400"
                    style={{
                      boxShadow: '0 3px 5px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.4)',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/20"
          >
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
