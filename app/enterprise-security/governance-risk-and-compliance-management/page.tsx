import CTA from "@/components/CTA";
import FAQs from "@/components/enterprise-security/governance-risk-and-compliance-management/FAQs";
import HeroSection from "@/components/enterprise-security/governance-risk-and-compliance-management/HeroSection";
import Section1 from "@/components/enterprise-security/governance-risk-and-compliance-management/Section1";
import Section2 from "@/components/enterprise-security/governance-risk-and-compliance-management/Section2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GRC Services: Governance, Risk & Compliance Management",
  description:
    "Axalin provides comprehensive GRC solutions, unifying Governance, Risk Management, and Compliance to safeguard your business, ensure regulatory adherence, and reduce exposure in a complex digital landscape.",
  alternates: {
    canonical: "/enterprise-security/governance-risk-and-compliance-management",
  },
  openGraph: {
    title: "GRC Services: Governance, Risk & Compliance Management",
    description:
      "Axalin provides comprehensive GRC solutions, unifying Governance, Risk Management, and Compliance to safeguard your business, ensure regulatory adherence, and reduce exposure in a complex digital landscape.",
    url: "/enterprise-security/governance-risk-and-compliance-management",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "GRC Services: Governance, Risk & Compliance Management",
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
