import CTA from "@/components/CTA";
import FAQs from "@/components/enterprise-security/cyber-security-and-managed-security/FAQs";
import HeroSection from "@/components/enterprise-security/cyber-security-and-managed-security/HeroSection";
import Section1 from "@/components/enterprise-security/cyber-security-and-managed-security/Section1";
import Section2 from "@/components/enterprise-security/cyber-security-and-managed-security/Section2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyber Security Solutions & Managed Security Services",
  description:
    "Axalin provides end-to-end Information and Cyber Security. Services include Managed Detection & Response (MDR), Zero Trust, Identity Management, and Cloud Security using Sentinel One and Okta.",
  alternates: {
    canonical: "/enterprise-security/cyber-security-and-managed-security",
  },
  openGraph: {
    title: "Cyber Security Solutions & Managed Security Services",
    description:
      "Axalin provides end-to-end Information and Cyber Security. Services include Managed Detection & Response (MDR), Zero Trust, Identity Management, and Cloud Security using Sentinel One and Okta.",
    url: "/enterprise-security/cyber-security-and-managed-security",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "Cyber Security Solutions & Managed Security Services",
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
