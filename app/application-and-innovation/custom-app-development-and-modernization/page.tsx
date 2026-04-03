import CTA from "@/components/CTA";
import FAQs from "@/components/application-and-innovation/custom-app-development-and-modernization/FAQs";
import HeroSection from "@/components/application-and-innovation/custom-app-development-and-modernization/HeroSection";
import Section1 from "@/components/application-and-innovation/custom-app-development-and-modernization/Section1";
import Section2 from "@/components/application-and-innovation/custom-app-development-and-modernization/Section2";
import Section3 from "@/components/application-and-innovation/custom-app-development-and-modernization/Section3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Application Development & Modernization Services",
  description:
    "Axalin builds cloud-native, scalable Custom Applications and modernizes legacy software. Drive innovation with Agile, DevOps, and expert solutions tailored to your unique business logic.",
  alternates: {
    canonical:
      "/application-and-innovation/custom-app-development-and-modernization",
  },
  openGraph: {
    title: "Custom Application Development & Modernization Services",
    description:
      "Axalin builds cloud-native, scalable Custom Applications and modernizes legacy software. Drive innovation with Agile, DevOps, and expert solutions tailored to your unique business logic.",
    url: "/application-and-innovation/custom-app-development-and-modernization",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "Custom Application Development & Modernization Services",
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
