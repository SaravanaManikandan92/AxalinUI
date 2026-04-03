import CTA from "@/components/CTA";
import FAQs from "@/components/enterprise-security/identity-and-access-management/FAQs";
import HeroSection from "@/components/enterprise-security/identity-and-access-management/HeroSection";
import Section1 from "@/components/enterprise-security/identity-and-access-management/Section1";
import Section2 from "@/components/enterprise-security/identity-and-access-management/Section2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Identity and Access Management (IAM) Services",
  description:
    "Axalin provides Zero Trust Identity and Access Management (IAM) solutions. We deploy Okta for Single Sign-On (SSO), MFA, and lifecycle management to secure your workforce and customer identities.",
  alternates: {
    canonical: "/enterprise-security/identity-and-access-management",
  },
  openGraph: {
    title: "Identity and Access Management (IAM) Services",
    description:
      "Axalin provides Zero Trust Identity and Access Management (IAM) solutions. We deploy Okta for Single Sign-On (SSO), MFA, and lifecycle management to secure your workforce and customer identities.",
    url: "/enterprise-security/identity-and-access-management",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "Identity and Access Management (IAM) Services",
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
