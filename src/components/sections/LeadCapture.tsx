"use client";

import { motion } from "framer-motion";
import LeadForm from "@/components/forms/LeadForm";
import { Phone, Calendar, Clock } from "lucide-react";

export default function LeadCapture() {
  return (
    <section id="lead-form" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
              Get Started
            </span>
            <h2 className="heading-md text-gray-900 mt-3 mb-6">
              Ready to Optimize Your Revenue?
            </h2>
            <p className="text-body mb-8">
              Submit your information for a complimentary rate analysis. We&apos;ll review
              your current processing costs and show you exactly how much more you
              could earn with CashReady.
            </p>

            {/* Alternative Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Schedule a Call</p>
                  <a
                    href="https://calendly.com/cashreadyatm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-green-600 hover:underline"
                  >
                    Book 15-minute surcharge analysis
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Prefer Phone?</p>
                  <a
                    href="tel:+1-XXX-XXX-XXXX"
                    className="text-sm text-green-600 hover:underline"
                  >
                    Call (XXX) XXX-XXXX
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white rounded-xl border border-gray-200">
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-gray-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Response Time</p>
                  <p className="text-sm text-gray-500">
                    We respond to all inquiries within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
              <LeadForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
