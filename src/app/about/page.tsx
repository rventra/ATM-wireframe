import { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import { Shield, Users, TrendingUp, Award, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | CashReady ATM | PAI Authorized ISO",
  description: "Learn about CashReady ATM, a PAI Authorized Independent Sales Organization providing wholesale processing rates to ATM operators.",
};

const values = [
  {
    icon: TrendingUp,
    title: "Transparency",
    description: "No hidden fees, no surprises. We believe in clear, honest communication about rates and terms.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "Your success is our success. We work alongside you to optimize your ATM portfolio performance.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "Bank-level security and compliance standards. Your transactions and data are always protected.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards in service, support, and technical execution.",
  },
];

const credentials = [
  "PAI Authorized Independent Sales Organization",
  "PCI DSS Compliant Processing",
  "Licensed in Georgia and Florida",
  "Bonded and insured",
  "Banking relationship with major financial institutions",
];

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="gradient-navy py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wide">
                About CashReady ATM
              </span>
              <h1 className="heading-lg text-white mt-4 mb-6">
                Your Partner in ATM Success
              </h1>
              <p className="text-lg text-gray-300">
                We are an Independent Sales Organization (ISO) that leverages collective buying
                power to secure wholesale processing rates for ATM operators. Our mission is simple:
                help you keep more of what you earn.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="heading-md text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    CashReady ATM was founded on a simple observation: small and mid-sized ATM
                    operators were paying retail processing rates while large portfolios enjoyed
                    wholesale pricing. The playing field wasn&apos;t level.
                  </p>
                  <p>
                    We set out to change that. By aggregating transaction volume across our network
                    of operators, we secured institutional PAI processing rates—and passed those
                    savings directly to our partners.
                  </p>
                  <p>
                    Today, we process millions of transactions monthly for operators across the
                    country. But we&apos;ve never lost sight of our founding principle: every
                    operator deserves fair rates and personalized support.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-green-600 mb-2">$50M+</div>
                  <div className="text-gray-600">Monthly Transactions</div>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
                  <div className="text-gray-600">Partner Operators</div>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
                  <div className="text-gray-600">Uptime SLA</div>
                </div>
                <div className="bg-orange-50 rounded-2xl p-6">
                  <div className="text-4xl font-bold text-orange-600 mb-2">15min</div>
                  <div className="text-gray-600">Avg. Support Response</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
                Our Values
              </span>
              <h2 className="heading-md text-gray-900 mt-3 mb-4">
                What Drives Us
              </h2>
              <p className="text-body">
                These core principles guide every decision we make and every interaction we have
                with our partners.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAI Partnership */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
                  Our Partner
                </span>
                <h2 className="heading-md text-gray-900 mt-3 mb-6">
                  PAI Authorized ISO
                </h2>
                <p className="text-body mb-6">
                  CashReady ATM is an authorized Independent Sales Organization for Payment
                  Alliance International (PAI), one of the nation&apos;s largest ATM processors.
                  This partnership enables us to offer institutional-grade processing with the
                  personal touch of a boutique ISO.
                </p>
                <ul className="space-y-3">
                  {credentials.map((credential) => (
                    <li key={credential} className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{credential}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <div className="aspect-video bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-gray-900 font-bold">PAI Authorized Partner</p>
                    <p className="text-gray-500 text-sm">ISO Certification</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 text-center">
                  CashReady ATM is proud to be a PAI Authorized ISO partner
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Placeholder */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-green-600 font-semibold text-sm uppercase tracking-wide">
                Leadership
              </span>
              <h2 className="heading-md text-gray-900 mt-3 mb-4">
                Meet the Team
              </h2>
              <p className="text-body">
                Our leadership team brings decades of combined experience in ATM operations,
                payment processing, and financial services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center"
                >
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900">Executive Name</h3>
                  <p className="text-green-600 text-sm mb-2">Position Title</p>
                  <p className="text-gray-500 text-sm">
                    Brief bio placeholder. Leadership bios can be customized with actual team
                    information.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
