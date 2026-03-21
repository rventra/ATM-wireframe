import { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import { Check, Phone, Mail, ArrowRight, Clock, Users, Settings, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Onboarding Process | CashReady ATM Processing",
  description: "Simple 3-step onboarding process to get you up and running with wholesale processing rates within two weeks.",
};

const steps = [
  {
    number: "1",
    title: "Choose",
    subtitle: "Your Partnership Level",
    description: "Select the option that fits your business needs",
    items: [
      "Processing migration — keep your terminals, switch backend",
      "Equipment purchase — buy Genmega or Hyosung at wholesale",
      "Full-service management — vault cash, maintenance, placement (GA/FL)",
    ],
  },
  {
    number: "2",
    title: "Migrate",
    subtitle: "Technical Setup",
    description: "We handle the technical details",
    items: [
      "Terminal reconfiguration — no hardware changes needed",
      "Backend setup — our team programs everything",
      "Same-day transition — minimal downtime",
    ],
  },
  {
    number: "3",
    title: "Go Live",
    subtitle: "Start Processing",
    description: "You're ready to go",
    items: [
      "Wholesale rates active immediately",
      "Direct support access",
      "Real-time monitoring dashboard",
    ],
  },
];

const timeline = [
  { day: "Day 1", label: "Initial Contact", description: "We learn about your needs" },
  { day: "Day 2-3", label: "Agreement", description: "Sign paperwork" },
  { day: "Day 4-7", label: "Migration", description: "Technical setup" },
  { day: "Day 8-10", label: "Testing", description: "Verify everything works" },
  { day: "Day 14", label: "Live", description: "Go live with lower rates" },
];

export default function OnboardingProcessPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="gradient-navy py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="heading-lg text-white mb-6">
              Get Started in 3 Simple Steps
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Most partners go live within <span className="text-green-400 font-semibold">two weeks</span>. No downtime, no hassle.
            </p>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2">
              <Clock className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">Average time to live: 14 days</span>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="relative bg-gradient-to-b from-gray-50 to-white rounded-2xl p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow min-h-[340px]"
                >
                  {/* Step number */}
                  <div className="absolute -top-5 left-8">
                    <div className="w-12 h-12 rounded-full bg-green-600 text-white font-bold text-xl flex items-center justify-center shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Arrow connector */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-10">
                      <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md">
                        <ArrowRight className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                  )}

                  <div className="mt-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-base font-medium text-green-600 mb-4">{step.subtitle}</p>
                    <p className="text-gray-600 mb-6">{step.description}</p>

                    <ul className="space-y-3">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-start text-gray-600">
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span className="text-base">{item}</span>
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
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="heading-md text-gray-900 mb-2">Your Path to Lower Rates</h2>
              <p className="text-gray-600">From signing to savings in as little as two weeks</p>
            </div>

            <div className="relative">
              {/* Progress line */}
              <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gray-200">
                <div className="h-full bg-green-500 w-0" style={{ width: '100%' }} />
              </div>

              <div className="grid grid-cols-5 gap-4">
                {timeline.map((item, index) => (
                  <div key={item.day} className="text-center">
                    <div className="w-10 h-10 rounded-full bg-green-600 text-white font-bold text-sm flex items-center justify-center mx-auto mb-2 shadow-lg">
                      {index + 1}
                    </div>
                    <div className="text-sm font-bold text-gray-900 mb-0.5">{item.day}</div>
                    <div className="text-xs font-medium text-green-600 mb-0.5">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Promise statement */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 bg-white rounded-xl px-5 py-3 border border-gray-200 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-gray-900">Our Promise</p>
                  <p className="text-xs text-gray-500">We handle the technical side. You keep operating.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="heading-md text-gray-900 mb-2">What You Get</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Dedicated Support</h3>
                  <p className="text-sm text-gray-600">Direct access to our team. No call centers, no ticket systems.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Settings className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Full Technical Setup</h3>
                  <p className="text-sm text-gray-600">We program your terminals. No on-site technician needed.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Fast Transition</h3>
                  <p className="text-sm text-gray-600">Same-day processing switch. Keep your machines running.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Better Rates</h3>
                  <p className="text-sm text-gray-600">Wholesale backend rates. More money in your pocket.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="gradient-navy py-12">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to get started?</h2>
            <p className="text-gray-300 mb-6">
              Mike O'Grady will personally handle your onboarding.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-500 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </a>
              <a
                href="tel:+1-706-495-2255"
                className="inline-flex items-center justify-center px-6 py-3 text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors font-semibold"
              >
                <Phone className="w-5 h-5 mr-2" />
                706-495-2255
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
