import HeroSection from "@/components/digital-transformation/HeroSection";
import Section1 from "@/components/digital-transformation/Section1";
import Section2 from "@/components/digital-transformation/Section2";
import Section3 from "@/components/digital-transformation/Section3";
import Section4 from "@/components/digital-transformation/Section4";
import Section5 from "@/components/digital-transformation/Section5";
import FAQs from "@/components/digital-transformation/FAQs";
import CTA from "@/components/CTA";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Digital Transformation Services | Axalin - Expert Cloud Migration, Data Modernization & Network Solutions",
  description:
    "Discover Axalin's digital transformation services: Integrate cutting-edge technologies to revolutionize your business operations, boost customer engagement, and achieve sustainable growth. Specializing in cloud adoption, datacenter optimization, managed cloud, network modernization, and data strategies for industries like finance, healthcare, and e-commerce.",
  alternates: {
    canonical: "/digital-transformation",
  },
  openGraph: {
    title:
      "Digital Transformation Services | Axalin - Expert Cloud Migration, Data Modernization & Network Solutions",
    description:
      "Discover Axalin's digital transformation services: Integrate cutting-edge technologies to revolutionize your business operations, boost customer engagement, and achieve sustainable growth. Specializing in cloud adoption, datacenter optimization, managed cloud, network modernization, and data strategies for industries like finance, healthcare, and e-commerce.",
    url: "/digital-transformation",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "Digital Transformation Services | Axalin - Expert Cloud Migration, Data Modernization & Network Solutions",
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
