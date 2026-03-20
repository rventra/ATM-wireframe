"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

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
              We don&apos;t do forms. Call or email us directly.
            </p>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-6 max-w-lg mx-auto">
              <motion.a
                href="mailto:sales and service at cashreadyatm.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                  <Mail className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <p className="font-semibold text-gray-900 mb-1">Email</p>
                <p className="text-sm text-green-600">sales and service at cashreadyatm.com</p>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-900 mb-1">Mike O&apos;Grady</p>
                <p className="text-sm text-green-600">706-495-2255</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
