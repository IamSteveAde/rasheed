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
  metadataBase: new URL("https://rasheedkashamu.com"),

  title: {
    default: "Rasheed Kashamu",
    template: "%s | Rasheed Kashamu",
  },

  description:
    "The private website of Rasheed Kashamu — offering insight into his work, perspectives, long-term interests, and areas of focus.",

  keywords: [
    "Rasheed Kashamu",
    "private portfolio",
    "business leadership",
    "long-term investments",
    "measured impact",
    "strategic perspective",
    "philanthropy",
    "legacy thinking",
    "private initiatives",
  ],

  openGraph: {
    title: "Rasheed Kashamu",
    description:
      "A private introduction to the work, perspectives, and long-term focus of Rasheed Kashamu.",
    url: "https://rasheedkashamu.com",
    siteName: "Rasheed Kashamu",
    type: "website",
    images: [
      {
        url: "https://rasheedkashamu.com/og/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Rasheed Kashamu — Perspective, Discipline, Legacy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rasheed Kashamu",
    description:
      "Perspective, discipline, and long-term focus.",
    images: ["https://rasheedkashamu.com/og/og-cover.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://rasheedkashamu.com",
  },
};

export default function Home() {
  return (
    <main>
      {/* Core sections */}
      <Hero />
      <About />

      {/* Areas of focus / initiatives */}
      <DiscoverProperties />

      {/* Selected engagements or highlights */}
      <Listing />

      {/* Reputation & social proof */}
      <Testimonials />

      {/* Long-term responsibility & contribution */}
      <Philanthropy />

      {/* Thought & perspective */}
      <Perspective />

      {/* Private enquiries */}
      <Enquire />
    </main>
  );
}
