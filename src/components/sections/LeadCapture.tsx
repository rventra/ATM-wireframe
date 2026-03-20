"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, ClipboardList } from "lucide-react";

export default function LeadCapture() {
  return (
    <section id="lead-form" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
              Contact Us
            </span>
            <h2 className="heading-md text-gray-900 mt-3 mb-6">
              Ready to increase your ATM surcharge retention?
            </h2>
            <p className="text-body mb-12">
              Get started with wholesale processing rates today.
            </p>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto">
              <Link href="/contact">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                    <FileText className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <p className="font-semibold text-gray-900 mb-1">Contact Us</p>
                  <p className="text-sm text-green-600">Fill out our form</p>
                </motion.div>
              </Link>

              <Link href="/onboarding-process">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all group cursor-pointer"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                    <ClipboardList className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                  </div>
                  <p className="font-semibold text-gray-900 mb-1">Onboarding Process</p>
                  <p className="text-sm text-green-600">How it works</p>
                </motion.div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
