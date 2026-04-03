import HeroSection from "@/components/strategic-talent-solutions/HeroSection";
import Section1 from "@/components/strategic-talent-solutions/Section1";
import Section2 from "@/components/strategic-talent-solutions/Section2";
import Section3 from "@/components/strategic-talent-solutions/Section3";
import Section4 from "@/components/strategic-talent-solutions/Section4";
import Section5 from "@/components/strategic-talent-solutions/Section5";
import FAQs from "@/components/strategic-talent-solutions/FAQs";
import CTA from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Strategic Talent Solutions | Axalin - IT Staffing, Offshore & Onshore Augmentation Services",
  description:
    "Axalin's strategic talent solutions provide expert IT staffing, offshore and onshore augmentation to align skilled professionals with your goals. Ideal for healthcare, finance, and e-commerce, with flexible models for growth.",
  alternates: {
    canonical: "/strategic-talent-solutions",
  },
  openGraph: {
    title:
      "Strategic Talent Solutions | Axalin - IT Staffing, Offshore & Onshore Augmentation Services",
    description:
      "Axalin's strategic talent solutions provide expert IT staffing, offshore and onshore augmentation to align skilled professionals with your goals. Ideal for healthcare, finance, and e-commerce, with flexible models for growth.",
    url: "/strategic-talent-solutions",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "Strategic Talent Solutions | Axalin - IT Staffing, Offshore & Onshore Augmentation Services",
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
      <Section4 />
      <Section5 />
      <FAQs />
      <CTA />
    </>
  );
}
