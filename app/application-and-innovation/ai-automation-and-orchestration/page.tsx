import CTA from "@/components/CTA";
import FAQs from "@/components/application-and-innovation/ai-automation-and-orchestration/FAQs";
import HeroSection from "@/components/application-and-innovation/ai-automation-and-orchestration/HeroSection";
import Section1 from "@/components/application-and-innovation/ai-automation-and-orchestration/Section1";
import Section2 from "@/components/application-and-innovation/ai-automation-and-orchestration/Section2";
import Section3 from "@/components/application-and-innovation/ai-automation-and-orchestration/Section3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Automation & Orchestration Services",
  description:
    "Implement scalable AI Automation and Generative AI solutions with Axalin. We orchestrate intelligent workflows, automate core processes, and drive hyper-efficiency across your enterprise.",
  alternates: {
    canonical: "/application-and-innovation/ai-automation-and-orchestration",
  },
  openGraph: {
    title: "AI Automation & Orchestration Services",
    description:
      "Implement scalable AI Automation and Generative AI solutions with Axalin. We orchestrate intelligent workflows, automate core processes, and drive hyper-efficiency across your enterprise.",
    url: "/application-and-innovation/ai-automation-and-orchestration",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "AI Automation & Orchestration Services",
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
