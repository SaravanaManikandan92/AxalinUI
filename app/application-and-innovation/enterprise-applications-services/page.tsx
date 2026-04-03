import CTA from "@/components/CTA";
import FAQs from "@/components/application-and-innovation/enterprise-applications-services/FAQs";
import HeroSection from "@/components/application-and-innovation/enterprise-applications-services/HeroSection";
import Section1 from "@/components/application-and-innovation/enterprise-applications-services/Section1";
import Section2 from "@/components/application-and-innovation/enterprise-applications-services/Section2";
import Section3 from "@/components/application-and-innovation/enterprise-applications-services/Section3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enterprise Applications Services (EAS)",
  description:
    "Axalin manages, optimizes, and integrates core Enterprise Applications, including SAP, Oracle, and Microsoft Dynamics, to ensure peak performance and unified business operations.",
  alternates: {
    canonical: "/application-and-innovation/enterprise-applications-services",
  },
  openGraph: {
    title: "Enterprise Applications Services (EAS)",
    description:
      "Axalin manages, optimizes, and integrates core Enterprise Applications, including SAP, Oracle, and Microsoft Dynamics, to ensure peak performance and unified business operations.",
    url: "/application-and-innovation/enterprise-applications-services",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "Enterprise Applications Services (EAS)",
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
