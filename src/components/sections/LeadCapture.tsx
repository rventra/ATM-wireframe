"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Clock } from "lucide-react";

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
              We don&apos;t do forms. Call or email us directly—we&apos;ll get back to you fast.
            </p>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-3 gap-6">
              <motion.a
                href="mailto:info@cashreadyatm.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                  <Mail className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <p className="font-semibold text-gray-900 mb-1">Email Us</p>
                <p className="text-sm text-green-600">info@cashreadyatm.com</p>
              </motion.a>

              <motion.a
                href="tel:+1-XXX-XXX-XXXX"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200 hover:border-green-500 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                  <Phone className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <p className="font-semibold text-gray-900 mb-1">Call Us</p>
                <p className="text-sm text-green-600">(XXX) XXX-XXXX</p>
              </motion.a>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col items-center p-6 bg-white rounded-xl border border-gray-200"
              >
                <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-7 h-7 text-gray-600" />
                </div>
                <p className="font-semibold text-gray-900 mb-1">Response Time</p>
                <p className="text-sm text-gray-500">Under 15 minutes</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
