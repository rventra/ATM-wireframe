import { Metadata } from "next";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import Script from "next/script";
import { generateFAQSchema } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FAQ | CashReady ATM Processing Questions",
  description: "Find answers to frequently asked questions about CashReady ATM processing, equipment, service areas, and contract terms.",
};

const faqs = [
  {
    category: "Pricing & Processing",
    items: [
      {
        question: "What are your processing rates?",
        answer: "Our wholesale processing rate is $0.20 per transaction—significantly lower than the $0.40-$0.60 typical retail ISOs charge. This means you keep $0.20-$0.40 more of every surcharge. Exact savings depend on your current rate structure.",
      },
      {
        question: "Are there any monthly fees or minimums?",
        answer: "We have no monthly minimums for processing-only accounts. For full-service management, we have minimum transaction requirements that vary by location. Contact us for specific details based on your needs.",
      },
      {
        question: "How quickly do I receive my surcharge revenue?",
        answer: "Surcharge revenue is deposited directly to your designated account on a next-business-day basis. There's no holding period or delayed settlement.",
      },
      {
        question: "What settlement options do you offer?",
        answer: "We offer next-day ACH settlement to your designated bank account. Wire transfer options are available for high-volume operators.",
      },
    ],
  },
  {
    category: "Equipment & Technology",
    items: [
      {
        question: "Do I need to buy new equipment to switch?",
        answer: "Not necessarily. Many ATMs can be reconfigured to work with our processing backend. We support most major brands including Genmega, Hyosung, Triton, and Hantle. We'll assess your current equipment during the analysis phase.",
      },
      {
        question: "What equipment brands do you sell?",
        answer: "We primarily sell and support Genmega and Hyosung terminals—the industry leaders in reliability and performance. We offer the Genmega GT3000, Hyosung Halo II, and Hyosung Force models.",
      },
      {
        question: "Is EMV compliance included?",
        answer: "Yes, all our processing includes EMV certification and compliance. We also handle EMV key injection for equipment purchased through us.",
      },
      {
        question: "Do you provide terminal programming and setup?",
        answer: "Absolutely. Our technical team handles all terminal configuration, including host setup, EMV configuration, and testing. For equipment purchases, we include pre-configuration so your terminal is ready to install.",
      },
    ],
  },
  {
    category: "Service Areas",
    items: [
      {
        question: "Where is full-service management available?",
        answer: "Our comprehensive management service—including vault cash, maintenance, and placement—is currently available in Georgia and Florida. We are actively evaluating expansion into adjacent markets.",
      },
      {
        question: "Can I use your processing if I'm outside GA/FL?",
        answer: "Yes! Processing-only and equipment services are available nationwide. The geographic limitation only applies to our full-service vault cash and maintenance offering.",
      },
      {
        question: "How do you handle maintenance outside your service areas?",
        answer: "For processing-only clients outside GA/FL, we provide remote technical support and coordinate with local technicians in your area for on-site repairs when needed.",
      },
    ],
  },
  {
    category: "Contract Terms",
    items: [
      {
        question: "What are your contract terms?",
        answer: "Our standard processing agreement is month-to-month after an initial 6-month term. We believe in earning your business every month, not locking you in with long-term contracts.",
      },
      {
        question: "Is there a termination fee?",
        answer: "No. After the initial 6-month period, you can terminate with 30 days' notice. We don't believe in penalty fees for businesses that need to make changes.",
      },
      {
        question: "What happens to my equipment if I cancel?",
        answer: "Equipment you purchase remains yours. Any leased equipment would be returned according to lease terms. We ensure a smooth transition back to your previous processor if needed.",
      },
      {
        question: "Do you offer exclusivity requirements?",
        answer: "No. While most partners choose to process all their ATMs through us for the best rates, you're free to maintain relationships with other processors for specific locations if needed.",
      },
    ],
  },
];

export default function FAQPage() {
  const faqSchema = generateFAQSchema(
    faqs.flatMap((category) =>
      category.items.map((item) => ({
        question: item.question,
        answer: item.answer,
      }))
    )
  );

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Navigation />
      <main>
        {/* Hero */}
        <section className="gradient-navy py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-green-400 font-semibold text-sm uppercase tracking-wide">
                Support
              </span>
              <h1 className="heading-lg text-white mt-4 mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-lg text-gray-300">
                Find answers to common questions about our processing, equipment,
                and services. Don't see your question? Contact us directly.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="section-padding bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {faqs.map((category) => (
                <div key={category.category}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                    {category.category}
                  </h2>
                  <div className="space-y-6">
                    {category.items.map((faq) => (
                      <div
                        key={faq.question}
                        className="bg-gray-50 rounded-xl p-6"
                      >
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="section-padding bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="heading-md text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-8">
              Our team is here to help. Reach out directly and we'll get back to
              you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="tel:+1-XXX-XXX-XXXX"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-green-500 hover:text-green-600 transition-colors"
              >
                Call (XXX) XXX-XXXX
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
