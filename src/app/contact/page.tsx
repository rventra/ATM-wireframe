import { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import ContactForm from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | CashReady ATM",
  description: "Contact CashReady ATM for rate analysis, equipment inquiries, or support. We're here to help optimize your ATM business.",
};

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    value: "(XXX) XXX-XXXX",
    href: "tel:+1-XXX-XXX-XXXX",
    description: "Mon-Fri 8am-6pm EST",
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@cashreadyatm.com",
    href: "mailto:info@cashreadyatm.com",
    description: "We reply within 24 hours",
  },
  {
    icon: MapPin,
    title: "Service Areas",
    value: "Georgia & Florida",
    description: "Full-service management",
  },
  {
    icon: Clock,
    title: "Support Hours",
    value: "24/7 for emergencies",
    description: "Business hours for sales",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="gradient-navy py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wide">
                Get in Touch
              </span>
              <h1 className="heading-lg text-white mt-4 mb-6">
                Contact CashReady ATM
              </h1>
              <p className="text-lg text-gray-300">
                Have questions about our services? Ready for a rate analysis?
                We're here to help you optimize your ATM business.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="section-padding bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method) => (
                <div
                  key={method.title}
                  className="bg-gray-50 rounded-xl p-6 text-center border border-gray-100"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {method.title}
                  </h3>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="text-green-600 hover:underline"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-gray-900">{method.value}</p>
                  )}
                  <p className="text-sm text-gray-500 mt-1">
                    {method.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Calendly Section */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar className="w-6 h-6 text-green-600" />
                  <h2 className="heading-md text-gray-900">
                    Schedule a Call
                  </h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Book a 15-minute surcharge analysis at a time that works for
                  you. We'll review your current processing and show you exactly
                  how much you could save.
                </p>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  {/* Calendly Inline Widget Placeholder */}
                  <div className="aspect-[4/3] bg-gray-200 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Calendly Integration</p>
                      <p className="text-sm text-gray-400">
                        Add your Calendly URL in the widget settings
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="heading-md text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-6">
                  Prefer email? Fill out the form below and we'll respond within
                  24 hours.
                </p>
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
