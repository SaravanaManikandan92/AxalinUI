import CTA from "@/components/CTA";
import HeroSection from "@/components/home/HeroSection";
import Section1 from "@/components/home/Section1";
import Section2 from "@/components/home/Section2";
import Section3 from "@/components/home/Section3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Axalin - Digital Transformation, Managed Services & Expert IT Staffing",
  description:
    "Stop IT bottlenecks. Axalin delivers strategic Digital Transformation, 24/7 Managed Services, and Expert Staffing to cut costs, reduce risk, and secure competitive advantage for mid-tier and Enterprise companies.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Axalin - Digital Transformation, Managed Services & Expert IT Staffing",
    description:
      "Stop IT bottlenecks. Axalin delivers strategic Digital Transformation, 24/7 Managed Services, and Expert Staffing to cut costs, reduce risk, and secure competitive advantage for mid-tier and Enterprise companies.",
    url: "/",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "Axalin - Digital Transformation, Managed Services & Expert IT Staffing",
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
      <CTA />
    </>
  );
}
