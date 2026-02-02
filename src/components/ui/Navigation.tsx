"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">CR</span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              CashReady<span className="text-green-600">ATM</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="/onboarding-process"
              className="inline-flex items-center px-4 py-2 text-sm font-semibold text-green-700 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors"
            >
              Onboarding Process
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+1-XXX-XXX-XXXX"
              className="flex items-center text-gray-600 hover:text-green-600 font-medium transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>Call Us</span>
            </a>
            <a
              href="mailto:info@cashreadyatm.com"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-green-600 rounded-lg transition-all duration-200 hover:bg-green-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <Link
              href="/onboarding-process"
              className="block px-3 py-3 text-base font-medium text-green-700 bg-green-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              Onboarding Process
            </Link>
            <div className="pt-4 space-y-3">
              <a
                href="tel:+1-XXX-XXX-XXXX"
                className="flex items-center justify-center px-3 py-3 text-base font-medium text-green-600 bg-green-50 rounded-md"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
              <a
                href="mailto:info@cashreadyatm.com"
                className="flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-green-600 rounded-lg transition-all duration-200 hover:bg-green-700"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
