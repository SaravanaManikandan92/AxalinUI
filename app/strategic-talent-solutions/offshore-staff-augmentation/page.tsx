import CTA from "@/components/CTA";
import FAQs from "@/components/strategic-talent-solutions/offshore-staff-augmentation/FAQs";
import HeroSection from "@/components/strategic-talent-solutions/offshore-staff-augmentation/HeroSection";
import Section1 from "@/components/strategic-talent-solutions/offshore-staff-augmentation/Section1";
import Section2 from "@/components/strategic-talent-solutions/offshore-staff-augmentation/Section2";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offshore Staff Augmentation Services",
  description:
    "Scale your team rapidly and cost-effectively with Axalin’s Offshore Staff Augmentation. Access certified, vetted IT experts and developers without the overhead of in-house hiring.",
  alternates: {
    canonical: "/strategic-talent-solutions/offshore-staff-augmentation",
  },
  openGraph: {
    title: "Offshore Staff Augmentation Services",
    description:
      "Scale your team rapidly and cost-effectively with Axalin’s Offshore Staff Augmentation. Access certified, vetted IT experts and developers without the overhead of in-house hiring.",
    url: "/strategic-talent-solutions/offshore-staff-augmentation",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "Offshore Staff Augmentation Services",
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
