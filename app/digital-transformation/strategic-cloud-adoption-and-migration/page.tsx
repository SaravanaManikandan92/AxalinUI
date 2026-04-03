import CTA from "@/components/CTA";
import FAQs from "@/components/digital-transformation/strategic-cloud-adoption-and-migration/FAQs";
import HeroSection from "@/components/digital-transformation/strategic-cloud-adoption-and-migration/HeroSection";
import Section1 from "@/components/digital-transformation/strategic-cloud-adoption-and-migration/Section1";
import Section2 from "@/components/digital-transformation/strategic-cloud-adoption-and-migration/Section2";
import Section3 from "@/components/digital-transformation/strategic-cloud-adoption-and-migration/Section3";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Axalin: Strategic Cloud Adoption & Migration Services",
  description:
    "Accelerate your journey to the cloud with Axalin. Strategic, secure, and cost-optimized Cloud Adoption and Migration services for AWS, Azure, GCP, and Digital Ocean.",
  alternates: {
    canonical: "/digital-transformation/strategic-cloud-adoption-and-migration",
  },
  openGraph: {
    title: "Axalin: Strategic Cloud Adoption & Migration Services",
    description:
      "Accelerate your journey to the cloud with Axalin. Strategic, secure, and cost-optimized Cloud Adoption and Migration services for AWS, Azure, GCP, and Digital Ocean.",
    url: "/digital-transformation/strategic-cloud-adoption-and-migration",
    images: "https://axalingroup.com/assets/logo_brand.svg",
    type: "website",
  },
  twitter: {
    site: "https://x.com/AxalinGroup",
    images: [
      {
        url: "https://axalingroup.com/assets/logo_brand.svg",
        alt: "Axalin: Strategic Cloud Adoption & Migration Services",
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
