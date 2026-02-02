import { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import { Check, Phone, Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Onboarding Process | CashReady ATM Processing | PAI Partner",
  description: "Simple 3-step onboarding process to get you up and running with wholesale PAI processing rates within two weeks.",
};

const steps = [
  {
    number: "1",
    title: "Choose",
    subtitle: "Your Partnership Level",
    items: [
      "Processing migration",
      "Equipment purchase",
      "Full-service (GA/FL)",
    ],
  },
  {
    number: "2",
    title: "Migrate",
    subtitle: "Technical Setup",
    items: [
      "Terminal reconfiguration",
      "PAI backend setup",
      "Same-day transition",
    ],
  },
  {
    number: "3",
    title: "Go Live",
    subtitle: "Start Processing",
    items: [
      "Wholesale rates active",
      "Direct support access",
      "Real-time monitoring",
    ],
  },
];

export default function OnboardingProcessPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="bg-slate-900 py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Onboarding Process
            </h1>
            <p className="text-lg text-slate-400">
              Three steps to wholesale processing. Most partners live within two weeks.
            </p>
          </div>
        </section>

        {/* Horizontal Steps */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-center gap-4 lg:gap-8">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center gap-4 lg:gap-8 w-full lg:w-auto">
                  {/* Step Card */}
                  <div className="flex-1 lg:flex-none bg-gray-50 rounded-xl p-6 border border-gray-100 min-w-0 lg:w-64">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500 text-white font-bold text-sm">
                        {step.number}
                      </span>
                      <div>
                        <h2 className="text-lg font-bold text-gray-900">{step.title}</h2>
                        <p className="text-xs text-gray-500">{step.subtitle}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-center text-sm text-gray-600">
                          <Check className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Arrow (not on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex items-center justify-center">
                      <ArrowRight className="w-8 h-8 text-emerald-400" />
                    </div>
                  )}
                  
                  {/* Mobile Arrow (down) */}
                  {index < steps.length - 1 && (
                    <div className="flex lg:hidden items-center justify-center w-full">
                      <div className="transform rotate-90">
                        <ArrowRight className="w-6 h-6 text-emerald-400" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">Typical Timeline</h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              {[
                { day: "Day 1", label: "Contact" },
                { day: "Day 3", label: "Agreement" },
                { day: "Day 7", label: "Migration" },
                { day: "Day 10", label: "Testing" },
                { day: "Day 14", label: "Live" },
              ].map((item, index, arr) => (
                <div key={item.day} className="flex items-center gap-3 sm:gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-1">
                      <span className="text-xs font-bold text-emerald-700">{item.day}</span>
                    </div>
                    <span className="text-xs text-gray-600">{item.label}</span>
                  </div>
                  {index < arr.length - 1 && (
                    <div className="hidden sm:block w-8 lg:w-12 h-0.5 bg-emerald-200" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-slate-900">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
