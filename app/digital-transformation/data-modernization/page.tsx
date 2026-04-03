import CTA from "@/components/CTA";
import FAQs from "@/components/digital-transformation/data-modernization/FAQs";
import HeroSection from "@/components/digital-transformation/data-modernization/HeroSection";
import Section1 from "@/components/digital-transformation/data-modernization/Section1";
import Section2 from "@/components/digital-transformation/data-modernization/Section2";
import Section3 from "@/components/digital-transformation/data-modernization/Section3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Modernization Services",
  description:
    "Unlock your data's true value with Axalin. We build unified Cloud Data Platforms, migrate legacy systems, and prepare your data for advanced Business Intelligence and AI Automation.",
  alternates: {
    canonical: "/digital-transformation/data-modernization",
  },
  openGraph: {
    title: "Data Modernization Services",
    description:
      "Unlock your data's true value with Axalin. We build unified Cloud Data Platforms, migrate legacy systems, and prepare your data for advanced Business Intelligence and AI Automation.",
    url: "/digital-transformation/data-modernization",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "Data Modernization Services",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <FAQs />
      <CTA />
    </>
  );
}
