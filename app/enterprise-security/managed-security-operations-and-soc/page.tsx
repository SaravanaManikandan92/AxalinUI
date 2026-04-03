import CTA from "@/components/CTA";
import FAQs from "@/components/enterprise-security/managed-security-operations-and-soc/FAQs";
import HeroSection from "@/components/enterprise-security/managed-security-operations-and-soc/HeroSection";
import Section1 from "@/components/enterprise-security/managed-security-operations-and-soc/Section1";
import Section2 from "@/components/enterprise-security/managed-security-operations-and-soc/Section2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Managed Security Operations (MSO) & 24/7 SOC Services",
  description:
    "Axalin delivers 24/7 Managed Security Operations (MSO) and MDR services. Proactive threat hunting, detection, and incident response across your cloud and network using Sentinel One and Splunk.",
  alternates: {
    canonical: "/enterprise-security/managed-security-operations-and-soc",
  },
  openGraph: {
    title: "Managed Security Operations (MSO) & 24/7 SOC Services",
    description:
      "Axalin delivers 24/7 Managed Security Operations (MSO) and MDR services. Proactive threat hunting, detection, and incident response across your cloud and network using Sentinel One and Splunk.",
    url: "/enterprise-security/managed-security-operations-and-soc",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "Managed Security Operations (MSO) & 24/7 SOC Services",
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
