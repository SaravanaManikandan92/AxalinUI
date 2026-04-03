import HeroSection from "@/components/application-and-innovation/HeroSection";
import Section1 from "@/components/application-and-innovation/Section1";
import Section2 from "@/components/application-and-innovation/Section2";
import Section3 from "@/components/application-and-innovation/Section3";
import Section4 from "@/components/application-and-innovation/Section4";
import Section5 from "@/components/application-and-innovation/Section5";
import FAQs from "@/components/application-and-innovation/FAQs";
import CTA from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Application and Innovation Services | Axalin - Custom Software Development, AI Automation & Enterprise Apps",
  description:
    "Axalin's application and innovation services craft bespoke software, AI-driven automation, and app modernization to elevate efficiency and user experiences. Tailored for logistics, education, and manufacturing with partnerships like SAP, Oracle, and Microsoft.",
  alternates: {
    canonical: "/application-and-innovation",
  },
  openGraph: {
    title:
      "Application and Innovation Services | Axalin - Custom Software Development, AI Automation & Enterprise Apps",
    description:
      "Axalin's application and innovation services craft bespoke software, AI-driven automation, and app modernization to elevate efficiency and user experiences. Tailored for logistics, education, and manufacturing with partnerships like SAP, Oracle, and Microsoft.",
    url: "/application-and-innovation",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "Application and Innovation Services | Axalin - Custom Software Development, AI Automation & Enterprise Apps",
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
