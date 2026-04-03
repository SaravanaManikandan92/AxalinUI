import CTA from "@/components/CTA";
import FAQs from "@/components/digital-transformation/network-modernization/FAQs";
import HeroSection from "@/components/digital-transformation/network-modernization/HeroSection";
import Section1 from "@/components/digital-transformation/network-modernization/Section1";
import Section2 from "@/components/digital-transformation/network-modernization/Section2";
import Section3 from "@/components/digital-transformation/network-modernization/Section3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Network Modernization Services",
  description:
    "Future-proof your connectivity with Axalin's Network Modernization. We implement SD-WAN, Software-Defined Networking (SDN), and robust security for cloud speed and business agility.",
  alternates: {
    canonical: "/digital-transformation/network-modernization",
  },
  openGraph: {
    title: "Network Modernization Services",
    description:
      "Future-proof your connectivity with Axalin's Network Modernization. We implement SD-WAN, Software-Defined Networking (SDN), and robust security for cloud speed and business agility.",
    url: "/digital-transformation/network-modernization",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "Network Modernization Services",
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
