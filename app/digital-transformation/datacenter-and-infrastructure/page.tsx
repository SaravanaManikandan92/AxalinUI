import CTA from "@/components/CTA";
import FAQs from "@/components/digital-transformation/datacenter-and-infrastructure/FAQs";
import HeroSection from "@/components/digital-transformation/datacenter-and-infrastructure/HeroSection";
import Section1 from "@/components/digital-transformation/datacenter-and-infrastructure/Section1";
import Section2 from "@/components/digital-transformation/datacenter-and-infrastructure/Section2";
import Section3 from "@/components/digital-transformation/datacenter-and-infrastructure/Section3";
import Section4 from "@/components/digital-transformation/datacenter-and-infrastructure/Section4";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datacenter Services & Infrastructure Modernization",
  description:
    "Axalin optimizes your core IT infrastructure. Strategic Datacenter Services for modernization, consolidation, and seamless integration into a high-performance, secure Hybrid Cloud model.",
  alternates: {
    canonical: "/digital-transformation/datacenter-and-infrastructure",
  },
  openGraph: {
    title: "Datacenter Services & Infrastructure Modernization",
    description:
      "Axalin optimizes your core IT infrastructure. Strategic Datacenter Services for modernization, consolidation, and seamless integration into a high-performance, secure Hybrid Cloud model.",
    url: "/digital-transformation/datacenter-and-infrastructure",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "Datacenter Services & Infrastructure Modernization",
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
      <FAQs />
      <CTA />
    </>
  );
}
