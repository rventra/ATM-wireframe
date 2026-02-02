import { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import { ArrowRight, Settings, Headphones, Check, ShoppingCart, Phone, Mail, Clock, Shield, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Onboarding Process | CashReady ATM Processing | PAI Partner",
  description: "Learn how CashReady ATM helps you access wholesale PAI processing rates. Simple 3-step onboarding process to get you up and running within two weeks.",
};

const steps = [
  {
    number: "01",
    title: "Choose Your Partnership Level",
    description: "Select the service tier that fits your business—Processing Migration, Equipment Purchase, or Full-Service Management (GA/FL).",
    icon: ShoppingCart,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    details: [
      "Processing-only migration (nationwide)",
      "Equipment purchase at wholesale rates",
      "Full-service management (GA/FL only)",
      "Custom bundle options available",
    ],
  },
  {
    number: "02",
    title: "Technical Migration",
    description: "Our engineering team handles the complete transition—from terminal reconfiguration to backend processing setup.",
    icon: Settings,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    details: [
      "Terminal reconfiguration or replacement",
      "PAI backend provisioning",
      "Same-day transition for most equipment",
      "Full testing and verification",
    ],
  },
  {
    number: "03",
    title: "Go Live & Grow",
    description: "Start processing with wholesale rates immediately. Get direct support and daily oversight from day one.",
    icon: TrendingUp,
    color: "from-emerald-500 to-emerald-600",
    bgColor: "bg-emerald-50",
    details: [
      "Immediate rate improvement",
      "Direct phone support access",
      "Real-time transaction monitoring",
      "Monthly performance insights",
    ],
  },
];

const timeline = [
  { day: "Day 1", title: "Initial Contact", desc: "Discovery call to understand your needs and current setup", icon: Phone },
  { day: "Day 3", title: "Agreement & Setup", desc: "Processing agreement and technical assessment", icon: Shield },
  { day: "Day 7", title: "Technical Migration", desc: "Terminal configuration and backend provisioning", icon: Settings },
  { day: "Day 10", title: "Testing & Verification", desc: "Transaction testing and go-live preparation", icon: Check },
  { day: "Day 14", title: "Live Processing", desc: "Processing cutover and first transactions", icon: Zap },
];

const benefits = [
  { icon: Clock, title: "Fast Setup", desc: "Most partners live within 2 weeks" },
  { icon: Shield, title: "Zero Downtime", desc: "Seamless transition process" },
  { icon: Phone, title: "Hands-On Support", desc: "Engineer-led migration" },
  { icon: TrendingUp, title: "Immediate Savings", desc: "Wholesale rates from day one" },
];

export default function OnboardingProcessPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(52, 211, 153, 0.3) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)`,
          }} />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-semibold text-sm uppercase tracking-wide mb-6">
                <Zap className="w-4 h-4" />
                Simple & Fast
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Three Steps to <span className="text-emerald-400">Better Processing</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Getting started with CashReady is straightforward. Our engineering team handles the technical complexity—you focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 text-slate-900 font-bold rounded-lg hover:bg-emerald-400 transition-colors"
                >
                  Start Your Onboarding
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="#timeline"
                  className="inline-flex items-center justify-center px-6 py-3 text-white border border-white/30 rounded-lg hover:bg-white/10 transition-colors font-semibold"
                >
                  View Timeline
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Bar */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="text-sm text-gray-500">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
                The Process
              </span>
              <h2 className="heading-md text-gray-900 mt-3 mb-4">
                How It Works
              </h2>
              <p className="text-body">
                From initial contact to live processing, we've streamlined every step to get you earning more as quickly as possible.
              </p>
            </div>

            <div className="space-y-16 lg:space-y-24">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className={`text-7xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                        {step.number}
                      </span>
                      <div className={`w-16 h-16 rounded-2xl ${step.bgColor} flex items-center justify-center`}>
                        <step.icon className={`w-8 h-8 bg-gradient-to-br ${step.color} bg-clip-text text-transparent`} style={{ color: index === 0 ? '#3b82f6' : index === 1 ? '#22c55e' : '#10b981' }} />
                      </div>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-center">
                          <div className={`w-6 h-6 rounded-full ${step.bgColor} flex items-center justify-center mr-3`}>
                            <Check className={`w-4 h-4`} style={{ color: index === 0 ? '#3b82f6' : index === 1 ? '#22c55e' : '#10b981' }} />
                          </div>
                          <span className="text-gray-600">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Visual */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className={`relative rounded-3xl p-8 ${step.bgColor} border border-gray-100`}>
                      {/* Abstract Graphic */}
                      <div className="aspect-square max-w-sm mx-auto relative">
                        {/* Background circles */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`w-64 h-64 rounded-full bg-gradient-to-br ${step.color} opacity-10 blur-3xl`} />
                        </div>
                        
                        {/* Main icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${step.color} shadow-xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform`}>
                            <step.icon className="w-16 h-16 text-white" />
                          </div>
                        </div>
                        
                        {/* Floating elements */}
                        <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white shadow-lg flex items-center justify-center animate-pulse">
                          <Check className="w-6 h-6 text-gray-400" />
                        </div>
                        <div className="absolute bottom-8 right-4 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                          <ArrowRight className="w-8 h-8 text-gray-400" />
                        </div>
                        <div className="absolute top-1/2 right-0 w-8 h-8 rounded-lg bg-white shadow-md flex items-center justify-center">
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${step.color}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
                Timeline
              </span>
              <h2 className="heading-md text-gray-900 mt-3 mb-4">
                Your Onboarding Journey
              </h2>
              <p className="text-body">
                A typical onboarding takes about two weeks from first contact to live processing.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 via-emerald-400 to-emerald-200" />

                {/* Timeline Items */}
                <div className="space-y-12">
                  {timeline.map((item, index) => (
                    <div key={item.day} className={`relative flex items-start lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      {/* Timeline Dot */}
                      <div className="absolute left-8 lg:left-1/2 w-4 h-4 bg-emerald-500 rounded-full -translate-x-1.5 border-4 border-white shadow-lg z-10" />
                      
                      {/* Content */}
                      <div className={`ml-20 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'}`}>
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''} mb-2`}>
                          <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                            {item.day}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 mt-1">{item.desc}</p>
                      </div>
                      
                      {/* Icon */}
                      <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 items-center justify-center ${index % 2 === 0 ? 'lg:translate-x-8' : 'lg:-translate-x-20'}`}>
                        <item.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 75% 25%, rgba(52, 211, 153, 0.4) 0%, transparent 40%)`,
          }} />
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              No forms to fill out. Just reach out directly and we'll get your onboarding scheduled.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@cashreadyatm.com"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-emerald-400 rounded-lg transition-all duration-200 hover:bg-emerald-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
              <a
                href="tel:+1-XXX-XXX-XXXX"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/30 rounded-lg transition-all duration-200 hover:bg-white/10"
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
