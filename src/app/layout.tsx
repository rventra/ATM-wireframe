import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CashReady ATM | Wholesale ATM Processing ISO",
  description: "Optimize your ATM processing revenue with CashReady ATM. Access better backend rates, increase surcharge retention. Processing migration, equipment acquisition, and full-service management.",
  keywords: "ATM processing ISO, wholesale ATM rates, ATM surcharge optimization, Genmega, Hyosung, ATM operator",
  openGraph: {
    title: "CashReady ATM | Wholesale ATM Processing ISO",
    description: "Access better backend rates and increase your ATM revenue. Join our network for superior processing rates.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CashReady ATM | Wholesale ATM Processing",
    description: "Optimize your ATM processing revenue with better backend rates.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
