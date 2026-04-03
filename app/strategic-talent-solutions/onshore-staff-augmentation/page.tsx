import CTA from "@/components/CTA";
import FAQs from "@/components/strategic-talent-solutions/onshore-staff-augmentation/FAQs";
import HeroSection from "@/components/strategic-talent-solutions/onshore-staff-augmentation/HeroSection";
import Section1 from "@/components/strategic-talent-solutions/onshore-staff-augmentation/Section1";
import Section2 from "@/components/strategic-talent-solutions/onshore-staff-augmentation/Section2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Onshore Staff Augmentation Services",
  description:
    "Access highly-skilled, pre-vetted local IT professionals instantly with Axalin's Onshore Staff Augmentation. Ensure seamless integration, cultural fit, and compliance for critical projects.",
  alternates: {
    canonical: "/strategic-talent-solutions/onshore-staff-augmentation",
  },
  openGraph: {
    title: "Onshore Staff Augmentation Services",
    description:
      "Access highly-skilled, pre-vetted local IT professionals instantly with Axalin's Onshore Staff Augmentation. Ensure seamless integration, cultural fit, and compliance for critical projects.",
    url: "/strategic-talent-solutions/onshore-staff-augmentation",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "Onshore Staff Augmentation Services",
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
