import { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import { ArrowRight, Settings, Headphones, MapPin, Check, ShoppingCart } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works | CashReady ATM Processing | PAI Partner",
  description: "Learn how CashReady ATM helps you access wholesale PAI processing rates. Simple 3-step process: Choose your service, migrate processing, start earning more.",
};

const steps = [
  {
    number: "01",
    title: "Choose Your Service Level",
    description: "Pick Process Migration only, or Full Service (Cash Deliveries + Processing) if you're in GA/FL. Or just buy an ATM at wholesale rates.",
    icon: ShoppingCart,
    details: [
      "Processing-only migration (nationwide)",
      "Full-service management (GA/FL only)",
      "Equipment purchase at wholesale",
      "Bundle options available",
    ],
  },
  {
    number: "02",
    title: "Processing Migration",
    description: "Our technical team handles the transition from your current processor to our wholesale PAI backend. Minimal downtime, maximum care.",
    icon: Settings,
    details: [
      "Terminal reconfiguration or replacement",
      "Backend processing switch",
      "Same-day transition for most equipment",
      "Testing and verification",
    ],
  },
  {
    number: "03",
    title: "Start Earning More",
    description: "Keep more of every surcharge—usually $0.20 to $0.30 more per transaction. Daily support included.",
    icon: Headphones,
    details: [
      "Immediate rate improvement",
      "Direct phone support",
      "Real-time transaction monitoring",
      "Monthly performance reports",
    ],
  },
];

const serviceAreas = [
  "Atlanta Metro",
  "Savannah",
  "Augusta",
  "Columbus",
  "Macon",
  "Miami",
  "Orlando",
  "Tampa",
  "Jacksonville",
  "Tallahassee",
];

export default function HowItWorksPage() {
  return (
    <>
      <Navigation />
      <main id="how-it-works">
        {/* Hero */}
        <section className="gradient-navy py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wide">
                The Process
              </span>
              <h1 className="heading-lg text-white mt-4 mb-6">
                Three Steps to Higher Fees
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Getting started with CashReady is straightforward. We handle the technical complexity
                so you can focus on growing your ATM business.
              </p>
              <a
                href="mailto:info@cashreadyatm.com"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-6xl font-bold text-green-100">
                        {step.number}
                      </span>
                      <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center">
                        <step.icon className="w-7 h-7 text-green-600" />
                      </div>
                    </div>
                    <h2 className="heading-md text-gray-900 mb-4">
                      {step.title}
                    </h2>
                    <p className="text-body mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start">
                          <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                      <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center">
                        <step.icon className="w-24 h-24 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="heading-md text-gray-900 mb-4">
                Typical Onboarding Timeline
              </h2>
              <p className="text-body">
                From first contact to live processing, most partners are up and running within two weeks.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

                {/* Timeline Items */}
                {[
                  { day: "Day 1", title: "Initial Contact", desc: "Call or email us to discuss your needs" },
                  { day: "Day 3", title: "Agreement Signing", desc: "Processing agreement and equipment order (if applicable)" },
                  { day: "Day 7", title: "Technical Setup", desc: "Terminal configuration and backend provisioning" },
                  { day: "Day 10", title: "Testing Phase", desc: "Transaction testing and verification" },
                  { day: "Day 14", title: "Go Live", desc: "Processing cutover and first transactions" },
                ].map((item) => (
                  <div key={item.day} className="relative flex items-start mb-8 last:mb-0">
                    <div className="absolute left-8 w-4 h-4 bg-green-600 rounded-full -translate-x-1.5 border-4 border-white" />
                    <div className="ml-20">
                      <span className="text-sm font-semibold text-green-600">{item.day}</span>
                      <h3 className="text-lg font-bold text-gray-900 mt-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                  <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
                    Service Coverage
                  </span>
                </div>
                <h2 className="heading-md text-gray-900 mb-6">
                  Full-Service Management Areas
                </h2>
                <p className="text-body mb-6">
                  Our comprehensive management service—including vault cash, maintenance, and
                  placement—is available in select Georgia and Florida markets.
                </p>
                <p className="text-body mb-8">
                  Processing-only and equipment services are available nationwide.
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {serviceAreas.map((area) => (
                    <div key={area} className="flex items-center">
                      <Check className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-gray-600">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-100 rounded-2xl p-8">
                <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                  <MapPin className="w-16 h-16 text-gray-400" />
                </div>
                <p className="text-center text-gray-500 mt-4">
                  Georgia and Florida service coverage map
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 text-center">
              <h2 className="heading-md text-gray-900 mb-4">
                Ready to increase your ATM surcharge retention?
              </h2>
              <p className="text-gray-600 mb-8">
                We don't do forms. Call or email us directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:info@cashreadyatm.com"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-green-600 rounded-lg transition-all duration-200 hover:bg-green-700 hover:shadow-lg"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+1-XXX-XXX-XXXX"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-gray-100 rounded-lg transition-all duration-200 hover:bg-gray-200"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
