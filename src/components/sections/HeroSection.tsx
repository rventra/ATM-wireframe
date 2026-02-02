"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, CreditCard, DollarSign, MapPin } from "lucide-react";

const features = [
  { icon: Clock, label: "24/7 Support" },
  { icon: CreditCard, label: "Lower Payment Processing Fees" },
  { icon: DollarSign, label: "Wholesale Prices on ATMs" },
  { icon: MapPin, label: "ATM Servicing in Select Locations" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-slate-900">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-20 sm:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">
              PAI Authorized ISO Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            Wholesale ATM processing for independent operators
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Access institutional processing rates through our PAI partnership. 
            Lower fees per transaction, direct support, no call centers.
          </motion.p>

          {/* Feature Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.08 }}
                className="flex flex-col items-center gap-2 p-3 rounded-lg bg-white/5 border border-white/10 text-center"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <feature.icon className="w-4 h-4 text-emerald-400" />
                </div>
                <span className="text-xs text-slate-300 leading-tight">{feature.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-slate-900 bg-emerald-400 rounded-lg transition-all duration-200 hover:bg-emerald-300"
            >
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              href="#partnership-levels"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white border-2 border-white/30 rounded-lg transition-all duration-200 hover:bg-white/10"
            >
              Partnership Levels
            </Link>
            <Link
              href="/equipment"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-white border-2 border-white/30 rounded-lg transition-all duration-200 hover:bg-white/10"
            >
              View Equipment
            </Link>
            <Link
              href="#testimonials"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-emerald-400 border-2 border-emerald-500/40 rounded-lg transition-all duration-200 hover:bg-emerald-500/10"
            >
              Testimonials
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-12 pt-8 border-t border-slate-800"
          >
            <p className="text-sm text-slate-500 mb-4">Trusted by ATM operators across the US</p>
            <div className="flex items-center justify-center gap-8 text-slate-400">
              <div>
                <div className="text-2xl font-bold text-white">Wholesale</div>
                <div className="text-sm">Processing rates</div>
              </div>
              <div className="w-px h-10 bg-slate-800" />
              <div>
                <div className="text-2xl font-bold text-white">Direct</div>
                <div className="text-sm">Partner support</div>
              </div>
              <div className="w-px h-10 bg-slate-800 hidden sm:block" />
              <div className="hidden sm:block">
                <div className="text-2xl font-bold text-white">PAI</div>
                <div className="text-sm">Authorized ISO</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
