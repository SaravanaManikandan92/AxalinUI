import CTA from "@/components/CTA";
import FAQs from "@/components/digital-transformation/managed-cloud-solutions-and-finOps/FAQs";
import HeroSection from "@/components/digital-transformation/managed-cloud-solutions-and-finOps/HeroSection";
import Section1 from "@/components/digital-transformation/managed-cloud-solutions-and-finOps/Section1";
import Section2 from "@/components/digital-transformation/managed-cloud-solutions-and-finOps/Section2";
import Section3 from "@/components/digital-transformation/managed-cloud-solutions-and-finOps/Section3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Managed Cloud Solutions & FinOps",
  description:
    "Outsource your cloud operations to Axalin's certified experts. We provide 24/7 Managed Cloud Solutions, FinOps, governance, security, and optimization for AWS, Azure, and GCP environments.",
  alternates: {
    canonical: "/digital-transformation/managed-cloud-solutions-and-finOps",
  },
  openGraph: {
    title: "Managed Cloud Solutions & FinOps",
    description:
      "Outsource your cloud operations to Axalin's certified experts. We provide 24/7 Managed Cloud Solutions, FinOps, governance, security, and optimization for AWS, Azure, and GCP environments.",
    url: "/digital-transformation/managed-cloud-solutions-and-finOps",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "Managed Cloud Solutions & FinOps",
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
