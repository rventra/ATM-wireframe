import { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import { ArrowRight, Check, Phone, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Onboarding Process | CashReady ATM Processing | PAI Partner",
  description: "Simple 3-step onboarding process to get you up and running with wholesale PAI processing rates within two weeks.",
};

const steps = [
  {
    number: "1",
    title: "Choose Your Partnership Level",
    description: "Select the service tier that fits your business needs.",
    items: [
      "Processing-only migration (nationwide)",
      "Equipment purchase at wholesale rates",
      "Full-service management (GA/FL only)",
    ],
  },
  {
    number: "2",
    title: "Technical Migration",
    description: "Our engineering team handles the complete transition.",
    items: [
      "Terminal reconfiguration or replacement",
      "PAI backend provisioning",
      "Same-day transition for most equipment",
      "Full testing and verification",
    ],
  },
  {
    number: "3",
    title: "Go Live & Grow",
    description: "Start processing with wholesale rates immediately.",
    items: [
      "Immediate rate improvement",
      "Direct phone support access",
      "Real-time transaction monitoring",
      "Monthly performance insights",
    ],
  },
];

const timeline = [
  { day: "Day 1", title: "Initial Contact", desc: "Discovery call to understand your needs" },
  { day: "Day 3", title: "Agreement & Setup", desc: "Processing agreement and technical assessment" },
  { day: "Day 7", title: "Technical Migration", desc: "Terminal configuration and backend provisioning" },
  { day: "Day 10", title: "Testing & Verification", desc: "Transaction testing and go-live preparation" },
  { day: "Day 14", title: "Live Processing", desc: "Processing cutover and first transactions" },
];

export default function OnboardingProcessPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-slate-900 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Onboarding Process
            </h1>
            <p className="text-lg text-slate-400">
              Three simple steps to wholesale processing. Most partners are live within two weeks.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 font-bold">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h2>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-start">
                          <Check className="w-5 h-5 text-emerald-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Typical Timeline</h2>
            <div className="space-y-6">
              {timeline.map((item) => (
                <div key={item.day} className="flex gap-4">
                  <div className="flex-shrink-0 w-20 text-right">
                    <span className="text-sm font-bold text-emerald-600">{item.day}</span>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 mt-1.5" />
                  </div>
                  <div className="flex-1 pb-6 border-b border-gray-200 last:border-0">
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-slate-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-slate-400 mb-8">
              No forms. Just reach out and we&apos;ll get your onboarding scheduled.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@cashreadyatm.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 text-slate-900 font-semibold rounded-lg hover:bg-emerald-400 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
              <a
                href="tel:+1-XXX-XXX-XXXX"
                className="inline-flex items-center justify-center px-6 py-3 text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
