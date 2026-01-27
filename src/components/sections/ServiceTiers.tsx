"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Server, ShoppingCart, MapPin, ArrowRight, Check } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Processing Migration",
    description: "Transition your existing ATM fleet to our wholesale backend. Immediate margin improvement with no equipment changes required.",
    features: [
      "Keep your current terminals",
      "Seamless backend transition",
      "Same-day processing switch",
      "Immediate rate improvement",
    ],
    cta: "Migrate My Processing",
    href: "#lead-form",
    popular: false,
  },
  {
    icon: ShoppingCart,
    title: "Equipment Acquisition",
    description: "Purchase new Genmega or Hyosung Halo II terminals at wholesale pricing, bundled with our premium processing rates.",
    features: [
      "Genmega & Hyosung terminals",
      "Wholesale equipment pricing",
      "Bundled processing rates",
      "Installation support",
    ],
    cta: "View Equipment",
    href: "/equipment",
    popular: true,
  },
  {
    icon: MapPin,
    title: "Full-Service Management",
    description: "Comprehensive ATM management including vault cash, maintenance, and placement. Available in Georgia & Florida.",
    features: [
      "Vault cash management",
      "24/7 maintenance & support",
      "Strategic placement optimization",
      "Commission-based earnings",
    ],
    cta: "Check Availability",
    href: "#lead-form",
    popular: false,
    badge: "GA / FL Only",
  },
];

export default function ServiceTiers() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-green-600 font-semibold text-sm uppercase tracking-wide"
          >
            Service Tiers
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-md text-gray-900 mt-3 mb-4"
          >
            Choose Your Partnership Level
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body"
          >
            From processing-only migration to complete turnkey management, we offer flexible
            solutions tailored to your business needs.
          </motion.p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                service.popular
                  ? "border-green-500 shadow-lg"
                  : "border-gray-100 hover:border-green-200"
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Service Badge */}
              {service.badge && (
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                service.popular ? "bg-green-100" : "bg-gray-100"
              }`}>
                <service.icon className={`w-7 h-7 ${
                  service.popular ? "text-green-600" : "text-gray-600"
                }`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start text-sm">
                    <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={service.href}
                className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  service.popular
                    ? "bg-green-600 text-white hover:bg-green-700 hover:shadow-lg"
                    : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                }`}
              >
                {service.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
