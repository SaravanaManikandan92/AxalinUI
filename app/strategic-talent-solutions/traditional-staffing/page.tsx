import CTA from "@/components/CTA";
import FAQs from "@/components/strategic-talent-solutions/traditional-staffing/FAQs";
import HeroSection from "@/components/strategic-talent-solutions/traditional-staffing/HeroSection";
import Section1 from "@/components/strategic-talent-solutions/traditional-staffing/Section1";
import Section2 from "@/components/strategic-talent-solutions/traditional-staffing/Section2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traditional Staffing Services & Expert IT Recruitment",
  description:
    "Axalin provides expert Traditional Staffing (Contingent, Contract-to-Hire, Direct Hire) for critical IT roles. We connect the right talent with the right opportunity, fast.",
  alternates: {
    canonical: "/strategic-talent-solutions/traditional-staffing",
  },
  openGraph: {
    title: "Traditional Staffing Services & Expert IT Recruitment",
    description:
      "Axalin provides expert Traditional Staffing (Contingent, Contract-to-Hire, Direct Hire) for critical IT roles. We connect the right talent with the right opportunity, fast.",
    url: "/strategic-talent-solutions/traditional-staffing",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "Traditional Staffing Services & Expert IT Recruitment",
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
      <FAQs />
      <CTA />
    </>
  );
}
