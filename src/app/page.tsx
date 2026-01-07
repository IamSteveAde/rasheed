import { Metadata } from "next";

// Home sections
import Hero from "./components/home/hero";
import About from "./components/home/about";
import DiscoverProperties from "./components/home/property-option";
import Listing from "./components/home/property-list";
import Testimonials from "./components/home/testimonial";
import Philanthropy from "./components/home/philanthropy";
import Perspective from "./components/home/perspective";
import Enquire from "./components/home/enquiries";

export const metadata: Metadata = {
  metadataBase: new URL("https://jubrilokoya.com"),

  title: {
    default: "Jubril Okoya",
    template: "%s | Jubril Okoya",
  },

  description:
    "The private website of Jubril Okoya — offering insight into his work, perspectives, initiatives, and long-term interests.",

  keywords: [
    "Jubril Okoya",
    "private portfolio",
    "business perspective",
    "philanthropy",
    "investments",
    "leadership",
    "long-term thinking",
    "private initiatives",
  ],

  openGraph: {
    title: "Jubril Okoya",
    description:
      "A private introduction to the work, initiatives, and perspectives of Jubril Okoya.",
    url: "https://jubrilokoya.com",
    siteName: "Jubril Okoya",
    type: "website",
    images: [
      {
        url: "https://jubrilokoya.com/og/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Jubril Okoya — Perspective, Purpose, Legacy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jubril Okoya",
    description:
      "Perspective, purpose, and long-term initiatives.",
    images: ["https://jubrilokoya.com/og/og-cover.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://jubrilokoya.com",
  },
};

export default function Home() {
  return (
    <main>
      {/* Audio welcome — subtle, optional */}

      {/* Core sections */}
      <Hero />
      <About />

      {/* Focus areas / initiatives */}
      <DiscoverProperties />

      {/* Selected engagements or highlights */}
      <Listing />

      {/* Reputation & social proof */}
      <Testimonials />

      {/* Long-term impact */}
      <Philanthropy />

      {/* Thought & perspective */}
      <Perspective />

      {/* Private enquiries */}
      <Enquire />
    </main>
  );
}
