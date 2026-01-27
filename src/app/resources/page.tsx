import { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import Link from "next/link";
import { Calculator, BookOpen, Shield, ArrowRight } from "lucide-react";
import ROICalculator from "@/components/sections/ROICalculator";

export const metadata: Metadata = {
  title: "Resources | CashReady ATM",
  description: "ATM industry insights, ROI calculators, compliance resources, and educational content for ATM operators.",
};

const resources = [
  {
    icon: Calculator,
    title: "ROI Calculator",
    description: "Estimate your monthly revenue uplift by switching to CashReady wholesale processing.",
    href: "#calculator",
    action: "Try Calculator",
  },
  {
    icon: BookOpen,
    title: "Industry Insights",
    description: "Stay informed about ATM industry trends, regulations, and best practices.",
    href: "#",
    action: "Read Articles",
    comingSoon: true,
  },
  {
    icon: Shield,
    title: "Compliance Center",
    description: "Resources to help you maintain PCI compliance and understand industry regulations.",
    href: "#",
    action: "View Resources",
    comingSoon: true,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="gradient-navy py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wide">
                Knowledge Center
              </span>
              <h1 className="heading-lg text-white mt-4 mb-6">
                ATM Business Resources
              </h1>
              <p className="text-lg text-gray-300">
                Tools, calculators, and insights to help you optimize your ATM
                business operations and maximize revenue.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Cards */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {resources.map((resource) => (
                <div
                  key={resource.title}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                    <resource.icon className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {resource.title}
                    {resource.comingSoon && (
                      <span className="ml-2 text-xs font-normal text-amber-600 bg-amber-100 px-2 py-1 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  <Link
                    href={resource.href}
                    className="inline-flex items-center text-green-600 font-semibold hover:underline"
                  >
                    {resource.action}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>

            {/* Calculator Section */}
            <div id="calculator" className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="heading-md text-gray-900 mb-4">
                  Revenue Uplift Calculator
                </h2>
                <p className="text-gray-600">
                  Estimate how much more you could earn by switching to CashReady
                  wholesale processing.
                </p>
              </div>
              <ROICalculator />
            </div>
          </div>
        </section>

        {/* Blog/Articles Placeholder */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="heading-md text-gray-900 mb-2">
                  Latest Insights
                </h2>
                <p className="text-gray-600">
                  Industry news and tips for ATM operators
                </p>
              </div>
              <Link
                href="#"
                className="hidden sm:inline-flex items-center text-green-600 font-semibold hover:underline"
              >
                View All
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
                >
                  <div className="aspect-video bg-gray-200" />
                  <div className="p-6">
                    <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">
                      Industry News
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">
                      Article Title Placeholder
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Article excerpt placeholder. Connect your CMS to populate
                      with actual content.
                    </p>
                    <span className="text-sm text-gray-400">Jan 15, 2025</span>
                  </div>
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
