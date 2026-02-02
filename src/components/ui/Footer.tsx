import Link from "next/link";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Processing Migration", href: "/onboarding-process" },
    { label: "Equipment", href: "/equipment" },
    { label: "Full-Service Management", href: "/onboarding-process" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Onboarding Process", href: "/onboarding-process" },
    { label: "Equipment", href: "/equipment" },
    { label: "FAQ", href: "/faq" },
  ],
  support: [
    { label: "Contact Us", href: "mailto:info@cashreadyatm.com" },
    { label: "Technical Support", href: "/support" },
    { label: "Maintenance Request", href: "/support" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "ISO Agreement", href: "/agreement" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Trust Bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-green-500 mr-2" />
              <span>PAI Authorized Partner</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-700" />
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-green-500 mr-2" />
              <span>Bank-Level Encryption</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-700" />
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-green-500 mr-2" />
              <span>PCI DSS Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CR</span>
              </div>
              <span className="text-xl font-bold text-white">
                CashReady<span className="text-green-500">ATM</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-4 max-w-xs">
              Wholesale ATM processing for independent operators. Access institutional rates through our PAI partnership.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+1-XXX-XXX-XXXX" className="flex items-center hover:text-green-500 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +1 (XXX) XXX-XXXX
              </a>
              <a href="mailto:info@cashreadyatm.com" className="flex items-center hover:text-green-500 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                info@cashreadyatm.com
              </a>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                <span>Serving GA & FL</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-green-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-green-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-green-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-green-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} CashReady ATM. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              A PAI Authorized Independent Sales Organization
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
