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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 sm:py-12 lg:py-16">
      {/* Background ambient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      {/* ATM Machine Container */}
      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6">

        {/* Main ATM Body - Chunky 3D Toy Style */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative"
          style={{ perspective: "1000px" }}
        >
          {/* Outer Bezel - Chunky Metallic */}
          <div
            className="relative rounded-[2.5rem] p-6 sm:p-8"
            style={{
              background: 'linear-gradient(145deg, #e8e8e8 0%, #c0c0c0 25%, #a0a0a0 50%, #909090 75%, #808080 100%)',
              boxShadow: `
                0 25px 50px -12px rgba(0,0,0,0.5),
                0 0 0 8px #707070,
                inset 0 2px 4px rgba(255,255,255,0.5),
                inset 0 -2px 4px rgba(0,0,0,0.2)
              `,
            }}
          >
            {/* Inner Bezel Shadow */}
            <div
              className="absolute inset-4 rounded-[2rem] pointer-events-none"
              style={{
                boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.3), inset 0 -2px 4px rgba(255,255,255,0.3)',
              }}
            />

            {/* ATM Layout: Side Buttons + Screen + Side Buttons */}
            <div className="relative flex gap-4">

              {/* Left Side Buttons */}
              <div className="hidden sm:flex flex-col justify-center gap-3 py-8">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={`left-${i}`}
                    className="w-10 h-12 rounded-lg bg-gradient-to-b from-gray-400 to-gray-500 shadow-lg"
                    style={{
                      boxShadow: '0 4px 6px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.3)',
                    }}
                  />
                ))}
              </div>

              {/* Main Screen Area */}
              <div className="flex-1">
                {/* Screen Bezel - Dark recessed */}
                <div
                  className="rounded-3xl p-4 sm:p-6"
                  style={{
                    background: 'linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 50%, #0f0f0f 100%)',
                    boxShadow: 'inset 0 4px 8px rgba(0,0,0,0.8), 0 2px 4px rgba(255,255,255,0.1)',
                  }}
                >
                  {/* The Screen */}
                  <div
                    className="relative rounded-2xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)',
                      boxShadow: 'inset 0 4px 20px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.05)',
                    }}
                  >
                    {/* Scanline Animation */}
                    <motion.div
                      className="absolute inset-x-0 h-1 z-20 pointer-events-none"
                      style={{
                        background: 'linear-gradient(180deg, transparent 0%, rgba(167, 243, 208, 0.4) 50%, transparent 100%)',
                        boxShadow: '0 0 10px rgba(167, 243, 208, 0.5)',
                      }}
                      animate={{ top: ['-2%', '102%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Screen Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent" />

                    {/* Screen Content */}
                    <div className="relative px-6 py-8 sm:px-10 sm:py-12">

                      {/* Header Bar */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <motion.div
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]"
                          />
                          <span className="text-xs font-bold tracking-wider uppercase text-emerald-400">
                            System Online
                          </span>
                        </div>
                        <span className="text-xs text-slate-500 font-bold tracking-wider">CashReady ATM</span>
                      </div>

                      {/* Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex justify-center mb-6"
                      >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/40">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
                            PAI Authorized ISO Partner
                          </span>
                        </div>
                      </motion.div>

                      {/* Headline */}
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-center text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4 drop-shadow-lg"
                      >
                        Get Higher{" "}
                        <span className="text-emerald-400">ATM Fees</span>
                      </motion.h1>

                      {/* Subtext */}
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-center text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto mb-6"
                      >
                        Get access to our wholesale rates and increase your surcharge retention with dedicated, direct support at no additional cost.
                      </motion.p>

                      {/* Feature Grid */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-2 max-w-3xl mx-auto mb-6"
                      >
                        {features.map((feature, index) => (
                          <motion.div
                            key={feature.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + index * 0.08 }}
                            className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white/5 border border-white/10 text-center"
                          >
                            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                              <feature.icon className="w-4 h-4 text-emerald-400" />
                            </div>
                            <span className="text-[10px] sm:text-xs text-slate-300 leading-tight">{feature.label}</span>
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
                          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-slate-900 bg-emerald-400 rounded-lg transition-all duration-200 hover:bg-emerald-300 hover:shadow-lg hover:-translate-y-0.5 shadow-emerald-500/30"
                          style={{ boxShadow: '0 4px 14px rgba(52, 211, 153, 0.4)' }}
                        >
                          Contact Us
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                        <Link
                          href="/partnership"
                          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white border-2 border-white/40 rounded-lg transition-all duration-200 hover:bg-white/10"
                        >
                          Partnership Levels
                        </Link>
                        <Link
                          href="/equipment"
                          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white border-2 border-white/40 rounded-lg transition-all duration-200 hover:bg-white/10"
                        >
                          View Equipment
                        </Link>
                        <Link
                          href="#why-cashready"
                          className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-emerald-400 border-2 border-emerald-500/50 rounded-lg transition-all duration-200 hover:bg-emerald-500/20"
                        >
                          Why CashReady
                        </Link>
                      </motion.div>

                      {/* Footer */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-[10px] text-slate-500"
                      >
                        <span className="tracking-wider font-mono">TERMINAL ID: KEEP-MORE-88888</span>
                        <div className="flex items-center gap-2">
                          <span>SECURE</span>
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Bottom Section: Slots + Keypad */}
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {/* Receipt Slot - Left */}
                  <div
                    className="rounded-xl p-3 flex flex-col items-center justify-center gap-1"
                    style={{
                      background: 'linear-gradient(145deg, #3a3a3a 0%, #2a2a2a 100%)',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5), 0 1px 2px rgba(255,255,255,0.1)',
                    }}
                  >
                    <div
                      className="w-full h-3 rounded-full"
                      style={{
                        background: 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)',
                        boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.8)',
                      }}
                    />
                    <span className="text-[8px] text-slate-500 uppercase tracking-wider">Receipt</span>
                  </div>

                  {/* Number Pad - Center */}
                  <div
                    className="rounded-xl p-3"
                    style={{
                      background: 'linear-gradient(145deg, #3a3a3a 0%, #2a2a2a 100%)',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)',
                    }}
                  >
                    <div className="grid grid-cols-3 gap-1.5">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                        <div
                          key={num}
                          className="aspect-square rounded-md flex items-center justify-center text-[10px] font-bold text-slate-400"
                          style={{
                            background: 'linear-gradient(145deg, #4a4a4a 0%, #3a3a3a 100%)',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                          }}
                        >
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Slot with LED - Right */}
                  <div
                    className="rounded-xl p-3 flex flex-col items-center justify-center gap-1 relative"
                    style={{
                      background: 'linear-gradient(145deg, #3a3a3a 0%, #2a2a2a 100%)',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5), 0 1px 2px rgba(255,255,255,0.1)',
                    }}
                  >
                    {/* Green LED Glow */}
                    <div className="absolute -top-1 right-4 w-3 h-3">
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-full h-full rounded-full bg-emerald-400"
                        style={{ boxShadow: '0 0 12px 4px rgba(52, 211, 153, 0.6)' }}
                      />
                    </div>
                    {/* LED Glow Spill */}
                    <div
                      className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-30 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle, rgba(52, 211, 153, 0.4) 0%, transparent 70%)',
                      }}
                    />

                    <div
                      className="w-full h-4 rounded-full relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%)',
                        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.8)',
                      }}
                    >
                      {/* Glowing strip inside card slot */}
                      <motion.div
                        className="absolute inset-x-2 top-1/2 -translate-y-1/2 h-1 rounded-full bg-emerald-400"
                        animate={{
                          boxShadow: [
                            '0 0 4px rgba(52, 211, 153, 0.5)',
                            '0 0 8px rgba(52, 211, 153, 0.8)',
                            '0 0 4px rgba(52, 211, 153, 0.5)',
                          ]
                        }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      />
                    </div>
                    <span className="text-[8px] text-slate-500 uppercase tracking-wider">Insert Card</span>
                  </div>
                </div>

                {/* Bottom Branding Strip */}
                <div className="mt-3 flex justify-between items-center px-2">
                  <span className="text-[9px] text-slate-500 font-bold tracking-wider">CASHREADY</span>
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] text-slate-500 tracking-wider">SSL</span>
                    <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                  </div>
                </div>
              </div>

              {/* Right Side Buttons */}
              <div className="hidden sm:flex flex-col justify-center gap-3 py-8">
                {[5, 6, 7, 8].map((i) => (
                  <div
                    key={`right-${i}`}
                    className="w-10 h-12 rounded-lg bg-gradient-to-b from-gray-400 to-gray-500 shadow-lg"
                    style={{
                      boxShadow: '0 4px 6px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.3)',
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
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
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
