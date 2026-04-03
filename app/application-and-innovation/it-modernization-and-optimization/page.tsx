import CTA from "@/components/CTA";
import FAQs from "@/components/application-and-innovation/it-modernization-and-optimization/FAQs";
import HeroSection from "@/components/application-and-innovation/it-modernization-and-optimization/HeroSection";
import Section1 from "@/components/application-and-innovation/it-modernization-and-optimization/Section1";
import Section2 from "@/components/application-and-innovation/it-modernization-and-optimization/Section2";
import Section3 from "@/components/application-and-innovation/it-modernization-and-optimization/Section3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Modernization & Optimization Services",
  description:
    "Achieve peak performance, reduce TCO, and future-proof your business with Axalin's Modernization & Optimization services: Cloud, Data, Network, and Infrastructure transformation.",
  alternates: {
    canonical: "/application-and-innovation/it-modernization-and-optimization",
  },
  openGraph: {
    title: "IT Modernization & Optimization Services",
    description:
      "Achieve peak performance, reduce TCO, and future-proof your business with Axalin's Modernization & Optimization services: Cloud, Data, Network, and Infrastructure transformation.",
    url: "/application-and-innovation/it-modernization-and-optimization",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "IT Modernization & Optimization Services",
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
