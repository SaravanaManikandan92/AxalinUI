import HeroSection from "@/components/enterprise-security/HeroSection";
import Section1 from "@/components/enterprise-security/Section1";
import Section2 from "@/components/enterprise-security/Section2";
import Section3 from "@/components/enterprise-security/Section3";
import Section4 from "@/components/enterprise-security/Section4";
import Section5 from "@/components/enterprise-security/Section5";
import FAQs from "@/components/enterprise-security/FAQs";
import CTA from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Enterprise Security Services | Axalin - Advanced Cyber Security, Risk Compliance & Identity Management",
  description:
    "Axalin's enterprise security services deliver proactive threat detection, governance, risk management, and compliance solutions. Protect your assets in banking, manufacturing, and healthcare with end-to-end security from certified experts partnered with Okta, Sentinel One, and more.",
  alternates: {
    canonical: "/enterprise-security",
  },
  openGraph: {
    title:
      "Enterprise Security Services | Axalin - Advanced Cyber Security, Risk Compliance & Identity Management",
    description:
      "Axalin's enterprise security services deliver proactive threat detection, governance, risk management, and compliance solutions. Protect your assets in banking, manufacturing, and healthcare with end-to-end security from certified experts partnered with Okta, Sentinel One, and more.",
    url: "/enterprise-security",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "Enterprise Security Services | Axalin - Advanced Cyber Security, Risk Compliance & Identity Management",
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
